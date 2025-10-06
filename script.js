// Digital Farm Management Portal - JavaScript functionality

// Global variables
let currentLanguage = 'en'
let alerts = []
let riskAssessmentData = {}
let userPoints = 0
let communityPosts = []

// Translation data
const translations = {
  en: {
    dashboard: 'Dashboard',
    risk_assessment: 'Risk Assessment',
    training: 'Training',
    alerts: 'Alerts',
    compliance: 'Compliance',
    welcome: 'Welcome to FarmGuard',
    dashboard_subtitle: 'Your comprehensive biosecurity management system',
    total_animals: 'Total Animals',
    risk_score: 'Risk Score',
    active_alerts: 'Active Alerts',
    compliance_rate: 'Compliance Rate',
    recent_alerts: 'Recent Alerts',
    compliance_status: 'Compliance Status',
    high_risk_alert: 'High Risk: Unauthorized vehicle entry',
    vaccination_due: 'Vaccination due for Poultry Block A',
    hygiene_check: 'Hygiene check completed',
    vaccination_records: 'Vaccination Records',
    hygiene_checks: 'Hygiene Checks',
    biosecurity_protocols: 'Biosecurity Protocols',
    training_completion: 'Training Completion',
    risk_assessment_subtitle: "Evaluate your farm's biosecurity risk level",
    farm_location: 'Farm Location',
    rural: 'Rural (Isolated)',
    suburban: 'Suburban',
    urban: 'Urban',
    animal_type: 'Animal Type',
    pigs: 'Pigs',
    poultry: 'Poultry',
    mixed: 'Mixed',
    animal_count: 'Animal Count',
    hygiene_practices: 'Hygiene Practices',
    excellent: 'Excellent',
    good: 'Good',
    fair: 'Fair',
    poor: 'Poor',
    vaccination_status: 'Vaccination Status',
    up_to_date: 'Up to Date',
    partial: 'Partial',
    outdated: 'Outdated',
    none: 'None',
    biosecurity_measures: 'Biosecurity Measures',
    comprehensive: 'Comprehensive',
    basic: 'Basic',
    minimal: 'Minimal',
    calculate_risk: 'Calculate Risk Level',
    risk_assessment_result: 'Risk Assessment Result',
    training_subtitle: 'Learn about biosecurity best practices',
    hygiene_basics: 'Hygiene Basics',
    hygiene_basics_desc: 'Essential hygiene practices for farm workers',
    watch_video: 'Watch Video',
    biosecurity_protocols_desc:
      'Understanding and implementing biosecurity measures',
    start_training: 'Start Training',
    vaccination_guide: 'Vaccination Guide',
    vaccination_guide_desc: 'Proper vaccination procedures and schedules',
    learn_more: 'Learn More',
    disease_prevention: 'Disease Prevention',
    disease_prevention_desc: 'Identifying and preventing common diseases',
    view_guide: 'View Guide',
    emergency_procedures: 'Emergency Procedures',
    emergency_procedures_desc: 'What to do in case of disease outbreak',
    read_procedures: 'Read Procedures',
    monitoring_systems: 'Monitoring Systems',
    monitoring_systems_desc: 'Setting up effective monitoring systems',
    get_started: 'Get Started',
    alerts_subtitle: 'Stay informed about farm health and security',
    simulate_alert: 'Simulate Alert',
    alert_history: 'Alert History',
    date: 'Date',
    type: 'Type',
    message: 'Message',
    status: 'Status',
    compliance_subtitle: 'Track your biosecurity compliance measures',
    poultry_block_a: 'Poultry Block A',
    last_vaccination: 'Last vaccination: 2024-01-10',
    up_to_date: 'Up to Date',
    pig_pen_1: 'Pig Pen 1',
    due_soon: 'Due soon: 2024-01-20',
    poultry_block_b: 'Poultry Block B',
    overdue: 'Overdue: 2024-01-05',
    feeding_area: 'Feeding Area',
    completed_today: 'Completed: Today',
    completed: 'Completed',
    water_systems: 'Water Systems',
    scheduled_tomorrow: 'Scheduled: Tomorrow',
    scheduled: 'Scheduled',
    waste_management: 'Waste Management',
    due_this_week: 'Due: This week',
    pending: 'Pending',
    visitor_protocols: 'Visitor Protocols',
    equipment_sanitization: 'Equipment Sanitization',
    quarantine_procedures: 'Quarantine Procedures',
    training_records: 'Training Records',
    biosecurity_basics: 'Biosecurity Basics',
    completed_jan_10: 'Completed: Jan 10, 2024',
    certified: 'Certified',
    in_progress: 'In Progress',
    vaccination_protocols: 'Vaccination Protocols',
    scheduled_feb_1: 'Scheduled: Feb 1, 2024',
    analytics: 'Analytics',
    analytics_subtitle: 'Summary of farm health and engagement',
    total_alerts: 'Total Alerts',
    points: 'Points',
    community: 'Community',
    community_subtitle: 'Share insights and experiences',
    your_message: 'Your message',
    post: 'Post',
    take_quiz: 'Take Quiz',
    earn_points_hint: 'Earn points for correct answers',
    save_assessment: 'Save Assessment',
    download_guidelines: 'Download Guidelines',
    export_json: 'Export JSON',
    export_csv: 'Export CSV',
    export_compliance_csv: 'Export Compliance CSV',
  },
  es: {
    dashboard: 'Panel de Control',
    risk_assessment: 'Evaluación de Riesgo',
    training: 'Capacitación',
    alerts: 'Alertas',
    compliance: 'Cumplimiento',
    welcome: 'Bienvenido a FarmGuard',
    dashboard_subtitle: 'Su sistema integral de gestión de bioseguridad',
    total_animals: 'Total de Animales',
    risk_score: 'Puntuación de Riesgo',
    active_alerts: 'Alertas Activas',
    compliance_rate: 'Tasa de Cumplimiento',
    recent_alerts: 'Alertas Recientes',
    compliance_status: 'Estado de Cumplimiento',
    high_risk_alert: 'Alto Riesgo: Entrada no autorizada de vehículo',
    vaccination_due: 'Vacunación pendiente para Bloque A de Aves',
    hygiene_check: 'Verificación de higiene completada',
    vaccination_records: 'Registros de Vacunación',
    hygiene_checks: 'Verificaciones de Higiene',
    biosecurity_protocols: 'Protocolos de Bioseguridad',
    training_completion: 'Finalización de Capacitación',
    risk_assessment_subtitle:
      'Evalúe el nivel de riesgo de bioseguridad de su granja',
    farm_location: 'Ubicación de la Granja',
    rural: 'Rural (Aislada)',
    suburban: 'Suburbana',
    urban: 'Urbana',
    animal_type: 'Tipo de Animal',
    pigs: 'Cerdos',
    poultry: 'Aves de Corral',
    mixed: 'Mixto',
    animal_count: 'Cantidad de Animales',
    hygiene_practices: 'Prácticas de Higiene',
    excellent: 'Excelente',
    good: 'Bueno',
    fair: 'Regular',
    poor: 'Pobre',
    vaccination_status: 'Estado de Vacunación',
    up_to_date: 'Actualizado',
    partial: 'Parcial',
    outdated: 'Desactualizado',
    none: 'Ninguno',
    biosecurity_measures: 'Medidas de Bioseguridad',
    comprehensive: 'Integral',
    basic: 'Básico',
    minimal: 'Mínimo',
    calculate_risk: 'Calcular Nivel de Riesgo',
    risk_assessment_result: 'Resultado de Evaluación de Riesgo',
    training_subtitle: 'Aprenda sobre las mejores prácticas de bioseguridad',
    hygiene_basics: 'Fundamentos de Higiene',
    hygiene_basics_desc:
      'Prácticas esenciales de higiene para trabajadores agrícolas',
    watch_video: 'Ver Video',
    biosecurity_protocols_desc:
      'Comprensión e implementación de medidas de bioseguridad',
    start_training: 'Iniciar Capacitación',
    vaccination_guide: 'Guía de Vacunación',
    vaccination_guide_desc:
      'Procedimientos y cronogramas de vacunación adecuados',
    learn_more: 'Aprender Más',
    disease_prevention: 'Prevención de Enfermedades',
    disease_prevention_desc:
      'Identificación y prevención de enfermedades comunes',
    view_guide: 'Ver Guía',
    emergency_procedures: 'Procedimientos de Emergencia',
    emergency_procedures_desc: 'Qué hacer en caso de brote de enfermedad',
    read_procedures: 'Leer Procedimientos',
    monitoring_systems: 'Sistemas de Monitoreo',
    monitoring_systems_desc: 'Configuración de sistemas de monitoreo efectivos',
    get_started: 'Comenzar',
    alerts_subtitle:
      'Manténgase informado sobre la salud y seguridad de la granja',
    simulate_alert: 'Simular Alerta',
    alert_history: 'Historial de Alertas',
    date: 'Fecha',
    type: 'Tipo',
    message: 'Mensaje',
    status: 'Estado',
    compliance_subtitle: 'Rastree sus medidas de cumplimiento de bioseguridad',
    poultry_block_a: 'Bloque A de Aves',
    last_vaccination: 'Última vacunación: 10-01-2024',
    up_to_date: 'Actualizado',
    pig_pen_1: 'Corral de Cerdos 1',
    due_soon: 'Próximo: 20-01-2024',
    poultry_block_b: 'Bloque B de Aves',
    overdue: 'Vencido: 05-01-2024',
    feeding_area: 'Área de Alimentación',
    completed_today: 'Completado: Hoy',
    completed: 'Completado',
    water_systems: 'Sistemas de Agua',
    scheduled_tomorrow: 'Programado: Mañana',
    scheduled: 'Programado',
    waste_management: 'Gestión de Residuos',
    due_this_week: 'Vence: Esta semana',
    pending: 'Pendiente',
    visitor_protocols: 'Protocolos de Visitantes',
    equipment_sanitization: 'Sanitización de Equipos',
    quarantine_procedures: 'Procedimientos de Cuarentena',
    training_records: 'Registros de Capacitación',
    biosecurity_basics: 'Fundamentos de Bioseguridad',
    completed_jan_10: 'Completado: 10 de enero, 2024',
    certified: 'Certificado',
    in_progress: 'En Progreso',
    vaccination_protocols: 'Protocolos de Vacunación',
    scheduled_feb_1: 'Programado: 1 de febrero, 2024',
  },
  fr: {
    dashboard: 'Tableau de Bord',
    risk_assessment: 'Évaluation des Risques',
    training: 'Formation',
    alerts: 'Alertes',
    compliance: 'Conformité',
    welcome: 'Bienvenue à FarmGuard',
    dashboard_subtitle: 'Votre système complet de gestion de la biosécurité',
    total_animals: 'Total des Animaux',
    risk_score: 'Score de Risque',
    active_alerts: 'Alertes Actives',
    compliance_rate: 'Taux de Conformité',
    recent_alerts: 'Alertes Récentes',
    compliance_status: 'Statut de Conformité',
    high_risk_alert: 'Risque Élevé: Entrée non autorisée de véhicule',
    vaccination_due: 'Vaccination due pour le Bloc A de Volaille',
    hygiene_check: "Vérification d'hygiène terminée",
    vaccination_records: 'Dossiers de Vaccination',
    hygiene_checks: "Vérifications d'Hygiène",
    biosecurity_protocols: 'Protocoles de Biosécurité',
    training_completion: 'Achèvement de la Formation',
    risk_assessment_subtitle:
      'Évaluez le niveau de risque de biosécurité de votre ferme',
    farm_location: 'Emplacement de la Ferme',
    rural: 'Rural (Isolé)',
    suburban: 'Suburbain',
    urban: 'Urbain',
    animal_type: "Type d'Animal",
    pigs: 'Cochons',
    poultry: 'Volaille',
    mixed: 'Mixte',
    animal_count: "Nombre d'Animaux",
    hygiene_practices: "Pratiques d'Hygiène",
    excellent: 'Excellent',
    good: 'Bon',
    fair: 'Correct',
    poor: 'Pauvre',
    vaccination_status: 'Statut de Vaccination',
    up_to_date: 'À Jour',
    partial: 'Partiel',
    outdated: 'Obsolète',
    none: 'Aucun',
    biosecurity_measures: 'Mesures de Biosécurité',
    comprehensive: 'Complet',
    basic: 'Basique',
    minimal: 'Minimal',
    calculate_risk: 'Calculer le Niveau de Risque',
    risk_assessment_result: "Résultat de l'Évaluation des Risques",
    training_subtitle: 'Apprenez les meilleures pratiques de biosécurité',
    hygiene_basics: "Bases de l'Hygiène",
    hygiene_basics_desc:
      "Pratiques d'hygiène essentielles pour les travailleurs agricoles",
    watch_video: 'Regarder la Vidéo',
    biosecurity_protocols_desc:
      'Compréhension et mise en œuvre des mesures de biosécurité',
    start_training: 'Commencer la Formation',
    vaccination_guide: 'Guide de Vaccination',
    vaccination_guide_desc:
      'Procédures et calendriers de vaccination appropriés',
    learn_more: 'En Savoir Plus',
    disease_prevention: 'Prévention des Maladies',
    disease_prevention_desc:
      'Identification et prévention des maladies courantes',
    view_guide: 'Voir le Guide',
    emergency_procedures: "Procédures d'Urgence",
    emergency_procedures_desc: "Que faire en cas d'épidémie",
    read_procedures: 'Lire les Procédures',
    monitoring_systems: 'Systèmes de Surveillance',
    monitoring_systems_desc:
      'Mise en place de systèmes de surveillance efficaces',
    get_started: 'Commencer',
    alerts_subtitle: 'Restez informé sur la santé et la sécurité de la ferme',
    simulate_alert: 'Simuler une Alerte',
    alert_history: 'Historique des Alertes',
    date: 'Date',
    type: 'Type',
    message: 'Message',
    status: 'Statut',
    compliance_subtitle: 'Suivez vos mesures de conformité à la biosécurité',
    poultry_block_a: 'Bloc A de Volaille',
    last_vaccination: 'Dernière vaccination: 10-01-2024',
    up_to_date: 'À Jour',
    pig_pen_1: 'Enclos de Cochons 1',
    due_soon: 'Bientôt dû: 20-01-2024',
    poultry_block_b: 'Bloc B de Volaille',
    overdue: 'En Retard: 05-01-2024',
    feeding_area: "Zone d'Alimentation",
    completed_today: "Terminé: Aujourd'hui",
    completed: 'Terminé',
    water_systems: "Systèmes d'Eau",
    scheduled_tomorrow: 'Programmé: Demain',
    scheduled: 'Programmé',
    waste_management: 'Gestion des Déchets',
    due_this_week: 'Dû: Cette semaine',
    pending: 'En Attente',
    visitor_protocols: 'Protocoles de Visiteurs',
    equipment_sanitization: 'Sanitisation des Équipements',
    quarantine_procedures: 'Procédures de Quarantaine',
    training_records: 'Dossiers de Formation',
    biosecurity_basics: 'Bases de Biosécurité',
    completed_jan_10: 'Terminé: 10 janvier, 2024',
    certified: 'Certifié',
    in_progress: 'En Cours',
    vaccination_protocols: 'Protocoles de Vaccination',
    scheduled_feb_1: 'Programmé: 1er février, 2024',
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    risk_assessment: 'जोखिम मूल्यांकन',
    training: 'प्रशिक्षण',
    alerts: 'चेतावनी',
    compliance: 'अनुपालन',
    welcome: 'फ़ार्मगार्ड में आपका स्वागत है',
    dashboard_subtitle: 'आपकी व्यापक जैवसुरक्षा प्रबंधन प्रणाली',
    total_animals: 'कुल पशु',
    risk_score: 'जोखिम स्कोर',
    active_alerts: 'सक्रिय चेतावनियाँ',
    compliance_rate: 'अनुपालन दर',
    recent_alerts: 'हाल की चेतावनियाँ',
    compliance_status: 'अनुपालन स्थिति',
    high_risk_alert: 'उच्च जोखिम: अनधिकृत वाहन प्रवेश',
    vaccination_due: 'मुर्गी ब्लॉक A के लिए टीकाकरण देय',
    hygiene_check: 'स्वच्छता जांच पूरी हुई',
    vaccination_records: 'टीकाकरण रिकॉर्ड',
    hygiene_checks: 'स्वच्छता जांच',
    biosecurity_protocols: 'जैवसुरक्षा प्रोटोकॉल',
    training_completion: 'प्रशिक्षण पूर्णता',
    risk_assessment_subtitle:
      'अपने फ़ार्म के जैवसुरक्षा जोखिम स्तर का मूल्यांकन करें',
    farm_location: 'फ़ार्म स्थान',
    rural: 'ग्रामीण (अलग)',
    suburban: 'उपनगरीय',
    urban: 'शहरी',
    animal_type: 'पशु प्रकार',
    pigs: 'सूअर',
    poultry: 'मुर्गी',
    mixed: 'मिश्रित',
    animal_count: 'पशुओं की संख्या',
    hygiene_practices: 'स्वच्छता अभ्यास',
    excellent: 'उत्कृष्ट',
    good: 'अच्छा',
    fair: 'ठीक',
    poor: 'कमज़ोर',
    vaccination_status: 'टीकाकरण स्थिति',
    up_to_date: 'अप-टू-डेट',
    partial: 'आंशिक',
    outdated: 'पुराना',
    none: 'कोई नहीं',
    biosecurity_measures: 'जैवसुरक्षा उपाय',
    comprehensive: 'व्यापक',
    basic: 'मूल',
    minimal: 'न्यूनतम',
    calculate_risk: 'जोखिम स्तर 계산 करें',
    risk_assessment_result: 'जोखिम मूल्यांकन परिणाम',
    training_subtitle: 'जैवसुरक्षा सर्वोत्तम प्रथाओं के बारे में जानें',
    hygiene_basics: 'स्वच्छता मूल बातें',
    hygiene_basics_desc: 'फार्म श्रमिकों के लिए आवश्यक स्वच्छता अभ्यास',
    watch_video: 'वीडियो देखें',
    biosecurity_protocols_desc: 'जैवसुरक्षा उपायों की समझ और कार्यान्वयन',
    start_training: 'प्रशिक्षण शुरू करें',
    vaccination_guide: 'टीकाकरण मार्गदर्शिका',
    vaccination_guide_desc: 'उचित टीकाकरण प्रक्रियाएँ और समय-सारिणी',
    learn_more: 'और जानें',
    disease_prevention: 'रोग की रोकथाम',
    disease_prevention_desc: 'सामान्य रोगों की पहचान और रोकथाम',
    view_guide: 'मार्गदर्शिका देखें',
    emergency_procedures: 'आपातकालीन प्रक्रियाएँ',
    emergency_procedures_desc: 'रोग प्रकोप की स्थिति में क्या करें',
    read_procedures: 'प्रक्रियाएँ पढ़ें',
    monitoring_systems: 'निगरानी प्रणालियाँ',
    monitoring_systems_desc: 'प्रभावी निगरानी प्रणालियाँ स्थापित करना',
    get_started: 'शुरू करें',
    alerts_subtitle: 'फ़ार्म स्वास्थ्य और सुरक्षा के बारे में सूचित रहें',
    simulate_alert: 'चेतावनी उत्पन्न करें',
    alert_history: 'चेतावनी इतिहास',
    date: 'तिथि',
    type: 'प्रकार',
    message: 'संदेश',
    status: 'स्थिति',
    compliance_subtitle: 'अपनी जैवसुरक्षा अनुपालन उपायों को ट्रैक करें',
    poultry_block_a: 'मुर्गी ब्लॉक A',
    last_vaccination: 'अंतिम टीकाकरण: 2024-01-10',
    pig_pen_1: 'सूअर बाड़ा 1',
    due_soon: 'शीघ्र देय: 2024-01-20',
    poultry_block_b: 'मुर्गी ब्लॉक B',
    overdue: 'अतिदेय: 2024-01-05',
    feeding_area: 'खुराक क्षेत्र',
    completed_today: 'पूर्ण: आज',
    completed: 'पूर्ण',
    water_systems: 'जल प्रणालियाँ',
    scheduled_tomorrow: 'निर्धारित: कल',
    scheduled: 'निर्धारित',
    waste_management: 'कचरा प्रबंधन',
    due_this_week: 'देय: इस सप्ताह',
    pending: 'लंबित',
    visitor_protocols: 'आगंतुक प्रोटोकॉल',
    equipment_sanitization: 'उपकरण स्वच्छीकरण',
    quarantine_procedures: 'क्वारंटीन प्रक्रियाएँ',
    training_records: 'प्रशिक्षण रिकॉर्ड',
    biosecurity_basics: 'जैवसुरक्षा मूल बातें',
    completed_jan_10: 'पूर्ण: 10 जनवरी, 2024',
    certified: 'प्रमाणित',
    in_progress: 'प्रगति पर',
    vaccination_protocols: 'टीकाकरण प्रोटोकॉल',
    scheduled_feb_1: 'निर्धारित: 1 फ़रवरी, 2024',
  },
  mr: {
    dashboard: 'डॅशबोर्ड',
    risk_assessment: 'जोखीम मूल्यांकन',
    training: 'प्रशिक्षण',
    alerts: 'अलर्ट',
    compliance: 'अनुपालन',
    welcome: 'फार्मगार्डमध्ये आपले स्वागत आहे',
    dashboard_subtitle: 'तुमची सर्वसमावेशक जैवसुरक्षा व्यवस्थापन प्रणाली',
    total_animals: 'एकूण प्राणी',
    risk_score: 'जोखीम गुण',
    active_alerts: 'सक्रिय अलर्ट',
    compliance_rate: 'अनुपालन दर',
    recent_alerts: 'अलीकडील अलर्ट',
    compliance_status: 'अनुपालन स्थिती',
    high_risk_alert: 'उच्च जोखीम: अनधिकृत वाहन प्रवेश',
    vaccination_due: 'कुक्कुट ब्लॉक A साठी लसीकरण देय',
    hygiene_check: 'स्वच्छता तपासणी पूर्ण',
    vaccination_records: 'लसीकरण नोंदी',
    hygiene_checks: 'स्वच्छता तपासणी',
    biosecurity_protocols: 'जैवसुरक्षा प्रोटोकॉल',
    training_completion: 'प्रशिक्षण पूर्णता',
    risk_assessment_subtitle:
      'तुमच्या शेताचा जैवसुरक्षा जोखीम स्तर मूल्यांकित करा',
    farm_location: 'शेताचे स्थान',
    rural: 'ग्रामीण (वेगळे)',
    suburban: 'उपनगरीय',
    urban: 'शहरी',
    animal_type: 'प्राण्याचा प्रकार',
    pigs: 'डुक्कर',
    poultry: 'कुक्कुट',
    mixed: 'मिश्रित',
    animal_count: 'प्राण्यांची संख्या',
    hygiene_practices: 'स्वच्छता पद्धती',
    excellent: 'उत्कृष्ट',
    good: 'चांगले',
    fair: 'समाधानकारक',
    poor: 'कमकुवत',
    vaccination_status: 'लसीकरण स्थिती',
    up_to_date: 'अप-टू-डेट',
    partial: 'आंशिक',
    outdated: 'जुने',
    none: 'काही नाही',
    biosecurity_measures: 'जैवसुरक्षा उपाय',
    comprehensive: 'सर्वसमावेशक',
    basic: 'मूलभूत',
    minimal: 'किमान',
    calculate_risk: 'जोखीम स्तर मोजा',
    risk_assessment_result: 'जोखीम मूल्यांकन निकाल',
    training_subtitle: 'जैवसुरक्षेतील सर्वोत्तम पद्धती शिका',
    hygiene_basics: 'स्वच्छतेची मूलतत्त्वे',
    hygiene_basics_desc: 'शेतमजुरांसाठी आवश्यक स्वच्छता पद्धती',
    watch_video: 'व्हिडिओ पाहा',
    biosecurity_protocols_desc: 'जैवसुरक्षा उपाय समजून घ्या आणि अंमलात आणा',
    start_training: 'प्रशिक्षण सुरू करा',
    vaccination_guide: 'लसीकरण मार्गदर्शक',
    vaccination_guide_desc: 'योग्य लसीकरण प्रक्रिया आणि वेळापत्रक',
    learn_more: 'अधिक जाणून घ्या',
    disease_prevention: 'रोग प्रतिबंध',
    disease_prevention_desc: 'सामान्य रोगांची ओळख आणि प्रतिबंध',
    view_guide: 'मार्गदर्शक पाहा',
    emergency_procedures: 'आपत्कालीन प्रक्रिया',
    emergency_procedures_desc: 'रोगाचा उद्रेक झाल्यास काय करावे',
    read_procedures: 'प्रक्रिया वाचा',
    monitoring_systems: 'निगराणी प्रणाली',
    monitoring_systems_desc: 'प्रभावी निगराणी प्रणाली स्थापित करणे',
    get_started: 'सुरू करा',
    alerts_subtitle: 'शेत आरोग्य आणि सुरक्षिततेबद्दल माहिती ठेवा',
    simulate_alert: 'अलर्ट तयार करा',
    alert_history: 'अलर्ट इतिहास',
    date: 'तारीख',
    type: 'प्रकार',
    message: 'संदेश',
    status: 'स्थिती',
    compliance_subtitle: 'तुमचे जैवसुरक्षा अनुपालन उपाय ट्रॅक करा',
    poultry_block_a: 'कुक्कुट ब्लॉक A',
    last_vaccination: 'शेवटचे लसीकरण: 2024-01-10',
    pig_pen_1: 'डुक्कर शेड 1',
    due_soon: 'लवकरच देय: 2024-01-20',
    poultry_block_b: 'कुक्कुट ब्लॉक B',
    overdue: 'अतिदेय: 2024-01-05',
    feeding_area: 'खान्याचा भाग',
    completed_today: 'पूर्ण: आज',
    completed: 'पूर्ण',
    water_systems: 'पाणी प्रणाली',
    scheduled_tomorrow: 'नियोजित: उद्या',
    scheduled: 'नियोजित',
    waste_management: 'कचरा व्यवस्थापन',
    due_this_week: 'देय: या आठवड्यात',
    pending: 'प्रलंबित',
    visitor_protocols: 'पर्यटक प्रोटोकॉल',
    equipment_sanitization: 'उपकरणांचे स्वच्छीकरण',
    quarantine_procedures: 'क्वारंटाईन प्रक्रिया',
    training_records: 'प्रशिक्षण नोंदी',
    biosecurity_basics: 'जैवसुरक्षा मूलतत्त्वे',
    completed_jan_10: 'पूर्ण: 10 जानेवारी, 2024',
    certified: 'प्रमाणित',
    in_progress: 'प्रगतीत',
    vaccination_protocols: 'लसीकरण प्रोटोकॉल',
    scheduled_feb_1: 'नियोजित: 1 फेब्रुवारी, 2024',
  },
  ta: {
    dashboard: 'டாஷ்போர்டு',
    risk_assessment: 'அபாய மதிப்பீடு',
    training: 'பயிற்சி',
    alerts: 'எச்சரிக்கைகள்',
    compliance: 'இணக்கம்',
    welcome: 'பார்ம்கார்டுக்கு வரவேற்கிறோம்',
    dashboard_subtitle: 'உங்கள் முழுமையான உயிர் பாதுகாப்பு மேலாண்மை அமைப்பு',
    total_animals: 'மொத்த விலங்குகள்',
    risk_score: 'அபாய மதிப்பெண்',
    active_alerts: 'செயலில் உள்ள எச்சரிக்கைகள்',
    compliance_rate: 'இணக்க விகிதம்',
    recent_alerts: 'சமீபத்திய எச்சரிக்கைகள்',
    compliance_status: 'இணக்க நிலை',
    high_risk_alert: 'அதிக அபாயம்: அனுமதியற்ற வாகன நுழைவு',
    vaccination_due: 'கோழி பிரிவு A-க்கு தடுப்பூசி நிலுவை',
    hygiene_check: 'சுகாதாரச் சோதனை நிறைவு',
    vaccination_records: 'தடுப்பூசி பதிவுகள்',
    hygiene_checks: 'சுகாதாரச் சோதனைகள்',
    biosecurity_protocols: 'உயிர் பாதுகாப்பு நடைமுறைகள்',
    training_completion: 'பயிற்சி நிறைவு',
    risk_assessment_subtitle:
      'உங்கள் பண்ணையின் உயிர் பாதுகாப்பு அபாய நிலையை மதிப்பிடவும்',
    farm_location: 'பண்ணை இடம்',
    rural: 'கிராமப்புறம் (தனித்த)',
    suburban: 'சுர்பர்பன்',
    urban: 'நகர்ப்புறம்',
    animal_type: 'விலங்கு வகை',
    pigs: 'பன்றிகள்',
    poultry: 'கோழி',
    mixed: 'கலப்பு',
    animal_count: 'விலங்குகள் எண்ணிக்கை',
    hygiene_practices: 'சுகாதார நடைமுறைகள்',
    excellent: 'சிறந்த',
    good: 'நல்ல',
    fair: 'சராசரி',
    poor: 'மோசமான',
    vaccination_status: 'தடுப்பூசி நிலை',
    up_to_date: 'நவீனம்',
    partial: 'பகுதி',
    outdated: 'பழைய',
    none: 'யாரும் இல்லை',
    biosecurity_measures: 'உயிர் பாதுகாப்பு நடவடிக்கைகள்',
    comprehensive: 'முழுமையான',
    basic: 'அடிப்படை',
    minimal: 'குறைந்த',
    calculate_risk: 'அபாய நிலை கணக்கிட',
    risk_assessment_result: 'அபாய மதிப்பீடு முடிவு',
    training_subtitle: 'உயிர் பாதுகாப்பு சிறந்த நடைமுறைகளை அறிக',
    hygiene_basics: 'சுகாதார அடிப்படை',
    hygiene_basics_desc:
      'பண்ணை தொழிலாளர்களுக்கான அத்தியாவசிய சுகாதார நடைமுறைகள்',
    watch_video: 'வீடியோ பார்க்க',
    biosecurity_protocols_desc:
      'உயிர் பாதுகாப்பு நடவடிக்கைகள் புரிதல் மற்றும் அமலாக்கம்',
    start_training: 'பயிற்சி தொடங்கு',
    vaccination_guide: 'தடுப்பூசி வழிகாட்டி',
    vaccination_guide_desc: 'சரியான தடுப்பூசி செயல்முறைகள் மற்றும் அட்டவணைகள்',
    learn_more: 'மேலும் அறிக',
    disease_prevention: 'நோய் தடுப்பு',
    disease_prevention_desc:
      'பொதுவான நோய்களை அடையாளம் காணுதல் மற்றும் தடுப்பது',
    view_guide: 'வழிகாட்டி பார்க்க',
    emergency_procedures: 'அவசர நடைமுறைகள்',
    emergency_procedures_desc: 'நோய் பரவல் ஏற்பட்டால் என்ன செய்ய வேண்டும்',
    read_procedures: 'நடைமுறைகள் படிக்க',
    monitoring_systems: 'கண்காணிப்பு அமைப்புகள்',
    monitoring_systems_desc: 'திறன் வாய்ந்த கண்காணிப்பு அமைப்புகளை அமைத்தல்',
    get_started: 'தொடங்கு',
    alerts_subtitle:
      'பண்ணை ஆரோக்கியம் மற்றும் பாதுகாப்பைப் பற்றி தகவல் பெறுங்கள்',
    simulate_alert: 'எச்சரிக்கை உருவாக்க',
    alert_history: 'எச்சரிக்கை வரலாறு',
    date: 'தேதி',
    type: 'வகை',
    message: 'செய்தி',
    status: 'நிலை',
    compliance_subtitle:
      'உங்கள் உயிர் பாதுகாப்பு இணக்க நடவடிக்கைகளை கண்காணிக்க',
    poultry_block_a: 'கோழி பிரிவு A',
    last_vaccination: 'கடைசி தடுப்பூசி: 2024-01-10',
    pig_pen_1: 'பன்றி கூடம் 1',
    due_soon: 'விரைவில் நிலுவை: 2024-01-20',
    poultry_block_b: 'கோழி பிரிவு B',
    overdue: 'காலாவதி: 2024-01-05',
    feeding_area: 'உணவு பகுதி',
    completed_today: 'நிறைவு: இன்று',
    completed: 'நிறைவு',
    water_systems: 'நீர் அமைப்புகள்',
    scheduled_tomorrow: 'திட்டமிடப்பட்டது: நாளை',
    scheduled: 'திட்டமிடப்பட்டது',
    waste_management: 'கழிவு மேலாண்மை',
    due_this_week: 'நிலுவை: இந்த வாரம்',
    pending: 'நிலுவையில்',
    visitor_protocols: 'வருகையாளர் நடைமுறைகள்',
    equipment_sanitization: 'உபகரண சுத்திகரிப்பு',
    quarantine_procedures: 'தனிமைப்படுத்தல் நடைமுறைகள்',
    training_records: 'பயிற்சி பதிவுகள்',
    biosecurity_basics: 'உயிர் பாதுகாப்பு அடிப்படைகள்',
    completed_jan_10: 'நிறைவு: ஜனவரி 10, 2024',
    certified: 'சான்றளிக்கப்பட்ட',
    in_progress: 'நடைபெற்று வருகிறது',
    vaccination_protocols: 'தடுப்பூசி நடைமுறைகள்',
    scheduled_feb_1: 'திட்டமிடப்பட்டது: பிப்ரவரி 1, 2024',
  },
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
  initializeApp()
  setupEventListeners()
  loadInitialData()
  startAlertSimulation()
  restoreStateFromStorage()
  setupScrollHeaderElevation()
  setupAnalyticsCountUpOnView()
  initializeThemeFromStorage()
  // Ensure sidebar is positioned correctly relative to nav on large screens
  try {
    adjustSidebarForNav()
  } catch (e) {}
})

