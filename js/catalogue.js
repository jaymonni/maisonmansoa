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

let activeCategory = "all";
const allowedCategories = new Set(["all", ...products.map(item => item.categorie)]);
const requestedCategory = new URLSearchParams(window.location.search).get("categorie");
if (requestedCategory && allowedCategories.has(requestedCategory)) activeCategory = requestedCategory;

function productDetailUrl(id) {
  const params = new URLSearchParams({ id });
  if (activeCategory !== "all") params.set("categorie", activeCategory);
  return `produit.html?${params.toString()}`;
}

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
      href="${productDetailUrl(product.id)}"
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
          href="${productDetailUrl(product.id)}"
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

const productSort = document.querySelector("#productSort");
const productColor = document.querySelector("#productColor");

// Les couleurs sont renseignées sur chaque fiche via « couleurs: ["Vert", ...] ».
// Sans couleur connue, aucun filtre trompeur n'est proposé.
const knownColors = [...new Set(products.flatMap(p => Array.isArray(p.couleurs) ? p.couleurs : (p.couleur ? [p.couleur] : [])))].sort((a,b) => a.localeCompare(b, "fr"));
knownColors.forEach(color => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  productColor?.appendChild(option);
});
if (productColor && knownColors.length === 0) {
  productColor.disabled = true;
  productColor.title = "Les couleurs seront disponibles dès qu'elles seront renseignées sur les produits.";
}

function getVisibleProducts() {
  let list = products.filter(p => activeCategory === "all" || p.categorie === activeCategory);
  const color = productColor?.value || "all";
  if (color !== "all") list = list.filter(p => (Array.isArray(p.couleurs) ? p.couleurs : (p.couleur ? [p.couleur] : [])).includes(color));
  const sort = productSort?.value || "default";
  list = [...list];
  if (sort === "price-asc") list.sort((a,b) => a.prix - b.prix);
  else if (sort === "price-desc") list.sort((a,b) => b.prix - a.prix);
  else if (sort === "name") list.sort((a,b) => a.nom.localeCompare(b.nom, "fr"));
  return list;
}
productSort?.addEventListener("change", () => displayProducts(getVisibleProducts()));
productColor?.addEventListener("change", () => displayProducts(getVisibleProducts()));

function filterProducts(category) {
  activeCategory = allowedCategories.has(category) ? category : "all";
  const url = new URL(window.location.href);
  if (activeCategory === "all") url.searchParams.delete("categorie");
  else url.searchParams.set("categorie", activeCategory);
  window.history.replaceState(null, "", url.pathname + url.search + url.hash);

  if (category === "all") {

    displayProducts(getVisibleProducts());

    if (shopTitle) {
      shopTitle.textContent =
        "Toutes nos créations";
    }

    return;
  }


  displayProducts(getVisibleProducts());

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
filterProducts(activeCategory);
filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === activeCategory));
if (activeCategory !== "all" && shopTitle) {
  shopTitle.textContent = document.querySelector(`.filter-button[data-filter="${activeCategory}"]`)?.textContent.trim() || "Les créations";
}
