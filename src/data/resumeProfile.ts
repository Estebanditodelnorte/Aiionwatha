export type ResumeLocale = 'fr' | 'en' | 'es';

export type ResumeProject = {
	title: string;
	role: string;
	scope: string;
	results: string[];
};

export type ResumeProfile = {
	tag: string;
	heroTitle: string;
	heroLead: string;
	highlights: { title: string; text: string }[];
	profileTitle: string;
	profileSummary: string;
	coreStrengthsTitle: string;
	currentProjectsTitle: string;
	currentProjects: ResumeProject[];
	fundingResearchTitle: string;
	fundingResearchSummary: string;
	fundingThemesTitle: string;
	fundingThemes: string[];
	fundingTypesTitle: string;
	fundingTypes: string[];
	completedProjectsTitle: string;
	completedProjects: ResumeProject[];
	skillsTitle: string;
	skillGroups: { title: string; items: string[] }[];
	recognitionTitle: string;
	recognition: string[];
	ctaTag: string;
	ctaTitle: string;
	ctaBody: string;
	openPdfLabel: string;
	downloadPdfLabel: string;
	contactLabel: string;
};

export const resumeProfiles: Record<ResumeLocale, ResumeProfile> = {
	fr: {
		tag: 'CV complet',
		heroTitle: 'Steven Germain Gros-Louis',
		heroLead:
			'Consultant autochtone en gestion, financement, gouvernance et transformation numérique. Cette version détaillée présente les projets en cours, les livrables déjà réalisés, les compétences clés et les résultats visibles.',
		highlights: [
			{ title: '15+ ans', text: 'Gestion, financement, coordination intersectorielle et exécution numérique.' },
			{ title: '1,1 G$', text: 'Contribution à une réforme majeure du financement de l’éducation autochtone au Québec.' },
			{ title: 'FR / EN / ES', text: 'Travail efficace en contexte multilingue, communautaire, institutionnel et public.' }
		],
		profileTitle: 'Profil',
		profileSummary:
			'Steven relie la stratégie, la culture, les exigences institutionnelles et l’exécution concrète. Son parcours couvre les organisations autochtones, les milieux communautaires, les institutions culturelles, les environnements gouvernementaux et les mandats de modernisation numérique. Il est particulièrement utile quand il faut structurer un projet complexe, clarifier un dossier de financement, produire des documents solides et faire avancer plusieurs parties prenantes dans la même direction.',
		coreStrengthsTitle: 'Forces clés',
		currentProjectsTitle: 'Projets en cours',
		currentProjects: [
			{
				title: 'Réseau Patro',
				role: 'Conseiller innovation et développement',
				scope: 'Accompagnement d’un réseau de 7 Patros au Québec représentant environ 292 employés, avec un accent sur l’innovation, les données et l’accès au financement.',
				results: [
					'Repère et qualifie des opportunités de financement en subventions, fondations et philanthropie.',
					'Soutient l’analyse de données et la structuration de projets sans ajouter une charge administrative inutile aux équipes.',
					'Aligne les projets avec des axes tels que jeunesse, sante-bien-etre, education, sports-loisirs, culture-arts, technologie-innovation, inclusion et gouvernance.'
				]
			},
			{
				title: 'Mandats clients Aiionwatha',
				role: 'Fondateur et conseiller principal',
				scope: 'Accompagnement en financement, gouvernance, documentation stratégique, outils numériques et exécution web.',
				results: [
					'Obtient du financement pour de nouveaux OBNL et de nouvelles entreprises grâce à un meilleur positionnement, à une documentation solide et à un meilleur arrimage avec les programmes.',
					'Construit des plans d’affaires de A à Z, incluant la structure, la logique financière et les pièces de soutien.',
					'Prépare des dossiers de subventions, budgets, notes et plans structurants.',
					'Appuie des organisations autochtones, OBNL, institutions culturelles et PME.',
					'Transforme des besoins complexes en livrables utilisables par des bailleurs, partenaires et directions.'
				]
			},
			{
				title: 'Modernisation numérique et bases de connaissances',
				role: 'Conseiller et bâtisseur de systèmes',
				scope: 'Organisation des contenus, outils web, IA pratique, documentation durable et actifs publics réutilisables.',
				results: [
					'Améliore la crédibilité publique et la structure des contenus en ligne.',
					'Conçoit et développe des sites web qui renforcent la lisibilité, la crédibilité et l’usage concret.',
					'Implémente des solutions de pointe fondées sur les technologies émergentes et les nouvelles pratiques utiles au terrain.',
					'Crée des outils et bibliothèques de ressources orientés usage réel.',
					'Met en place des bases de connaissances pouvant être publiées sous forme de pages, guides ou profils.'
				]
			},
			{
				title: 'Contexte juridique, recherche et usage technologique conforme',
				role: 'Conseiller en recherche et analyse appliquée',
				scope: 'Soutien aux projets qui exigent une meilleure compréhension des cadres juridiques, des contraintes procédurales, des réalités d’affaires et des choix technologiques conformes.',
				results: [
					'Conduit des recherches liées au droit civil, au droit procédural et au droit des affaires selon les besoins des mandats.',
					'Évalue comment la technologie peut soutenir la compréhension des dossiers, la documentation et l’aide à la décision dans des contextes sensibles ou réglementés.',
					'Explore des approches fondées sur la mémoire, l’IA locale et l’IA conforme au droit pour réduire les risques tout en améliorant l’analyse et la clarté opérationnelle.'
				]
			}
		],
		fundingResearchTitle: 'Veille et base de données en financement',
		fundingResearchSummary:
			'Steven maintient une veille structurée des opportunités de financement afin d’aider les clients à comprendre l’étendue des programmes accessibles, les logiques d’admissibilité et les meilleures pistes selon leur mission, leur projet et leur capacité d’exécution. Cette recherche couvre les subventions, les fondations et la philanthropie.',
		fundingThemesTitle: 'Thématiques suivies',
		fundingThemes: [
			'Aînés',
			'Alimentation',
			'Autochtones',
			'Culture, musique et arts',
			'Éducation',
			'Égalité et droits',
			'Emploi et insertion',
			'Environnement et climat',
			'Famille, enfance et jeunesse',
			'Habitation et itinérance',
			'Immigration et intégration',
			'Justice et sécurité',
			'Santé et bien-être',
			'Sports et loisirs',
			'Technologie et innovation'
		],
		fundingTypesTitle: 'Types de financement analysés',
		fundingTypes: [
			'Fonctionnement et mission',
			'Projet',
			'Immobilisations',
			'Équipements',
			'Visibilité et communications',
			'Inclusion et accessibilité',
			'Bénévolat et gouvernance',
			'Formation et capacitation',
			'Fondations',
			'Philanthropie'
		],
		completedProjectsTitle: 'Projets livrés et expériences marquantes',
		completedProjects: [
			{
				title: 'FNEC - réforme du financement de l’éducation autochtone',
				role: 'Chef de projet et contributeur stratégique',
				scope: 'Mandat complété dans un contexte de réforme de financement d’environ 1,1 G$ pour les écoles autochtones du Québec.',
				results: [
					'Contribué à la négociation réussie d’une entente en attente depuis plus de 13 ans.',
					'Consolidé la chronologie des événements pour renforcer le positionnement de négociation.',
					'Appuyé la gestion des statistiques, l’analyse des risques et la construction d’une formule de financement mieux adaptée aux besoins des écoles et des communautés.'
				]
			},
			{
				title: 'Pêches et Océans Canada / INAC',
				role: 'Coordination, analyse et soutien de programmes',
				scope: 'Mandats impliquant partenaires côtiers, acteurs autochtones et exigences de reddition publiques.',
				results: [
					'Coordination de dossiers et d’informations dans des contextes multi-acteurs.',
					'Réalisé des analyses statistiques et géospatiales de la concentration des populations de poissons pour appuyer les besoins de zonage en conservation et en environnement.',
					'Soutien à des décisions et travaux liés à des priorités de développement durable.',
					'Travail reconnu par une lettre ministérielle d’excellence.'
				]
			},
			{
				title: 'CSSSPNQL',
				role: 'Liaison TI santé et soutien au déploiement',
				scope: 'Appui à des déploiements et transferts de connaissances dans plusieurs communautés.',
				results: [
					'Planification de déploiements et soutien à l’adoption.',
					'Piloté la gestion du changement dans des environnements sensibles.',
					'Formé les employés à l’utilisation de nouvelles technologies et de nouveaux outils de travail.',
					'Formation et transfert de connaissances dans des environnements sensibles.',
					'Renforcement de la continuité opérationnelle et de la clarté des processus.'
				]
			},
			{
				title: 'Bastien Industries, artisans et projets culturels',
				role: 'Spécialiste numérique et soutien opérationnel',
				scope: 'Modernisation d’outils, soutien à l’entrepreneuriat et exécution terrain.',
				results: [
					'Implémenté un ERP de bout en bout pour améliorer la structure opérationnelle et la gestion quotidienne.',
					'Créé une vitrine Amazon pour soutenir la visibilité des produits et les canaux de vente numériques.',
					'Soutien à des environnements artisanaux, entrepreneuriaux et communautaires.',
					'Amélioration de la lisibilité des opérations et des outils de travail.'
				]
			}
		],
		skillsTitle: 'Compétences et domaines d’intervention',
		skillGroups: [
			{
				title: 'Financement et conseil stratégique',
				items: [
					'Stratégie de financement et montage de dossiers',
					'Budgets, plans, notes exécutives et argumentaires',
					'Coordination de partenaires et parties prenantes',
					'Préparation de dossiers pour bailleurs et décideurs'
				]
			},
			{
				title: 'Gouvernance, conformité et exécution',
				items: [
					'Relations gouvernementales et concertation',
					'Gouvernance, conformité et préparation Loi 25',
					'Coordination multi-acteurs et structure PMO légère',
					'Documentation, suivi et reddition'
				]
			},
			{
				title: 'Numérique, communication et opérations',
				items: [
					'Organisation de contenus, outils web et SEO/GEO',
					'Modernisation numérique et bases de connaissances',
					'IA pratique et optimisation de processus',
					'Pen testing et audits de sécurité'
				]
			}
		],
		recognitionTitle: 'Résultats, reconnaissance et signaux de crédibilité',
		recognition: [
			'15+ ans d’expérience en gestion, financement, numérique et coordination.',
			'Contribution à un cadre de financement lié à environ 1,1 G$.',
			'Lettre ministérielle d’excellence - Pêches et Océans Canada.',
			'3e prix Start-up Weekend.',
			'Références positives d’organisations autochtones, institutions culturelles et partenaires publics.'
		],
		ctaTag: 'Partager ce profil',
		ctaTitle: 'Envoyez cette page ou joignez le PDF',
		ctaBody:
			'Cette version détaillée du profil est plus utile qu’un simple CV statique pour montrer les projets en cours, les capacités concrètes et les résultats livrés.',
		openPdfLabel: 'Ouvrir le PDF',
		downloadPdfLabel: 'Télécharger le CV',
		contactLabel: 'Contacter Steven'
	},
	en: {
		tag: 'Full resume',
		heroTitle: 'Steven Germain Gros-Louis',
		heroLead:
			'Indigenous management, funding, governance, and digital transformation advisor. This detailed public profile shows active work, completed mandates, core capabilities, and visible results.',
		highlights: [
			{ title: '15+ years', text: 'Management, funding, coordination, and digital execution experience.' },
			{ title: '$1.1B', text: 'Contribution to a major Indigenous education funding reform framework in Quebec.' },
			{ title: 'FR / EN / ES', text: 'Operates comfortably across multilingual, public, institutional, and community settings.' }
		],
		profileTitle: 'Profile',
		profileSummary:
			'Steven connects strategy, cultural context, institutional requirements, and practical delivery. His background spans Indigenous organizations, community work, cultural institutions, government-facing environments, and digital modernization mandates. He is especially effective where complex projects need structure, funding logic, strong documentation, and stakeholder alignment.',
		coreStrengthsTitle: 'Core strengths',
		currentProjectsTitle: 'Current projects',
		currentProjects: [
			{
				title: 'Reseau Patro',
				role: 'Innovation and development advisor',
				scope: 'Supports a network of 7 Patros in Quebec representing approximately 292 employees, with a focus on innovation, data, and funding access.',
				results: [
					'Identifies and qualifies funding opportunities across grants, foundations, and philanthropy.',
					'Supports data analysis and project structuring without creating unnecessary administrative burden for local teams.',
					'Aligns initiatives with themes such as youth, health and wellbeing, education, sports and recreation, culture and arts, technology and innovation, inclusion, and governance.'
				]
			},
			{
				title: 'Aiionwatha client mandates',
				role: 'Founder and lead advisor',
				scope: 'Funding strategy, governance support, strategic documentation, digital execution, and public-facing content work.',
				results: [
					'Helps new nonprofits and businesses secure funding through stronger positioning, documentation, and program fit.',
					'Builds business plans end to end, including structure, financial logic, and supporting materials.',
					'Prepares grant files, budgets, plans, and executive notes.',
					'Supports Indigenous organizations, nonprofits, cultural institutions, and SMBs.',
					'Turns complex needs into deliverables funders, partners, and leaders can actually use.'
				]
			},
			{
				title: 'Digital modernization and knowledge systems',
				role: 'Advisor and builder',
				scope: 'Content organization, practical AI workflows, reusable web tools, and durable knowledge bases.',
				results: [
					'Improves public credibility and site structure.',
					'Designs and builds websites that improve clarity, credibility, and practical usability.',
					'Implements cutting-edge solutions based on emerging technology and relevant new developments.',
					'Builds practical resource libraries and reusable assets.',
					'Creates knowledge systems that can be published as guides, pages, and profile material.'
				]
			},
			{
				title: 'Legal context, research, and compliant technology use',
				role: 'Advisor in applied research and analysis',
				scope: 'Supports projects that require stronger understanding of legal frameworks, procedural constraints, business realities, and compliant technology choices.',
				results: [
					'Conducts research tied to civil law, procedural law, and business law questions relevant to active mandates.',
					'Assesses how technology can support case understanding, documentation, and decision support in sensitive or regulated environments.',
					'Explores memory-based AI, local AI, and law-compliant AI approaches that reduce risk while improving analysis and operational clarity.'
				]
			}
		],
		fundingResearchTitle: 'Funding research and database coverage',
		fundingResearchSummary:
			'Steven maintains a structured funding-opportunity database to help clients understand the breadth of available programs, likely eligibility paths, and the strongest directions based on mission, project type, and delivery capacity. This research spans grants, foundations, and philanthropy.',
		fundingThemesTitle: 'Tracked themes',
		fundingThemes: [
			'Seniors',
			'Food security',
			'Indigenous',
			'Culture, music, and arts',
			'Education',
			'Equality and rights',
			'Employment and workforce inclusion',
			'Environment and climate',
			'Family, childhood, and youth',
			'Housing and homelessness',
			'Immigration and integration',
			'Justice and safety',
			'Health and wellbeing',
			'Sports and recreation',
			'Technology and innovation'
		],
		fundingTypesTitle: 'Funding types analyzed',
		fundingTypes: [
			'Operations and mission funding',
			'Project funding',
			'Capital and infrastructure',
			'Equipment',
			'Visibility and communications',
			'Inclusion and accessibility',
			'Volunteer and governance support',
			'Training and capacity building',
			'Foundations',
			'Philanthropy'
		],
		completedProjectsTitle: 'Completed work and notable mandates',
		completedProjects: [
			{
				title: 'FNEC - Indigenous education funding reform',
				role: 'Project lead and strategic contributor',
				scope: 'Completed mandate in a funding reform context tied to an approximately $1.1B framework for Indigenous schools in Quebec.',
				results: [
					'Contributed to the successful negotiation of an agreement that had been pending for more than 13 years.',
					'Consolidated the chronology of events to strengthen negotiation positioning.',
					'Supported statistics management, risk framing, and the design of a funding formula better aligned with the needs of schools and communities.'
				]
			},
			{
				title: 'Fisheries and Oceans Canada / INAC',
				role: 'Program support, coordination, and analysis',
				scope: 'Mandates involving Indigenous partners, coastal stakeholders, and formal public reporting environments.',
				results: [
					'Coordinated structured inputs across complex stakeholder contexts.',
					'Conducted statistical and geospatial analysis of fish population concentration to support conservation and environmental zoning needs.',
					'Supported decision work tied to sustainability and community priorities.',
					'Contributed to work recognized by a ministerial letter of excellence.'
				]
			},
			{
				title: 'CSSSPNQL',
				role: 'Health IT liaison and deployment support',
				scope: 'Support for rollouts and knowledge transfer across multiple communities.',
				results: [
					'Helped plan deployments and adoption support.',
					'Led change-management support in sensitive operating environments.',
					'Trained employees to use new technologies and stronger daily workflows.',
					'Delivered training and knowledge transfer in sensitive operating environments.',
					'Strengthened operational continuity and process clarity.'
				]
			},
			{
				title: 'Bastien Industries, artisan ecosystems, and cultural work',
				role: 'Digital specialist and operational contributor',
				scope: 'Systems modernization, entrepreneurship support, and practical execution work.',
				results: [
					'Implemented an ERP end to end to improve operational structure and day-to-day management.',
					'Built an Amazon storefront to support product visibility and digital sales channels.',
					'Supported entrepreneurial, artisan, and community-facing initiatives.',
					'Made day-to-day operations and documentation easier to use.'
				]
			}
		],
		skillsTitle: 'Skills and operating range',
		skillGroups: [
			{
				title: 'Funding and strategic advisory',
				items: [
					'Funding strategy and grant file preparation',
					'Budgets, plans, executive notes, and persuasive documentation',
					'Partner and stakeholder coordination',
					'Decision support for funders and leadership teams'
				]
			},
			{
				title: 'Governance, compliance, and execution',
				items: [
					'Government relations and consultation support',
					'Governance, compliance, and Law 25 readiness',
					'Light PMO structure and multi-party coordination',
					'Documentation, reporting, and follow-through'
				]
			},
			{
				title: 'Digital, communication, and operations',
				items: [
					'Content organization, practical web tooling, and GEO',
					'Digital modernization and knowledge-base design',
					'Practical AI and process optimization',
					'Pen testing and security audits'
				]
			}
		],
		recognitionTitle: 'Results, recognition, and credibility signals',
		recognition: [
			'15+ years of experience across management, funding, digital operations, and coordination.',
			'Contribution to a funding framework tied to approximately $1.1B.',
			'Ministerial letter of excellence - Fisheries and Oceans Canada.',
			'3rd prize - Start-up Weekend.',
			'Positive references from Indigenous organizations, cultural institutions, and public partners.'
		],
		ctaTag: 'Easy to share',
		ctaTitle: 'Send the page or attach the PDF',
		ctaBody:
			'This detailed version is more useful than a static one-page resume when you need to show active projects, demonstrated capabilities, and concrete delivery context.',
		openPdfLabel: 'Open PDF',
		downloadPdfLabel: 'Download resume',
		contactLabel: 'Email Steven'
	},
	es: {
		tag: 'Curriculum completo',
		heroTitle: 'Steven Germain Gros-Louis',
		heroLead:
			'Asesor indigena en gestion, financiamiento, gobernanza y transformacion digital. Este perfil publico detallado muestra proyectos activos, mandatos entregados, capacidades clave y resultados visibles.',
		highlights: [
			{ title: '15+ anos', text: 'Experiencia en gestion, financiamiento, coordinacion y ejecucion digital.' },
			{ title: '1,1 mil M$', text: 'Contribucion a una gran reforma de financiamiento para educacion indigena en Quebec.' },
			{ title: 'FR / EN / ES', text: 'Trabajo efectivo en contextos multilingues, institucionales, publicos y comunitarios.' }
		],
		profileTitle: 'Perfil',
		profileSummary:
			'Steven conecta estrategia, contexto cultural, exigencias institucionales y ejecucion practica. Su trayectoria combina organizaciones indigenas, trabajo comunitario, instituciones culturales, entornos vinculados al gobierno y mandatos de modernizacion digital. Aporta especialmente cuando un proyecto complejo necesita estructura, logica de financiamiento, documentacion solida y alineacion entre actores.',
		coreStrengthsTitle: 'Fortalezas clave',
		currentProjectsTitle: 'Proyectos en curso',
		currentProjects: [
			{
				title: 'Reseau Patro',
				role: 'Consejero en innovacion y desarrollo',
				scope: 'Apoyo a una red de 7 Patros en Quebec que representa aproximadamente 292 empleados, con enfoque en innovacion, datos y acceso al financiamiento.',
				results: [
					'Identifica y califica oportunidades de financiamiento en subvenciones, fundaciones y filantropia.',
					'Apoya el analisis de datos y la estructuracion de proyectos sin agregar carga administrativa innecesaria a los equipos locales.',
					'Alinea iniciativas con temas como juventud, salud y bienestar, educacion, deportes y recreacion, cultura y artes, tecnologia e innovacion, inclusion y gobernanza.'
				]
			},
			{
				title: 'Mandatos de clientes Aiionwatha',
				role: 'Fundador y asesor principal',
				scope: 'Estrategia de financiamiento, apoyo en gobernanza, documentacion estrategica, ejecucion digital y contenidos publicos.',
				results: [
					'Ayuda a nuevas ONG y empresas a obtener financiamiento mediante mejor posicionamiento, documentacion solida y mejor ajuste con programas.',
					'Construye planes de negocio de principio a fin, incluida la estructura, la logica financiera y los materiales de apoyo.',
					'Prepara expedientes de subvencion, presupuestos, planes y notas ejecutivas.',
					'Apoya a organizaciones indigenas, ONG, instituciones culturales y pymes.',
					'Transforma necesidades complejas en entregables utiles para financiadores, socios y direcciones.'
				]
			},
			{
				title: 'Modernizacion digital y sistemas de conocimiento',
				role: 'Asesor y constructor',
				scope: 'Organizacion de contenidos, flujos practicos con IA, herramientas web reutilizables y bases de conocimiento duraderas.',
				results: [
					'Mejora la credibilidad publica y la estructura del sitio.',
					'Disena y construye sitios web que mejoran la claridad, la credibilidad y la utilidad practica.',
					'Implementa soluciones de vanguardia basadas en tecnologia emergente y desarrollos recientes relevantes.',
					'Crea bibliotecas practicas de recursos y activos reutilizables.',
					'Desarrolla sistemas de conocimiento que pueden publicarse como guias, paginas y material de perfil.'
				]
			},
			{
				title: 'Contexto juridico, investigacion y uso tecnologico conforme',
				role: 'Asesor en investigacion y analisis aplicado',
				scope: 'Apoya proyectos que requieren una mejor comprension de marcos juridicos, restricciones procesales, realidades empresariales y decisiones tecnologicas conformes.',
				results: [
					'Realiza investigacion vinculada al derecho civil, procesal y mercantil segun las necesidades de los mandatos.',
					'Evalua como la tecnologia puede apoyar la comprension de expedientes, la documentacion y el apoyo a la decision en entornos sensibles o regulados.',
					'Explora enfoques de IA con memoria, IA local e IA conforme al derecho para reducir riesgos y mejorar el analisis y la claridad operativa.'
				]
			}
		],
		fundingResearchTitle: 'Investigacion y base de datos de financiamiento',
		fundingResearchSummary:
			'Steven mantiene una base de datos estructurada de oportunidades de financiamiento para ayudar a los clientes a entender el alcance de los programas disponibles, los caminos probables de elegibilidad y las mejores opciones segun la mision, el tipo de proyecto y la capacidad de ejecucion. Esta investigacion cubre subvenciones, fundaciones y filantropia.',
		fundingThemesTitle: 'Temas seguidos',
		fundingThemes: [
			'Personas mayores',
			'Alimentacion',
			'Indigenas',
			'Cultura, musica y artes',
			'Educacion',
			'Igualdad y derechos',
			'Empleo e insercion',
			'Medio ambiente y clima',
			'Familia, infancia y juventud',
			'Vivienda y situacion de calle',
			'Inmigracion e integracion',
			'Justicia y seguridad',
			'Salud y bienestar',
			'Deportes y recreacion',
			'Tecnologia e innovacion'
		],
		fundingTypesTitle: 'Tipos de financiamiento analizados',
		fundingTypes: [
			'Funcionamiento y mision',
			'Proyecto',
			'Infraestructura e inmovilizaciones',
			'Equipamiento',
			'Visibilidad y comunicaciones',
			'Inclusion y accesibilidad',
			'Voluntariado y gobernanza',
			'Formacion y fortalecimiento de capacidades',
			'Fundaciones',
			'Filantropia'
		],
		completedProjectsTitle: 'Trabajo entregado y mandatos destacados',
		completedProjects: [
			{
				title: 'FNEC - reforma del financiamiento educativo indigena',
				role: 'Lider de proyecto y contribuidor estrategico',
				scope: 'Mandato completado en un contexto de reforma de financiamiento vinculado a un marco de aproximadamente 1,1 mil millones para escuelas indigenas de Quebec.',
				results: [
					'Contribuyo a la negociacion exitosa de un acuerdo pendiente durante mas de 13 anos.',
					'Consolido la cronologia de eventos para fortalecer la posicion de negociacion.',
					'Apoyo la gestion de estadisticas, el analisis de riesgos y la construccion de una formula de financiamiento mejor alineada con las necesidades de escuelas y comunidades.'
				]
			},
			{
				title: 'Fisheries and Oceans Canada / INAC',
				role: 'Apoyo programatico, coordinacion y analisis',
				scope: 'Mandatos con socios indigenas, actores costeros y entornos formales de reporte publico.',
				results: [
					'Coordino insumos estructurados en contextos complejos de multiples actores.',
					'Realice analisis estadisticos y geoespaciales sobre la concentracion de poblaciones de peces para apoyar necesidades de zonificacion en conservacion y medio ambiente.',
					'Apoyo trabajo de decision ligado a sostenibilidad y prioridades comunitarias.',
					'Contribuyo a trabajo reconocido por una carta ministerial de excelencia.'
				]
			},
			{
				title: 'CSSSPNQL',
				role: 'Enlace TI en salud y apoyo al despliegue',
				scope: 'Apoyo a despliegues y transferencia de conocimiento en varias comunidades.',
				results: [
					'Ayudo a planificar despliegues y adopcion.',
					'Lidero la gestion del cambio en entornos operativos sensibles.',
					'Formo a empleados en el uso de nuevas tecnologias y mejores herramientas de trabajo.',
					'Ofreci formacion y transferencia de conocimiento en entornos sensibles.',
					'Reforzo continuidad operativa y claridad de procesos.'
				]
			},
			{
				title: 'Bastien Industries, ecosistemas artesanales y trabajo cultural',
				role: 'Especialista digital y apoyo operativo',
				scope: 'Modernizacion de sistemas, apoyo emprendedor y ejecucion practica.',
				results: [
					'Implemente un ERP de principio a fin para mejorar la estructura operativa y la gestion diaria.',
					'Cree una vitrina de Amazon para apoyar la visibilidad de productos y los canales de venta digitales.',
					'Apoye iniciativas emprendedoras, artesanales y comunitarias.',
					'Hice mas claros y utilizables los procesos y la documentacion del trabajo diario.'
				]
			}
		],
		skillsTitle: 'Habilidades y rango de intervencion',
		skillGroups: [
			{
				title: 'Financiamiento y asesoria estrategica',
				items: [
					'Estrategia de financiamiento y preparacion de expedientes',
					'Presupuestos, planes, notas ejecutivas y documentacion persuasiva',
					'Coordinacion de socios y actores clave',
					'Apoyo a decisiones para financiadores y direcciones'
				]
			},
			{
				title: 'Gobernanza, cumplimiento y ejecucion',
				items: [
					'Relaciones gubernamentales y apoyo a la consulta',
					'Gobernanza, cumplimiento y preparacion para la Ley 25',
					'Estructura PMO ligera y coordinacion multi-actor',
					'Documentacion, reportes y seguimiento'
				]
			},
			{
				title: 'Digital, comunicacion y operaciones',
				items: [
					'Organizacion de contenidos, herramientas web practicas y GEO',
					'Modernizacion digital y diseno de bases de conocimiento',
					'IA practica y optimizacion de procesos',
					'Pen testing y auditorias de seguridad'
				]
			}
		],
		recognitionTitle: 'Resultados, reconocimiento y senales de credibilidad',
		recognition: [
			'15+ anos de experiencia en gestion, financiamiento, operaciones digitales y coordinacion.',
			'Contribucion a un marco de financiamiento vinculado a aproximadamente 1,1 mil millones.',
			'Carta ministerial de excelencia - Fisheries and Oceans Canada.',
			'3.er premio - Start-up Weekend.',
			'Referencias positivas de organizaciones indigenas, instituciones culturales y socios publicos.'
		],
		ctaTag: 'Facil de compartir',
		ctaTitle: 'Envia la pagina o adjunta el PDF',
		ctaBody:
			'Esta version detallada es mas util que un CV estatico cuando necesitas mostrar proyectos activos, capacidades demostradas y contexto real de ejecucion.',
		openPdfLabel: 'Abrir PDF',
		downloadPdfLabel: 'Descargar CV',
		contactLabel: 'Escribir a Steven'
	}
};
