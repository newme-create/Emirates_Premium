import { 
  Shipment, 
  ServiceItem, 
  PricingPlan, 
  MaritimePricingCategory, 
  Agency, 
  ConfirmedDelivery,
  PhonePricingItem,
  MerchandiseCategoryItem,
  CompanyValue,
  ComplementaryService
} from '../types';

export const MOCK_SHIPMENTS: Record<string, Shipment> = {
  'EP2505CN23789': {
    code: 'EP2505CN23789',
    status: 'En cours de livraison',
    statusType: 'transit',
    origin: 'Guangzhou Hub (Chine)',
    destination: 'Douala, Cameroun',
    weight: '35 kg',
    volume: '0,25 m³',
    service: 'Fret aérien Express',
    transportMode: 'Aérien',
    proofImage: './assets/delivery-courier.jpg',
    lastUpdate: '28 Mai 2025 - 16:20',
    location: 'En transit — Espace Aérien Afrique',
    estimatedDelivery: '05 Juin 2025',
    referenceClient: 'EP-2025-0412',
    packagesCount: 3,
    declaredValue: '420 000 XAF',
    timeline: [
      { step: 'Réception des marchandises', date: '25 Mai 2025 - 10:24', location: 'Guangzhou, Chine', done: true },
      { step: 'Contrôle qualité & comptage', date: '26 Mai 2025 - 14:32', location: 'Guangzhou, Chine', done: true },
      { step: 'Emballage protecteur & scellage', date: '27 Mai 2025 - 09:15', location: 'Guangzhou, Chine', done: true },
      { step: 'Consolidation & Vol Cargo', date: '28 Mai 2025 - 16:20', location: 'En vol transcontinental', done: true },
      { step: 'Dédouanement & Livraison finale', date: '05 Juin 2025 (Estimé)', location: 'Douala, Cameroun', done: false, current: true }
    ]
  },
  'EP9988CN00123': {
    code: 'EP9988CN00123',
    status: 'Super Express 24h - Livré',
    statusType: 'delivered',
    origin: 'Aéroport Guangzhou CAN',
    destination: 'Aéroport Yaoundé NSI',
    weight: '45 kg',
    volume: '0,18 m³',
    service: 'Fret Aérien Super Express 24h',
    transportMode: 'Aérien',
    proofImage: './assets/delivery-electronics-yaounde.jpg',
    lastUpdate: '10 Septembre 2026 - 15:45',
    location: 'Boutique Tech, Yaoundé',
    estimatedDelivery: 'Livré le 10 Septembre 2026',
    referenceClient: 'EP-2026-9041',
    packagesCount: 2,
    declaredValue: '1 250 000 XAF',
    timeline: [
      { step: 'Réception Colis Urgent', date: '09 Sept 2026 - 16:00', location: 'Guangzhou, Chine', done: true },
      { step: 'Contrôle Sécurité Aérienne', date: '09 Sept 2026 - 19:30', location: 'Guangzhou, Chine', done: true },
      { step: 'Emballage Protecteur Renforcé', date: '09 Sept 2026 - 21:00', location: 'Guangzhou, Chine', done: true },
      { step: 'Embarquement Vol Cargo Prioritaire', date: '10 Sept 2026 - 04:00', location: 'CAN Airport', done: true },
      { step: 'En Vol vers Yaoundé', date: '10 Sept 2026 - 08:15', location: 'En vol', done: true },
      { step: 'Livraison Express Confirmée', date: '10 Sept 2026 - 15:45', location: 'Boutique Tech, Yaoundé', done: true, current: true }
    ]
  },
  'EP3344CN77610': {
    code: 'EP3344CN77610',
    status: 'Arrivé au Port — Dédouané & Livré',
    statusType: 'delivered',
    origin: 'Guangzhou Port (Chine)',
    destination: 'Douala Port (Cameroun)',
    weight: '1 820 kg',
    volume: '14,5 CBM',
    service: 'Fret Maritime Groupage CBM',
    transportMode: 'Maritime',
    proofImage: './assets/delivery-textiles-douala.jpg',
    lastUpdate: '12 Septembre 2026 - 11:30',
    location: 'Terminal Port Autonome de Douala',
    estimatedDelivery: 'Livré & déchargé avec succès',
    referenceClient: 'EP-MAR-2025-088',
    packagesCount: 24,
    declaredValue: '6 800 000 XAF',
    timeline: [
      { step: 'Réception Hub Guangzhou', date: '15 Août 2026', location: 'Guangzhou', done: true },
      { step: 'Empotage Conteneur 40FT', date: '18 Août 2026', location: 'Port Guangzhou', done: true },
      { step: 'Traversée Maritime', date: '22 Août - 08 Sept 2026', location: 'Océan Atlantique', done: true },
      { step: 'Arrivée Port de Douala', date: '09 Sept 2026', location: 'Port Douala', done: true },
      { step: 'Dédouanement Effectué & Remise Colis', date: '12 Sept 2026', location: 'Entrepôt Douala', done: true, current: true }
    ]
  },
  'EP7722CN99104': {
    code: 'EP7722CN99104',
    status: 'Véhicule Dédouané & Remis au Client',
    statusType: 'delivered',
    origin: 'Guangzhou Automobile Hub',
    destination: 'Yaoundé (Siège)',
    weight: '2 150 kg',
    volume: '14 m³',
    service: 'Automobile Premium & Dédouanement',
    transportMode: 'Maritime',
    proofImage: './assets/delivery-suv-cameroon.jpg',
    lastUpdate: '08 Septembre 2026 - 14:00',
    location: 'Agence Siège, Yaoundé',
    estimatedDelivery: 'Clés remises en main propre',
    referenceClient: 'EP-AUTO-2025-03',
    packagesCount: 1,
    declaredValue: '28 000 000 XAF',
    timeline: [
      { step: 'Achat & Inspection Technique 120 points', date: '01 Août 2026', location: 'Chine', done: true },
      { step: 'Préparation & Scellés sécurisés', date: '05 Août 2026', location: 'Guangzhou', done: true },
      { step: 'Embarquement Navire RORO', date: '10 Août 2026', location: 'Port Guangzhou', done: true },
      { step: 'Traversée Maritime vers Douala', date: '12 Août - 02 Sept 2026', location: 'En mer', done: true },
      { step: 'Dédouanement & Remise officielle des clés', date: '08 Sept 2026', location: 'Agence Yaoundé', done: true, current: true }
    ]
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fret-aerien',
    num: '01',
    title: 'Fret aérien',
    shortDesc: 'La solution la plus rapide pour vos marchandises critiques et colis d\'affaires.',
    bullets: [
      'Super Express : 24 h porte-à-porte',
      'Express : 48 à 72 h avec départs réguliers',
      'Standard économique pour colis non urgents',
      'Vols cargo hebdomadaires sécurisés'
    ],
    category: 'fret',
    imagePlaceholderGradient: 'from-blue-900 to-indigo-950',
    iconName: 'Plane'
  },
  {
    id: 'fret-maritime',
    num: '02',
    title: 'Fret maritime',
    shortDesc: 'La méthode économique par excellence pour les gros volumes, machines et marchandises lourdes.',
    bullets: [
      'Groupage CBM au mètre cube accessible',
      'Conteneurs complets 20FT et 40FT sécurisés',
      'Gestion complète du dédouanement portuaire',
      'Idéal pour cartons industriels, outillages et stocks'
    ],
    category: 'fret',
    imagePlaceholderGradient: 'from-sky-950 to-blue-900',
    iconName: 'Ship'
  },
  {
    id: 'sourcing',
    num: '03',
    title: 'Sourcing Chine',
    shortDesc: 'Achetez en Chine sans intermédiaire avec l\'accompagnement de nos experts bilingues.',
    bullets: [
      'Recherche et qualification de fournisseurs vérifiés',
      'Négociation directe des prix en usine (OEM / ODM)',
      'Contrôle qualité rigoureux et audit pré-embarquement',
      'Consolidation de multiples fournisseurs en un seul envoi'
    ],
    category: 'commerce',
    imagePlaceholderGradient: 'from-amber-950 to-slate-900',
    iconName: 'SearchCheck'
  },
  {
    id: 'automobile',
    num: '04',
    title: 'Automobile Premium',
    shortDesc: 'Importation sécurisée de véhicules neufs et d\'occasion récente depuis la Chine.',
    bullets: [
      'Achat de véhicules électriques, hybrides et thermiques',
      'Inspection technique complète avant expédition',
      'Transport maritime sécurisé en conteneur ou navire RORO',
      'Assistance administrative et dédouanement clé en main'
    ],
    category: 'commerce',
    imagePlaceholderGradient: 'from-slate-900 to-amber-950',
    iconName: 'Car'
  },
  {
    id: 'trucks',
    num: '05',
    title: 'Trucks & Equipment',
    shortDesc: 'Solutions lourdes pour engins de chantier, camions industriels et pièces de rechange.',
    bullets: [
      'Camions bennes, tracteurs routiers et remorques',
      'Engins de travaux publics (pelles, bulldozers, chargeuses)',
      'Pièces détachées d\'origine certifiées',
      'Logistique hors-gabarit et transport exceptionnel'
    ],
    category: 'logistique',
    imagePlaceholderGradient: 'from-stone-900 to-blue-950',
    iconName: 'Truck'
  },
  {
    id: 'emballage',
    num: '06',
    title: 'Emballage sécurisé',
    shortDesc: 'Conditionnement professionnel pour préserver vos articles des chocs et aléas climatiques.',
    bullets: [
      'Caisses en bois renforcées pour matériel fragile',
      'Plastique bulle multicouche, cornières et cerclage métallique',
      'Scellés numérotés infalsifiables et étiquetage bilingue',
      'Protection anti-humidité et anticorrosion'
    ],
    category: 'logistique',
    imagePlaceholderGradient: 'from-amber-900 to-slate-950',
    iconName: 'PackageCheck'
  },
  {
    id: 'porte-a-porte',
    num: '07',
    title: 'Livraison porte-à-porte',
    shortDesc: 'Du fournisseur en Chine directement jusqu\'à votre boutique ou domicile au Cameroun.',
    bullets: [
      'Collecte à l\'usine ou au marché en Chine',
      'Gestion complète des formalités douanières',
      'Flotte de camionnettes de distribution à Douala et Yaoundé',
      'Acheminement sécurisé vers Bafoussam, Bamenda, Garoua, etc.'
    ],
    category: 'logistique',
    imagePlaceholderGradient: 'from-blue-900 to-sky-950',
    iconName: 'Home'
  },
  {
    id: 'consulting',
    num: '08',
    title: 'Money Exchange & Consulting',
    shortDesc: 'Sécurisez vos transactions financières Chine-Afrique et optimisez vos circuits d\'importation.',
    bullets: [
      'Règlement sécurisé des fournisseurs chinois en RMB (Yuan) et USD',
      'Conversion et paiement rapide sans blocage bancaire',
      'Conseils stratégiques pour débuter ou optimiser vos imports',
      'Accompagnement juridique et commercial'
    ],
    category: 'commerce',
    imagePlaceholderGradient: 'from-amber-900 to-slate-900',
    iconName: 'Coins'
  }
];

