// Favoris enregistrés uniquement sur cet appareil.
const MansoaFavorites = (() => {
  const key = "mansoaFavorites";
  function read() { try { const v=JSON.parse(localStorage.getItem(key)||"[]"); return Array.isArray(v)?v:[]; } catch { return []; } }
  function has(id) { return read().includes(id); }
  function toggle(id) {
    const list=read(), next=has(id)?list.filter(x=>x!==id):[...list,id];
    try { localStorage.setItem(key,JSON.stringify(next)); } catch {}
    document.querySelectorAll("[data-favorite-id]").forEach(b=>{
      if(b.dataset.favoriteId===id){const selected=next.includes(id);b.classList.toggle("is-favorite",selected);b.setAttribute("aria-pressed",String(selected));b.setAttribute("aria-label",selected?"Retirer des favoris":"Ajouter aux favoris");b.title=selected?"Retirer des favoris":"Ajouter aux favoris";b.textContent=selected?"♥":"♡";}
    });
    document.dispatchEvent(new CustomEvent("mansoa:favorites-changed"));
  }
  document.addEventListener("click",e=>{const b=e.target.closest("[data-favorite-id]");if(b){e.preventDefault();toggle(b.dataset.favoriteId);}});
  return {read,has,toggle};
})();
