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

    nom: "Pochette à livre Blanche",

    categorie: "protege-livres",

    // Couleur principale : à renseigner lorsque connue.
    couleur: "Blanc",

    // Conseils d’entretien : à confirmer avec la créatrice.
    entretien: "",

    modele: "protege-livre",

    collection: "femme",

    prix: 18,

    disponible: true,

    pieceUnique: true,

    description:
      "Jolie pochette à livre réalisée artisanalement dans un tissu fleuri aux tons doux, avec une fermeture en tissu vert de qualité pour une finition élégante. Entièrement cousue main, elle protège votre livre dans un sac ou lors de vos déplacements. Convient aux livres de poche jusqu’à 2,5 cm d’épaisseur. Idéale à offrir aux amoureux de lecture.",

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


];