export const PRICING_AIR_PLANS: PricingPlan[] = [
  {
    id: 'super-express',
    name: 'Super Express 24H',
    badgeNumber: '1',
    colorBadge: '🔴',
    popular: true,
    speedTag: 'Priorité Maximale • 24H',
    subtitle: 'Marchandises ultra urgentes avec priorité absolue sur les vols cargo.',
    price: '15 000 XAF',
    pricePerKg: 15000,
    unit: '/ kg',
    delay: 'Livraison en 24H',
    condition: 'Marchandises urgentes • Priorité maximale',
    features: [
      'Livraison garantie en 24H',
      'Marchandises urgentes',
      'Priorité maximale au départ et à l\'embarquement',
      'Départ immédiat dès réception au hub de Guangzhou',
      'Suivi prioritaire en temps réel'
    ],
    imageGradient: 'from-red-500/20 to-amber-900/40'
  },
  {
    id: 'express',
    name: 'Service Express',
    badgeNumber: '2',
    colorBadge: '🔵',
    speedTag: 'Dès 5 KG • 48-72H',
    subtitle: 'La formule idéale et rapide pour colis normaux et colis sensibles.',
    price: '12 000 XAF',
    pricePerKg: 12000,
    unit: '/ kg',
    delay: 'Délai : 48 à 72H',
    condition: 'À partir de 5 KG • Colis normal et sensible',
    features: [
      'Délai : 48 à 72H',
      'Tarif applicable à partir de 5 KG',
      'Colis normal et colis sensible acceptés',
      'Suivi direct à chaque étape du vol',
      'Assistance dédiée en continu'
    ],
    imageGradient: 'from-blue-500/20 to-blue-950/40'
  },
  {
    id: 'standard',
    name: 'Service Standard',
    badgeNumber: '3',
    colorBadge: '🟢',
    speedTag: 'Économique dès 100 KG',
    subtitle: 'La meilleure formule économique pour vos réapprovisionnements réguliers.',
    price: '8 500 XAF',
    pricePerKg: 8500,
    unit: '/ kg',
    delay: 'Délai : 7 à 14 jours ouvrables',
    condition: 'Colis normal sans liquide ni appareil, sans batterie incorporée • Dès 100 KG',
    features: [
      'Délai : 7 à 14 jours ouvrables',
      'Applicable à partir de 100 KG',
      'Colis normal sans liquide et sans appareil',
      'Sans batterie incorporée',
      'Notification WhatsApp dès disponibilité à l\'agence'
    ],
    imageGradient: 'from-emerald-500/20 to-slate-900/40'
  },
  {
    id: 'special',
    name: 'Service Spécial',
    badgeNumber: '4',
    colorBadge: '🟠',
    speedTag: 'Spécial Batteries & Liquides',
    subtitle: 'Dédié aux colis sensibles, liquides, batteries incorporées et articles MARC UP.',
    price: '9 000 XAF',
    pricePerKg: 9000,
    unit: '/ kg',
    delay: 'Délai : 10 à 20 jours ouvrables',
    condition: 'Colis sensible, liquide, batterie incorporée, MARC UP • Négociable dès 100 KG',
    features: [
      'Délai : 10 à 20 jours ouvrables',
      'Spécifique colis sensibles, liquides & gels',
      'Appareils avec batterie incorporée acceptés',
      'Produits de marque (MARC UP)',
      'Tarif négociable à partir de 100 KG'
    ],
    imageGradient: 'from-orange-500/20 to-slate-900/40'
  }
];

