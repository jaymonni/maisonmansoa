// Maison Mansoa — choix manuel FR / EN, conservé sur toutes les pages.
(() => {
  const translations = {
    "CRÉATIONS FAITES MAIN":"HANDMADE CREATIONS",
    "Panier":"Cart","Des créations textiles uniques, ":"Unique handmade textile creations, ",
    "cousues avec amour.":"sewn with love.",
    "La boutique":"The boutique","Les créations":"Our creations","Toutes nos créations":"All our creations",
    "Tout voir":"View all","Protège-livres":"Book sleeves","Sacs":"Bags",
    "Pochettes":"Pouches","Trousses":"Cases",
    "De nouvelles créations arrivent bientôt dans cette catégorie.":"New creations are coming soon in this category.",
    "✦ Fait main":"✦ Handmade","♡ Pièces uniques":"♡ One-of-a-kind pieces",
    "✿ Imaginé avec passion":"✿ Created with passion",
    "Un peu de nous":"Our story","La beauté des choses faites main.":"The beauty of handmade things.",
    "Chez Maison Mansoa, chaque accessoire est imaginé, coupé et cousu avec soin. Des tissus choisis avec le cœur, pour des pièces qui vous ressemblent.":"At Maison Mansoa, every accessory is designed, cut and sewn with care. Fabrics chosen with love, for pieces as unique as you.",
    "Coudre, rêver, créer ♡":"Sew, dream, create ♡",
    "Créations textiles faites main":"Handmade textile creations",
    "Retour en haut ↑":"Back to top ↑","Retour à la boutique ↑":"Back to the boutique ↑",
    "Votre panier":"Your cart","Votre panier est vide.":"Your cart is empty.",
    "Total":"Total","Commande bientôt disponible":"Checkout coming soon",
    "Le paiement en ligne n'est pas encore activé.":"Online payment is not yet available.",
    "Ajouter au panier":"Add to cart","Retirer":"Remove","Pièce unique":"One of a kind",
    "Disponible":"Available","Vendu":"Sold",
    "Pochette protège-livre fleurie":"Floral book sleeve",
    "Sac bandoulière style besace à rabat":"Flap crossbody bag",
    "Pochette protège-livre confectionnée à la main.":"Handmade book sleeve.",
    "Sac bandoulière style besace à rabat, confectionné à la main.":"Handmade flap crossbody bag.",
    "← Toutes les créations":"← All creations",
    "← Retour aux sacs":"← Back to bags",
    "← Retour aux protège-livres":"← Back to book sleeves",
    "← Retour aux pochettes":"← Back to pouches",
    "← Retour aux trousses":"← Back to cases",
    "Voir les autres sacs →":"See more bags →",
    "Voir les autres protège-livres →":"See more book sleeves →",
    "Voir les autres pochettes →":"See more pouches →",
    "Voir les autres trousses →":"See more cases →",
    "Découvrir les autres créations →":"Discover more creations →",
    "Une création singulière, réalisée avec soin et passion.":"A unique creation, crafted with care and passion.",
    "Chargement de la création…":"Loading creation…",
    "Caractéristiques":"Details","Type de création":"Product type",
    "Matières":"Materials","Tissu principal":"Main fabric",
    "Dimensions":"Dimensions","Fabrication":"Made by",
    "Référence":"Reference","Sac":"Bag","Protège-livre":"Book sleeve",
    "Pochette":"Pouch","Trousse":"Case","Suédine":"Faux suede",
    "Velours côtelé":"Corduroy","Confection artisanale":"Handmade",
    "♡ Confectionné à la main":"♡ Handmade",
    "✿ Préparé avec soin":"✿ Packed with care",
    "⌂ Expédition depuis la France":"⌂ Ships from France",
    "Création introuvable":"Creation not found",
    "Cette création n'est plus disponible ou l'adresse est incorrecte.":"This creation is no longer available or the address is incorrect.",
    "Retour à la boutique":"Back to the boutique"
  };
  const entries = Object.entries(translations).sort((a,b)=>b[0].length-a[0].length);
  const original = new WeakMap();
  let language = localStorage.getItem("mansoaLanguage") === "en" ? "en" : "fr";
  let busy = false;
  function translate(value) {
    if (Object.prototype.hasOwnProperty.call(translations,value)) return translations[value];
    if (/^Référence (PL|SAC|POC|TR)\d+/.test(value)) return value.replace(/^Référence/, "Reference");
    if (/^Longueur : /.test(value)) return value.replaceAll("Longueur :", "Length:").replaceAll("Hauteur :", "Height:").replaceAll("Largeur :", "Width:");
    if (/^Afficher la photo /.test(value)) return value.replace("Afficher la photo ", "Show photo ");
    if (/^Agrandir la photo/.test(value)) return "Enlarge product photo";
    if (/^Voir /.test(value)) {
      for (const [fr,en] of entries) if (value.includes(fr)) return value.replace(fr,en).replace(/^Voir /,"View ");
    }
    return value;
  }
  function visit(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (!root.nodeValue.trim() || root.parentElement?.closest("script,style")) return;
      if (!original.has(root)) original.set(root,root.nodeValue);
      const fr = original.get(root);
      const trimmed = fr.trim();
      const result = language === "en" ? translate(trimmed) : trimmed;
      const leading = fr.match(/^\s*/)?.[0] || "";
      const trailing = fr.match(/\s*$/)?.[0] || "";
      const next = leading + result + trailing;
      if (root.nodeValue !== next) root.nodeValue = next;
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE && root.matches("script,style")) return;
    if (root.nodeType === Node.ELEMENT_NODE) {
      for (const attr of ["aria-label","alt","title","placeholder"]) {
        if (!root.hasAttribute(attr)) continue;
        const key = "__mansoaOriginal_"+attr;
        if (!root.hasAttribute("data-"+key)) root.setAttribute("data-"+key,root.getAttribute(attr));
        const fr = root.getAttribute("data-"+key);
        const en = language === "en" ? translate(fr) : fr;
        if (root.getAttribute(attr)!==en) root.setAttribute(attr,en);
      }
    }
    for (const child of Array.from(root.childNodes)) visit(child);
  }
  function update() {
    if (busy) return;
    busy = true;
    observer.disconnect();
    document.documentElement.lang = language;
    document.querySelectorAll(".language-switch button").forEach(button => {
      const selected = button.dataset.lang === language;
      button.setAttribute("aria-pressed",String(selected));
      button.classList.toggle("active",selected);
    });
    visit(document.body);
    observer.observe(document.body,{childList:true,subtree:true,characterData:true});
    busy = false;
  }
  const observer = new MutationObserver(records => {
    if (busy) return;
    // New content (catalogue, cart, product detail) may be rendered asynchronously.
    for (const record of records) {
      if (record.type === "characterData" && record.target.nodeType === Node.TEXT_NODE) {
        const node = record.target;
        const fr = original.get(node);
        const current = node.nodeValue;
        if (fr !== undefined && current !== fr && current !== translate(fr.trim())) original.set(node,current);
      }
      if (record.type === "childList") for (const node of record.addedNodes) {
        if (node.nodeType === Node.TEXT_NODE) original.delete(node);
      }
    }
    update();
  });
  document.addEventListener("click",event => {
    const button = event.target.closest(".language-switch button");
    if (!button) return;
    language = button.dataset.lang === "en" ? "en" : "fr";
    localStorage.setItem("mansoaLanguage",language);
    update();
  });
  document.addEventListener("DOMContentLoaded",update);
})();