// Initialize the application
function initializeApp() {
  console.log('Initializing Digital Farm Management Portal...')

  // Set initial language
  updateLanguage('en')

  // Show dashboard by default
  showSection('dashboard')

  // Initialize risk assessment form
  initializeRiskAssessment()

  // Load initial alerts
  loadInitialAlerts()

  // Initialize points badge
  updatePointsDisplay()
}

// Setup event listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault()
      const section = this.getAttribute('href').substring(1)
      showSection(section)
      updateActiveNav(this)
    })
  })

  // Language selector
  document
    .getElementById('languageSelect')
    .addEventListener('change', function () {
      updateLanguage(this.value)
    })

  // Risk assessment form
  document
    .getElementById('riskAssessmentForm')
    .addEventListener('submit', function (e) {
      e.preventDefault()
      calculateRiskLevel()
    })

  // Simulate alert button
  document
    .getElementById('simulateAlert')
    .addEventListener('click', function () {
      simulateNewAlert()
    })

  // Training buttons
  document.querySelectorAll('#training button').forEach((button) => {
    button.addEventListener('click', function () {
      showTrainingModal(this)
    })
  })

  // Mobile sidebar toggle
  const menuToggle = document.getElementById('menuToggle')
  const sidebar = document.querySelector('aside.sidebar')
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('open')
    })
  }
  // Close sidebar on nav click (mobile only)
  document.querySelectorAll('aside.sidebar .nav-item').forEach((item) => {
    item.addEventListener('click', function () {
      if (window.innerWidth <= 768 && sidebar) {
        sidebar.classList.remove('open')
      }
    })
  })

  // Quiz trigger
  const takeQuizBtn = document.getElementById('takeQuiz')
  if (takeQuizBtn) {
    takeQuizBtn.addEventListener('click', openQuizModal)
  }

  // Dark mode toggle
  const themeToggle = document.getElementById('themeToggle')
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme)
  }

  // Alerts search
  const alertsSearch = document.getElementById('alertsSearch')
  if (alertsSearch) {
    alertsSearch.addEventListener('input', () => updateAlertsDisplay())
  }

  // Risk Assessment: save & download guidelines
  const saveBtn = document.getElementById('saveAssessment')
  const downloadGuidelinesBtn = document.getElementById('downloadGuidelines')
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      if (!riskAssessmentData || !riskAssessmentData.lastResult) {
        showNotification('No assessment to save', 'warning')
        return
      }
      persistStateToStorage()
      showNotification('Assessment saved', 'success')
    })
  }
  if (downloadGuidelinesBtn) {
    downloadGuidelinesBtn.addEventListener('click', () => {
      const text = generateCustomizedGuidelinesText()
      downloadBlob(text, 'text/plain', 'biosecurity-guidelines.txt')
    })
  }

  // Analytics exports
  const exportJSONBtn = document.getElementById('exportAnalyticsJSON')
  const exportCSVBtn = document.getElementById('exportAnalyticsCSV')
  if (exportJSONBtn)
    exportJSONBtn.addEventListener('click', exportAnalyticsJSON)
  if (exportCSVBtn) exportCSVBtn.addEventListener('click', exportAnalyticsCSV)

  // Compliance export
  const exportComplianceBtn = document.getElementById('exportComplianceCSV')
  if (exportComplianceBtn)
    exportComplianceBtn.addEventListener('click', exportComplianceCSV)

  // Community posting
  const postBtn = document.getElementById('postMessage')
  const messageInput = document.getElementById('communityMessage')
  if (postBtn && messageInput) {
    postBtn.addEventListener('click', function () {
      const text = messageInput.value.trim()
      if (!text) return
      const post = {
        id: Date.now(),
        text,
        author: 'You',
        time: new Date().toISOString(),
      }
      communityPosts.unshift(post)
      messageInput.value = ''
      persistStateToStorage()
      renderCommunityFeed()
      showNotification('Post added', 'success')
    })
  }

  // Community search
  const communitySearch = document.getElementById('communitySearch')
  if (communitySearch) {
    communitySearch.addEventListener('input', renderCommunityFeed)
  }
}

