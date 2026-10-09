// =====================================================
// MAISON MANSOA — PANIER
// =====================================================

let cart = [];
try {
  const savedCart = JSON.parse(localStorage.getItem("mansoaCart"));
  cart = Array.isArray(savedCart) ? savedCart : [];
} catch (_) { cart = []; }


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

    updateShipping(0);


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


  updateShipping(total);


  if (checkoutButton) {
    checkoutButton.disabled = true;
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

// Tarifs approuvés pour un seul colis pesant au plus 500 g, emballage inclus.
// Aucun paiement ni réservation n'est déclenché par cette estimation.
const shippingRates = {
  fr: [{id:"relay",label:"Mondial Relay — point relais",price:4.5},{id:"colissimo",label:"Colissimo — domicile",price:8.5}],
  be: [{id:"relay",label:"Mondial Relay — point relais",price:5.5},{id:"colissimo",label:"Colissimo — domicile",price:16}],
  south: [{id:"relay",label:"Mondial Relay — point relais",price:7.5},{id:"colissimo",label:"Colissimo — domicile",price:16}],
  pl: [{id:"relay",label:"Mondial Relay — point relais",price:8.5},{id:"colissimo",label:"Colissimo — domicile",price:16}],
  om1: [{id:"colissimo",label:"Colissimo — outre-mer",price:9.5}],
  om2: [],
  eu: [{id:"colissimo",label:"Colissimo — domicile",price:16}],
  uk: [{id:"colissimo",label:"Colissimo — domicile",price:20}],
  worldb: [{id:"colissimo",label:"Colissimo — international",price:25}],
  worldc: [{id:"colissimo",label:"Colissimo — international",price:36.5}],
  other: []
};
const destinationSelect = document.getElementById("shippingDestination");
const carrierSelect = document.getElementById("shippingCarrier");
const shippingPriceElement = document.getElementById("cartShippingPrice");
const shippingNoteElement = document.getElementById("cartShippingNote");
function populateCarriers() {
  if (!destinationSelect || !carrierSelect) return;
  const rates = shippingRates[destinationSelect.value] || [];
  // Conserver un menu fonctionnel même si le navigateur ne sait pas créer Option().
  const previous = carrierSelect.value;
  carrierSelect.innerHTML = rates.length
    ? rates.map(rate => '<option value="' + rate.id + '">' + rate.label + '</option>').join("")
    : '<option value="">Tarif à confirmer</option>';
  carrierSelect.disabled = !rates.length;
  if (rates.some(rate => rate.id === previous)) carrierSelect.value = previous;
  updateShipping();
}
function updateShipping(productSubtotal) {
  if (!cartTotal) return;
  const subtotal = productSubtotal === undefined
    ? cart.reduce((sum,id)=>sum+(getProduct(id)?.prix || 0),0)
    : productSubtotal;
  const rates = shippingRates[destinationSelect?.value] || [];
  const rate = rates.find(item=>item.id===carrierSelect?.value);
  // Le poids emballé n'est pas connu pour tous les produits.
  // Plusieurs articles peuvent dépasser 500 g : ne pas afficher de total trompeur.
  const eligible = cart.length === 1 && cart[0] === "SAC001";
  const showEstimate = cart.length > 0 && eligible && Boolean(rate);
  if (shippingPriceElement) shippingPriceElement.textContent = showEstimate ? formatCartPrice(rate.price) : "À confirmer";
  if (shippingNoteElement) shippingNoteElement.textContent = !cart.length
    ? "Ajoutez une création pour estimer la livraison."
    : !eligible
      ? "Poids emballé à confirmer : tarif et total de livraison non calculables pour ce panier."
      : !rate
        ? "Destination à confirmer avant de calculer la livraison."
        : "Estimation pour un sac emballé de 500 g maximum. Aucun paiement possible actuellement.";
  cartTotal.textContent = showEstimate ? formatCartPrice(subtotal+rate.price) : formatCartPrice(subtotal)+" + livraison à confirmer";
}
destinationSelect?.addEventListener("change",populateCarriers);
carrierSelect?.addEventListener("change",()=>updateShipping());
populateCarriers();
renderCart();