export const PHONE_PRICING_DATA: PhonePricingItem[] = [
  {
    id: 'bas-de-gamme',
    category: 'Bas de gamme / Choroko',
    rate: '5 000 XAF / kg',
    unit: '/ kg',
    priceNumber: 5000,
    isPerUnit: false,
    description: 'Smartphones basiques, téléphones à touches, modèles d\'entrée de gamme et Choroko facturés au poids réel (au kg).'
  },
  {
    id: 'haut-de-gamme',
    category: 'Haut de gamme',
    rate: '10 000 à 25 000 XAF / unité',
    unit: '/ unité',
    minPrice: 10000,
    maxPrice: 25000,
    isPerUnit: true,
    description: 'Smartphones haut de gamme et récents (iPhone, Samsung Galaxy, tablettes haute valeur). Tarif fixé en fonction de la valeur déclarée du téléphone.'
  }
];

export const MERCHANDISE_CATEGORIES: MerchandiseCategoryItem[] = [
  {
    id: 'telephones',
    name: 'Téléphones',
    iconName: 'Smartphone',
    description: 'Smartphones et appareils téléphoniques.'
  },
  {
    id: 'ordinateurs',
    name: 'Ordinateurs',
    iconName: 'Laptop',
    description: 'Ordinateurs portables et équipements informatiques.'
  },
  {
    id: 'vetements',
    name: 'Vêtements',
    iconName: 'Shirt',
    description: 'Vêtements et articles textiles.'
  },
  {
    id: 'cosmetiques',
    name: 'Cosmétiques',
    iconName: 'Sparkles',
    description: 'Produits cosmétiques et de beauté.'
  },
  {
    id: 'pieces-auto',
    name: 'Pièces auto',
    iconName: 'Wrench',
    description: 'Pièces détachées et composants automobiles.'
  }
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: 'rapidite',
    iconName: 'Gem',
    title: 'Rapidité',
    titleZh: '快速',
    description: 'Vols réguliers et départs continus pour respecter rigoureusement vos délais (24h, 48-72h, standard).'
  },
  {
    id: 'fiabilite',
    iconName: 'ThumbsUp',
    title: 'Fiabilité',
    titleZh: '可靠',
    description: 'Cotation transparente sans faux frais au port ou à l\'aéroport, pesée certifiée et tenue des engagements.'
  },
  {
    id: 'securite',
    iconName: 'ShieldCheck',
    title: 'Sécurité',
    titleZh: '安全',
    description: 'Conditionnement renforcé, contrôle strict à Guangzhou et traçabilité inviolable jusqu\'à la remise en main propre.'
  },
  {
    id: 'professionnalisme',
    iconName: 'Users',
    title: 'Professionnalisme',
    titleZh: '专业',
    description: 'Équipes bilingues expérimentées en Chine et au Cameroun, service commercial réactif et écoute client.'
  }
];