// Show specific section
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach((section) => {
    section.classList.add('hidden')
  })

  // Show selected section
  const targetSection = document.getElementById(sectionId)
  if (targetSection) {
    targetSection.classList.remove('hidden')
    targetSection.classList.add('animate-section')
    setTimeout(() => targetSection.classList.remove('animate-section'), 450)

    // Scroll page so the section starts from the top (account for sticky nav)
    try {
      const nav = document.querySelector('nav')
      const navHeight = nav ? nav.offsetHeight : 0
      const rect = targetSection.getBoundingClientRect()
      const top = rect.top + window.scrollY - navHeight - 8 // small offset
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    } catch (e) {
      // fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Reset any internal scroll within the target section
    try {
      targetSection.scrollTop = 0
    } catch (e) {}

    // Focus the section for keyboard users (improve accessibility)
    try {
      const prevTab = targetSection.getAttribute('tabindex')
      targetSection.setAttribute('tabindex', '-1')
      targetSection.focus({ preventScroll: true })
      // remove tabindex if it didn't exist before
      if (prevTab === null) targetSection.removeAttribute('tabindex')
    } catch (e) {}

    // Update URL hash without causing a jump
    try {
      history.replaceState(null, '', '#' + sectionId)
    } catch (e) {}
  }
}

