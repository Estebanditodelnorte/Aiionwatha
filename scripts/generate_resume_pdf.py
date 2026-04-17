from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "documents" / "steven-germain-gros-louis-cv-2024.pdf"
FONT_REG = Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
FONT_BOLD = Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")


profile = {
    "name": "Steven Germain Gros-Louis",
    "title": "Consultant autochtone en gestion, financement, gouvernance, transformation numérique et recherche appliquée",
    "contact": [
        ("Lieu", "Wendake, Québec"),
        ("Courriel", "info@aiionwatha.com"),
        ("Téléphone", "(581) 578-2260"),
        ("LinkedIn", "linkedin.com/in/stevengermain"),
        ("Site", "aiionwatha.com"),
    ],
    "highlights": [
        ("15+ ans", "Gestion, financement, coordination intersectorielle et exécution numérique."),
        ("1,1 G$", "Contribution à une réforme majeure du financement de l’éducation autochtone au Québec."),
        ("FR / EN / ES", "Travail en contexte multilingue, communautaire, institutionnel et public."),
    ],
    "summary": (
        "Steven relie la stratégie, la culture, les exigences institutionnelles et l’exécution concrète. "
        "Son parcours couvre les organisations autochtones, les milieux communautaires, les institutions culturelles, "
        "les environnements gouvernementaux et les mandats de modernisation numérique. Il est particulièrement utile "
        "quand il faut structurer un projet complexe, clarifier un dossier de financement, produire des documents "
        "solides et faire avancer plusieurs parties prenantes dans la même direction."
    ),
    "current_projects": [
        (
            "Réseau Patro",
            "Conseiller innovation et développement",
            "Accompagnement d’un réseau de 7 Patros au Québec représentant environ 292 employés, avec un accent sur l’innovation, les données et l’accès au financement.",
            [
                "Repère et qualifie des opportunités de financement en subventions, fondations et philanthropie.",
                "Soutient l’analyse de données et la structuration de projets sans ajouter une charge administrative inutile aux équipes.",
                "Aligne les projets avec des axes tels que jeunesse, santé et bien-être, éducation, sports-loisirs, culture-arts, technologie-innovation, inclusion et gouvernance.",
            ],
        ),
        (
            "Mandats clients Aiionwatha",
            "Fondateur et conseiller principal",
            "Accompagnement en financement, gouvernance, documentation stratégique, outils numériques et exécution web.",
            [
                "Obtient du financement pour de nouveaux OBNL et de nouvelles entreprises grâce à un meilleur positionnement, à une documentation solide et à un meilleur arrimage avec les programmes.",
                "Construit des plans d’affaires de A à Z, incluant la structure, la logique financière et les pièces de soutien.",
                "Prépare des dossiers de subventions, budgets, notes et plans structurants.",
                "Appuie des organisations autochtones, OBNL, institutions culturelles et PME.",
                "Transforme des besoins complexes en livrables utilisables par des bailleurs, partenaires et directions.",
            ],
        ),
        (
            "Modernisation numérique et bases de connaissances",
            "Conseiller et bâtisseur de systèmes",
            "Organisation des contenus, outils web, IA pratique, documentation durable et actifs publics réutilisables.",
            [
                "Améliore la crédibilité publique et la structure des contenus en ligne.",
                "Conçoit et développe des sites web qui renforcent la lisibilité, la crédibilité et l’usage concret.",
                "Implémente des solutions de pointe fondées sur les technologies émergentes et les nouvelles pratiques utiles au terrain.",
                "Crée des outils et bibliothèques de ressources orientés usage réel.",
                "Met en place des bases de connaissances pouvant être publiées sous forme de pages, guides ou profils.",
            ],
        ),
        (
            "Contexte juridique, recherche et usage technologique conforme",
            "Conseiller en recherche et analyse appliquée",
            "Soutien aux projets qui exigent une meilleure compréhension des cadres juridiques, des contraintes procédurales, des réalités d’affaires et des choix technologiques conformes.",
            [
                "Conduit des recherches liées au droit civil, au droit procédural et au droit des affaires selon les besoins des mandats.",
                "Évalue comment la technologie peut soutenir la compréhension des dossiers, la documentation et l’aide à la décision dans des contextes sensibles ou réglementés.",
                "Explore des approches fondées sur la mémoire, l’IA locale et l’IA conforme au droit pour réduire les risques tout en améliorant l’analyse et la clarté opérationnelle.",
            ],
        ),
    ],
    "funding": {
        "summary": (
            "Steven maintient une veille structurée des opportunités de financement afin d’aider les clients à comprendre "
            "l’étendue des programmes accessibles, les logiques d’admissibilité et les meilleures pistes selon leur mission, "
            "leur projet et leur capacité d’exécution. Cette recherche couvre les subventions, les fondations et la philanthropie."
        ),
        "themes": [
            "Aînés",
            "Alimentation",
            "Autochtones",
            "Culture, musique et arts",
            "Éducation",
            "Égalité et droits",
            "Emploi et insertion",
            "Environnement et climat",
            "Famille, enfance et jeunesse",
            "Habitation et itinérance",
            "Immigration et intégration",
            "Justice et sécurité",
            "Santé et bien-être",
            "Sports et loisirs",
            "Technologie et innovation",
        ],
        "types": [
            "Fonctionnement et mission",
            "Projet",
            "Immobilisations",
            "Équipements",
            "Visibilité et communications",
            "Inclusion et accessibilité",
            "Bénévolat et gouvernance",
            "Formation et capacitation",
            "Fondations",
            "Philanthropie",
        ],
    },
    "completed": [
        (
            "FNEC - réforme du financement de l’éducation autochtone",
            "Chef de projet et contributeur stratégique",
            "Mandat complété dans un contexte de réforme de financement d’environ 1,1 G$ pour les écoles autochtones du Québec.",
            [
                "Contribué à la négociation réussie d’une entente en attente depuis plus de 13 ans.",
                "Consolidé la chronologie des événements pour renforcer le positionnement de négociation.",
                "Appuyé la gestion des statistiques, l’analyse des risques et la construction d’une formule de financement mieux adaptée aux besoins des écoles et des communautés.",
            ],
        ),
        (
            "Pêches et Océans Canada / INAC",
            "Coordination, analyse et soutien de programmes",
            "Mandats impliquant partenaires côtiers, acteurs autochtones et exigences de reddition publiques.",
            [
                "Coordination de dossiers et d’informations dans des contextes multi-acteurs.",
                "Réalisé des analyses statistiques et géospatiales de la concentration des populations de poissons pour appuyer les besoins de zonage en conservation et en environnement.",
                "Soutien à des décisions et travaux liés à des priorités de développement durable.",
                "Travail reconnu par une lettre ministérielle d’excellence.",
            ],
        ),
        (
            "CSSSPNQL",
            "Liaison TI santé et soutien au déploiement",
            "Appui à des déploiements et transferts de connaissances dans plusieurs communautés.",
            [
                "Planification de déploiements et soutien à l’adoption.",
                "Piloté la gestion du changement dans des environnements sensibles.",
                "Formé les employés à l’utilisation de nouvelles technologies et de nouveaux outils de travail.",
                "Formation et transfert de connaissances dans des environnements sensibles.",
                "Renforcement de la continuité opérationnelle et de la clarté des processus.",
            ],
        ),
        (
            "Bastien Industries, artisans et projets culturels",
            "Spécialiste numérique et soutien opérationnel",
            "Modernisation d’outils, soutien à l’entrepreneuriat et exécution terrain.",
            [
                "Implémenté un ERP de bout en bout pour améliorer la structure opérationnelle et la gestion quotidienne.",
                "Créé une vitrine Amazon pour soutenir la visibilité des produits et les canaux de vente numériques.",
                "Soutien à des environnements artisanaux, entrepreneuriaux et communautaires.",
                "Amélioration de la lisibilité des opérations et des outils de travail.",
            ],
        ),
    ],
    "skills": [
        (
            "Financement et conseil stratégique",
            [
                "Stratégie de financement et montage de dossiers",
                "Budgets, plans, notes exécutives et argumentaires",
                "Coordination de partenaires et parties prenantes",
                "Préparation de dossiers pour bailleurs et décideurs",
            ],
        ),
        (
            "Gouvernance, conformité et exécution",
            [
                "Relations gouvernementales et concertation",
                "Gouvernance, conformité et préparation Loi 25",
                "Coordination multi-acteurs et structure PMO légère",
                "Documentation, suivi et reddition",
            ],
        ),
        (
            "Numérique, communication et opérations",
            [
                "Organisation de contenus, outils web et SEO/GEO",
                "Modernisation numérique et bases de connaissances",
                "IA pratique et optimisation de processus",
                "Pen testing et audits de sécurité",
            ],
        ),
    ],
    "recognition": [
        "15+ ans d’expérience en gestion, financement, numérique et coordination.",
        "Contribution à un cadre de financement lié à environ 1,1 G$.",
        "Lettre ministérielle d’excellence - Pêches et Océans Canada.",
        "3e prix Start-up Weekend.",
        "Références positives d’organisations autochtones, institutions culturelles et partenaires publics.",
    ],
}