export const COMPLEMENTARY_SERVICES: ComplementaryService[] = [
  {
    id: 'fret-aerien',
    title: 'Fret Aérien',
    description: 'Transport de marchandises par voie aérienne.',
    iconName: 'Plane'
  },
  {
    id: 'fret-maritime',
    title: 'Fret Maritime',
    description: 'Transport de marchandises par voie maritime.',
    iconName: 'Ship'
  },
  {
    id: 'dedouanement',
    title: 'Dédouanement Rapide',
    description: 'Accompagnement pour les formalités douanières.',
    iconName: 'FileCheck'
  },
  {
    id: 'porte-a-porte',
    title: 'Livraison Porte-à-Porte',
    description: 'Livraison directement jusqu\'au destinataire.',
    iconName: 'Truck'
  },
  {
    id: 'emballage',
    title: 'Emballage Sécurisé',
    description: 'Emballage adapté et sécurisé des marchandises.',
    iconName: 'Package'
  },
  {
    id: 'assurance',
    title: 'Assurance Transport',
    description: 'Protection/assurance des marchandises pendant le transport.',
    iconName: 'Shield'
  }
];

export const PRICING_MARITIME_CATEGORIES: MaritimePricingCategory[] = [
  {
    id: 'ordinaires',
    category: 'Marchandises ordinaires',
    tariff: '330 000 FCFA / CBM',
    pricePerCbm: 330000,
    examples: 'Vêtements, chaussures, articles ménagers, colis divers',
    badge: 'Standard & Économique',
    badgeColor: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    iconName: 'Package'
  },
  {
    id: 'lourdes',
    category: 'Marchandises lourdes',
    tariff: '360 000 FCFA / CBM',
    pricePerCbm: 360000,
    examples: 'Matériaux de construction, pièces métalliques, équipements industriels',
    badge: 'Haute Densité',
    badgeColor: 'bg-blue-50 text-blue-800 border border-blue-200',
    iconName: 'Boxes'
  },
  {
    id: 'machines',
    category: 'Machines',
    tariff: '380 000 FCFA / CBM',
    pricePerCbm: 380000,
    examples: 'Machines industrielles, équipements BTP, groupes électrogènes',
    badge: 'Industriel & BTP',
    badgeColor: 'bg-amber-50 text-amber-900 border border-amber-200',
    iconName: 'Wrench'
  },
  {
    id: 'batteries-speciaux',
    category: 'Batteries & produits spéciaux',
    tariff: 'Sur devis',
    pricePerCbm: null,
    examples: 'Batteries lithium/plomb, produits chimiques, marchandises sensibles',
    badge: 'Matières sensibles (DG / IMO)',
    badgeColor: 'bg-purple-50 text-purple-800 border border-purple-200',
    iconName: 'Zap'
  }
];

