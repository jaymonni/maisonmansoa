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

    nom: "Pochette protège-livre fleurie",

    categorie: "protege-livres",

    // Couleur principale : à renseigner lorsque connue.
    couleur: "",

    modele: "protege-livre",

    collection: "femme",

    prix: 17,

    disponible: true,

    pieceUnique: true,

    description:
      "Pochette protège-livre confectionnée à la main.",

    matieres: [],

    tissuPrincipal: "",

    dimensions: {
      longueur: null,
      hauteur: null,
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

    nom: "Sac bandoulière style besace à rabat",

    categorie: "sacs",

    // Couleur principale : à renseigner lorsque connue.
    couleur: "",

    modele: "besace",

    collection: "femme",

    prix: 35,

    disponible: true,

    pieceUnique: true,

    description:
      "Sac bandoulière style besace à rabat, confectionné à la main.",

    matieres: [
      "Suédine",
      "Velours côtelé"
    ],

    tissuPrincipal:
      "Suédine",

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
