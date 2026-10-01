// =====================================================
// MAISON MANSOA — PANIER
// =====================================================

let cart = JSON.parse(
  localStorage.getItem("mansoaCart")
) || [];


// -----------------------------------------------------
// ÉLÉMENTS
// -----------------------------------------------------

const cartButton =
  document.querySelector("#cartButton");

const cartDrawer =
  document.querySelector("#cartDrawer");

const cartOverlay =
  document.querySelector("#cartOverlay");

const cartClose =
  document.querySelector("#cartClose");

const cartItems =
  document.querySelector("#cartItems");

const cartCount =
  document.querySelector("#cartCount");

const cartTotal =
  document.querySelector("#cartTotal");

const checkoutButton =
  document.querySelector("#checkoutButton");


// -----------------------------------------------------
// SAUVEGARDER LE PANIER
// -----------------------------------------------------

function saveCart() {

  localStorage.setItem(
    "mansoaCart",
    JSON.stringify(cart)
  );

}


// -----------------------------------------------------
// TROUVER UN PRODUIT
// -----------------------------------------------------

function getProduct(id) {

  return products.find(
    product => product.id === id
  );

}


// -----------------------------------------------------
// AJOUTER AU PANIER
// -----------------------------------------------------

function addToCart(id) {

  const product = getProduct(id);

  if (
    !product ||
    !product.disponible
  ) {
    return;
  }


  /*
    Pour une pièce unique,
    on évite d'ajouter plusieurs exemplaires
    du même produit.
  */

  if (
    product.pieceUnique &&
    cart.includes(id)
  ) {

    openCart();

    return;
  }


  cart.push(id);

  saveCart();

  renderCart();

  openCart();

}


// -----------------------------------------------------
// SUPPRIMER DU PANIER
// -----------------------------------------------------

function removeFromCart(index) {

  cart.splice(index, 1);

  saveCart();

  renderCart();

}


// -----------------------------------------------------
// AFFICHER LE PANIER
// -----------------------------------------------------

function renderCart() {

  if (
    !cartItems ||
    !cartCount ||
    !cartTotal
  ) {
    return;
  }


  cart =
    cart.filter(id => getProduct(id));


  saveCart();


  cartCount.textContent =
    cart.length;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p class="cart-empty">
        Votre panier est vide.
      </p>
    `;

    cartTotal.textContent =
      formatCartPrice(0);


    if (checkoutButton) {
      checkoutButton.disabled = true;
    }

    return;
  }


  cartItems.innerHTML =
    cart
      .map((id, index) => {

        const product =
          getProduct(id);

        return `

          <div class="cart-item">

            <img
              src="${product.images[0]}"
              alt="${product.nom}"
            >


            <div class="cart-item-info">

              <strong>
                ${product.nom}
              </strong>

              <span>
                ${formatCartPrice(product.prix)}
              </span>

              <button
                class="remove-cart-item"
                type="button"
                data-cart-index="${index}"
              >
                Retirer
              </button>

            </div>

          </div>

        `;

      })
      .join("");


  const total =
    cart.reduce(
      (sum, id) => {

        const product =
          getProduct(id);

        return sum + product.prix;

      },
      0
    );


  cartTotal.textContent =
    formatCartPrice(total);


  if (checkoutButton) {
    checkoutButton.disabled = false;
  }

}


// -----------------------------------------------------
// FORMAT PRIX
// -----------------------------------------------------

function formatCartPrice(price) {

  return price.toLocaleString(
    "fr-FR",
    {
      style: "currency",
      currency: "EUR"
    }
  );

}


// -----------------------------------------------------
// OUVRIR LE PANIER
// -----------------------------------------------------

function openCart() {

  if (!cartDrawer) {
    return;
  }

  cartDrawer.classList.add("open");

  cartDrawer.setAttribute(
    "aria-hidden",
    "false"
  );


  if (cartOverlay) {

    cartOverlay.hidden = false;

    requestAnimationFrame(() => {
      cartOverlay.classList.add("open");
    });

  }

}


// -----------------------------------------------------
// FERMER LE PANIER
// -----------------------------------------------------

function closeCart() {

  if (!cartDrawer) {
    return;
  }


  cartDrawer.classList.remove("open");

  cartDrawer.setAttribute(
    "aria-hidden",
    "true"
  );


  if (cartOverlay) {

    cartOverlay.classList.remove("open");

    setTimeout(() => {
      cartOverlay.hidden = true;
    }, 250);

  }

}


// -----------------------------------------------------
// CLIC SUR "AJOUTER AU PANIER"
// -----------------------------------------------------

document.addEventListener(
  "click",
  event => {

    const addButton =
      event.target.closest(
        ".add-to-cart"
      );


    if (addButton) {

      const id =
        addButton.dataset.productId;

      if (id) {
        addToCart(id);
      }

      return;
    }


    const removeButton =
      event.target.closest(
        ".remove-cart-item"
      );


    if (removeButton) {

      const index =
        Number(
          removeButton.dataset.cartIndex
        );

      removeFromCart(index);

    }

  }
);


// -----------------------------------------------------
// BOUTONS OUVERTURE / FERMETURE
// -----------------------------------------------------

cartButton?.addEventListener(
  "click",
  openCart
);

cartClose?.addEventListener(
  "click",
  closeCart
);

cartOverlay?.addEventListener(
  "click",
  closeCart
);


// Touche Échap

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeCart();
    }

  }
);


// -----------------------------------------------------
// PREMIER AFFICHAGE
// -----------------------------------------------------

renderCart();
