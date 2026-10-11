// =====================================================
// MAISON MANSOA — CATALOGUE DES CRÉATIONS
// =====================================================
//
// Ce fichier contient uniquement les produits.
//
// Pour ajouter une nouvelle création :
// 1. Créer son dossier dans /images/
// 2. Ajouter ses photos : 01.jpg, 02.jpg, etc.
// 3. Copier une fiche produit ci-dessous
// 4. Modifier ses informations
//
// Identifiants :
// PL  = Protège-livres
// SAC = Sacs
// POC = Pochettes
// TR  = Trousses
//
// =====================================================


const products = [


  // ===================================================
  // PL001 — PROTÈGE-LIVRE FLEURI
  // ===================================================

  {
    id: "PL001",

    nom: "Pochette à livre à fleurs",

    categorie: "protege-livres",

    // Couleur principale : à renseigner lorsque connue.
    couleur: "À fleurs",

    // Conseils d’entretien : à confirmer avec la créatrice.
    entretien: "",

    modele: "protege-livre",

    collection: "femme",

    prix: 18,

    disponible: true,

    pieceUnique: true,

    description:
      "Jolie pochette à livre blanche réalisée artisanalement dans un tissu fleuri aux tons doux, avec une fermeture en tissu vert de qualité pour une finition élégante. Entièrement cousue main, elle protège votre livre dans un sac ou lors de vos déplacements. Convient aux livres de poche jusqu’à 2,5 cm d’épaisseur. Idéale à offrir aux amoureux de lecture.",

    matieres: [],

    tissuPrincipal: "",

    dimensions: {
      longueur: 13,
      hauteur: 21,
      largeur: null
    },

    images: [
      "images/PL001/01.jpg",
      "images/PL001/02.jpg",
      "images/PL001/03.jpg",
      "images/PL001/04.jpg",
      "images/PL001/05.jpg",
      "images/PL001/06.jpg"
    ]
  },


  // ===================================================
  // SAC001 — SAC BESACE À RABAT
  // ===================================================

  {
    id: "SAC001",

    nom: "Sac besace bandoulière taupe et vert d’eau",

    categorie: "sacs",

    // Couleur principale : à renseigner lorsque connue.
    couleur: "",

    // Conseils d’entretien : à confirmer avec la créatrice.
    entretien: "",

    modele: "besace",

    collection: "femme",

    prix: 35,

    disponible: true,

    pieceUnique: true,

    description:
      "Craquez pour ce sac bandoulière unique, entièrement confectionné à la main en France. L’association de suédine taupe et de velours côtelé vert d’eau lui donne un style doux, élégant et intemporel. Son fermoir métallique en forme de cœur sécurise vos effets personnels avec charme. À l’intérieur, une doublure en coton fleuri apporte une note raffinée et une poche plaquée permet de garder téléphone, clés et petits objets à portée de main. Sa bandoulière réglable et sa légèreté le rendent agréable à porter au quotidien. Réalisé avec soin dans l’atelier de la créatrice, ce sac est une pièce unique, idéale pour les journées, balades et sorties.",

    matieres: [
      "Suédine taupe",
      "Velours côtelé vert d’eau",
      "Coton fleuri (doublure)"
    ],

    tissuPrincipal:
      "Suédine taupe",

    dimensions: {
      longueur: 23,
      hauteur: 20,
      largeur: 8
    },

    images: [
      "images/SAC001/01.jpg",
      "images/SAC001/02.jpg",
      "images/SAC001/03.jpg",
      "images/SAC001/04.jpg",
      "images/SAC001/05.jpg",
      "images/SAC001/06.jpg"
    ]
  }
,

  // ===================================================
  // PL002 — POCHETTE À LIVRE VERTE EN VELOURS CÔTELÉ
  // ===================================================
  {
    id: "PL002",
    nom: "Pochette à livre en velours côtelé",
    categorie: "protege-livres",
    couleur: "Vert",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 18,
    disponible: true,
    pieceUnique: true,
    description: "Emportez vos histoires préférées partout avec vous, bien protégées. Cette pochette Maison Mansoa confectionnée à la main protège votre livre ou votre liseuse des petits chocs, frottements et salissures dans votre sac. Réalisée en velours côtelé vert associé à un tissu fleuri, elle convient aux livres de poche jusqu’à environ 2 cm d’épaisseur et aux liseuses dont les dimensions sont adaptées. Une jolie idée cadeau pour les amoureux de lecture. Parce qu’un livre que l’on aime mérite lui aussi sa jolie pochette.",
    matieres: ["Velours côtelé", "Tissu fleuri"],
    tissuPrincipal: "Velours côtelé",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: [
      "images/PL002/01.jpg",
      "images/PL002/02.jpg",
      "images/PL002/03.jpg",
      "images/PL002/04.jpg",
      "images/PL002/05.jpg"
]
  }
,

  // ===================================================
  // PL003 — POCHETTE À LIVRE EN VELOURS CÔTELÉ
  // ===================================================
  {
    id: "PL003",
    nom: "Pochette à livre en velours côtelé",
    categorie: "protege-livres",
    couleur: "Vert d’eau et fleuri multicolore",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 18,
    disponible: false,
    pieceUnique: true,
    description: "Emportez vos histoires préférées partout avec vous, bien protégées. Cette pochette Maison Mansoa confectionnée à la main protège votre livre ou votre liseuse des petits chocs, frottements et salissures dans votre sac. Elle associe un velours côtelé vert d’eau à un tissu fleuri multicolore, avec un joli rabat et un lien à nouer sur le devant. Elle convient aux livres de poche jusqu’à environ 2 cm d’épaisseur et aux liseuses dont les dimensions sont adaptées. Une jolie idée cadeau pour les amoureux de lecture. Parce qu’un livre que l’on aime mérite lui aussi sa jolie pochette.",
    matieres: ["Velours côtelé", "Tissu fleuri"],
    tissuPrincipal: "Velours côtelé",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: [
      "images/PL003/01.jpg",
      "images/PL003/02.jpg",
      "images/PL003/03.jpg",
      "images/PL003/04.jpg",
      "images/PL003/05.jpg",
      "images/PL003/06.jpg"
    ]
  }
,

  // ===================================================
  // PL004 — PROTÈGE-LIVRE EN VELOURS CÔTELÉ ROSE
  // ===================================================
  {
    id: "PL004",
    nom: "Pochette à livre en velours côtelé",
    categorie: "protege-livres",
    couleur: "Rose",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 18,
    disponible: true,
    pieceUnique: true,
    description: "Pochette protège-livre entièrement confectionnée à la main en France par Maison Mansoa. Son extérieur en velours côtelé rose est associé à une jolie doublure en coton turquoise à petites fleurs roses. Le lien permet de maintenir le livre bien en place. Pièce unique, idéale pour protéger votre livre dans votre sac et une jolie idée cadeau pour les amoureux de lecture. Les dimensions indiquées correspondent à la pochette : pensez à vérifier les dimensions de votre livre afin de vous assurer qu’il sera adapté. Une création textile pensée et cousue avec soin.",
    matieres: ["Velours côtelé rose (extérieur)", "Coton fleuri (doublure)"],
    tissuPrincipal: "Velours côtelé rose",
    dimensions: { longueur: 14, hauteur: 22.5, largeur: null },
    images: ["images/PL004/01.jpg", "images/PL004/02.jpg", "images/PL004/03.jpg", "images/PL004/04.jpg", "images/PL004/05.jpg", "images/PL004/06.jpg"]
  }
,

  // SAC002 — SAC BANDOUliÈRE À RAYURES
  {
    id: "SAC002",
    nom: "Sac bandoulière à rayures blanc et rouge, esprit basque",
    categorie: "sacs",
    couleur: "Blanc et rouge",
    entretien: "",
    modele: "bandouliere",
    collection: "femme",
    prix: 35,
    disponible: true,
    pieceUnique: false,
    description: "Un sac qui invite au voyage. Sac bandoulière Mansoa confectionné à la main en France dans un tissu de qualité à rayures blanches et rouges, esprit basque. Élégant, pratique et confortable, son format généreux permet d'emporter les essentiels au quotidien comme en escapade. Fermeture par pochon coulissant, doublure en coton, poche intérieure non zippée, bandoulière réglable et finitions soignées avec étiquette Mansoa. La bandoulière de ce modèle n'est pas faite main. Hauteur jusqu'à 32 cm avec le pochon ouvert. Confectionné avec soin en petite série. N'hésitez pas à nous contacter avant votre achat pour toute question sur les dimensions, les couleurs ou les détails.",
    matieres: ["Tissu à rayures", "Doublure en coton"],
    tissuPrincipal: "Tissu à rayures",
    dimensions: { longueur: 33, hauteur: 23, largeur: 13 },
    images: ["images/SAC002/01.jpg", "images/SAC002/02.jpg", "images/SAC002/03.jpg", "images/SAC002/04.jpg", "images/SAC002/05.jpg", "images/SAC002/06.jpg"]
  },

  // SAC003 — SAC BANDOUliÈRE À RAYURES
  {
    id: "SAC003",
    nom: "Sac bandoulière à rayures bleu et blanc, esprit marin",
    categorie: "sacs",
    couleur: "Bleu et blanc, touche moutarde",
    entretien: "",
    modele: "bandouliere",
    collection: "femme",
    prix: 35,
    disponible: true,
    pieceUnique: false,
    description: "Un sac qui invite au voyage. Apportez une touche d'évasion à votre quotidien avec ce sac bandoulière Mansoa confectionné à la main en France dans un magnifique tissu rayé bleu et blanc rehaussé d'une touche de couleur moutarde. Élégant, pratique et confortable, son format généreux accueille tous vos essentiels pour le quotidien et les escapades. Fermeture par pochon coulissant, doublure en coton, poche intérieure non zippée, bandoulière réglable et finitions soignées avec étiquette Mansoa. Hauteur jusqu'à 32 cm avec le pochon ouvert. Confectionné avec soin en petite série. N'hésitez pas à nous contacter avant votre achat pour toute question sur les dimensions, les couleurs ou les détails.",
    matieres: ["Tissu à rayures", "Doublure en coton"],
    tissuPrincipal: "Tissu à rayures",
    dimensions: { longueur: 33, hauteur: 23, largeur: 13 },
    images: ["images/SAC003/01.jpg", "images/SAC003/02.jpg", "images/SAC003/03.jpg", "images/SAC003/04.jpg", "images/SAC003/05.jpg", "images/SAC003/06.jpg"]
  }
];