export const AGENCIES_DATA: Agency[] = [
  {
    id: 'guangzhou',
    city: 'Guangzhou',
    country: 'Chine',
    title: 'Hub International de Guangzhou',
    subtitle: 'Point de départ de toutes vos cargaisons Chine - Afrique',
    tag: '🇨🇳 Hub Principal Chine',
    address: 'B6-9-11, Anhua Home Furnishing & Decoration City, Sanyuanli Avenue, Baiyun District, Guangzhou, China.',
    addressZh: '广州市白云区三元里大道华峰城B6-9-11',
    phones: ['+86 132 4970 0362', '+86 132 2641 2565'],
    email: 'Emiratespremium@gmail.com',
    hours: 'Lun – Sam : 09h00 – 19h00 (Heure de Pékin)',
    whatsapp: '8613249700362',
    isHub: true,
    services: [
      'Réception continue des marchandises fournisseurs (1688, Taobao, usines)',
      'Contrôle qualité, comptage & pesée électronique certifiée',
      'Emballage renforcé, cerclage & étiquetage sécurisé',
      'Consolidation groupage aérien (24h, Express, Standard, Spécial) & maritime',
      'Stockage temporaire sécurisé'
    ]
  },
  {
    id: 'douala',
    city: 'Douala',
    country: 'Cameroun',
    title: 'Agence Portuaire & Commerciale — Douala',
    subtitle: 'Au cœur de la capitale économique et du hub maritime',
    tag: '⚓ Agence Douala',
    address: 'Avenue de la Liberté, Face Port Autonome de Douala, Cameroun',
    phones: ['+237 682 283 033'],
    email: 'Emiratespremium@gmail.com',
    hours: 'Lun – Ven : 08h00 – 18h00 | Sam : 08h00 – 14h00',
    whatsapp: '237682283033',
    services: [
      'Réception et dépotage des conteneurs maritimes et vols cargo',
      'Dédouanement rapide marchandises et véhicules',
      'Livraison porte-à-porte dans les zones industrielles et marchés',
      'Transit vers les autres régions et pays de la sous-région'
    ]
  },
  {
    id: 'yaounde',
    city: 'Yaoundé',
    country: 'Cameroun',
    title: 'Agence Siège — Yaoundé',
    subtitle: 'Notre agence principale au Cameroun pour le centre et le grand nord',
    tag: '📍 Agence Yaoundé',
    address: 'Avenue Charles de Gaulle, Immeuble Emirates Premium, Yaoundé, Cameroun',
    phones: ['+237 694 865 935', '+237 678 709 605'],
    email: 'Emiratespremium@gmail.com',
    hours: 'Lun – Ven : 08h00 – 18h00 | Sam : 08h00 – 14h00',
    whatsapp: '237694865935',
    services: [
      'Retrait direct au comptoir sécurisé',
      'Livraison porte-à-porte express à domicile et en boutique',
      'Encaissement sécurisé et service commercial dédié',
      'Acheminement vers les villes de l\'intérieur'
    ]
  },
  {
    id: 'commercial',
    city: 'Service Commercial',
    country: 'Cameroun & Afrique',
    title: 'Service Commercial & Cotations Dédié',
    subtitle: 'Assistance personnalisée, cotations sur mesure et grands comptes',
    tag: '📞 Commercial Cameroun',
    address: 'Permanence commerciale nationale et internationale',
    phones: ['+237 658 688 529'],
    email: 'Emiratespremium@gmail.com',
    hours: '7j / 7 : 07h30 – 21h00',
    whatsapp: '237658688529',
    services: [
      'Conseils personnalisés pour importateurs et commerçants',
      'Cotation immédiate sur devis gros volumes (>100 kg, conteneurs complets)',
      'Accompagnement expédition téléphones et marchandises sensibles',
      'Service client réactif WhatsApp et téléphonique'
    ]
  }
];

