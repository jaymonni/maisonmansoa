// =====================================================
// MAISON MANSOA — FICHE PRODUIT
// =====================================================

const productDetail =
  document.querySelector("#productDetail");


// -----------------------------------------------------
// RÉCUPÉRER L'IDENTIFIANT DANS L'ADRESSE
// -----------------------------------------------------

const params =
  new URLSearchParams(
    window.location.search
  );

const productId =
  params.get("id");


// -----------------------------------------------------
// TROUVER LE PRODUIT
// -----------------------------------------------------

const product =
  products.find(
    item => item.id === productId
  );


// -----------------------------------------------------
// FORMAT DU PRIX
// -----------------------------------------------------

function formatProductPrice(price) {

  return price.toLocaleString(
    "fr-FR",
    {
      style: "currency",
      currency: "EUR"
    }
  );

}


// -----------------------------------------------------
// DIMENSIONS
// -----------------------------------------------------

function escapeProductText(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function createCharacteristic(label, value) {
  if (value === null || value === undefined || value === "" || (Array.isArray(value) && value.length === 0)) return "";
  const content = Array.isArray(value) ? value.map(escapeProductText).join(" · ") : escapeProductText(value);
  return `<div class="product-characteristic${label === "Dimensions" ? " product-characteristic-dimensions" : ""}"><dt>${escapeProductText(label)}</dt><dd>${content}</dd></div>`;
}

function createCharacteristics(product) {
  const categories = {
    "protege-livres": "Protège-livre",
    "sacs": "Sac",
    "pochettes": "Pochette",
    "trousses": "Trousse"
  };
  const dimensions = product.dimensions || {};
  const measures = [["Longueur", dimensions.longueur], ["Hauteur", dimensions.hauteur], ["Largeur", dimensions.largeur]]
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([label, value]) => `${label} : ${value} cm`);
  const rows = [
    createCharacteristic("Type de création", categories[product.categorie] || product.categorie),
    createCharacteristic("Matières", product.matieres),
    createCharacteristic("Tissu principal", product.tissuPrincipal),
    createCharacteristic("Dimensions", measures),
    createCharacteristic("Fabrication", "Confection artisanale"),
    createCharacteristic("Référence", product.id)
  ].filter(Boolean).join("");
  return `<section class="product-characteristics" aria-label="Caractéristiques du produit">
    <h2>Caractéristiques</h2><dl>${rows}</dl>
  </section>`;
}

function createDimensions(product) {

  const dimensions =
    product.dimensions;

  if (!dimensions) {
    return "";
  }


  const values = [];


  if (dimensions.longueur) {
    values.push(
      `Longueur : ${dimensions.longueur} cm`
    );
  }


  if (dimensions.hauteur) {
    values.push(
      `Hauteur : ${dimensions.hauteur} cm`
    );
  }


  if (dimensions.largeur) {
    values.push(
      `Largeur : ${dimensions.largeur} cm`
    );
  }


  if (values.length === 0) {
    return "";
  }


  return `
    <div class="product-specification">

      <h3>
        Dimensions
      </h3>

      <p>
        ${values.join(" · ")}
      </p>

    </div>
  `;

}


// -----------------------------------------------------
// MATIÈRES
// -----------------------------------------------------

function createMaterials(product) {

  if (
    !product.matieres ||
    product.matieres.length === 0
  ) {
    return "";
  }


  return `
    <div class="product-specification">

      <h3>
        Matières
      </h3>

      <p>
        ${product.matieres.join(" · ")}
      </p>

    </div>
  `;

}


// -----------------------------------------------------
// GALERIE DE PHOTOS
// -----------------------------------------------------

