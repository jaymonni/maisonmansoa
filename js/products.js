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
      "Une jolie pochette à livre blanche aux fleurs délicates, cousue à la main et fermée par un lien vert. Elle protège vos lectures avec douceur lors de vos déplacements. Détails : pour livres de poche jusqu’à 2,5 cm d’épaisseur.",

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
      "Une besace pleine de douceur, confectionnée à la main en suédine taupe et velours côtelé vert d’eau. Son fermoir en forme de cœur et sa doublure fleurie lui donnent tout son charme. Détails : bandoulière réglable, poche intérieure, dimensions 23 × 20 × 8 cm. Pièce unique.",

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
    description: "Une pochette à livre en velours côtelé vert et tissu fleuri, confectionnée à la main pour accompagner vos lectures. Elle protège aussi une liseuse de format adapté. Détails : pour livres de poche jusqu’à environ 2 cm d’épaisseur ; vérifiez les dimensions de votre liseuse.",
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
    description: "Une pochette douce en velours côtelé vert d’eau et tissu fleuri multicolore, cousue à la main. Son rabat à nouer protège joliment vos lectures. Détails : pour livres de poche jusqu’à environ 2 cm d’épaisseur et liseuses de format adapté.",
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
    description: "Une pochette à livre en velours côtelé rose, doublée de coton turquoise à petites fleurs. Cousue à la main, elle se ferme avec un lien pour maintenir votre livre en place. Détails : pièce unique ; vérifiez les dimensions de votre livre avant de choisir.",
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
    description: "Un sac bandoulière aux rayures rouges et blanches, inspiré de l’esprit basque. Confectionné à la main en petite série, il accompagne vos journées et vos escapades. Détails : pochon coulissant, doublure en coton, poche intérieure, bandoulière réglable non faite main ; 33 × 23 × 13 cm, jusqu’à 32 cm de haut pochon ouvert.",
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
    description: "Un sac bandoulière à l’esprit marin, avec ses rayures bleues et blanches et sa touche moutarde. Une création cousue à la main en petite série, pleine de fraîcheur au quotidien. Détails : pochon coulissant, doublure en coton, poche intérieure et bandoulière réglable ; 33 × 23 × 13 cm, jusqu’à 32 cm de haut pochon ouvert.",
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
    description: "Une touche d’évasion avec ce sac bandoulière kaki aux motifs hibiscus. Confectionné à la main en petite série, il offre un format pratique au quotidien. Détails : pochon coulissant, doublure en coton, poche intérieure, bandoulière réglable ; 33 × 23 × 13 cm, jusqu’à 32 cm de haut pochon ouvert. Existe aussi en mini.",
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
    description: "Le Tropical Mini kaki apporte une touche d’évasion à vos sorties. Cousu à la main en petite série, son format compact accueille téléphone, portefeuille et clés. Détails : pochon coulissant, poche intérieure, doublure en coton fleuri, bandoulière réglable ; 22 × 16 × 11 cm, 23 cm de haut avec pochon. Motifs variables selon la découpe.",
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
    description: "Le Vert Mini est un petit sac bandoulière cousu à la main, léger et facile à porter. Il garde téléphone, portefeuille et clés à portée de main. Détails : pochon coulissant, poche intérieure, doublure en coton fleuri, bandoulière réglable ; 22 × 16 × 11 cm, 23 cm de haut avec pochon. Motifs variables selon la découpe.",
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
    description: "Une pochette de lecture sobre et élégante, cousue à la main en velours côtelé vert sauge. Son bouton en bois et son élastique noir apportent une jolie touche naturelle. Détails : 20 × 13,5 cm ; pour livres de poche jusqu’à 2 cm d’épaisseur et liseuses de format adapté.",
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
    description: "Une pochette de lecture kaki, confectionnée à la main dans un style sobre et soigné. Son bouton vert nacré strié et sa fermeture élastique ajoutent une touche originale. Détails : 20 × 13,5 cm ; pour livres de poche jusqu’à 2 cm d’épaisseur et liseuses de format adapté.",
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
    description: "Une pochette à livre en velours côtelé beige et tissu provençal fleuri Souleiado, cousue à la main. Son joli nœud assorti maintient vos lectures à l’abri. Détails : 20 × 13,5 cm ; pour livres de poche jusqu’à 2 cm d’épaisseur et liseuses compatibles.",
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
    description: "Une pochette douce en velours côtelé vert amande et tissu fleuri, cousue à la main. Son nœud assorti protège vos lectures avec charme. Détails : 20 × 13,5 cm ; pour livres de poche jusqu’à 2 cm d’épaisseur et liseuses de format adapté.",
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
    description: "Une pochette à livre en velours côtelé beige sauge et tissu fleuri bordeaux, confectionnée à la main. Son nœud assorti apporte une jolie finition. Détails : 20 × 13,5 cm ; pour livres de poche jusqu’à 2 cm d’épaisseur et liseuses de format adapté.",
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
    description: "Une pochette pleine de charme en velours côtelé bleu et tissu provençal Souleiado, cousue à la main. Son rabat à nouer garde vos lectures bien protégées. Détails : 20 × 13,5 cm ; pour livres de poche jusqu’à environ 2 cm d’épaisseur et liseuses de format adapté.",
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
    description: "Une pochette lumineuse en velours côtelé rouge et tissu provençal Souleiado, confectionnée à la main. Son rabat à nouer protège vos lectures avec élégance. Détails : 20 × 13,5 cm ; pour livres de poche jusqu’à environ 2 cm d’épaisseur et liseuses de format adapté.",
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
    description: "Une pochette cousue à la main pour garder téléphone et clé de casier accessibles dans le sac à dos. Sa sangle à deux pinces se fixe à l’intérieur de nombreux sacs, notamment de type Eastpak. Détails : 22 × 11 cm, attache et porte-clé intégrés ; vérifiez la taille du téléphone. Téléphone et clé non fournis.",
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
    description: "Une pochette cousue à la main pour garder téléphone et clé de casier accessibles dans le sac à dos. Sa sangle à deux pinces se fixe à l’intérieur de nombreux sacs, notamment de type Eastpak. Détails : 22 × 11 cm, attache et porte-clé intégrés ; vérifiez la taille du téléphone. Téléphone et clé non fournis.",
    matieres: [],
    tissuPrincipal: "",
    dimensions: { longueur: 11, hauteur: 22, largeur: null },
    images: ["images/PT002/01.jpg", "images/PT002/02.jpg", "images/PT002/03.jpg", "images/PT002/04.jpg", "images/PT002/05.jpg"]
  },

  // PT003 — POCHETTE TÉLÉPHONE VERTE
  {
    id: "PT003",
    nom: "Pochette téléphone verte pour sac à dos avec porte-clé",
    categorie: "pochettes-telephone",
    couleur: "Vert",
    entretien: "",
    modele: "pochette-telephone",
    collection: "mixte",
    prix: 22,
    disponible: true,
    pieceUnique: false,
    description: "Une pochette cousue à la main pour garder téléphone et clé de casier accessibles dans le sac à dos. Sa sangle à deux pinces se fixe à l’intérieur de nombreux sacs, notamment de type Eastpak. Détails : 22 × 11 cm, attache et porte-clé intégrés ; vérifiez la taille du téléphone. Téléphone et clé non fournis.",
    matieres: [],
    tissuPrincipal: "",
    dimensions: { longueur: 11, hauteur: 22, largeur: null },
    images: ["images/PT003/01.jpg", "images/PT003/02.jpg", "images/PT003/03.jpg", "images/PT003/04.jpg", "images/PT003/05.jpg"]
  },

  // TP001 — TROUSSE PANIÈRE
  {
    id: "TP001",
    nom: "Trousse panière en coton faite main",
    categorie: "trousses-panieres",
    couleur: "",
    entretien: "",
    modele: "trousse-paniere",
    collection: "femme",
    prix: 15,
    disponible: true,
    pieceUnique: false,
    description: "Une trousse panière en coton, cousue à la main, qui reste ouverte pour garder vos essentiels à portée de main. Parfaite pour le maquillage, les bijoux ou les petits accessoires du quotidien. Détails : tissu extérieur et doublure en coton ; dimensions 12 × 12 × 12 cm.",
    matieres: ["Coton extérieur", "Doublure en coton"],
    tissuPrincipal: "Coton",
    dimensions: { longueur: 12, hauteur: 12, largeur: 12 },
    images: ["images/TP001/01.jpg", "images/TP001/02.jpg", "images/TP001/03.jpg", "images/TP001/04.jpg", "images/TP001/05.jpg", "images/TP001/06.jpg", "images/TP001/07.jpg"]
  }
];
