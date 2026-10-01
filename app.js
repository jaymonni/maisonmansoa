// =====================================================
// CATALOGUE MAISON MANSOA
// =====================================================
//
// Pour ajouter une création plus tard,
// il suffira d'ajouter un nouveau bloc produit ici.
//
// Catégories prévues :
// protege-livres
// sacs
// pochettes
// trousses
//
// Collections possibles :
// femme
// homme
// mixte
//
// =====================================================


const products = [

  // ---------------------------------------------------
  // PROTÈGE-LIVRES
  // ---------------------------------------------------

  {
    id: "PL001",

    nom: "Pochette protège-livre fleurie",

    categorie: "protege-livres",

    collection: "femme",

    prix: 17,

    disponible: true,

    pieceUnique: true,

    images: [
      "protege-livre-fleurs-vert.jpg"
    ]
  },


  // ---------------------------------------------------
  // SACS
  // ---------------------------------------------------

  {
    id: "SAC001",

    nom: "Sac bandoulière style besace à rabat",

    categorie: "sacs",

    collection: "femme",

    prix: 35,

    disponible: true,

    pieceUnique: true,

    images: [
      "sac-besace-femme-vert-taupe-01.jpg"
    ]
  }

];


// =====================================================
// PANIER
// =====================================================

let cart = [];


// =====================================================
// FORMAT DES PRIX
// =====================================================

const euro = prix =>
  prix.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR"
  });


// =====================================================
// ZONE D'AFFICHAGE DES PRODUITS
// =====================================================

const root = document.querySelector("#products");


// =====================================================
// AFFICHER LES PRODUITS
// =====================================================

function afficherProduits(liste = products) {

  root.innerHTML = "";

  liste.forEach((produit, index) => {

    const badgePieceUnique = produit.pieceUnique
      ? `<span class="badge unique">Pièce unique</span>`
      : "";

    const badgeDisponible = produit.disponible
      ? `<span class="badge disponible">Disponible</span>`
      : `<span class="badge vendu">Vendu</span>`;


    const boutonPanier = produit.disponible

      ? `
        <button
          class="add"
          data-id="${produit.id}"
        >
          Ajouter au panier
        </button>
      `

      : `
        <button
          class="add sold"
          disabled
        >
          Vendu
        </button>
      `;


    root.insertAdjacentHTML(
      "beforeend",

      `
      <article class="product">

        <div class="photo">

          <img
            src="${produit.images[0]}"
            alt="${produit.nom}"
            loading="lazy"
          >

        </div>


        <div class="info">

          <div class="badges">

            ${badgePieceUnique}

            ${badgeDisponible}

          </div>


          <h3>
            ${produit.nom}
          </h3>


          <p class="price">
            ${euro(produit.prix)}
          </p>


          ${boutonPanier}

        </div>

      </article>
      `
    );

  });

}


// =====================================================
// TROUVER UN PRODUIT PAR SON IDENTIFIANT
// =====================================================

function trouverProduit(id) {

  return products.find(
    produit => produit.id === id
  );

}


// =====================================================
// AJOUTER AU PANIER
// =====================================================

document.addEventListener("click", e => {

  if (!e.target.matches(".add")) {
    return;
  }

  const id = e.target.dataset.id;

  if (!id) {
    return;
  }

  const produit = trouverProduit(id);

  if (!produit || !produit.disponible) {
    return;
  }

  cart.push(id);

  renderCart();

  openCart();

});


// =====================================================
// AFFICHER LE PANIER
// =====================================================

function renderCart() {

  const count = document.querySelector("#count");
  const cartItems = document.querySelector("#cartItems");
  const total = document.querySelector("#total");


  count.textContent = cart.length;


  if (cart.length === 0) {

    cartItems.innerHTML =
      "<p>Votre panier est vide.</p>";

  } else {

    cartItems.innerHTML = cart
      .map(id => {

        const produit = trouverProduit(id);

        return `
          <div class="cartrow">

            <span>
              ${produit.nom}
            </span>

            <strong>
              ${euro(produit.prix)}
            </strong>

          </div>
        `;

      })
      .join("");

  }


  const totalPanier = cart.reduce(
    (somme, id) => {

      const produit = trouverProduit(id);

      return somme + produit.prix;

    },
    0
  );


  total.textContent =
    euro(totalPanier);

}


// =====================================================
// OUVRIR / FERMER LE PANIER
// =====================================================

function openCart() {

  document
    .querySelector("#drawer")
    .classList.add("open");

  document
    .querySelector("#overlay")
    .classList.add("open");

}


function closeCart() {

  document
    .querySelector("#drawer")
    .classList.remove("open");

  document
    .querySelector("#overlay")
    .classList.remove("open");

}


// =====================================================
// BOUTONS DU PANIER
// =====================================================

document
  .querySelector("#cartBtn")
  .addEventListener("click", openCart);


document
  .querySelector("#close")
  .addEventListener("click", closeCart);


document
  .querySelector("#overlay")
  .addEventListener("click", closeCart);


// =====================================================
// MENU TÉLÉPHONE
// =====================================================

const menuButton =
  document.querySelector("#menu");

if (menuButton) {

  menuButton.addEventListener(
    "click",
    () => {

      document
        .querySelector("nav")
        .classList.toggle("open");

    }
  );

}


// =====================================================
// PREMIER AFFICHAGE
// =====================================================

afficherProduits();

renderCart();
