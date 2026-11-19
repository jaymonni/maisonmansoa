"use strict";
(() => {
 const toggle=document.getElementById("mansoaMessageToggle"),panel=document.getElementById("mansoaMessagePanel"),close=document.getElementById("mansoaMessageClose"),form=document.getElementById("mansoaMessageForm");
 if(!toggle||!panel||!form)return;
 const show=(open)=>{panel.hidden=!open;toggle.setAttribute("aria-expanded",String(open));if(open)document.getElementById("mansoaMessageName").focus();else toggle.focus();};
 toggle.addEventListener("click",()=>show(panel.hidden));close.addEventListener("click",()=>show(false));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.hidden)show(false)});
 form.addEventListener("submit",e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const name=document.getElementById("mansoaMessageName").value.trim(),email=document.getElementById("mansoaMessageEmail").value.trim(),message=document.getElementById("mansoaMessageText").value.trim();
  if(!name||!email||!message)return;
  const subject=encodeURIComponent("Question depuis Maison Mansoa");
  const body=encodeURIComponent("Prénom : "+name+"\nE-mail : "+email+"\n\nMessage :\n"+message);
  window.location.href="mailto:gineste-garcia.nathalie@hotmail.com?subject="+subject+"&body="+body;
 });
})();