// Update active navigation
function updateActiveNav(activeItem) {
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.remove('active')
  })
  activeItem.classList.add('active')
}

// Language management
function translateWithFallback(lang, key) {
  if (translations[lang] && translations[lang][key])
    return translations[lang][key]
  if (translations['en'] && translations['en'][key])
    return translations['en'][key]
  return undefined
}

function updateLanguage(lang) {
  currentLanguage = lang

  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate')
    const value = translateWithFallback(lang, key)
    if (value !== undefined) element.textContent = value
  })

  // Update select options
  updateSelectOptions(lang)
}

// Update select options based on language
function updateSelectOptions(lang) {
  const selects = document.querySelectorAll('select')
  selects.forEach((select) => {
    Array.from(select.options).forEach((option) => {
      const key = option.getAttribute('data-translate')
      if (key) {
        const value = translateWithFallback(lang, key)
        if (value !== undefined) option.textContent = value
      }
    })
  })
}

// Risk Assessment Functions
function initializeRiskAssessment() {
  // Set default values
  document.getElementById('location').value = 'rural'
  document.getElementById('animalType').value = 'pigs'
  document.getElementById('hygiene').value = 'good'
  document.getElementById('vaccination').value = 'up_to_date'
  document.getElementById('biosecurity').value = 'basic'
}