export const RECENT_DELIVERIES: ConfirmedDelivery[] = [
  {
    id: '1',
    route: 'GUANGZHOU ➔ DOUALA (PORT)',
    title: 'Lot Conteneur Textiles & Équipements de Boutique',
    details: 'Volume: 14.5 CBM • Fret Maritime Groupage',
    quote: '"Colis arrivé dans les délais impartis au port de Douala, dédouanement parfaitement pris en charge sans tracas."',
    badge: 'Livré à Douala',
    image: './assets/delivery-textiles-douala.jpg',
    date: '12 Septembre 2026',
    client: 'Boutique Élégance & Prêt-à-porter',
    destination: 'Port Autonome, Douala',
    trackingCode: 'EP3344CN77610',
    category: 'Fret Maritime'
  },
  {
    id: '2',
    route: 'GUANGZHOU ➔ YAOUNDÉ',
    title: 'Composants Électroniques & Téléphones Haut de Gamme',
    details: 'Poids: 85 kg • Fret Aérien Super Express',
    quote: '"Expédition reçue en 24h chrono à notre boutique à Yaoundé. Emballage irréprochable et suivi très rassurant."',
    badge: 'Livré en 24h',
    image: './assets/delivery-electronics-yaounde.jpg',
    date: '10 Septembre 2026',
    client: 'TechStore Yaoundé Bastos',
    destination: 'Boutique Tech, Yaoundé',
    trackingCode: 'EP9988CN00123',
    category: 'Super Express Aérien'
  },
  {
    id: '3',
    route: 'CHINE ➔ CAMEROUN',
    title: 'Véhicule SUV de Luxe Importé & Dédouané',
    details: 'Service: Automobile Premium • Remis au client',
    quote: '"Rapport d\'inspection complet en usine avec photos avant expédition. La voiture est arrivée en état neuf absolu."',
    badge: 'Remis au Client',
    image: './assets/delivery-suv-cameroon.jpg',
    date: '08 Septembre 2026',
    client: 'Cabinet M. Kamgang',
    destination: 'Siège Emirates Premium, Yaoundé',
    trackingCode: 'EP7722CN99104',
    category: 'Automobile Premium'
  }
];

