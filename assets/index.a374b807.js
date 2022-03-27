const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};k();const L={initial:[`Las islas debido a su situaci\xF3n geogr\xE1fica, son los territorios m\xE1s expuestos y vulnerables a los efectos del cambio
                clim\xE1tico. El aumento de temperatura, las variaciones en la precipitaci\xF3n y la elevaci\xF3n del nivel del mar son tres de
                las consecuencias m\xE1s destacadas de este cambio clim\xE1tico. Este es el caso de la regi\xF3n Macaron\xE9sica, en la que se
                encuentran los archipi\xE9lagos de Azores, Madeira, Canarias y Cabo Verde.
                Comparten semejanzas, entre otras cosas, en su climatolog\xEDa y su biodiversidad lo que los hace m\xE1s vulnerables al
                aumento de las temperaturas, las lluvias torrenciales, la subida del nivel del mar, las sequ\xEDas prolongadas y los
                episodios de vientos fuertes y calimas extremas. As\xED como la actividad humana a lo largo de estos a\xF1os, ha sido el
                principal motor del calentamiento global y con \xE9l, el cambio en los patrones de los fen\xF3menos meteorol\xF3gicos.
                Est\xE1 en nuestras manos actuar y adaptarnos a estos cambios y contribuir con acciones cotidianas a mejorar el
                planeta en el que vivimos.
                Te invitamos a conocer la Macaronesia, viaja por nuestros h\xE1bitats y cambia tus h\xE1bitos`],azores_1:["LAS ISLAS DE AZORES, AQU\xCD EN LA GU\xCDA DICE QUE SE HAN CENTRADO EN LA GANADERIA ECOL\xD3GICA","ES UN GRAN PARAISO PARA LAS VACAS","PARECE QUE TIENEN UN RETO CON ESTE TEMA","A VER SI ERES CAPAZ DE SOLUCIONARLO, \xA1\xC1NIMO!"],azores_2:["SABIA QUE PODIAS!","TAMPOCO ES TAN DIFICIL, AUNQUE TODAVIA NO HE TERMINADO....","ESPERA A QUE ACABE",`(20 mins despues) 
 POR FIN, BUENO AHORA TOCA IR A MADEIRA`]},p={azoresCoor:[2447,1575,1034,856],madeiraCoor:[4085,1684,3300,1185],canariasCoor:[3032,2004,4572,2954],caboVerdeCoor:[900,2553,2423,3539]},u={INITIAL:"assets/map/macaronesia.png",AZORES:"assets/map/azores.png",MADEIRA:"assets/map/madeira.png",CANARIAS:"assets/map/canarias.png",CABOVERDE:"assets/map/cabo.png"},A="assets/map/map_icon.png",v={AZORES:{TITLE:"AZORES",NAME:"CONSTRUYE UN UNA AZOTEA ECOL\xD3GICA",DESCRIPTION:"ACABAS DE LLEGAR A AZORES, PERO PARECE QUE EN MAL TIEMPO, HA HABIDO UNA INUNDACI\xD3N. AYUDA A CONSTRUIR UN ESPACIO ECOL\xD3GICO PARA LOS HABITANTES DE AZORES"},MADEIRA:{TITLE:"MADEIRA",NAME:"ENCUENTRA LAS CAUSAS Y EFECTOS",DESCRIPTION:"SE HAN MEZCLADO LOS ESTUDIOS, AYUDA A CLASIFICARLOS"},CANARIAS:{TITLE:"CANARIAS",NAME:"RESUELVE EL PUZLE",DESCRIPTION:"HA HABIDO UNA PEQUE\xD1A INTOXICACI\xD3N EN LA COMIDA, TE HAS SALVADO POR POCO, PERO TE HAN PEDIDO QUE HAGAS UN CARTEL SOBRE LA CIG\xDCATERA, AYUDALES"},CABOVERDE:{TITLE:"CABO VERDE",NAME:"DEMUESTRA TU CONOCIMIENTO",DESCRIPTION:"ESTE ES EL \xDALTIMO RETO, ACIERTA TODAS LAS PREGUNTAS PARA ENSE\xD1AR LO QUE SABES DEL CAMBIO CLIM\xC1TICO"}};class I{constructor(e){this.continueButton=document.querySelector("#continue"),e=="initial"?this.dialogs=L.initial:e=="azores_1"?this.dialogs=L.azores_1:e=="azores_2"?this.dialogs=L.azores_2:this.dialogs=["SIN DEFINIR DIALOGO"],this.index=0,this.continueButton.addEventListener("click",()=>{this.update()},!1)}render(){let e=document.querySelector("#dialog-background");e.style.display="flex",document.querySelector("#container").classList.add("stop-scrolling");let n=document.querySelector("#dialog-msg"),r=document.createTextNode(this.dialogs[this.index]);n.appendChild(r);let i=document.createElement("img");i.id="sprite",i.src="assets/map/sprite.png",e.appendChild(i)}update(){if(this.index++,this.index>=this.dialogs.length){this.end();return}else{let e=document.querySelector("#dialog-msg");e.firstChild!=null&&(e.removeChild(e.firstChild),this.render());return}}end(){this.index=0,document.querySelector("#container").classList.remove("stop-scrolling");let t=document.querySelector("#dialog-background");t.style.display="none";let n=document.querySelector("#dialog-msg");if(this.continueButton.removeEventListener("click",()=>this.update(),!1),n.firstChild!=null){n.removeChild(n.firstChild);let r=document.querySelector("#sprite");t.removeChild(r)}}}class f{constructor(e){this.img=e}start(){}end(){}addAreas(){}}class P{constructor(){this.imgs_questions=[{img:"berrenda",questions:["Tengo la piel llena de manchas rojas","Vivo en casi toda la pen\xEDnsula"]},{img:"guadarrama",questions:["Soy de Madrid","Tengo el pelo negro y largo"]},{img:"latxa",questions:["Soy de Vizcaya","Soy blanco"]},{img:"pirenaica",questions:["Vivo por el norte","Soy marron claro"]},{img:"payoya",questions:["Soy del sur","Soy blanco con manchas negras y coloradas"]}]}getOnlyQuestions(){let e=this.imgs_questions.map(t=>t.questions);return e=e.flatMap(t=>t),e}}class _{constructor(e){this.imgSrc=e,this.html=document.createElement("div"),this.html.classList.add("card");let t=document.createElement("img");t.src=`assets/cards/${this.imgSrc}.PNG`,this.html.appendChild(t)}getImgSrc(){return this.imgSrc}render(e){e.appendChild(this.html)}}class C{constructor(e){this.container=document.querySelector("#gameboard"),this.container.innerHTML="",this.TITLE=e.TITLE,this.NAME=e.NAME,this.DESCRIPTION=e.DESCRIPTION}render(e){}addCloseButton(e){let t=document.createElement("button");t.innerHTML="X",t.id="close",t.addEventListener("click",()=>{e()}),this.container.appendChild(t)}start(e){this.addCloseButton(()=>{let s=document.querySelector("#gameboard-container");s.style.display="none",this.container.innerHTML=""});let t=document.createElement("h1");t.innerHTML=this.TITLE,t.id="title";let n=document.createElement("h2");n.innerHTML=this.NAME,n.id="description";let r=document.createElement("div");r.innerHTML=this.DESCRIPTION,r.id="descriptionText";let i=document.createElement("button");i.innerHTML="Jugar",i.id="start",this.container.appendChild(t),this.container.appendChild(n),this.container.appendChild(r),this.container.appendChild(i),i.addEventListener("click",()=>{this.container.innerHTML="",this.render(e)})}}class z extends C{constructor(){super(v.AZORES)}render(e){let t=new P,{imgs_questions:n}=t,r=document.createElement("h1"),i=Math.random()*t.imgs_questions.length;i=Math.floor(i);let s=t.getOnlyQuestions()[i],a=document.createTextNode(s);r.appendChild(a),this.container.appendChild(r);let l=document.createElement("div");l.id="gameboard-img-container";for(let d=0;d<n.length;d++){const y=n[d];let h=new _(y.img);h.render(l),h.html.addEventListener("click",()=>{let c=n.findIndex(g=>g.img==h.imgSrc),m=document.querySelector("h1");if(n[c].questions.includes(m.childNodes[0].nodeValue)){if(h.html.style.display="none",n.splice(c,1),n.length===0){let D=document.createTextNode("Has ganado!!");m.replaceChild(D,m.childNodes[0]),h.html.style.display="none",this.addCloseButton(()=>{let B=document.querySelector("#gameboard-container");B.style.display="none",this.container.innerHTML="",e.end()});return}let g=document.querySelector("#gameboard"),O=Math.floor(Math.random()*n.length),q=n[O].questions[Math.round(Math.random())],R=document.createTextNode(q);m.replaceChild(R,m.childNodes[0]),g.insertBefore(m,g.firstChild)}})}this.container.appendChild(l)}}class S extends f{constructor(e,t){super(e);this.handler=()=>{},this.gameInit=!1,this.cleared=!1,this.startDialog=new I(`${t}_1`),this.endDialog=new I(`${t}_2`)}start(){let e=document.querySelector("#img-map");if(e.src=this.img,!this.gameInit){this.gameInit=!0,this.startDialog.render();let t=document.querySelector("#dialog-background");t.style.display="flex"}e.addEventListener("click",this.handler,!1)}end(){if(!this.cleared){let e=document.querySelector("#dialog-background");e.style.display="flex",this.endDialog.render(),document.querySelector("#img-map").removeEventListener("click",this.handler,!1),document.querySelector("#continue").addEventListener("click",()=>{this.endDialog.update()},!1),this.cleared=!0}}removeListener(){document.querySelector("#img-map").removeEventListener("click",this.handler,!1)}}class w extends S{constructor(){super(u.AZORES,"azores");this.handler=()=>{this.gameInit=!0;let e=new z,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class E{constructor(e,t,n){this.linkedValue="",this.value=e,this.bestMatch=t,this.clicked=!1,this.col=n}link(e){this.linkedValue=e}test(){return console.log(this.bestMatch==this.linkedValue),this.bestMatch==this.linkedValue}createImage(e){let t=e*90+10;var n=document.createElementNS("http://www.w3.org/2000/svg","image");return n.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/emojis/${this.value}.png`),n.style.width="50px",n.style.marginLeft="30%",n.setAttribute("y",`${t}px`),n.addEventListener("mousedown",r=>{r.preventDefault(),this.clicked?r.target.classList.remove("emoji-clicked"):r.target.classList.add("emoji-clicked"),this.clicked=!this.clicked}),n}}class H{constructor(){this.column1=[new E("fire","forest",1),new E("water","ocean",1)],this.column2=[new E("ocean","water",2),new E("forest","fire",2)]}test(){let e=!0;return this.column1.forEach(t=>{t.test()||(e=!1)}),this.column2.forEach(t=>{t.test()||(e=!1)}),e}}class b{constructor(){this.x1=0,this.y1=0,this.x2=0,this.y2=0}createLine(){let e=document.createElementNS("http://www.w3.org/2000/svg","line");return e.setAttribute("x1",this.x1.toString()),e.setAttribute("y1",this.y1.toString()),e.setAttribute("x2",this.x2.toString()),e.setAttribute("y2",this.y2.toString()),e.style.width="5px",e.style.stroke="red",e}}class U extends C{constructor(){super(v.MADEIRA);this.index=0,this.line=document.createElementNS("http://www.w3.org/2000/svg","line"),this.pairList=[],this.target=null,this.lineObj=new b}render(e){let t=new H,n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id="emojiContainer";let r=document.createElementNS("http://www.w3.org/2000/svg","g");r.id="col-1",t.column1.forEach((i,s)=>{let a=i.createImage(s);a.classList.add("col-1"),a.addEventListener("mousedown",l=>{this.addLine(l,i)}),r.appendChild(a)}),n.appendChild(r),r=document.createElementNS("http://www.w3.org/2000/svg","g"),r.id="col-2",t.column2.forEach((i,s)=>{let a=i.createImage(s);a.setAttribute("x","100px"),a.classList.add("col-2"),a.addEventListener("mousedown",l=>{this.addLine(l,i)}),r.appendChild(a)}),n.appendChild(r),n.addEventListener("mouseup",()=>{if(!t.test())return;let i=document.querySelector("#gameboard-container");this.container.innerHTML="HAS GANADO!",this.addCloseButton(()=>{i.style.display="none",e.end()})}),this.container.appendChild(n)}addLine(e,t){var n;let r=e.target;if(this.target==null){let i=r.getBBox(),s=i.x+i.width*.5,a=i.y+i.height*.5;this.lineObj.x1=s,this.lineObj.y1=a,this.target=t;return}else if(this.target!=null){if(this.target.col==t.col){this.lineObj.x1=0,this.lineObj.y1=0,this.target=null,e.target;return}let i=r.getBBox(),s=i.x+i.width*.5,a=i.y+i.height*.5;this.lineObj.x2=s,this.lineObj.y2=a;let l=this.lineObj.createLine();this.lineObj=new b,this.target.link(t.value),t.link(this.target.value),this.target=null,(n=this.container.firstChild)===null||n===void 0||n.appendChild(l)}}}class N extends S{constructor(){super(u.MADEIRA,"madeira");this.handler=()=>{this.gameInit=!0;let e=new U,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class V{constructor(e){this.img=e,this.currentX=0,this.currentY=0,this.currentPosX=0,this.currentPosY=0}selectedElement(e){let t=this.short(e);this.currentX=e.clientX,this.currentY=e.clientY,this.currentPosX=parseFloat(t.getAttribute("x")),this.currentPosY=parseFloat(t.getAttribute("y")),t.onmousemove=n=>this.movement(n)}movement(e){let t=e.target,n=e.clientX-this.currentX,r=e.clientY-this.currentY;this.currentPosX=this.currentPosX+n,this.currentPosY=this.currentPosY+r,t.setAttribute("x",this.currentPosX.toString()),t.setAttribute("y",this.currentPosY.toString()),this.currentX=e.clientX,this.currentY=e.clientY,this.iman(t)}deselectedElement(e){let t=e.target;t.onmousemove=n=>{}}short(e){var t;let n=e.target.parentNode;var r=n.id;let i=document.querySelector("#puzleContainer");return i.removeChild(document.getElementById(r)),i.appendChild(n),(t=i.lastChild)===null||t===void 0?void 0:t.firstChild}iman(e){var t=[300,414,528,300,414,528,300,414,528,300,414,528],n=[20,20,20,84,84,84,148,148,148,212,212,212];for(let r=0;r<12;r++)Math.abs(this.currentPosX-t[r])<30&&Math.abs(this.currentPosY-n[r])<30&&(e.setAttribute("x",t[r].toString()),e.setAttribute("y",n[r].toString()))}}class G{constructor(){this.image_complete="puzle.png",this.rows=4,this.columns=3,this.image_parts=[];for(let e=1;e<=this.rows;e++)for(let t=1;t<=this.columns;t++){let n=new V(`row-${e}-column-${t}.png`);this.image_parts.push(n)}}testing(){let e=0,t=document.querySelectorAll(".piece-puzle");var n=[300,414,528,300,414,528,300,414,528,300,414,528],r=[20,20,20,84,84,84,148,148,148,212,212,212];for(let i=0;i<this.rows*this.columns;i++){let s=t[i],a=parseInt(s.firstChild.getAttribute("x")),l=parseInt(s.firstChild.getAttribute("y")),d=parseInt(s.id);n[d]==a&&r[d]==l&&e++}return e}}class j extends C{constructor(){super(v.CANARIAS);this.index=0}render(e){let t=new G,n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.id="puzleContainer",n.setAttributeNS(null,"width","600px"),n.setAttributeNS(null,"height","600px");var r=document.createElementNS("http://www.w3.org/2000/svg","g");r.id="guide-puzle";var i=document.createElementNS("http://www.w3.org/2000/svg","image");i.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/puzzle/${t.image_complete}`),i.setAttribute("width","342px"),i.setAttribute("height","256px"),i.setAttribute("x","300"),i.setAttribute("y","20"),i.style.border="1px solid red",r.appendChild(i),n.appendChild(r),n.addEventListener("mouseup",()=>{if(t.testing()>=16){this.container.innerHTML="";let a=document.createTextNode("Has ganado!!");this.container.appendChild(a),this.addCloseButton(()=>{let l=document.querySelector("#gameboard-container");l.style.display="none",this.container.innerHTML="",e.end()})}}),t.image_parts.forEach((s,a)=>{var l=document.createElementNS("http://www.w3.org/2000/svg","g");l.id=a.toString(),l.classList.add("piece-puzle");var d=document.createElementNS("http://www.w3.org/2000/svg","image");d.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/puzzle/${s.img}`),d.setAttribute("width","114px"),d.setAttribute("height","64px");let y=Math.floor(Math.random()*10)+1,h=Math.floor(Math.random()*200)+1;d.setAttribute("x",y.toString()),d.setAttribute("y",h.toString()),d.addEventListener("mousedown",c=>{s.selectedElement(c)}),d.addEventListener("mouseout",c=>{s.deselectedElement(c)}),d.addEventListener("mouseleave",c=>{s.deselectedElement(c)}),d.addEventListener("mouseup",c=>{if(s.deselectedElement(c),t.testing()>=12){this.addCloseButton(()=>{let g=document.querySelector("#gameboard-container");g.style.display="none",this.container.innerHTML="",e.end()});return}}),l.appendChild(d),n.appendChild(l)}),this.container.appendChild(n)}selectedItem(e){let t=e.target;console.log(t);let n=e.clientX,r=e.clientY,i=parseFloat(t.getAttribute("x")||""),s=parseFloat(t.getAttribute("y")||"");t.addEventListener("mousemove",a=>this.movement(t,a,n,r,i,s))}movement(e,t,n,r,i,s){var a=t.clientX-n,l=t.clientY-r;console.log(i),e.setAttribute("x",(i+a).toString()),e.setAttribute("y",(s+l).toString()),e.addEventListener("mouseout",d=>this.deselectedItem(e)),e.addEventListener("mouseup",d=>this.deselectedItem(e))}deselectedItem(e){e.removeEventListener("mousemove",t=>{this.movement}),e.removeEventListener("mouseout",()=>{this.deselectedItem}),e.removeEventListener("mouseup",()=>{this.deselectedItem})}}class M extends S{constructor(){super(u.CANARIAS,"canarias");this.handler=()=>{this.gameInit=!0;let e=new j,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class Y{constructor(){this.imgs_questions=[{img:"reserva_natural_garajau.jpg",answers:["reserva natural garajau","sitio_2","sitio_3","sitio_4"],correct:"reserva natural garajau"}]}getOnlyQuestions(){let e=this.imgs_questions.map(t=>t.questions);return e=e.flatMap(t=>t),e}}class X extends C{constructor(){super(v.CABOVERDE);this.index=0}render(e){let t=new Y,{imgs_questions:n}=t,r=document.createElement("img");r.id="cabo_verde_image_level",r.src=`assets/places/${n[this.index].img}`,this.container.appendChild(r);for(let i=0;i<n[this.index].answers.length;i++){let s=document.createElement("div"),a=n[this.index].answers[i];s.innerHTML=a,s.addEventListener("click",()=>{if(a==n[this.index].correct)if(this.index++,console.log(this.index),console.log(n.length),this.index>=n.length){this.container.innerHTML="";let l=document.createTextNode("Has ganado!!");this.container.appendChild(l),this.addCloseButton(()=>{let d=document.querySelector("#gameboard-container");d.style.display="none",this.container.innerHTML="",e.end()});return}else this.render(e)}),this.container.appendChild(s)}}}class T extends S{constructor(){super(u.CABOVERDE,"caboVerde");this.handler=()=>{this.gameInit=!0;let e=new X,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class $ extends f{constructor(){super(u.INITIAL);this.areas=document.querySelector("map"),this.azoresArea=document.querySelector("#azores"),this.madeiraArea=document.querySelector("#madeira"),this.canariasArea=document.querySelector("#canarias"),this.caboVerdeArea=document.querySelector("#cabo-verde"),this.azoresMap=new w,this.madeiraMap=new N,this.canariasMap=new M,this.caboVerdeMap=new T,this.dialog=new I("initial");let e=document.querySelector("#img-map");e.src=super.img,window.addEventListener("resize",t=>{t.preventDefault(),this.resize()}),this.addAreas()}start(){let e=document.querySelector("#img-map");e.src=this.img;let t=document.querySelector("#dialog-background");t.style.display="flex",this.dialog.render()}resize(){let e=document.querySelector("#img-map"),t={height:e.clientHeight/3867,width:e.clientWidth/6900};this.azoresArea.coords=this.calculate(p.azoresCoor,t).join(", "),this.madeiraArea.coords=this.calculate(p.madeiraCoor,t).join(", "),this.canariasArea.coords=this.calculate(p.canariasCoor,t).join(", "),this.caboVerdeArea.coords=this.calculate(p.caboVerdeCoor,t).join(", ")}calculate(e,t){return[Math.floor(e[0]*t.width),Math.floor(e[1]*t.height),Math.floor(e[2]*t.width),Math.floor(e[3]*t.height)]}addAreas(){let e=document.querySelector("#img-map");e.src=this.img,this.resize(),this.azoresArea.addEventListener("click",()=>{var t,n;let r=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.azoresMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML=`<img src="${A}">`,i.id="goToBack",(n=document.querySelector("#container"))===null||n===void 0||n.appendChild(i),i.addEventListener("click",()=>{var s;this.azoresMap.removeListener(),e.src=u.INITIAL,r==null||r.appendChild(this.areas),(s=document.querySelector("#container"))===null||s===void 0||s.removeChild(i)})}}),this.madeiraArea.addEventListener("click",()=>{var t,n;let r=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.madeiraMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML=`<img src="${A}">`,i.id="goToBack",(n=document.querySelector("#container"))===null||n===void 0||n.appendChild(i),i.addEventListener("click",()=>{var s;this.madeiraMap.removeListener(),e.src=u.INITIAL,r==null||r.appendChild(this.areas),(s=document.querySelector("#container"))===null||s===void 0||s.removeChild(i)})}}),this.canariasArea.addEventListener("click",()=>{var t,n;let r=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.canariasMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML=`<img src="${A}">`,i.id="goToBack",(n=document.querySelector("#container"))===null||n===void 0||n.appendChild(i),i.addEventListener("click",()=>{var s;this.canariasMap.removeListener(),e.src=u.INITIAL,r==null||r.appendChild(this.areas),(s=document.querySelector("#container"))===null||s===void 0||s.removeChild(i)})}}),this.caboVerdeArea.addEventListener("click",()=>{var t,n;let r=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.caboVerdeMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML=`<img src="${A}">`,i.id="goToBack",(n=document.querySelector("#container"))===null||n===void 0||n.appendChild(i),i.addEventListener("click",()=>{var s;this.caboVerdeMap.removeListener(),e.src=u.INITIAL,r==null||r.appendChild(this.areas),(s=document.querySelector("#container"))===null||s===void 0||s.removeChild(i)})}})}}class Q{constructor(){this.settings={effects:50,music:50,name:""},this.initialMap=new $,this.azoresMap=new w,this.caboVerdeMap=new T,this.canariasMap=new M,this.madeiraMap=new N,this.currentMap=this.initialMap}updateSettings(e){this.settings=e}start(){this.currentMap.start()}addAreas(){this.currentMap.addAreas()}}let x=new Q;x.start();window.addEventListener("load",()=>{x.addAreas()});
