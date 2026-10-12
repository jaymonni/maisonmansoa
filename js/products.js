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
    prix: 45,
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
    prix: 45,
    disponible: true,
    pieceUnique: false,
    description: "Un sac qui invite au voyage. Apportez une touche d'évasion à votre quotidien avec ce sac bandoulière Mansoa confectionné à la main en France dans un magnifique tissu rayé bleu et blanc rehaussé d'une touche de couleur moutarde. Élégant, pratique et confortable, son format généreux accueille tous vos essentiels pour le quotidien et les escapades. Fermeture par pochon coulissant, doublure en coton, poche intérieure non zippée, bandoulière réglable et finitions soignées avec étiquette Mansoa. Hauteur jusqu'à 32 cm avec le pochon ouvert. Confectionné avec soin en petite série. N'hésitez pas à nous contacter avant votre achat pour toute question sur les dimensions, les couleurs ou les détails.",
    matieres: ["Tissu à rayures", "Doublure en coton"],
    tissuPrincipal: "Tissu à rayures",
    dimensions: { longueur: 33, hauteur: 23, largeur: 13 },
    images: ["images/SAC003/01.jpg", "images/SAC003/02.jpg", "images/SAC003/03.jpg", "images/SAC003/04.jpg", "images/SAC003/05.jpg", "images/SAC003/06.jpg"]
  },

  // SAC004 — TROPICAL MINI KAKI
  {
    id: "SAC004",
    nom: "Sac bandoulière kaki à motifs hibiscus",
    categorie: "sacs",
    couleur: "Kaki",
    entretien: "",
    modele: "bandouliere",
    collection: "femme",
    prix: 45,
    disponible: true,
    pieceUnique: false,
    description: "Un sac qui invite au voyage. Apportez une touche d'évasion à votre quotidien avec ce sac bandoulière Mansoa, entièrement confectionné à la main en France dans un magnifique tissu kaki aux motifs hibiscus. À la fois élégant, pratique et confortable, il vous accompagne aussi bien au quotidien que pour vos escapades. Son format généreux permet de transporter facilement tous vos essentiels tout en restant léger à porter. Tissu de qualité aux motifs hibiscus, fermeture par pochon coulissant, doublure en coton, poche intérieure non zippée, bandoulière réglable et finitions soignées avec étiquette Mansoa. Dimensions : 33 × 23 × 13 cm ; hauteur jusqu'à 32 cm avec le pochon ouvert. Ce modèle existe aussi en format mini. Chaque sac est confectionné avec soin en petite série afin de proposer une création artisanale de qualité, pensée pour durer. N'hésitez pas à me contacter avant votre achat pour toute question concernant les dimensions, les couleurs ou les détails du modèle.",
    matieres: ["Tissu kaki à motifs hibiscus", "Doublure en coton"],
    tissuPrincipal: "Tissu kaki à motifs hibiscus",
    dimensions: { longueur: 33, hauteur: 23, largeur: 13 },
    images: ["images/SAC004/01.jpg", "images/SAC004/02.jpg", "images/SAC004/03.jpg", "images/SAC004/04.jpg", "images/SAC004/05.jpg", "images/SAC004/06.jpg"]
  },

  // MINI001 — TROPICAL MINI KAKI
  {
    id: "MINI001",
    nom: "Sac bandoulière Tropical Mini kaki",
    categorie: "minis",
    couleur: "Kaki",
    entretien: "",
    modele: "bandouliere",
    collection: "femme",
    prix: 40,
    disponible: true,
    pieceUnique: false,
    description: "Craquez pour le Tropical Mini, un sac bandoulière confectionné à la main dans mon atelier. Son format compact est idéal pour emporter vos essentiels : téléphone, portefeuille et clés. Léger et confortable, il vous accompagne au quotidien comme en sortie. Fermeture par pochon coulissant, poche intérieure, doublure en coton fleuri et bandoulière réglable. Dimensions : 22 × 16 × 11 cm, avec une hauteur de 23 cm avec le pochon. Chaque sac est réalisé avec soin en petite série. Les motifs peuvent légèrement varier selon la découpe du tissu, ce qui fait tout le charme de l'artisanat. N'hésitez pas à me contacter avant votre achat pour toute question concernant les dimensions, les couleurs ou les détails du modèle.",
    matieres: ["Doublure en coton fleuri"],
    tissuPrincipal: "",
    dimensions: { longueur: 22, hauteur: 16, largeur: 11 },
    images: ["images/MINI001/01.jpg", "images/MINI001/02.jpg", "images/MINI001/03.jpg", "images/MINI001/04.jpg", "images/MINI001/05.jpg", "images/MINI001/06.jpg", "images/MINI001/07.jpg"]
  },

  // MINI002 — VERT MINI
  {
    id: "MINI002",
    nom: "Sac bandoulière Vert Mini",
    categorie: "minis",
    couleur: "Vert",
    entretien: "",
    modele: "bandouliere",
    collection: "femme",
    prix: 40,
    disponible: true,
    pieceUnique: false,
    description: "Craquez pour le VERT Mini, un sac bandoulière confectionné à la main dans mon atelier. Son format compact est idéal pour emporter vos essentiels : téléphone, portefeuille et clés. Léger et confortable, il vous accompagne au quotidien comme en sortie. Fermeture par pochon coulissant, poche intérieure, doublure en coton fleuri et bandoulière réglable. Dimensions : 22 × 16 × 11 cm, avec une hauteur de 23 cm avec le pochon. Chaque sac est réalisé avec soin en petite série. Les motifs peuvent légèrement varier selon la découpe du tissu, ce qui fait tout le charme de l'artisanat. N'hésitez pas à me contacter avant votre achat pour toute question concernant les dimensions, les couleurs ou les détails du modèle.",
    matieres: ["Doublure en coton fleuri"],
    tissuPrincipal: "",
    dimensions: { longueur: 22, hauteur: 16, largeur: 11 },
    images: ["images/MINI002/01.jpg", "images/MINI002/02.jpg", "images/MINI002/03.jpg", "images/MINI002/04.jpg", "images/MINI002/05.jpg", "images/MINI002/06.jpg"]
  },

  // PLH001 — POCHETTE À LIVRE HOMME VERT SAUGE
  {
    id: "PLH001",
    nom: "Pochette à livre homme en velours côtelé vert sauge",
    categorie: "pochettes-homme",
    couleur: "Vert sauge",
    entretien: "",
    modele: "pochette-livre",
    collection: "homme",
    prix: 22,
    disponible: true,
    pieceUnique: false,
    description: "La pochette de lecture au masculin ! Parce que les hommes aussi aiment prendre soin de leurs livres. Découvrez cette pochette Mansoa au style sobre, élégant et intemporel. Confectionnée à la main dans un velours côtelé vert sauge, elle se distingue par sa fermeture avec bouton en bois et élastique noir, pour une touche naturelle. Pratique et raffinée, elle protège vos livres et liseuses compatibles des petits chocs, frottements et salissures, à la maison comme en déplacement. Convient aux livres de poche jusqu'à 2 cm d'épaisseur et aux liseuses dont les dimensions sont adaptées. Dimensions : 20 × 13,5 cm. Création artisanale faite avec soin, une belle idée cadeau pour les hommes qui aiment lire. Mansoa – Coudre, rêver, créer.",
    matieres: ["Velours côtelé vert sauge", "Bouton en bois", "Élastique noir"],
    tissuPrincipal: "Velours côtelé vert sauge",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: ["images/PLH001/01.jpg", "images/PLH001/02.jpg", "images/PLH001/03.jpg", "images/PLH001/04.jpg", "images/PLH001/05.jpg", "images/PLH001/06.jpg"]
  },

  // PLH002 — POCHETTE À LIVRE HOMME KAKI
  {
    id: "PLH002",
    nom: "Pochette à livre homme kaki",
    categorie: "pochettes-homme",
    couleur: "Kaki",
    entretien: "",
    modele: "pochette-livre",
    collection: "homme",
    prix: 22,
    disponible: true,
    pieceUnique: false,
    description: "La pochette de lecture au masculin ! Parce que les hommes aussi aiment prendre soin de leurs livres. Découvrez cette pochette Mansoa au style sobre, élégant et intemporel. Confectionnée à la main dans un tissu kaki de bonne qualité, elle se distingue par sa fermeture avec bouton en plastique strié vert nacré et élastique, pour une touche raffinée et originale. Elle protège vos livres et liseuses compatibles des petits chocs, frottements et salissures, à la maison comme en déplacement. Pour livres de poche jusqu'à 2 cm d'épaisseur et liseuses de dimensions adaptées. Dimensions : 20 × 13,5 cm. Création artisanale faite avec soin. Une belle idée cadeau pour les hommes qui aiment lire. Le plaisir de lire mérite aussi une touche d'élégance. Parce que chaque belle histoire mérite sa jolie pochette. Mansoa – Coudre, rêver, créer.",
    matieres: ["Tissu kaki", "Bouton en plastique strié vert nacré", "Élastique"],
    tissuPrincipal: "Tissu kaki",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: ["images/PLH002/01.jpg", "images/PLH002/02.jpg", "images/PLH002/03.jpg", "images/PLH002/04.jpg", "images/PLH002/05.jpg"]
  },

  // PL005 — POCHETTE À LIVRE BEIGE ET SOULEIADO
  {
    id: "PL005",
    nom: "Pochette à livre ou liseuse en velours côtelé beige et tissu provençal Souleiado",
    categorie: "protege-livres",
    couleur: "Beige et fleuri",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 20,
    disponible: true,
    pieceUnique: false,
    description: "Emportez vos lectures préférées partout avec vous grâce à cette jolie pochette Mansoa, confectionnée à la main avec soin. Son velours côtelé doux associé à un délicat tissu provençal fleuri Souleiado lui apporte charme et élégance. Son joli nœud assorti maintient votre livre bien à l'abri. Convient aux livres de poche jusqu'à 2 cm d'épaisseur et aux liseuses de dimensions compatibles. Dimensions : 20 × 13,5 cm. Création artisanale faite avec soin, une belle idée cadeau pour les amoureux de lecture. Parce que chaque belle histoire mérite sa jolie pochette. Mansoa – Coudre, rêver, créer.",
    matieres: ["Velours côtelé beige", "Tissu provençal fleuri Souleiado"],
    tissuPrincipal: "Velours côtelé beige",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: ["images/PL005/01.jpg", "images/PL005/02.jpg", "images/PL005/03.jpg", "images/PL005/04.jpg", "images/PL005/05.jpg", "images/PL005/06.jpg"]
  },

  // PL006 — POCHETTE À LIVRE VERT AMANDE ET FLEURI
  {
    id: "PL006",
    nom: "Pochette à livre ou liseuse en velours côtelé vert amande et tissu fleuri",
    categorie: "protege-livres",
    couleur: "Vert amande et fleuri",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 20,
    disponible: true,
    pieceUnique: false,
    description: "Emportez vos lectures préférées partout avec vous grâce à cette jolie pochette Mansoa, confectionnée à la main avec soin. Son velours côtelé doux vert amande associé à un délicat tissu fleuri lui apporte charme et élégance. Son joli nœud assorti maintient votre livre bien à l'abri. Convient aux livres de poche jusqu'à 2 cm d'épaisseur et aux liseuses de dimensions compatibles. Dimensions : 20 × 13,5 cm. Création artisanale faite avec soin, une belle idée cadeau pour les amoureux de lecture. Parce que chaque belle histoire mérite sa jolie pochette. Mansoa – Coudre, rêver, créer.",
    matieres: ["Velours côtelé vert amande", "Tissu fleuri"],
    tissuPrincipal: "Velours côtelé vert amande",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: ["images/PL006/01.jpg", "images/PL006/02.jpg", "images/PL006/03.jpg", "images/PL006/04.jpg", "images/PL006/05.jpg"]
  },

  // PL007 — POCHETTE À LIVRE BEIGE SAUGE ET FLEURI BORDEAUX
  {
    id: "PL007",
    nom: "Pochette à livre ou liseuse en velours côtelé beige sauge et tissu fleuri bordeaux",
    categorie: "protege-livres",
    couleur: "Beige sauge et bordeaux fleuri",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 20,
    disponible: true,
    pieceUnique: false,
    description: "Emportez vos lectures préférées partout avec vous grâce à cette jolie pochette Mansoa, confectionnée à la main avec soin. Son velours côtelé doux beige sauge associé à un délicat tissu fleuri bordeaux lui apporte charme et élégance. Son joli nœud assorti maintient votre livre bien à l'abri. Convient aux livres de poche jusqu'à 2 cm d'épaisseur et aux liseuses de dimensions compatibles. Dimensions : 20 × 13,5 cm. Création artisanale faite avec soin, une belle idée cadeau pour les amoureux de lecture. Parce que chaque belle histoire mérite sa jolie pochette. Mansoa – Coudre, rêver, créer.",
    matieres: ["Velours côtelé beige sauge", "Tissu fleuri bordeaux"],
    tissuPrincipal: "Velours côtelé beige sauge",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: ["images/PL007/01.jpg", "images/PL007/02.jpg", "images/PL007/03.jpg", "images/PL007/04.jpg"]
  },

  // PL008 — POCHETTE À LIVRE BLEUE SOULEIADO
  {
    id: "PL008",
    nom: "Pochette à livre ou liseuse en velours côtelé bleu et tissu provençal Souleiado",
    categorie: "protege-livres",
    couleur: "Bleu et motifs colorés",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 20,
    disponible: true,
    pieceUnique: false,
    description: "Une jolie pochette pour protéger vos lectures avec style ! Emportez vos histoires préférées partout avec vous grâce à cette pochette Mansoa, confectionnée à la main avec soin. Son velours côtelé bleu, doux et élégant, s'associe aux motifs colorés du tissu provençal Souleiado, pour une création pleine de charme et d'authenticité. Son joli rabat à nouer apporte une touche originale et raffinée, tout en maintenant votre livre bien à l'abri. Idéale pour les livres de poche jusqu'à environ 2 cm d'épaisseur et les liseuses de dimensions compatibles. Dimensions : 20 × 13,5 cm. Fabrication artisanale réalisée avec soin. Fermeture par un joli nœud en tissu. Une idée cadeau originale pour les amoureux des livres. Parce que chaque belle histoire mérite un écrin à sa hauteur. Mansoa – Coudre, rêver, créer.",
    matieres: ["Velours côtelé bleu", "Tissu provençal Souleiado"],
    tissuPrincipal: "Velours côtelé bleu",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: ["images/PL008/01.jpg", "images/PL008/02.jpg", "images/PL008/03.jpg", "images/PL008/04.jpg", "images/PL008/05.jpg"]
  },

  // PL009 — POCHETTE À LIVRE ROUGE SOULEIADO
  {
    id: "PL009",
    nom: "Pochette à livre ou liseuse en velours côtelé rouge et tissu provençal Souleiado",
    categorie: "protege-livres",
    couleur: "Rouge et motifs colorés",
    entretien: "",
    modele: "protege-livre",
    collection: "femme",
    prix: 20,
    disponible: true,
    pieceUnique: false,
    description: "Une jolie pochette pour protéger vos lectures avec style ! Emportez vos histoires préférées partout avec vous grâce à cette pochette Mansoa, confectionnée à la main avec soin. Son velours côtelé rouge, doux et élégant, s'associe aux motifs colorés du tissu provençal Souleiado, pour une création pleine de charme et d'authenticité. Son joli rabat à nouer apporte une touche originale et raffinée, tout en maintenant votre livre bien à l'abri. Idéale pour les livres de poche jusqu'à environ 2 cm d'épaisseur et les liseuses de dimensions compatibles. Dimensions : 20 × 13,5 cm. Fabrication artisanale réalisée avec soin. Fermeture par un joli nœud en tissu. Une idée cadeau originale pour les amoureux des livres. Parce que chaque belle histoire mérite un écrin à sa hauteur. Mansoa – Coudre, rêver, créer.",
    matieres: ["Velours côtelé rouge", "Tissu provençal Souleiado"],
    tissuPrincipal: "Velours côtelé rouge",
    dimensions: { longueur: 13.5, hauteur: 20, largeur: null },
    images: ["images/PL009/01.jpg", "images/PL009/02.jpg", "images/PL009/03.jpg", "images/PL009/04.jpg", "images/PL009/05.jpg"]
  },

  // PT001 — POCHETTE TÉLÉPHONE POUR SAC À DOS
  {
    id: "PT001",
    nom: "Pochette téléphone pour sac à dos avec porte-clé",
    categorie: "pochettes-telephone",
    couleur: "",
    entretien: "",
    modele: "pochette-telephone",
    collection: "mixte",
    prix: 22,
    disponible: true,
    pieceUnique: false,
    description: "Une pochette pensée spécialement pour les collégiens et lycéens ! Parce que le téléphone et la clé du casier ont souvent tendance à se retrouver au fond du sac, j'ai imaginé cette pochette pratique pour les garder toujours accessibles et bien rangés. Elle se fixe à l'intérieur du sac à dos grâce à sa sangle équipée de deux pinces. Particulièrement adaptée aux sacs de type Eastpak, elle peut aussi être installée dans la plupart des sacs à dos disposant d'un emplacement où accrocher les pinces. La pochette mesure 22 × 11 cm et est livrée avec son attache spéciale sac à dos. Un porte-clé intégré permet de garder la clé du cadenas du casier à portée de main. Entièrement confectionnée à la main avec soin dans mon atelier Mansoa, elle associe des tissus choisis pour créer un accessoire utile, original et joli. Plusieurs modèles de tissus sont proposés, chacun réalisé en petite série. Vérifiez les dimensions de votre téléphone avant commande. La pochette est destinée à être fixée à l'intérieur du sac à dos. Téléphone et clé non fournis. Une création imaginée pour simplifier le quotidien des collégiens et lycéens. Mansoa – Coudre, rêver, créer.",
    matieres: [],
    tissuPrincipal: "",
    dimensions: { longueur: 11, hauteur: 22, largeur: null },
    images: ["images/PT001/01.jpg", "images/PT001/02.jpg", "images/PT001/03.jpg", "images/PT001/04.jpg", "images/PT001/05.jpg"]
  },

  // PT002 — POCHETTE TÉLÉPHONE ROSE
  {
    id: "PT002",
    nom: "Pochette téléphone rose pour sac à dos avec porte-clé",
    categorie: "pochettes-telephone",
    couleur: "Rose",
    entretien: "",
    modele: "pochette-telephone",
    collection: "mixte",
    prix: 22,
    disponible: true,
    pieceUnique: false,
    description: "Une pochette pensée spécialement pour les collégiens et lycéens ! Parce que le téléphone et la clé du casier ont souvent tendance à se retrouver au fond du sac, j'ai imaginé cette pochette pratique pour les garder toujours accessibles et bien rangés. Elle se fixe à l'intérieur du sac à dos grâce à sa sangle équipée de deux pinces. Particulièrement adaptée aux sacs de type Eastpak, elle peut aussi être installée dans la plupart des sacs à dos disposant d'un emplacement où accrocher les pinces. La pochette mesure 22 × 11 cm et est livrée avec son attache spéciale sac à dos. Un porte-clé intégré permet de garder la clé du cadenas du casier à portée de main. Entièrement confectionnée à la main avec soin dans mon atelier Mansoa, elle associe des tissus choisis pour créer un accessoire utile, original et joli. Plusieurs modèles de tissus sont proposés, chacun réalisé en petite série. Vérifiez les dimensions de votre téléphone avant commande. La pochette est destinée à être fixée à l'intérieur du sac à dos. Téléphone et clé non fournis. Une création imaginée pour simplifier le quotidien des collégiens et lycéens. Mansoa – Coudre, rêver, créer.",
    matieres: [],
    tissuPrincipal: "",
    dimensions: { longueur: 11, hauteur: 22, largeur: null },
    images: ["images/PT002/01.jpg", "images/PT002/02.jpg", "images/PT002/03.jpg", "images/PT002/04.jpg", "images/PT002/05.jpg"]
  }
];
