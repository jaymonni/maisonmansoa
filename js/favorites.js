// Favoris enregistrés uniquement sur cet appareil.
const MansoaFavorites = (() => {
  const key = "mansoaFavorites";
  function read() { try { const v=JSON.parse(localStorage.getItem(key)||"[]"); return Array.isArray(v)?v:[]; } catch { return []; } }
  function has(id) { return read().includes(id); }
  function updateCount() { const el=document.getElementById("favoritesCount"); if(el)el.textContent=String(read().length); }
  function toggle(id) {
    const list=read(), next=has(id)?list.filter(x=>x!==id):[...list,id];
    try { localStorage.setItem(key,JSON.stringify(next)); } catch {}
    document.querySelectorAll("[data-favorite-id]").forEach(b=>{
      if(b.dataset.favoriteId===id){const selected=next.includes(id);b.classList.toggle("is-favorite",selected);b.setAttribute("aria-pressed",String(selected));b.setAttribute("aria-label",selected?"Retirer des favoris":"Ajouter aux favoris");b.title=selected?"Retirer des favoris":"Ajouter aux favoris";b.textContent=selected?"♥":"♡";}
    });
    updateCount();
    document.dispatchEvent(new CustomEvent("mansoa:favorites-changed"));
  }
  document.addEventListener("click",e=>{const b=e.target.closest("[data-favorite-id]");if(b){e.preventDefault();toggle(b.dataset.favoriteId);}});
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",updateCount);else updateCount();
  return {read,has,toggle};
})();
