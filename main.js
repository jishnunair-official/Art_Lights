(function(){
"use strict";
var EMAIL="artlights21@gmail.com",FS="https://formspree.io/f/xpppabne";
function $(s,r){return (r||document).querySelector(s)}
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
if(location.protocol==="file:"){
 var as=document.querySelectorAll("a[href]");
 for(var i=0;i<as.length;i++){var h=as[i].getAttribute("href");if(h&&!/^(https?:|mailto:|tel:|#)/.test(h)&&/\/$/.test(h))as[i].setAttribute("href",h+"index.html")}
 var h0=document.querySelectorAll("a[href='.']");for(var j=0;j<h0.length;j++)h0[j].setAttribute("href","index.html");
}
var dlg=$("#enqd");
if(dlg){
 var op=$("[data-open-enq]"),cl=$("[data-close-enq]");
 if(op)op.addEventListener("click",function(){if(dlg.showModal)dlg.showModal();else dlg.setAttribute("open","")});
 if(cl)cl.addEventListener("click",function(){dlg.close()});
 dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});
}
var enq=$("#enq");
if(enq){
 var ds=enq.dataset;
 var qlab=function(){var b=enq.t.value==="Bulk order";$("#qlab").textContent=b?"Approximate quantity":"Quantity";if(b&&+enq.q.value<2)enq.q.value=10;if(!b)enq.q.value=1};
 enq.addEventListener("change",function(e){if(e.target.name==="t")qlab()});
 enq.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(enq);
  var body="Product: "+ds.name+" ("+ds.code+", "+ds.cat+")\nOrder type: "+d.get("t")+"\nQuantity: "+d.get("q")+"\n\n"+(d.get("m")||"")+"\n\nName: "+d.get("n")+"\nContact: "+d.get("c");
  sendForm(enq,{name:d.get("n"),contact:d.get("c"),product:ds.name+" ("+ds.code+")",category:ds.cat,order_type:d.get("t"),quantity:d.get("q"),message:d.get("m"),page:location.pathname,_gotcha:d.get("_gotcha")||""},d.get("t")+" enquiry: "+ds.name+" ("+ds.code+")",body);
 });
}
})();
