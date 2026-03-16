import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const sourcePath = resolve(process.cwd(), 'src/manuals/nonprofit-ai-manual.source.html');

const assetPrefixPattern =
	/\.\/2026-03-16 clean Manuel d(?:&#39;|')IA pour les organismes à but non lucratif_files\//g;
const bodyScriptPattern = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const embeddedChromePattern =
	/<div class="pg-site-header">[\s\S]*?<\/div>\s*<div class="mob-progress-bar no-print"[\s\S]*?<\/div>\s*<div class="mob-scrim no-print"[\s\S]*?<\/div>\s*<div class="mob-anchor-sheet no-print"[\s\S]*?<\/div>/i;
const inlineHandlerPattern =
	/\s(onclick|onmouseenter|onmouseleave|oninput|onchange|onsubmit)="[^"]*"/gi;
const donorPortfolioPromptOld =
	`Des notes]&lt;br&gt;&lt;br&gt;Analyser : &lt;br&gt;1) Santé du portefeuille — combien de donateurs sont activement engagés ou déchus (aucun contact en &gt;6 mois)?&lt;br&gt;2) Opportunités de mise à niveau — donateurs qui ont donné de façon constante mais en dessous de leur capacité évaluée&lt;br&gt;3) Donateurs déclinés — ceux qui ont donné auparavant mais ne l'ont pas fait depuis 12+ mois; priorité de réengagement &lt;br&gt;4) Prêts à solliciter — donateurs cultivés et prêts à répondre à une demande; Montant demandé estimé&lt;br&gt;5) Les 10 actions prioritaires principales — activités de plus grande valeur pour les 30 prochains jours&lt;br&gt;&lt;br&gt;Résultat : Résumé de la revue du portefeuille. Liste d'actions prioritaires avec la prochaine étape spécifique par donateur. Pipeline de sollicitation avec des montants de demande estimés.`;
const donorPortfolioPromptNew =
	`Vous êtes responsable des dons majeurs et vous examinez votre portefeuille de donateurs pour le trimestre.&lt;br&gt;&lt;br&gt;Données des donateurs :&lt;br&gt;[COLLER : Nom du donateur | Date du dernier don | Montant du dernier don | Dons cumulés | Fréquence des dons | Date du dernier contact personnel | Stade de la relation (prospect / cultivation / sollicitation / fidélisation) | Évaluation attribuée | Notes éventuelles]&lt;br&gt;&lt;br&gt;Analyse :&lt;br&gt;&lt;br&gt;1) Santé du portefeuille — combien de donateurs sont activement engagés par rapport à ceux qui sont inactifs (aucun contact depuis plus de 6 mois) ?&lt;br&gt;2) Occasions d’augmentation des dons — donateurs qui ont donné de manière constante mais en dessous de leur capacité estimée&lt;br&gt;3) Donateurs inactifs — ceux qui ont déjà donné auparavant mais n’ont pas fait de don depuis plus de 12 mois ; priorité de réengagement&lt;br&gt;4) Prêts pour une sollicitation — donateurs ayant été cultivés et prêts à être sollicités ; montant estimé de la demande&lt;br&gt;5) 10 actions prioritaires — activités à plus forte valeur à entreprendre dans les 30 prochains jours&lt;br&gt;&lt;br&gt;Résultat attendu :&lt;br&gt;Résumé de l’examen du portefeuille. Liste d’actions prioritaires avec la prochaine étape spécifique pour chaque donateur. Pipeline de sollicitations avec les montants estimés des demandes.`;
const sharePromptLinkPattern =
	/<a class="share-prompt-btn" href="file:\/\/wsl\.localhost\/Ubuntu-D\/home\/germa\/projects\/patro-%20ai%20playbook\/AI%20Playbook%20for%20Nonprofits\.final-fr\.html#">/;
const sharePromptLinkReplacement =
	'<a class="share-prompt-btn" href="mailto:steven.germain.gl@gmail.com?subject=Partager%20votre%20prompt">';

let cachedDocument: { head: string; body: string } | undefined;

export function getNonprofitAiManualDocument() {
	if (cachedDocument) {
		return cachedDocument;
	}

	const source = readFileSync(sourcePath, 'utf-8');
	const headMatch = source.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
	const bodyMatch = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

	if (!headMatch || !bodyMatch) {
		throw new Error('Could not parse nonprofit AI manual HTML source.');
	}

	const head = headMatch[1]
		.replace(/<title>[\s\S]*?<\/title>/i, '')
		.replace(/<meta[^>]+name="description"[^>]*>/i, '')
		.replace(assetPrefixPattern, '/manual-ai-obnl-assets/');

	const body = bodyMatch[1]
		.replace(assetPrefixPattern, '/manual-ai-obnl-assets/')
		.replace(embeddedChromePattern, '')
		.replace(bodyScriptPattern, '')
		.replace(inlineHandlerPattern, '')
		.replace(donorPortfolioPromptOld, donorPortfolioPromptNew)
		.replace(sharePromptLinkPattern, sharePromptLinkReplacement);

	cachedDocument = { head, body };
	return cachedDocument;
}
