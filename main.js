(function(){
"use strict";
var EMAIL="artlights21@gmail.com",FS="https://formspree.io/f/xpppabne";
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function sendForm(form,fields,subject,mailBody,done){
 var st=$(".st",form),btn=$("button[type=submit]",form);
 st.className="st";st.textContent="Sending…";btn.disabled=true;
 fields._subject=subject;
 fetch(FS,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(fields)})
 .then(function(r){if(!r.ok)throw 0;st.textContent="Thank you. We have received your enquiry and will get back to you soon.";form.reset();if(done)done()})
 .catch(function(){st.className="st err";st.innerHTML='We could not send your enquiry. <a href="mailto:'+EMAIL+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(mailBody)+'">Send it by email instead</a>.'})
 .then(function(){btn.disabled=false});
}
var f=$("#f");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(f);
 sendForm(f,{name:d.get("n"),contact:d.get("c"),message:d.get("m"),page:"Contact",_gotcha:d.get("_gotcha")||""},"Website enquiry from "+d.get("n"),d.get("m")+"\n\nName: "+d.get("n")+"\nContact: "+d.get("c"));
});
var pm=$("#pm"),enq=$("#enq");
if(pm&&enq){
 var sel={};
 var qlab=function(){var b=enq.t.value==="Bulk order";$("#qlab").textContent=b?"Approximate quantity":"Quantity";if(b&&+enq.q.value<2)enq.q.value=10;if(!b)enq.q.value=1};
 $$(".pcard").forEach(function(c){c.addEventListener("click",function(){
  sel={code:c.dataset.code,name:c.dataset.name,cat:c.dataset.cat};
  var im=$("img",c),box=$("#pm-img");box.innerHTML="";
  var p=document.createElement("div");p.className="pimg";var i=document.createElement("img");i.src=im.src;i.alt=im.alt;p.appendChild(i);box.appendChild(p);
  $("#pm-c").textContent=sel.cat+" · "+sel.code;$("#pm-t").textContent=sel.name;
  enq.reset();$(".st",enq).textContent="";qlab();pm.showModal();
 })});
 enq.addEventListener("change",function(e){if(e.target.name==="t")qlab()});
 pm.addEventListener("click",function(e){if(e.target===pm)pm.close()});
 enq.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(enq);
  var body="Product: "+sel.name+" ("+sel.code+", "+sel.cat+")\nOrder type: "+d.get("t")+"\nQuantity: "+d.get("q")+"\n\n"+(d.get("m")||"")+"\n\nName: "+d.get("n")+"\nContact: "+d.get("c");
  sendForm(enq,{name:d.get("n"),contact:d.get("c"),product:sel.name+" ("+sel.code+")",category:sel.cat,order_type:d.get("t"),quantity:d.get("q"),message:d.get("m"),page:"Products",_gotcha:d.get("_gotcha")||""},d.get("t")+" enquiry: "+sel.name+" ("+sel.code+")",body,function(){setTimeout(function(){if(pm.open)pm.close();$(".st",enq).textContent=""},2500)});
 });
}
var tabs=$$("#tabs a"),secs=$$(".cat-sec");
if(tabs.length){
 var show=function(id){
  if(!secs.some(function(s){return s.id===id}))id=secs[0].id;
  secs.forEach(function(s){s.classList.toggle("on",s.id===id)});
  tabs.forEach(function(a){a.setAttribute("aria-current",a.getAttribute("href")==="#"+id)});
 };
 tabs.forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();var id=a.getAttribute("href").slice(1);try{history.replaceState(null,"","#"+id)}catch(x){}show(id)})});
 window.addEventListener("hashchange",function(){show(location.hash.slice(1))});
 show(location.hash.slice(1));
}
})();