export const PROCESS_5_STEPS = [
  {
    num: '01',
    title: 'Contact et inscription',
    desc: 'Vous nous contactez pour votre premier envoi. Nous vous attribuons votre code client unique et vous communiquons l\'adresse exacte de notre hub.',
    badge: 'Code client unique',
    iconName: 'UserCheck'
  },
  {
    num: '02',
    title: 'Réception des marchandises',
    desc: 'Vos fournisseurs expédient vers nos entrepôts de Guangzhou. Dès réception, chaque colis est pesé, mesuré et photographié.',
    badge: 'Contrôle qualité initial',
    iconName: 'PackageOpen'
  },
  {
    num: '03',
    title: 'Contrôle et emballage',
    desc: 'Nous vérifions l\'intégrité des articles, consolidons plusieurs commandes et appliquons un emballage protecteur haute résistance.',
    badge: 'Emballage antichoc',
    iconName: 'ShieldCheck'
  },
  {
    num: '04',
    title: 'Expédition et suivi',
    desc: 'Vos colis décollent ou prennent la mer. Vous suivez chaque étape en temps réel grâce à votre code de suivi et des alertes statutaires.',
    badge: 'Traçabilité satellite',
    iconName: 'PlaneTakeoff'
  },
  {
    num: '05',
    title: 'Livraison finale',
    desc: 'À l\'arrivée au Cameroun, dédouanement fluide et remise en main propre dans nos agences de Douala / Yaoundé ou livraison à votre porte.',
    badge: 'Remise sécurisée',
    iconName: 'Truck'
  }
];