function calculateRiskLevel() {
  const formData = {
    location: document.getElementById('location').value,
    animalType: document.getElementById('animalType').value,
    animalCount: parseInt(document.getElementById('animalCount').value) || 0,
    hygiene: document.getElementById('hygiene').value,
    vaccination: document.getElementById('vaccination').value,
    biosecurity: document.getElementById('biosecurity').value,
  }

  // Calculate risk score (0-100)
  let riskScore = 0

  // Location risk (0-20 points)
  const locationRisk = {
    rural: 5,
    suburban: 10,
    urban: 20,
  }
  riskScore += locationRisk[formData.location] || 10

  // Animal count risk (0-20 points)
  if (formData.animalCount > 5000) riskScore += 20
  else if (formData.animalCount > 2000) riskScore += 15
  else if (formData.animalCount > 500) riskScore += 10
  else riskScore += 5

  // Hygiene risk (0-20 points)
  const hygieneRisk = {
    excellent: 0,
    good: 5,
    fair: 10,
    poor: 20,
  }
  riskScore += hygieneRisk[formData.hygiene] || 10

  // Vaccination risk (0-20 points)
  const vaccinationRisk = {
    up_to_date: 0,
    partial: 10,
    outdated: 15,
    none: 20,
  }
  riskScore += vaccinationRisk[formData.vaccination] || 10

  // Biosecurity risk (0-20 points)
  const biosecurityRisk = {
    comprehensive: 0,
    basic: 10,
    minimal: 15,
    none: 20,
  }
  riskScore += biosecurityRisk[formData.biosecurity] || 10

  // Determine risk level
  let riskLevel, riskColor, recommendations

  if (riskScore <= 30) {
    riskLevel = 'Low Risk'
    riskColor = 'green'
    recommendations = [
      'Maintain current biosecurity measures',
      'Continue regular monitoring',
      'Keep vaccination schedules up to date',
    ]
  } else if (riskScore <= 60) {
    riskLevel = 'Medium Risk'
    riskColor = 'yellow'
    recommendations = [
      'Improve hygiene practices',
      'Review vaccination protocols',
      'Enhance biosecurity measures',
      'Increase monitoring frequency',
    ]
  } else {
    riskLevel = 'High Risk'
    riskColor = 'red'
    recommendations = [
      'Implement comprehensive biosecurity protocols',
      'Immediate vaccination review and update',
      'Enhanced hygiene training for staff',
      'Consider professional biosecurity consultation',
      'Increase monitoring to daily basis',
    ]
  }

  // Display results
  displayRiskResults(riskLevel, riskColor, riskScore, recommendations)

  // Update dashboard risk score
  updateDashboardRiskScore(riskLevel)

  // Persist last assessment
  riskAssessmentData.lastInput = formData
  riskAssessmentData.lastResult = {
    riskLevel,
    riskColor,
    riskScore,
    recommendations,
  }
  persistStateToStorage()
}