def register_fonts() -> tuple[str, str]:
    pdfmetrics.registerFont(TTFont("DejaVuSans", str(FONT_REG)))
    pdfmetrics.registerFont(TTFont("DejaVuSans-Bold", str(FONT_BOLD)))
    return "DejaVuSans", "DejaVuSans-Bold"


def build_pdf() -> None:
    regular, bold = register_fonts()
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title=f"{profile['name']} - CV",
        author=profile["name"],
    )

    styles = getSampleStyleSheet()
    base = ParagraphStyle(
        "Base",
        parent=styles["BodyText"],
        fontName=regular,
        fontSize=9.3,
        leading=12.2,
        textColor=colors.HexColor("#102018"),
        spaceAfter=4,
    )
    title = ParagraphStyle(
        "Title",
        parent=styles["Title"],
        fontName=bold,
        fontSize=22,
        leading=26,
        textColor=colors.HexColor("#0f3b2d"),
        spaceAfter=6,
    )
    subtitle = ParagraphStyle(
        "Subtitle",
        parent=base,
        fontName=bold,
        fontSize=11,
        leading=14,
        textColor=colors.HexColor("#0f3b2d"),
        spaceAfter=6,
    )
    section = ParagraphStyle(
        "Section",
        parent=base,
        fontName=bold,
        fontSize=13,
        leading=16,
        textColor=colors.HexColor("#0f3b2d"),
        spaceBefore=9,
        spaceAfter=5,
    )
    small = ParagraphStyle(
        "Small",
        parent=base,
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor("#213126"),
    )

    bullet_style = ParagraphStyle(
        "Bullet",
        parent=base,
        leftIndent=10,
        firstLineIndent=0,
        bulletIndent=0,
        spaceBefore=0,
        spaceAfter=2,
    )

    def add_bullets(items: list[str]) -> list:
        flowables = []
        for item in items:
            flowables.append(Paragraph(item, bullet_style, bulletText="•"))
        return flowables

    story = []
    story.append(Paragraph(profile["name"], title))
    story.append(Paragraph(profile["title"], subtitle))
    story.append(Paragraph(profile["summary"], base))
    story.append(Spacer(1, 4))

    contact_rows = []
    for label, value in profile["contact"]:
        contact_rows.append([Paragraph(f"<b>{label}</b>", small), Paragraph(value, small)])
    contact_table = Table(contact_rows, colWidths=[28 * mm, 130 * mm], hAlign="LEFT")
    contact_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.whitesmoke),
                ("BOX", (0, 0), (-1, -1), 0.3, colors.HexColor("#d1d9d5")),
                ("INNERGRID", (0, 0), (-1, -1), 0.2, colors.HexColor("#d1d9d5")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.append(contact_table)
    story.append(Spacer(1, 6))

    highlights = []
    for headline, text in profile["highlights"]:
        highlights.append(
            [
                Paragraph(f"<b>{headline}</b>", small),
                Paragraph(text, small),
            ]
        )
    highlight_table = Table(highlights, colWidths=[26 * mm, 132 * mm], hAlign="LEFT")
    highlight_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#eef5ee")),
                ("BOX", (0, 0), (-1, -1), 0.3, colors.HexColor("#b5c8bb")),
                ("INNERGRID", (0, 0), (-1, -1), 0.2, colors.HexColor("#c6d6cc")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.append(highlight_table)

    story.append(Paragraph("Profil", section))
    story.append(Paragraph(profile["summary"], base))

    story.append(Paragraph("Mandats actifs", section))
    for title_text, role, scope, results in profile["current_projects"]:
        block = [
            Paragraph(f"<b>{title_text}</b>", subtitle),
            Paragraph(f"<b>Rôle</b> {role}", base),
            Paragraph(f"<b>Portée</b> {scope}", base),
            Paragraph(f"<b>Livrables / effets</b>", base),
        ]
        block.extend(add_bullets(results))
        story.append(KeepTogether(block))

    story.append(Paragraph("Veille et base de données en financement", section))
    story.append(Paragraph(profile["funding"]["summary"], base))
    funding_table = Table(
        [
            [
                Paragraph("<b>Thématiques suivies</b>", small),
                Paragraph(", ".join(profile["funding"]["themes"]), small),
            ],
            [
                Paragraph("<b>Types de financement analysés</b>", small),
                Paragraph(", ".join(profile["funding"]["types"]), small),
            ],
        ],
        colWidths=[42 * mm, 116 * mm],
        hAlign="LEFT",
    )
    funding_table.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 0.3, colors.HexColor("#d1d9d5")),
                ("INNERGRID", (0, 0), (-1, -1), 0.2, colors.HexColor("#d1d9d5")),
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#fbfcfa")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.append(funding_table)

    story.append(Paragraph("Projets livrés et expériences marquantes", section))
    for title_text, role, scope, results in profile["completed"]:
        block = [
            Paragraph(f"<b>{title_text}</b>", subtitle),
            Paragraph(f"<b>Rôle</b> {role}", base),
            Paragraph(f"<b>Portée</b> {scope}", base),
            Paragraph(f"<b>Résultats</b>", base),
        ]
        block.extend(add_bullets(results))
        story.append(KeepTogether(block))

    story.append(Paragraph("Compétences et domaines d’intervention", section))
    for group_title, items in profile["skills"]:
        story.append(KeepTogether([Paragraph(f"<b>{group_title}</b>", subtitle), *add_bullets(items)]))

    story.append(Paragraph("Résultats et signaux de crédibilité", section))
    story.extend(add_bullets(profile["recognition"]))

    doc.build(story)


if __name__ == "__main__":
    build_pdf()
