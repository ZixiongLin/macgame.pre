const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};k();const y={initial:[`Las islas debido a su situaci\xF3n geogr\xE1fica, son los territorios m\xE1s expuestos y vulnerables a los efectos del cambio
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
 POR FIN, BUENO AHORA TOCA IR A MADEIRA`]},p={azoresCoor:[2447,1575,1034,856],madeiraCoor:[4085,1684,3300,1185],canariasCoor:[3032,2004,4572,2954],caboVerdeCoor:[900,2553,2423,3539]},u={INITIAL:"assets/assets/map/macaronesia.png",AZORES:"assets/map/azores.png",MADEIRA:"assets/map/madeira.png",CANARIAS:"assets/map/canarias.png",CABOVERDE:"assets/map/cabo.png"},E={AZORES:{TITLE:"AZORES",NAME:"CONSTRUYE UN UNA AZOTEA ECOL\xD3GICA",DESCRIPTION:"ACABAS DE LLEGAR A AZORES, PERO PARECE QUE EN MAL TIEMPO, HA HABIDO UNA INUNDACI\xD3N. AYUDA A CONSTRUIR UN ESPACIO ECOL\xD3GICO PARA LOS HABITANTES DE AZORES"},MADEIRA:{TITLE:"MADEIRA",NAME:"ENCUENTRA LAS CAUSAS Y EFECTOS",DESCRIPTION:"SE HAN MEZCLADO LOS ESTUDIOS, AYUDA A CLASIFICARLOS"},CANARIAS:{TITLE:"CANARIAS",NAME:"RESUELVE EL PUZLE",DESCRIPTION:"HA HABIDO UNA PEQUE\xD1A INTOXICACI\xD3N EN LA COMIDA, TE HAS SALVADO POR POCO, PERO TE HAN PEDIDO QUE HAGAS UN CARTEL SOBRE LA CIG\xDCATERA, AYUDALES"},CABOVERDE:{TITLE:"CABO VERDE",NAME:"DEMUESTRA TU CONOCIMIENTO",DESCRIPTION:"ESTE ES EL \xDALTIMO RETO, ACIERTA TODAS LAS PREGUNTAS PARA ENSE\xD1AR LO QUE SABES DEL CAMBIO CLIM\xC1TICO"}};class L{constructor(e){this.continueButton=document.querySelector("#continue"),e=="initial"?this.dialogs=y.initial:e=="azores_1"?this.dialogs=y.azores_1:e=="azores_2"?this.dialogs=y.azores_2:this.dialogs=["SIN DEFINIR DIALOGO"],this.index=0,this.continueButton.addEventListener("click",()=>{this.update()},!1)}render(){let e=document.querySelector("#dialog-background");e.style.display="flex",document.querySelector("#container").classList.add("stop-scrolling");let r=document.querySelector("#dialog-msg"),s=document.createTextNode(this.dialogs[this.index]);r.appendChild(s);let i=document.createElement("img");i.id="sprite",i.src="assets/map/sprite.png",e.appendChild(i)}update(){if(this.index++,this.index>=this.dialogs.length){this.end();return}else{let e=document.querySelector("#dialog-msg");e.firstChild!=null&&(e.removeChild(e.firstChild),this.render());return}}end(){this.index=0,document.querySelector("#container").classList.remove("stop-scrolling");let t=document.querySelector("#dialog-background");t.style.display="none";let r=document.querySelector("#dialog-msg");if(this.continueButton.removeEventListener("click",()=>this.update(),!1),r.firstChild!=null){r.removeChild(r.firstChild);let s=document.querySelector("#sprite");t.removeChild(s)}}}class f{constructor(e){this.img=e}start(){}end(){}addAreas(){}}class B{constructor(){this.imgs_questions=[{img:"berrenda",questions:["Tengo la piel llena de manchas rojas","Vivo en casi toda la pen\xEDnsula"]},{img:"guadarrama",questions:["Soy de Madrid","Tengo el pelo negro y largo"]},{img:"latxa",questions:["Soy de Vizcaya","Soy blanco"]},{img:"pirenaica",questions:["Vivo por el norte","Soy marron claro"]},{img:"payoya",questions:["Soy del sur","Soy blanco con manchas negras y coloradas"]}]}getOnlyQuestions(){let e=this.imgs_questions.map(t=>t.questions);return e=e.flatMap(t=>t),e}}class _{constructor(e){this.imgSrc=e,this.html=document.createElement("div"),this.html.classList.add("card");let t=document.createElement("img");t.src=`assets/cards/${this.imgSrc}.PNG`,this.html.appendChild(t)}getImgSrc(){return this.imgSrc}render(e){e.appendChild(this.html)}}class v{constructor(e){this.container=document.querySelector("#gameboard"),this.container.innerHTML="",this.TITLE=e.TITLE,this.NAME=e.NAME,this.DESCRIPTION=e.DESCRIPTION}render(e){}addCloseButton(e){let t=document.createElement("button");t.innerHTML="X",t.id="close",t.addEventListener("click",()=>{e()}),this.container.appendChild(t)}start(e){this.addCloseButton(()=>{let n=document.querySelector("#gameboard-container");n.style.display="none",this.container.innerHTML=""});let t=document.createElement("h1");t.innerHTML=this.TITLE,t.id="title";let r=document.createElement("h2");r.innerHTML=this.NAME,r.id="description";let s=document.createElement("div");s.innerHTML=this.DESCRIPTION,s.id="descriptionText";let i=document.createElement("button");i.innerHTML="Jugar",i.id="start",this.container.appendChild(t),this.container.appendChild(r),this.container.appendChild(s),this.container.appendChild(i),i.addEventListener("click",()=>{this.container.innerHTML="",this.render(e)})}}class P extends v{constructor(){super(E.AZORES)}render(e){let t=new B,{imgs_questions:r}=t,s=document.createElement("h1"),i=Math.random()*t.imgs_questions.length;i=Math.floor(i);let n=t.getOnlyQuestions()[i],a=document.createTextNode(n);s.appendChild(a),this.container.appendChild(s);let l=document.createElement("div");l.id="gameboard-img-container";for(let d=0;d<r.length;d++){const C=r[d];let h=new _(C.img);h.render(l),h.html.addEventListener("click",()=>{let c=r.findIndex(g=>g.img==h.imgSrc),m=document.querySelector("h1");if(r[c].questions.includes(m.childNodes[0].nodeValue)){if(h.html.style.display="none",r.splice(c,1),r.length===0){let R=document.createTextNode("Has ganado!!");m.replaceChild(R,m.childNodes[0]),h.html.style.display="none",this.addCloseButton(()=>{let D=document.querySelector("#gameboard-container");D.style.display="none",this.container.innerHTML="",e.end()});return}let g=document.querySelector("#gameboard"),x=Math.floor(Math.random()*r.length),O=r[x].questions[Math.round(Math.random())],q=document.createTextNode(O);m.replaceChild(q,m.childNodes[0]),g.insertBefore(m,g.firstChild)}})}this.container.appendChild(l)}}class S extends f{constructor(e,t){super(e);this.handler=()=>{},this.gameInit=!1,this.cleared=!1,this.startDialog=new L(`${t}_1`),this.endDialog=new L(`${t}_2`)}start(){let e=document.querySelector("#img-map");if(e.src=this.img,!this.gameInit){this.gameInit=!0,this.startDialog.render();let t=document.querySelector("#dialog-background");t.style.display="flex"}e.addEventListener("click",this.handler,!1)}end(){if(!this.cleared){let e=document.querySelector("#dialog-background");e.style.display="flex",this.endDialog.render(),document.querySelector("#img-map").removeEventListener("click",this.handler,!1),document.querySelector("#continue").addEventListener("click",()=>{this.endDialog.update()},!1),this.cleared=!0}}removeListener(){document.querySelector("#img-map").removeEventListener("click",this.handler,!1)}updateStart(e){}}class w extends S{constructor(){super(u.AZORES,"azores");this.handler=()=>{this.gameInit=!0;let e=new P,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class A{constructor(e,t,r){this.linkedValue="",this.value=e,this.bestMatch=t,this.clicked=!1,this.col=r}link(e){this.linkedValue=e}test(){return console.log(this.bestMatch==this.linkedValue),this.bestMatch==this.linkedValue}createImage(e){let t=e*90+10;var r=document.createElementNS("http://www.w3.org/2000/svg","image");return r.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/emojis/${this.value}.png`),r.style.width="50px",r.style.marginLeft="30%",r.setAttribute("y",`${t}px`),r.addEventListener("mousedown",s=>{s.preventDefault(),this.clicked?s.target.classList.remove("emoji-clicked"):s.target.classList.add("emoji-clicked"),this.clicked=!this.clicked}),r}}class z{constructor(){this.column1=[new A("fire","forest",1),new A("water","ocean",1)],this.column2=[new A("ocean","water",2),new A("forest","fire",2)]}test(){let e=!0;return this.column1.forEach(t=>{t.test()||(e=!1)}),this.column2.forEach(t=>{t.test()||(e=!1)}),e}}class I{constructor(){this.x1=0,this.y1=0,this.x2=0,this.y2=0}createLine(){let e=document.createElementNS("http://www.w3.org/2000/svg","line");return e.setAttribute("x1",this.x1.toString()),e.setAttribute("y1",this.y1.toString()),e.setAttribute("x2",this.x2.toString()),e.setAttribute("y2",this.y2.toString()),e.style.width="5px",e.style.stroke="red",e}}class U extends v{constructor(){super(E.MADEIRA);this.index=0,this.line=document.createElementNS("http://www.w3.org/2000/svg","line"),this.pairList=[],this.target=null,this.lineObj=new I}render(e){let t=new z,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.id="emojiContainer";let s=document.createElementNS("http://www.w3.org/2000/svg","g");s.id="col-1",t.column1.forEach((i,n)=>{let a=i.createImage(n);a.classList.add("col-1"),a.addEventListener("mousedown",l=>{this.addLine(l,i)}),s.appendChild(a)}),r.appendChild(s),s=document.createElementNS("http://www.w3.org/2000/svg","g"),s.id="col-2",t.column2.forEach((i,n)=>{let a=i.createImage(n);a.setAttribute("x","100px"),a.classList.add("col-2"),a.addEventListener("mousedown",l=>{this.addLine(l,i)}),s.appendChild(a)}),r.appendChild(s),r.addEventListener("mouseup",()=>{t.test()&&e.end()}),this.container.appendChild(r)}addLine(e,t){var r;let s=e.target;if(this.target==null){let i=s.getBBox(),n=i.x+i.width*.5,a=i.y+i.height*.5;this.lineObj.x1=n,this.lineObj.y1=a,this.target=t;return}else if(this.target!=null){if(this.target.col==t.col){this.lineObj.x1=0,this.lineObj.y1=0,this.target=null,e.target;return}let i=s.getBBox(),n=i.x+i.width*.5,a=i.y+i.height*.5;this.lineObj.x2=n,this.lineObj.y2=a;let l=this.lineObj.createLine();this.lineObj=new I,this.target.link(t.value),t.link(this.target.value),this.target=null,(r=this.container.firstChild)===null||r===void 0||r.appendChild(l)}}}class b extends S{constructor(){super(u.MADEIRA,"madeira");this.handler=()=>{this.gameInit=!0;let e=new U,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class H{constructor(e){this.img=e,this.currentX=0,this.currentY=0,this.currentPosX=0,this.currentPosY=0}selectedElement(e){let t=this.short(e);this.currentX=e.clientX,this.currentY=e.clientY,this.currentPosX=parseFloat(t.getAttribute("x")),this.currentPosY=parseFloat(t.getAttribute("y")),t.onmousemove=r=>this.movement(r)}movement(e){let t=e.target,r=e.clientX-this.currentX,s=e.clientY-this.currentY;this.currentPosX=this.currentPosX+r,this.currentPosY=this.currentPosY+s,t.setAttribute("x",this.currentPosX.toString()),t.setAttribute("y",this.currentPosY.toString()),this.currentX=e.clientX,this.currentY=e.clientY,this.iman(t)}deselectedElement(e){let t=e.target;t.onmousemove=r=>{}}short(e){var t;let r=e.target.parentNode;var s=r.id;let i=document.querySelector("#puzleContainer");return i.removeChild(document.getElementById(s)),i.appendChild(r),(t=i.lastChild)===null||t===void 0?void 0:t.firstChild}iman(e){var t=[300,414,528,300,414,528,300,414,528,300,414,528],r=[20,20,20,84,84,84,148,148,148,212,212,212];for(let s=0;s<12;s++)Math.abs(this.currentPosX-t[s])<30&&Math.abs(this.currentPosY-r[s])<30&&(e.setAttribute("x",t[s].toString()),e.setAttribute("y",r[s].toString()))}}class V{constructor(){this.image_complete="puzle.png",this.rows=4,this.columns=3,this.image_parts=[];for(let e=1;e<=this.rows;e++)for(let t=1;t<=this.columns;t++){let r=new H(`row-${e}-column-${t}.png`);this.image_parts.push(r)}}testing(){let e=0,t=document.querySelectorAll(".piece-puzle");var r=[300,414,528,300,414,528,300,414,528,300,414,528],s=[20,20,20,84,84,84,148,148,148,212,212,212];for(let i=0;i<this.rows*this.columns;i++){let n=t[i],a=parseInt(n.firstChild.getAttribute("x")),l=parseInt(n.firstChild.getAttribute("y")),d=parseInt(n.id);r[d]==a&&s[d]==l&&e++}return e}}class G extends v{constructor(){super(E.CANARIAS);this.index=0}render(e){let t=new V,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.id="puzleContainer",r.setAttributeNS(null,"width","600px"),r.setAttributeNS(null,"height","600px");var s=document.createElementNS("http://www.w3.org/2000/svg","g");s.id="guide-puzle";var i=document.createElementNS("http://www.w3.org/2000/svg","image");i.setAttributeNS("http://www.w3.org/1999/xlink","href",`/assets/puzzle/${t.image_complete}`),i.setAttribute("width","342px"),i.setAttribute("height","256px"),i.setAttribute("x","300"),i.setAttribute("y","20"),i.style.border="1px solid red",s.appendChild(i),r.appendChild(s),r.addEventListener("mouseup",()=>{if(t.testing()>=16){this.container.innerHTML="";let a=document.createTextNode("Has ganado!!");this.container.appendChild(a),this.addCloseButton(()=>{let l=document.querySelector("#gameboard-container");l.style.display="none",this.container.innerHTML="",e.end()})}}),t.image_parts.forEach((n,a)=>{var l=document.createElementNS("http://www.w3.org/2000/svg","g");l.id=a.toString(),l.classList.add("piece-puzle");var d=document.createElementNS("http://www.w3.org/2000/svg","image");d.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/puzzle/${n.img}`),d.setAttribute("width","114px"),d.setAttribute("height","64px");let C=Math.floor(Math.random()*10)+1,h=Math.floor(Math.random()*200)+1;d.setAttribute("x",C.toString()),d.setAttribute("y",h.toString()),d.addEventListener("mousedown",c=>{n.selectedElement(c)}),d.addEventListener("mouseout",c=>{n.deselectedElement(c)}),d.addEventListener("mouseleave",c=>{n.deselectedElement(c)}),d.addEventListener("mouseup",c=>{n.deselectedElement(c),t.testing()>=12&&e.end()}),l.appendChild(d),r.appendChild(l)}),this.container.appendChild(r)}selectedItem(e){let t=e.target;console.log(t);let r=e.clientX,s=e.clientY,i=parseFloat(t.getAttribute("x")||""),n=parseFloat(t.getAttribute("y")||"");t.addEventListener("mousemove",a=>this.movement(t,a,r,s,i,n))}movement(e,t,r,s,i,n){var a=t.clientX-r,l=t.clientY-s;console.log(i),e.setAttribute("x",(i+a).toString()),e.setAttribute("y",(n+l).toString()),e.addEventListener("mouseout",d=>this.deselectedItem(e)),e.addEventListener("mouseup",d=>this.deselectedItem(e))}deselectedItem(e){e.removeEventListener("mousemove",t=>{this.movement}),e.removeEventListener("mouseout",()=>{this.deselectedItem}),e.removeEventListener("mouseup",()=>{this.deselectedItem})}}class N extends S{constructor(){super(u.CANARIAS,"canarias");this.handler=()=>{this.gameInit=!0;let e=new G,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class j{constructor(){this.imgs_questions=[{img:"reserva_natural_garajau.jpg",answers:["reserva natural garajau","sitio_2","sitio_3","sitio_4"],correct:"reserva natural garajau"}]}getOnlyQuestions(){let e=this.imgs_questions.map(t=>t.questions);return e=e.flatMap(t=>t),e}}class Y extends v{constructor(){super(E.CABOVERDE);this.index=0}render(e){let t=new j,{imgs_questions:r}=t,s=document.createElement("img");s.id="cabo_verde_image_level",s.src=`assets/places/${r[this.index].img}`,this.container.appendChild(s);for(let i=0;i<r[this.index].answers.length;i++){let n=document.createElement("div"),a=r[this.index].answers[i];n.innerHTML=a,n.addEventListener("click",()=>{if(a==r[this.index].correct)if(this.index++,console.log(this.index),console.log(r.length),this.index>=r.length){this.container.innerHTML="";let l=document.createTextNode("Has ganado!!");this.container.appendChild(l),this.addCloseButton(()=>{let d=document.querySelector("#gameboard-container");d.style.display="none",this.container.innerHTML="",e.end()});return}else this.render(e)}),this.container.appendChild(n)}}}class M extends S{constructor(){super(u.CABOVERDE,"caboVerde");this.handler=()=>{this.gameInit=!0;let e=new Y,t=document.querySelector("#gameboard-container");t.style.display="flex",e.start(this)}}}class X extends f{constructor(){super(u.INITIAL);this.areas=document.querySelector("map"),this.azoresArea=document.querySelector("#azores"),this.madeiraArea=document.querySelector("#madeira"),this.canariasArea=document.querySelector("#canarias"),this.caboVerdeArea=document.querySelector("#cabo-verde"),this.azoresMap=new w,this.madeiraMap=new b,this.canariasMap=new N,this.caboVerdeMap=new M,window.screen.orientation.lock("landscape"),this.dialog=new L("initial");let e=document.querySelector("#img-map");e.src=super.img,window.addEventListener("resize",t=>{t.preventDefault(),this.resize()}),this.addAreas()}start(){let e=document.querySelector("#img-map");e.src=this.img;let t=document.querySelector("#dialog-background");t.style.display="flex",this.dialog.render()}resize(){let e=document.querySelector("#img-map"),t={height:e.clientHeight/3867,width:e.clientWidth/6900};this.azoresArea.coords=this.calculate(p.azoresCoor,t).join(", "),this.madeiraArea.coords=this.calculate(p.madeiraCoor,t).join(", "),this.canariasArea.coords=this.calculate(p.canariasCoor,t).join(", "),this.caboVerdeArea.coords=this.calculate(p.caboVerdeCoor,t).join(", ")}calculate(e,t){return[Math.floor(e[0]*t.width),Math.floor(e[1]*t.height),Math.floor(e[2]*t.width),Math.floor(e[3]*t.height)]}addAreas(){let e=document.querySelector("#img-map");e.src=this.img,this.resize(),this.azoresArea.addEventListener("click",()=>{var t,r;let s=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.azoresMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML='<img src="/src/assets/map/map_icon.png">',i.id="goToBack",(r=document.querySelector("#container"))===null||r===void 0||r.appendChild(i),i.addEventListener("click",()=>{var n;this.azoresMap.removeListener(),e.src=u.INITIAL,s==null||s.appendChild(this.areas),(n=document.querySelector("#container"))===null||n===void 0||n.removeChild(i)})}}),this.madeiraArea.addEventListener("click",()=>{var t,r;let s=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.madeiraMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML='<img src="assets/map/map_icon.png">',i.id="goToBack",(r=document.querySelector("#container"))===null||r===void 0||r.appendChild(i),i.addEventListener("click",()=>{var n;this.madeiraMap.removeListener(),e.src=u.INITIAL,s==null||s.appendChild(this.areas),(n=document.querySelector("#container"))===null||n===void 0||n.removeChild(i)})}}),this.canariasArea.addEventListener("click",()=>{var t,r;let s=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.canariasMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML='<img src="assets/map/map_icon.png">',i.id="goToBack",(r=document.querySelector("#container"))===null||r===void 0||r.appendChild(i),i.addEventListener("click",()=>{var n;this.canariasMap.removeListener(),e.src=u.INITIAL,s==null||s.appendChild(this.areas),(n=document.querySelector("#container"))===null||n===void 0||n.removeChild(i)})}}),this.caboVerdeArea.addEventListener("click",()=>{var t,r;let s=this.areas.parentNode;if((t=this.areas.parentNode)===null||t===void 0||t.removeChild(this.areas),this.caboVerdeMap.start(),document.querySelectorAll("span").length==0){let i=document.createElement("span");i.classList.add("btn"),i.innerHTML='<img src="assets/map/map_icon.png">',i.id="goToBack",(r=document.querySelector("#container"))===null||r===void 0||r.appendChild(i),i.addEventListener("click",()=>{var n;this.caboVerdeMap.removeListener(),e.src=u.INITIAL,s==null||s.appendChild(this.areas),(n=document.querySelector("#container"))===null||n===void 0||n.removeChild(i)})}})}}class Q{constructor(){this.settings={effects:50,music:50,name:""},this.initialMap=new X,this.azoresMap=new w,this.caboVerdeMap=new M,this.canariasMap=new N,this.madeiraMap=new b,this.currentMap=this.initialMap}updateSettings(e){this.settings=e}start(){this.currentMap.start()}addAreas(){this.currentMap.addAreas()}}let T=new Q;T.start();window.addEventListener("load",()=>{T.addAreas()});