function displayRiskResults(riskLevel, riskColor, score, recommendations) {
  const resultDiv = document.getElementById('riskResult')
  const levelDiv = document.getElementById('riskLevel')
  const recommendationsDiv = document.getElementById('riskRecommendations')

  // Create risk level display
  levelDiv.innerHTML = `
        <div class="text-center">
            <div class="inline-flex items-center px-6 py-3 rounded-lg mb-4 ${getRiskClass(
              riskColor
            )}">
                <i class="fas fa-shield-alt text-2xl mr-3"></i>
                <div>
                    <h4 class="text-xl font-bold">${riskLevel}</h4>
                    <p class="text-sm">Risk Score: ${score}/100</p>
                </div>
            </div>
        </div>
    `

  // Create recommendations
  recommendationsDiv.innerHTML = `
        <h4 class="font-semibold text-gray-800 mb-3">Recommendations:</h4>
        <ul class="space-y-2">
            ${recommendations
              .map(
                (rec) =>
                  `<li class="flex items-start"><i class="fas fa-arrow-right text-green-500 mr-2 mt-1"></i><span>${rec}</span></li>`
              )
              .join('')}
        </ul>
    `

  // Show results
  resultDiv.classList.remove('hidden')
}

function generateCustomizedGuidelinesText() {
  const last = riskAssessmentData.lastResult
  const input = riskAssessmentData.lastInput || {}
  const lines = []
  lines.push('FarmGuard Biosecurity Guidelines')
  lines.push('')
  if (last) {
    lines.push(`Risk Level: ${last.riskLevel} (Score: ${last.riskScore}/100)`)
  }
  lines.push(
    `Location: ${input.location || '-'}  | Animal Type: ${
      input.animalType || '-'
    }  | Count: ${input.animalCount || 0}`
  )
  lines.push(
    `Hygiene: ${input.hygiene || '-'} | Vaccination: ${
      input.vaccination || '-'
    } | Biosecurity: ${input.biosecurity || '-'}`
  )
  lines.push('')
  lines.push('Recommended Actions:')
  ;(last?.recommendations || []).forEach((r, i) => lines.push(`${i + 1}. ${r}`))
  lines.push('')
  lines.push('Additional Guidance:')
  if (input.hygiene === 'fair' || input.hygiene === 'poor')
    lines.push('- Introduce daily sanitation logs and periodic audits.')
  if (input.vaccination !== 'up_to_date')
    lines.push(
      '- Align vaccination schedules with veterinary guidance immediately.'
    )
  if (input.biosecurity !== 'comprehensive')
    lines.push(
      '- Implement controlled entry, PPE, footbaths, and visitor logs.'
    )
  lines.push('- Train staff quarterly on hygiene and outbreak protocols.')
  return lines.join('\n')
}

