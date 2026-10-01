// =====================================================
// MAISON MANSOA — AFFICHAGE DU CATALOGUE
// =====================================================


// -----------------------------------------------------
// ÉLÉMENTS DE LA PAGE
// -----------------------------------------------------

const productGrid =
  document.querySelector("#productGrid");

const emptyMessage =
  document.querySelector("#emptyMessage");

const shopTitle =
  document.querySelector("#shopTitle");


// -----------------------------------------------------
// FORMAT DES PRIX
// -----------------------------------------------------

function formatPrice(price) {

  return price.toLocaleString(
    "fr-FR",
    {
      style: "currency",
      currency: "EUR"
    }
  );

}


// -----------------------------------------------------
// CRÉER UNE CARTE PRODUIT
// -----------------------------------------------------

function createProductCard(product) {

  const card =
    document.createElement("article");

  card.className = "product-card";


  // PHOTO PRINCIPALE

  const image =
    product.images?.[0] || "";


  // BADGES

  const uniqueBadge =
    product.pieceUnique
      ? `<span class="product-badge unique">
           Pièce unique
         </span>`
      : "";


  const availabilityBadge =
    product.disponible
      ? `<span class="product-badge available">
           Disponible
         </span>`
      : `<span class="product-badge sold">
           Vendu
         </span>`;


  // BOUTON PANIER

  const cartButton =
    product.disponible

      ? `
        <button
          class="add-to-cart"
          type="button"
          data-product-id="${product.id}"
        >
          Ajouter au panier
        </button>
      `

      : `
        <button
          class="add-to-cart sold"
          type="button"
          disabled
        >
          Vendu
        </button>
      `;


  // CONTENU DE LA CARTE

  card.innerHTML = `

    <a
      class="product-image"
      href="produit.html?id=${product.id}"
      aria-label="Voir ${product.nom}"
    >

      <img
        src="${image}"
        alt="${product.nom}"
        loading="lazy"
      >

    </a>


    <div class="product-info">


      <div class="product-badges">

        ${uniqueBadge}

        ${availabilityBadge}

      </div>


      <h3>

        <a
          href="produit.html?id=${product.id}"
        >
          ${product.nom}
        </a>

      </h3>


      <p class="product-price">
        ${formatPrice(product.prix)}
      </p>


      ${cartButton}


    </div>

  `;


  return card;

}


// -----------------------------------------------------
// AFFICHER LES PRODUITS
// -----------------------------------------------------

function displayProducts(list) {

  if (!productGrid) {
    return;
  }


  productGrid.innerHTML = "";


  if (list.length === 0) {

    if (emptyMessage) {
      emptyMessage.hidden = false;
    }

    return;
  }


  if (emptyMessage) {
    emptyMessage.hidden = true;
  }


  list.forEach(product => {

    const card =
      createProductCard(product);

    productGrid.appendChild(card);

  });

}


// -----------------------------------------------------
// FILTRER LE CATALOGUE
// -----------------------------------------------------

function filterProducts(category) {

  if (category === "all") {

    displayProducts(products);

    if (shopTitle) {
      shopTitle.textContent =
        "Toutes nos créations";
    }

    return;
  }


  const filteredProducts =
    products.filter(
      product =>
        product.categorie === category
    );


  displayProducts(filteredProducts);

}


// -----------------------------------------------------
// PETITS BOUTONS DE FILTRE
// -----------------------------------------------------

const filterButtons =
  document.querySelectorAll(
    ".filter-button"
  );


filterButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const category =
        button.dataset.filter;


      filterButtons.forEach(item => {
        item.classList.remove("active");
      });


      button.classList.add("active");


      filterProducts(category);

    }
  );

});


// -----------------------------------------------------
// GRANDES CARTES "NOS UNIVERS"
// -----------------------------------------------------

const categoryCards =
  document.querySelectorAll(
    ".category-card"
  );


categoryCards.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      const category =
        card.dataset.category;


      filterProducts(category);


      // Synchroniser les petits filtres

      filterButtons.forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.filter === category
        );

      });


      // Utiliser le nom de la catégorie
      // comme titre de la boutique

      const categoryName =
        card.querySelector(
          ".category-name"
        );


      if (
        shopTitle &&
        categoryName
      ) {

        shopTitle.textContent =
          categoryName.textContent.trim();

      }


      // Descendre vers la boutique

      document
        .querySelector("#boutique")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }
  );

});


// -----------------------------------------------------
// MENU MOBILE
// -----------------------------------------------------

const menuButton =
  document.querySelector(
    "#menuButton"
  );

const mainNav =
  document.querySelector(
    "#mainNav"
  );


if (
  menuButton &&
  mainNav
) {

  menuButton.addEventListener(
    "click",
    () => {

      const isOpen =
        mainNav.classList.toggle(
          "open"
        );


      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );

}


// -----------------------------------------------------
// PREMIER AFFICHAGE
// -----------------------------------------------------

displayProducts(products);