function createGallery(product) {

  const images =
    product.images || [];


  if (images.length === 0) {
    return "";
  }


  const thumbnails =
    images
      .map(
        (image, index) => `
          <button
            class="product-thumbnail
            ${index === 0 ? "active" : ""}"
            type="button"
            data-image="${image}"
            aria-label="Afficher la photo ${index + 1}"
          >

            <img
              src="${image}"
              alt="${product.nom} - photo ${index + 1}"
            >

          </button>
        `
      )
      .join("");


  return `
    <div class="product-gallery">

      <div class="product-main-image">

        <img
          id="mainProductImage"
          src="${images[0]}"
          alt="${product.nom}"
        >

      </div>


      ${
        images.length > 1
          ? `
            <div class="product-thumbnails">
              ${thumbnails}
            </div>
          `
          : ""
      }

    </div>
  `;

}


// -----------------------------------------------------
// AFFICHAGE DU PRODUIT
// -----------------------------------------------------

function displayProduct() {

  if (!productDetail) {
    return;
  }


  if (!product) {

    productDetail.innerHTML = `

      <div class="product-not-found">

        <h1>
          Création introuvable
        </h1>

        <p>
          Cette création n'est plus disponible
          ou l'adresse est incorrecte.
        </p>

        <a
          class="primary-button"
          href="index.html#boutique"
        >
          Retour à la boutique
        </a>

      </div>
    `;

    return;
  }


  document.title =
    `${product.nom} — Maison Mansoa`;


  const uniqueBadge =
    product.pieceUnique
      ? `
        <span class="product-badge unique">
          Pièce unique
        </span>
      `
      : "";


  const availabilityBadge =
    product.disponible
      ? `
        <span class="product-badge available">
          Disponible
        </span>
      `
      : `
        <span class="product-badge sold">
          Vendu
        </span>
      `;


  const addButton =
    product.disponible
      ? `
        <button
          class="add-to-cart product-add-button"
          type="button"
          data-product-id="${product.id}"
        >
          Ajouter au panier
        </button>
      `
      : `
        <button
          class="add-to-cart product-add-button sold"
          type="button"
          disabled
        >
          Vendu
        </button>
      `;


  productDetail.innerHTML = `

    ${createGallery(product)}


    <section class="product-detail-info">

      <div class="product-badges">

        ${uniqueBadge}

        ${availabilityBadge}

      </div>


      <p class="product-reference">
        Référence ${product.id}
      </p>


      <h1>
        ${product.nom}
      </h1>


      <p class="product-detail-price">
        ${formatProductPrice(product.prix)}
      </p>


      <p class="product-description">
        ${product.description}
      </p>


      <div class="product-specifications">

        ${createCharacteristics(product)}

      </div>


      ${addButton}

      <div class="product-delivery-info">
        <span aria-hidden="true">↗</span>
        <div>
          <strong>Livraison en France et à l’international</strong>
          <p>Modes de livraison et tarifs selon la destination.</p>
          <a href="livraison.html">Consulter les informations de livraison →</a>
        </div>
      </div>

      <div class="product-reassurance">

        <p>
          ♡ Confectionné à la main
        </p>

        <p>
          ✿ Préparé avec soin
        </p>

        <p>
          ⌂ Expédition depuis la France
        </p>

      </div>

    </section>
  `;


  activateGallery();

}


// -----------------------------------------------------
// CHANGER DE PHOTO
// -----------------------------------------------------

function activateGallery() {

  const mainImage =
    document.querySelector(
      "#mainProductImage"
    );


  const thumbnails =
    document.querySelectorAll(
      ".product-thumbnail"
    );


  thumbnails.forEach(
    thumbnail => {

      thumbnail.addEventListener(
        "click",
        () => {

          if (!mainImage) {
            return;
          }


          mainImage.src =
            thumbnail.dataset.image;


          thumbnails.forEach(
            item => {
              item.classList.remove(
                "active"
              );
            }
          );


          thumbnail.classList.add(
            "active"
          );

        }
      );

    }
  );

}


// -----------------------------------------------------
// LANCEMENT
// -----------------------------------------------------

displayProduct();