function downloadBlob(content, mime, filename) {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

function exportAnalyticsJSON() {
  const data = {
    alerts,
    points: userPoints,
    lastAssessment: riskAssessmentData.lastResult || null,
  }
  downloadBlob(
    JSON.stringify(data, null, 2),
    'application/json',
    'analytics.json'
  )
}

function exportAnalyticsCSV() {
  const rows = [
    ['metric', 'value'],
    ['total_alerts', alerts.length],
    ['active_alerts', alerts.filter((a) => a.status === 'active').length],
    ['points', userPoints],
  ]
  const csv = rows.map((r) => r.join(',')).join('\n')
  downloadBlob(csv, 'text/csv', 'analytics.csv')
}

function exportComplianceCSV() {
  // Demo export from visible compliance items
  const rows = [['section', 'item', 'status', 'detail']]
  document
    .querySelectorAll(
      '#compliance .bg-white .flex.items-center.justify-between'
    )
    .forEach((block) => {
      const item = block.querySelector('p.font-medium')?.textContent || ''
      const detail = block.querySelector('p.text-sm')?.textContent || ''
      const status = block.querySelector('span')?.textContent || ''
      rows.push(['compliance', item, status, detail])
    })
  const csv = rows
    .map((r) =>
      r.map((v) => '"' + (v || '').replace(/"/g, '""') + '"').join(',')
    )
    .join('\n')
  downloadBlob(csv, 'text/csv', 'compliance.csv')
}

function getRiskClass(color) {
  const classes = {
    green: 'bg-green-100 text-green-800 border border-green-300',
    yellow: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    red: 'bg-red-100 text-red-800 border border-red-300',
  }
  return classes[color] || classes['yellow']
}

function updateDashboardRiskScore(riskLevel) {
  const riskScoreElement = document.getElementById('riskScore')
  riskScoreElement.textContent = riskLevel

  // Update color based on risk level
  riskScoreElement.className = 'text-2xl font-bold text-gray-900'
  if (riskLevel === 'Low Risk') {
    riskScoreElement.classList.add('text-green-600')
  } else if (riskLevel === 'Medium Risk') {
    riskScoreElement.classList.add('text-yellow-600')
  } else {
    riskScoreElement.classList.add('text-red-600')
  }
}

// Alert Management
function loadInitialAlerts() {
  alerts = [
    {
      id: 1,
      type: 'security',
      severity: 'high',
      message: 'Unauthorized vehicle entry detected',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      status: 'active',
    },
    {
      id: 2,
      type: 'health',
      severity: 'medium',
      message: 'Vaccination due for Poultry Block A',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      status: 'active',
    },
    {
      id: 3,
      type: 'maintenance',
      severity: 'low',
      message: 'Hygiene check completed',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      status: 'resolved',
    },
  ]

  updateAlertsDisplay()
  persistStateToStorage()
}

function updateAlertsDisplay() {
  const alertsList = document.getElementById('alertsList')
  const activeAlerts = alerts.filter((alert) => alert.status === 'active')
  const q = (document.getElementById('alertsSearch')?.value || '').toLowerCase()
  const filtered = activeAlerts.filter(
    (a) =>
      a.message.toLowerCase().includes(q) ||
      a.type.toLowerCase().includes(q) ||
      a.severity.toLowerCase().includes(q)
  )

  alertsList.innerHTML = filtered
    .map(
      (alert) => `
        <div class="flex items-center p-3 ${getAlertClass(
          alert.severity
        )} rounded">
            <i class="fas ${getAlertIcon(alert.severity)} mr-3"></i>
            <div class="flex-1">
                <p class="font-medium text-gray-800">${alert.message}</p>
                <p class="text-sm text-gray-600">${formatTimeAgo(
                  alert.timestamp
                )}</p>
            </div>
            <button onclick="dismissAlert(${
              alert.id
            })" class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `
    )
    .join('')

  // Update alert count in dashboard
  updateAlertCount(activeAlerts.length)

  // Update analytics
  updateAnalytics()
}

function getAlertClass(severity) {
  const classes = {
    high: 'bg-red-50 border-l-4 border-red-500',
    medium: 'bg-yellow-50 border-l-4 border-yellow-500',
    low: 'bg-blue-50 border-l-4 border-blue-500',
  }
  return classes[severity] || classes['low']
}

function getAlertIcon(severity) {
  const icons = {
    high: 'fa-exclamation-circle text-red-500',
    medium: 'fa-clock text-yellow-500',
    low: 'fa-info-circle text-blue-500',
  }
  return icons[severity] || icons['low']
}

function formatTimeAgo(timestamp) {
  const now = new Date()
  const diff = now - timestamp
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(hours / 24)

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else {
    return 'Just now'
  }
}

function simulateNewAlert() {
  const alertTypes = ['security', 'health', 'maintenance', 'equipment']
  const severities = ['high', 'medium', 'low']
  const messages = [
    'Temperature sensor malfunction detected',
    'Feed contamination risk identified',
    'Water system pressure drop',
    'Security camera offline',
    'Vaccination schedule reminder',
    'Equipment maintenance due',
    'Visitor protocol violation',
    'Waste management system alert',
  ]

  const newAlert = {
    id: Date.now(),
    type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
    timestamp: new Date(),
    status: 'active',
  }

  alerts.unshift(newAlert)
  updateAlertsDisplay()
  persistStateToStorage()

  // Show notification
  showNotification('New alert generated!', 'info')
}

function dismissAlert(alertId) {
  const alertIndex = alerts.findIndex((alert) => alert.id === alertId)
  if (alertIndex !== -1) {
    alerts[alertIndex].status = 'dismissed'
    updateAlertsDisplay()
    showNotification('Alert dismissed', 'success')
    persistStateToStorage()
  }
}

function updateAlertCount(count) {
  // Update the active alerts count in dashboard
  const alertCountElements = document.querySelectorAll(
    '.text-2xl.font-bold.text-gray-900'
  )
  if (alertCountElements.length >= 3) {
    alertCountElements[2].textContent = count
  }
}

// Training Functions
function showTrainingModal(button) {
  const trainingTitle = button
    .closest('.bg-white')
    .querySelector('h3').textContent
  const trainingDesc = button
    .closest('.bg-white')
    .querySelector('p').textContent

  // Create modal
  const modal = document.createElement('div')
  modal.className =
    'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
  modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-semibold">${trainingTitle}</h3>
                <button onclick="closeTrainingModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <p class="text-gray-600 mb-4">${trainingDesc}</p>
            <div class="bg-gray-100 rounded-lg p-4 mb-4">
                <div class="flex items-center justify-center h-32 bg-gray-200 rounded">
                    <i class="fas fa-play-circle text-4xl text-gray-400"></i>
                </div>
            </div>
            <div class="flex space-x-3">
                <button onclick="startTraining()" class="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                    Start Training
                </button>
                <button onclick="closeTrainingModal()" class="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                    Close
                </button>
            </div>
        </div>
    `

  document.body.appendChild(modal)
}

function closeTrainingModal() {
  const modal = document.querySelector('.fixed.inset-0')
  if (modal) {
    modal.remove()
  }
}

function startTraining() {
  showNotification(
    'Training started! Complete the modules to earn certification.',
    'success'
  )
  closeTrainingModal()
}

// Quiz and Gamification
function openQuizModal() {
  const modal = document.createElement('div')
  modal.className =
    'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
  modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 class="text-lg font-semibold mb-4">Quick Quiz</h3>
            <p class="text-gray-700 mb-4">Which practice reduces disease spread the most?</p>
            <div class="space-y-2">
                <button class="w-full border px-4 py-2 rounded hover:bg-gray-50" data-correct="false">Feeding animals more often</button>
                <button class="w-full border px-4 py-2 rounded hover:bg-gray-50" data-correct="true">Strict hygiene and sanitation</button>
                <button class="w-full border px-4 py-2 rounded hover:bg-gray-50" data-correct="false">Skipping vaccinations</button>
            </div>
            <div class="mt-4 flex justify-end space-x-2">
                <button class="px-4 py-2 bg-gray-200 rounded" id="quizClose">Close</button>
            </div>
        </div>
    `
  document.body.appendChild(modal)
  modal.querySelectorAll('button[data-correct]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const correct = btn.getAttribute('data-correct') === 'true'
      if (correct) {
        addPoints(10)
        showNotification('Correct! +10 points', 'success')
      } else {
        showNotification('Try again!', 'warning')
      }
    })
  })
  modal
    .querySelector('#quizClose')
    .addEventListener('click', () => modal.remove())
}

function addPoints(points) {
  userPoints = (userPoints || 0) + points
  updatePointsDisplay()
  updateAnalytics()
  persistStateToStorage()
}

function updatePointsDisplay() {
  const badge = document.getElementById('pointsBadge')
  if (badge) badge.textContent = `${userPoints || 0} pts`
}

