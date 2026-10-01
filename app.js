// ==========================================
// PRODUITS MAISON MANSOA
// ==========================================

const products = [

  // PROTÈGE-LIVRES ET LISEUSES
  ['Pochette protège-livre fleurie', 17, 'protege-livre-fleurs-vert.jpg'],

  // POCHETTES
  ['Pochette téléphone spéciale collège', 22, '📱'],

  // SACS
  ['Sac bandoulière esprit bord de mer', 45, '👜'],
  ['Sac bandoulière style besace', 35, '👜'],
  ['Sac bandoulière artisanal', 30, '👜'],

  // TROUSSES
  ['Trousse de maquillage artisanale', 17, '🧵'],
  ['Trousse panière maquillage', 12, '✂️']

];


// ==========================================
// PANIER
// ==========================================

let cart = [];

const euro = n =>
  n.toLocaleString('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  });


// ==========================================
// AFFICHAGE DES PRODUITS
// ==========================================

const root = document.querySelector('#products');

products.forEach((p, i) => {

  // Si le troisième élément est une image,
  // on affiche la vraie photo.
  // Sinon on garde l'emoji.
  const media =
    p[2].includes('.jpg') ||
    p[2].includes('.jpeg') ||
    p[2].includes('.png') ||
    p[2].includes('.webp')
      ? `<img src="${p[2]}" alt="${p[0]}">`
      : p[2];

  root.insertAdjacentHTML(
    'beforeend',
    `
    <article class="product">

      <div class="photo">
        ${media}
      </div>

      <div class="info">

        <h3>${p[0]}</h3>

        <p class="price">
          ${euro(p[1])}
        </p>

        <button class="add" data-i="${i}">
          Ajouter au panier
        </button>

      </div>

    </article>
    `
  );

});


// ==========================================
// MISE À JOUR DU PANIER
// ==========================================

function render() {

  count.textContent = cart.length;

  cartItems.innerHTML = cart.length

    ? cart.map(i => `
        <div class="cartrow">
          <span>${products[i][0]}</span>
          <strong>${euro(products[i][1])}</strong>
        </div>
      `).join('')

    : '<p>Votre panier est vide.</p>';

  total.textContent = euro(
    cart.reduce((s, i) => s + products[i][1], 0)
  );

}


// ==========================================
// AJOUTER AU PANIER
// ==========================================

document.addEventListener('click', e => {

  if (e.target.matches('.add')) {

    cart.push(+e.target.dataset.i);

    render();
    openCart();

  }

});


// ==========================================
// OUVRIR / FERMER LE PANIER
// ==========================================

function openCart() {
  drawer.classList.add('open');
  overlay.classList.add('open');
}

function closeCart() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
}

cartBtn.onclick = openCart;
close.onclick = closeCart;
overlay.onclick = closeCart;


// ==========================================
// MENU TÉLÉPHONE
// ==========================================

menu.onclick = () =>
  document.querySelector('nav').classList.toggle('open');


// ==========================================
// PREMIER AFFICHAGE
// ==========================================

render();