// Analytics
function updateAnalytics() {
  const totalAlertsEl = document.getElementById('analyticsTotalAlerts')
  const activeAlertsEl = document.getElementById('analyticsActiveAlerts')
  const pointsEl = document.getElementById('analyticsPoints')
  if (totalAlertsEl)
    animateCount(
      totalAlertsEl,
      parseInt(totalAlertsEl.textContent) || 0,
      alerts.length,
      500
    )
  if (activeAlertsEl)
    animateCount(
      activeAlertsEl,
      parseInt(activeAlertsEl.textContent) || 0,
      alerts.filter((a) => a.status === 'active').length,
      500
    )
  if (pointsEl)
    animateCount(
      pointsEl,
      parseInt(pointsEl.textContent) || 0,
      userPoints || 0,
      500
    )
}

// Community
function renderCommunityFeed() {
  const feed = document.getElementById('communityFeed')
  if (!feed) return
  const q = (
    document.getElementById('communitySearch')?.value || ''
  ).toLowerCase()
  const list = (communityPosts || []).filter(
    (p) =>
      p.text.toLowerCase().includes(q) || p.author.toLowerCase().includes(q)
  )
  feed.innerHTML = list
    .map(
      (post) => `
        <div class="bg-white rounded-lg shadow-md p-4">
            <div class="flex items-center justify-between mb-2">
                <span class="font-semibold">${post.author}</span>
                <span class="text-xs text-gray-500">${new Date(
                  post.time
                ).toLocaleString()}</span>
            </div>
            <p class="text-gray-800">${post.text}</p>
        </div>
    `
    )
    .join('')
}

// Persistence
function persistStateToStorage() {
  try {
    const data = {
      alerts,
      userPoints,
      communityPosts,
      riskAssessmentData,
    }
    localStorage.setItem('farmguard_state', JSON.stringify(data))
  } catch (e) {
    console.warn('Persist failed', e)
  }
}

function restoreStateFromStorage() {
  try {
    const raw = localStorage.getItem('farmguard_state')
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.alerts))
      alerts = data.alerts.map((a) => ({
        ...a,
        timestamp: new Date(a.timestamp),
      }))
    if (typeof data.userPoints === 'number') userPoints = data.userPoints
    if (Array.isArray(data.communityPosts)) communityPosts = data.communityPosts
    if (data.riskAssessmentData && typeof data.riskAssessmentData === 'object')
      riskAssessmentData = data.riskAssessmentData
    updateAlertsDisplay()
    updatePointsDisplay()
    renderCommunityFeed()
    updateAnalytics()
  } catch (e) {
    console.warn('Restore failed', e)
  }
}

// Official alerts scaffold
async function fetchOfficialAlerts() {
  try {
    // Placeholder URL; replace with official API endpoint
    const resp = await fetch('official-alerts.json', { cache: 'no-store' })
    if (!resp.ok) return
    const data = await resp.json()
    const mapped = (data.alerts || []).map((d, idx) => ({
      id: Date.now() + idx,
      type: d.type || 'health',
      severity: d.severity || 'medium',
      message: d.message || 'Official alert',
      timestamp: new Date(d.timestamp || Date.now()),
      status: 'active',
    }))
    alerts = mapped.concat(alerts)
    updateAlertsDisplay()
    persistStateToStorage()
  } catch (e) {
    console.log('Official alerts fetch failed', e)
  }
}

// Periodically try to fetch official alerts
setInterval(fetchOfficialAlerts, 5 * 60 * 1000)

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div')
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${getNotificationClass(
    type
  )}`
  notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${getNotificationIcon(type)} mr-3"></i>
            <span>${message}</span>
        </div>
    `

  document.body.appendChild(notification)

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.remove()
  }, 3000)
}

function getNotificationClass(type) {
  const classes = {
    success: 'bg-green-100 text-green-800 border border-green-300',
    error: 'bg-red-100 text-red-800 border border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    info: 'bg-blue-100 text-blue-800 border border-blue-300',
  }
  return classes[type] || classes['info']
}

function getNotificationIcon(type) {
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle',
  }
  return icons[type] || icons['info']
}

// Alert Simulation
function startAlertSimulation() {
  // Simulate random alerts every 30-60 seconds
  setInterval(() => {
    if (Math.random() < 0.3) {
      // 30% chance
      simulateNewAlert()
    }
  }, 30000 + Math.random() * 30000)
}

// Load initial data
function loadInitialData() {
  // Simulate loading farm data
  console.log('Loading farm data...')

  // Update dashboard with real-time data
  updateDashboardData()
}

function updateDashboardData() {
  // Simulate real-time updates
  setInterval(() => {
    // Update compliance rates with small variations
    const complianceElements = document.querySelectorAll(
      '.bg-green-500, .bg-yellow-500'
    )
    complianceElements.forEach((element) => {
      const currentWidth = parseInt(element.style.width)
      const variation = Math.random() * 2 - 1 // -1 to 1
      const newWidth = Math.max(0, Math.min(100, currentWidth + variation))
      element.style.width = newWidth + '%'
    })
  }, 5000)
}

// Utility functions
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Header elevation on scroll
function setupScrollHeaderElevation() {
  const nav = document.querySelector('nav')
  if (!nav) return
  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) nav.classList.add('elevated')
    else nav.classList.remove('elevated')
  })

  // Adjust the sidebar top offset and height based on nav height for large screens
  function adjustSidebarForNav() {
    const sidebar = document.querySelector('aside.sidebar')
    const nav = document.querySelector('nav')
    if (!sidebar || !nav) return
    const navHeight = nav.offsetHeight || 0
    if (window.innerWidth >= 769) {
      // Apply inline styles to guarantee correct sticky behavior
      sidebar.style.position = 'sticky'
      sidebar.style.top = navHeight + 'px'
      sidebar.style.height = `calc(100vh - ${navHeight}px)`
      sidebar.style.left = '0'
      sidebar.style.overflowY = 'auto'
    } else {
      // Clear inline styles so mobile CSS/off-canvas behavior works
      sidebar.style.position = ''
      sidebar.style.top = ''
      sidebar.style.height = ''
      sidebar.style.left = ''
      sidebar.style.overflowY = ''
    }
  }

  // Update sidebar positioning when the window is resized
  window.addEventListener('resize', () => {
    try {
      adjustSidebarForNav()
    } catch (e) {}
  })
}

// Theme (dark / light) handling
function setTheme(theme) {
  const html = document.documentElement
  const themeToggleBtn = document.getElementById('themeToggle')
  if (theme === 'dark') {
    html.classList.add('dark')
    try {
      localStorage.setItem('theme', 'dark')
    } catch (e) {}
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'
  } else {
    html.classList.remove('dark')
    try {
      localStorage.setItem('theme', 'light')
    } catch (e) {}
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark')
  setTheme(isDark ? 'light' : 'dark')
}

function initializeThemeFromStorage() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
      return
    }
  } catch (e) {
    // ignore
  }

  // Fallback to system preference
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

// Count-up animation
function animateCount(element, from, to, duration) {
  if (from === to) {
    element.textContent = to.toString()
    return
  }
  const start = performance.now()
  function tick(now) {
    const p = Math.min(1, (now - start) / duration)
    const val = Math.round(from + (to - from) * p)
    element.textContent = val.toString()
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

// Trigger analytics count-up when visible
function setupAnalyticsCountUpOnView() {
  const analyticsSection = document.getElementById('analytics')
  if (!('IntersectionObserver' in window) || !analyticsSection) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateAnalytics()
        }
      })
    },
    { threshold: 0.2 }
  )
  observer.observe(analyticsSection)
}

function formatTime(date) {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Export functions for global access
window.showSection = showSection
window.updateLanguage = updateLanguage
window.calculateRiskLevel = calculateRiskLevel
window.simulateNewAlert = simulateNewAlert
window.dismissAlert = dismissAlert
window.showTrainingModal = showTrainingModal
window.closeTrainingModal = closeTrainingModal
window.startTraining = startTraining
