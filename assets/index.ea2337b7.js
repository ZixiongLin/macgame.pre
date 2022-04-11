const O=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};O();class c{constructor(){let e=document.querySelector("#airplane");e.src="assets/map/airplane.png";let t=document.querySelector("#dust");t.src="assets/map/nubes.svg"}static getAirplane(){return document.querySelector("#airplane")}static render(){c.getAirplane().style.display="block"}static move1(){c.getAirplane().style.position="absolute",c.getAirplane().style.transform="rotate(66deg)",c.getAirplane().style.top="14vh",c.getAirplane().style.left="25vw",c.getAirplane().style.transition="top 4s, left 4s"}static move2(){c.getAirplane().style.transform="rotate(90deg)",c.getAirplane().style.top="32vh",c.getAirplane().style.left="51vw",c.getAirplane().style.transition="top 4s, left 4s"}static move3(){let e=document.querySelector("#airplane");e.src="assets/map/boat.png",c.getAirplane().style.transform="rotate(0deg) ";let t=document.querySelector("#dust");t.style.bottom="28%",t.style.right="39%",t.style.transition="bottom 2s, right 2s",c.getAirplane().style.top="61vh",c.getAirplane().style.left="55vw",c.getAirplane().style.transition="top 4s, left 4s"}static move4(){c.getAirplane().style.top="85vh",c.getAirplane().style.left="30vw",c.getAirplane().style.transition="top 4s, left 4s"}}class f{constructor(e,t,a){this.value=e,this.bestMatch=t,this.clicked=!1,this.col=a,this.linkedValue=null,this.line=document.createElementNS("http://www.w3.org/2000/svg","line")}link(e,t){e.linkedValue==null&&(e.linkedValue=this,e.line=t,this.linkedValue=e,this.line=t)}unlink(){var e;let t=document.querySelector(`#${(e=this.linkedValue)===null||e===void 0?void 0:e.value}`);console.log(t),t.classList.remove("emoji-clicked"),this.linkedValue.linkedValue=null,this.linkedValue.line=null,this.linkedValue=null,this.line=null}test(){var e;return this.bestMatch==((e=this.linkedValue)===null||e===void 0?void 0:e.value)}createImage(e){let t=e*65+5;var a=document.createElementNS("http://www.w3.org/2000/svg","image");return a.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/emojis/${this.value}.png`),a.id=this.value,a.style.width="15%",a.style.marginLeft="30%",a.setAttribute("y",`${t}px`),a.setAttribute("x","10px"),a.addEventListener("mousedown",n=>{n.preventDefault(),n.target.classList.add("emoji-clicked")}),a}}class B{constructor(){this.column1=[new f("sunny","drought",1),new f("storm","landslide",1),new f("factory","water-pollution",1),new f("co2","global-warming",1)],this.column2=[new f("landslide","storm",2),new f("water-pollution","factory",2),new f("drought","sunny",2),new f("global-warming","co2",2)]}test(){let e=!0;return this.column1.forEach(t=>{t.test()||(e=!1)}),this.column2.forEach(t=>{t.test()||(e=!1)}),e}}class I{constructor(){this.x1=0,this.y1=0,this.x2=0,this.y2=0}createLine(){let e=document.createElementNS("http://www.w3.org/2000/svg","line");return e.setAttribute("x1",this.x1.toString()),e.setAttribute("y1",this.y1.toString()),e.setAttribute("x2",this.x2.toString()),e.setAttribute("y2",this.y2.toString()),e.style.width="5px",e.style.stroke="red",e}}class w{constructor(e){this.container=document.querySelector("#gameboard"),this.container.innerHTML="",this.TITLE=e.TITLE,this.NAME=e.NAME}render(){}start(){let e=document.querySelector("#gameboard");e.style.display="flex";let t=document.createElement("h1");t.innerHTML=this.TITLE,t.id="title";let a=document.createElement("h2");a.innerHTML=this.NAME,a.id="description",this.container.appendChild(t),this.container.appendChild(a),this.render()}}const T={INITIAL:"assets/map/macaronesia_contaminado.jpg",FINAL:"assets/map/macaronesia.png",AZORES:"assets/map/azores.png",MADEIRA:"assets/map/madeira.png",CANARIAS:"assets/map/canarias.png",CABOVERDE:"assets/map/cabo.png"},H="assets/map/cover.png",x={AZORES:{TITLE:"AZORES",NAME:"CONSTRUYE UNA AZOTEA ECOL\xD3GICA",DESCRIPTION:"ACABAS DE LLEGAR A AZORES, PERO PARECE QUE EN MAL TIEMPO, HA HABIDO UNA INUNDACI\xD3N. AYUDA A CONSTRUIR UN ESPACIO ECOL\xD3GICO PARA LOS HABITANTES DE AZORES"},MADEIRA:{TITLE:"MADEIRA",NAME:"ENCUENTRA LAS CAUSAS Y EFECTOS",DESCRIPTION:"SE HAN MEZCLADO LOS ESTUDIOS, AYUDA A CLASIFICARLOS"},CANARIAS:{TITLE:"CANARIAS",NAME:"RESUELVE EL PUZLE",DESCRIPTION:"HA HABIDO UNA PEQUE\xD1A INTOXICACI\xD3N EN LA COMIDA, TE HAS SALVADO POR POCO, PERO TE HAN PEDIDO QUE HAGAS UN CARTEL SOBRE LA CIG\xDCATERA, AYUDALES"},CABOVERDE:{TITLE:"CABO VERDE",NAME:"DEMUESTRA TU CONOCIMIENTO",DESCRIPTION:"ESTE ES EL \xDALTIMO RETO, ACIERTA TODAS LAS PREGUNTAS PARA ENSE\xD1AR LO QUE SABES DEL CAMBIO CLIM\xC1TICO"}},R=[{img:"assets/rooftop/forest.png",rowspan:3,colspan:3},{img:"assets/rooftop/plant_1.png",rowspan:1,colspan:1},{img:"assets/rooftop/plant_2.png",rowspan:1,colspan:1},{img:"assets/rooftop/pots.png",rowspan:1,colspan:1},{img:"assets/rooftop/solar-panel.png",rowspan:2,colspan:2},{img:"assets/rooftop/vegetable_1.png",rowspan:2,colspan:2},{img:"assets/rooftop/vegetable_2.png",rowspan:2,colspan:2}];class k{constructor(e,t,a){this.img=e,this.rowspan=t,this.colspan=a,this.currentX=0,this.currentY=0,this.currentPosX=0,this.currentPosY=0}selectedElement(e){let t=e.target;this.currentX=e.clientX,this.currentY=e.clientY,this.currentPosX=parseFloat(t.getAttribute("x")),this.currentPosY=parseFloat(t.getAttribute("y")),t.onmousemove=a=>this.movement(a)}movement(e){let t=e.target;console.log(e.clientX),e.preventDefault();let a=e.clientX-this.currentX,n=e.clientY-this.currentY;this.currentPosX=this.currentPosX+a,this.currentPosY=this.currentPosY+n,t.setAttribute("x",this.currentPosX.toString()),t.setAttribute("y",this.currentPosY.toString()),this.currentX=e.clientX,this.currentY=e.clientY}}class D{constructor(){this.items=[],this.map=[],R.forEach(e=>{let t=new k(e.img,e.rowspan,e.colspan);this.items.push(t)});for(let e=0;e<4;e++){let t=[];for(let a=0;a<7;a++)t.push(0);this.map.push(t)}}getMap(){return this.map}}class N extends w{constructor(){super(x.AZORES);this.game=new D,this.selectedElement=null,this.offset={x:0,y:0},this.transform=null,this.elementsInBox=[]}endScreen(){let e=document.createTextNode("Reto Conseguido"),t=document.createTextNode("Las azoteas naturales mejoran la gesti\xF3n de recursos, a trav\xE9s de procesos eficientes de consumo de materia y energ\xEDa. Esto permite adaptarse mejor a los efectos del cambio clim\xE1tico como es el caso de las lluvias y vendavales."),a=document.createElement("div");a.id="end-game";let n=document.createElement("h1"),s=document.createElement("p");s.appendChild(t);let o=document.createElement("button");o.innerHTML="Continua con tu aventura",n.appendChild(e),a.appendChild(n),a.appendChild(s),a.appendChild(o),o.addEventListener("click",()=>{this.container.parentNode.style.display="none",this.container.innerHTML="",y.dialog2()}),this.container.appendChild(a)}updateCanvas(e,t,a,n){let s=new Image;s.src=t.img,s.onload=o=>{e.drawImage(s,0,0,s.width,s.height,a,n,10*t.rowspan,10*t.colspan)}}render(){const e=document.querySelector("#gameboard-background");e.style.background="#6EB6D6",e.style.display="flex";let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.id="puzleContainer",t.setAttributeNS(null,"width","600px"),t.setAttributeNS(null,"height","600px"),t.setAttributeNS(null,"viewBox","0, 0, 600, 600");var a=document.createElementNS("http://www.w3.org/2000/svg","g"),n=document.createElementNS("http://www.w3.org/2000/svg","image");n.id="rooftop",n.setAttributeNS("http://www.w3.org/1999/xlink","href","assets/rooftop/basic.png"),n.setAttribute("width","800"),n.setAttribute("x","-100"),a.appendChild(n),t.appendChild(a),this.container.appendChild(t),this.game.items.forEach((s,o)=>{var r=document.createElementNS("http://www.w3.org/2000/svg","g"),i=document.createElementNS("http://www.w3.org/2000/svg","image");i.setAttributeNS("http://www.w3.org/1999/xlink","href",`${s.img}`),i.setAttribute("width",`${s.rowspan*40}`),i.setAttribute("height",`${s.colspan*40}`),i.style.cursor="grab";let l=o*150-150,m=450;i.setAttribute("x",l.toString()),i.setAttribute("y",m.toString()),i.addEventListener("mousedown",u=>{u.stopPropagation(),i.classList.remove("clicked");let d=i.cloneNode();i.classList.add("clicked"),d.classList.add("draggable"),d.id=Date.now().toString(),t.appendChild(d)}),i.addEventListener("touchstart",u=>{u.stopPropagation(),i.classList.remove("clicked");let d=i.cloneNode();i.classList.add("clicked"),d.classList.add("draggable"),d.id=Date.now().toString(),t.appendChild(d)}),r.appendChild(i),t.appendChild(r)}),t.addEventListener("mousedown",s=>this.startDrag(s)),t.addEventListener("mousemove",s=>this.drag(s)),t.addEventListener("mouseup",s=>this.endDrag(s)),t.addEventListener("mouseleave",s=>this.endDrag(s)),t.addEventListener("click",s=>this.endDrag(s)),t.addEventListener("touchstart",s=>this.startDrag(s)),t.addEventListener("touchmove",s=>this.drag(s)),t.addEventListener("touchend",s=>this.endDrag(s)),t.addEventListener("touchcancel",s=>this.endDrag(s))}startDrag(e){let t=e.target;t.classList.contains("draggable")&&(this.selectedElement=t,this.offset=this.getMousePosition(e),console.log(this.offset),this.offset.x-=parseFloat(this.selectedElement.getAttributeNS(null,"x")),this.offset.y-=parseFloat(this.selectedElement.getAttributeNS(null,"y")))}drag(e){if(this.selectedElement!=null){e.preventDefault();var t=this.getMousePosition(e);this.selectedElement.setAttributeNS(null,"x",`${t.x-this.offset.x}`),this.selectedElement.setAttributeNS(null,"y",`${t.y-this.offset.y}`)}}endDrag(e){if(e.preventDefault(),this.selectedElement==null)return;let a=document.querySelector("#rooftop").getBBox(),n=this.selectedElement.getBBox();if(a.x>n.x||a.y+a.height/3>n.y||a.x+a.width<n.x+n.width||a.y+a.height<n.y+n.height){document.querySelector("#puzleContainer").removeChild(this.selectedElement),this.elementsInBox=this.elementsInBox.filter(r=>r!=this.selectedElement.id);return}if(!this.elementsInBox.includes(this.selectedElement.id)&&(this.elementsInBox.push(this.selectedElement.id),this.elementsInBox.length>=8)){let o=document.querySelector("#puzleContainer");o.removeEventListener("mousedown",i=>this.startDrag(i)),o.removeEventListener("mousemove",i=>this.drag(i)),o.removeEventListener("mouseup",i=>this.endDrag(i)),o.removeEventListener("mouseleave",i=>this.endDrag(i)),Array.from(document.querySelectorAll("g")).slice(1).forEach(i=>{o.removeChild(i)}),o.replaceWith(o.cloneNode(!0)),this.endScreen()}document.querySelector(".clicked").classList.remove("clicked"),this.selectedElement=null}getMousePosition(e){var a=document.querySelector("#puzleContainer").getScreenCTM();if(window.TouchEvent&&e instanceof TouchEvent)return{x:(e.touches[0].clientX-a.e)/a.a,y:(e.touches[0].clientY-a.f)/a.d};if(e instanceof MouseEvent)return{x:(e.clientX-a.e)/a.a,y:(e.clientY-a.f)/a.d}}}class P{constructor(){this.questions=[{question:"\xBFQu\xE9 es el efecto invernadero?",answers:["Es un fen\xF3meno atmosf\xE9rico natural, genera la subida de temperatura por la concentraci\xF3n de gases de efecto invernadero, como el CO2.","Es un fen\xF3meno atmosf\xE9rico artificial, genera la subida de la temperatura dificultando la vida en el planeta Tierra. ","Es un fen\xF3meno atmosf\xE9rico natural, genera la bajada de la temperatura por la concentraci\xF3n de gases de efecto invernadero, como el CO2."],correct:"Es un fen\xF3meno atmosf\xE9rico natural, genera la subida de temperatura por la concentraci\xF3n de gases de efecto invernadero, como el CO2.",explain:"El efecto invernadero es un fen\xF3meno necesario para mantener una temperatura adecuada en la superficie de la tierra, de esta manera se atrapa parte de la energ\xEDa del sol en la atm\xF3sfera. Si esto no ocurriera la Tierra estar\xEDa unos 30\xBA C mas fr\xEDa lo que imposibilitar\xEDa, la vida tal y como la conocemos."},{question:"\xBFQu\xE9 son los gases de efecto invernadero (GEI)?",answers:["Est\xE1n relacionados con el efecto invernadero y depende de su concentraci\xF3n la temperatura de la atmosfera puede variar.","Son gases emitidos por el sol, que logran penetrar dentro de la atm\xF3sfera de la Tierra.","Son componentes de la atm\xF3sfera planetaria y retienen toda la energ\xEDa que el suelo emite tras haber sido calentado por la radiaci\xF3n solar."],correct:"Est\xE1n relacionados con el efecto invernadero y depende de su concentraci\xF3n la temperatura de la atmosfera puede variar.",explain:"Los GEI son componentes gaseosos de la atmosfera naturales o antrop\xF3genos (artificiales) que absorben y emiten radiaci\xF3n. Esta propiedad de los GEI genera el efecto invernadero."},{question:"\xBFCu\xE1les son los principales gases de efecto invernadero (GEI)?",answers:["Vapor de agua (H2O), \xF3xido nitroso (N2O), Di\xF3xido de Azufre (SO2), Etano (C2H6)","Vapor de agua (H2O), \xF3xido nitroso (N2O), Ozono (O3), Metano (CH4) y Di\xF3xido de carbono (CO2)","Vapor de agua (H2O), \xF3xido nitroso (N2O), hidr\xF3geno (H2) y Nitr\xF3geno (N2)"],correct:"Vapor de agua (H2O), \xF3xido nitroso (N2O), Ozono (O3), Metano (CH4) y Di\xF3xido de carbono (CO2)",explain:"Los GEI son tanto naturales como antrop\xF3genos, en la atm\xF3sfera de la Tierra los principales son el vapor de agua (H2O), \xF3xido nitroso (N2O), Ozono (O3), Metano (CH4) y Di\xF3xido de carbono (CO2). Hay adem\xE1s una serie de GEI creados \xEDntegramente por el ser humano (antrop\xF3genos), como los halocarbonos, hexafluoruro de azufre y los hidrofluorocarbonos y perfluorocarbonos."},{question:"\xBFQu\xE9 es el calentamiento global?",answers:["Es el incremento gradual de la temperatura del planeta como consecuencia del aumento de ciertos gases de GEI.","El calentamiento global aumenta con el uso de las energ\xEDas renovables.","Disminuye al aumentar los GEI en la atm\xF3sfera."],correct:"Es el incremento gradual de la temperatura del planeta como consecuencia del aumento de ciertos gases de GEI.",explain:"El calentamiento global es por tanto el fen\xF3meno que muestra en promedio un aumento en la temperatura de la atm\xF3sfera terrestre y los oc\xE9anos. En ning\xFAn caso es sin\xF3nimo del efecto invernadero. El efecto invernadero acrecentado por la contaminaci\xF3n (actividades humanas) es la causa del calentamiento global. "},{question:"Selecciona las actividades que contribuyan a disminuir  el calentamiento global.",answers:["Mantener un alto consumo el\xE9ctrico","Comprar productos de un solo uso o corta vida.","Reutilizar antes de comprar, comprar de manera sostenible."],correct:"Reutilizar antes de comprar, comprar de manera sostenible.",explain:"Es urgente que tod@s nos concienciemos y actuemos ante la problem\xE1tica ambiental que hemos generado. Es necesario un compromiso firme por parte de la sociedad, pero tambi\xE9n por parte de los gobiernos y el sector privado. "},{question:"\xBFQu\xE9 es y en que trabaja el IPCC?",answers:["Es una asociaci\xF3n de personas que no creen que el cambio clim\xE1tico exista e intentan demostrarlo.","Es una asociaci\xF3n formada por personas voluntarias que realizan acciones para frenar el cambio clim\xE1tico.","Es un grupo intergubernamental de expertos sobre el cambio clim\xE1tico que estudia las causas y posibles soluciones del cambio clim\xE1tico."],correct:"Es un grupo intergubernamental de expertos sobre el cambio clim\xE1tico que estudia las causas y posibles soluciones del cambio clim\xE1tico.",explain:"El grupo intergubernamental de expertos sobre el cambio clim\xE1tico (IPCC) fue creado en 1988 para facilitar evaluaciones integrales del estado de los conocimientos cient\xEDficos, sus causas, y posibles repercusiones y estrategias de respuesta. "},{question:"\xBFNo podemos simplemente adaptarnos al cambio clim\xE1tico?",answers:["Si, con comprar ropa resistente a cambios en el clima y reforzar las viviendas ser\xE1 suficiente.","Cuanto m\xE1s mitiguemos el cambio clim\xE1tico m\xE1s f\xE1cil ser\xE1 adaptarse a los cambios que no podamos evitar.","El cambio clim\xE1tico se da de una manera gradual de manera que tanto nosotros como la flora y fauna se puede adaptar."],correct:"Cuanto m\xE1s mitiguemos el cambio clim\xE1tico m\xE1s f\xE1cil ser\xE1 adaptarse a los cambios que no podamos evitar.",explain:"Si en lugar de mitigar el cambio clim\xE1tico decidamos adaptarnos tendremos que alterar nuestro comportamiento y forma de vida. Tendr\xEDamos que migrar en busca de recursos como el agua o escapar de las inundaciones si vives en un lugar cercano a la costa. Nuevas enfermedades aprovechar\xE1n el cambio en el clima para expandirse (dengue, malaria, etc\u2026). La manera de alimentarnos cambiar\xE1 ya que los cultivos actuales no resistir\xEDan ni se adaptar\xE1n a los fen\xF3menos atmosf\xE9ricos intensos que genera y generar\xE1 el cambio clim\xE1tico. "}]}}class z extends w{constructor(){super(x.CABOVERDE);this.index=0,this.caboVerdeGame=new P}endScreen(){const e=document.querySelector("#gameboard-background");e.style.backgroundImage="url(assets/map/cabo_2.png)";let t=document.createTextNode("Reto Conseguido"),a=document.createTextNode("Las azoteas naturales mejoran la gesti\xF3n de recursos, a trav\xE9s de procesos eficientes de consumo de materia y energ\xEDa. Esto permite adaptarse mejor a los efectos del cambio clim\xE1tico como es el caso de las lluvias y vendavales."),n=document.createElement("div");n.id="end-game";let s=document.createElement("h1"),o=document.createElement("p");o.appendChild(a);let r=document.createElement("button");r.innerHTML="Continua con tu aventura",s.appendChild(t),n.appendChild(s),n.appendChild(o),n.appendChild(r),r.addEventListener("click",()=>{this.container.parentElement.style.display="none",this.container.innerHTML="";let i=document.querySelector("#img-map");i.src=T.FINAL,C.dialog5()}),this.container.appendChild(n)}render(){const e=document.querySelector("#gameboard-background");e.style.backgroundImage="url(assets/map/cabo_1.jpg)",e.style.display="flex",this.container.innerHTML="";let{questions:t}=this.caboVerdeGame,a=document.createElement("h1");a.innerHTML=t[this.index].question,this.container.appendChild(a);for(let n=0;n<t[this.index].answers.length;n++){let s=document.createElement("div"),o=t[this.index].answers[n];s.innerHTML=o,s.classList.add("answer"),s.addEventListener("click",r=>{if(o==t[this.index].correct){s.id="correct";let i=document.querySelectorAll(".answer");console.log(i),i.forEach(u=>{u.replaceWith(u.cloneNode(!0))});let l=document.createElement("div");l.id="explain",l.innerHTML=t[this.index].explain,this.container.appendChild(l),this.index++,setTimeout((()=>{if(this.index>=t.length){this.container.innerHTML="",this.endScreen();return}else this.render()}).bind(this),8e3)}else r.target.classList.add("incorrect")}),this.container.appendChild(s)}}}class Y{constructor(e){this.img=e,this.currentX=0,this.currentY=0,this.currentPosX=0,this.currentPosY=0}selectedElement(e){e.preventDefault();let t=this.short(e);e instanceof MouseEvent?(this.currentX=e.clientX,this.currentY=e.clientY):e instanceof TouchEvent&&(this.currentX=e.touches[0].clientX,this.currentY=e.touches[0].clientY),this.currentPosX=parseFloat(t.getAttribute("x")),this.currentPosY=parseFloat(t.getAttribute("y")),t.onmousemove=a=>this.movement(a),t.ontouchmove=a=>this.movement(a)}movement(e){e.preventDefault();let t=e.target,a=0,n=0;e instanceof MouseEvent?(a=e.clientX-this.currentX,n=e.clientY-this.currentY):e instanceof TouchEvent&&(a=e.touches[0].clientX-this.currentX,n=e.touches[0].clientY-this.currentY),this.currentPosX=this.currentPosX+a,this.currentPosY=this.currentPosY+n,t.setAttribute("x",this.currentPosX.toString()),t.setAttribute("y",this.currentPosY.toString()),e instanceof MouseEvent?(this.currentX=e.clientX,this.currentY=e.clientY):e instanceof TouchEvent&&(this.currentX=e.touches[0].clientX,this.currentY=e.touches[0].clientY)}deselectedElement(e){e.preventDefault();let t=e.target;t.onmousemove=a=>{},this.iman(t)}short(e){var t;e.preventDefault();let a=e.target.parentNode;var n=a.id;let s=document.querySelector("#puzleContainer");return s.removeChild(document.getElementById(n)),s.appendChild(a),(t=s.lastChild)===null||t===void 0?void 0:t.firstChild}iman(e){let a=document.querySelector("#guide-puzle").firstChild,{x:n,y:s,width:o,height:r}=a.getBBox(),i=n,l=n+o/3,m=n+o*2/3,u=s,d=s+r/4,g=s+r*2/4,E=s+r*3/4;var v=[i,l,m,i,l,m,i,l,m,i,l,m],b=[u,u,u,d,d,d,g,g,g,E,E,E];for(let h=0;h<12;h++)Math.abs(this.currentPosX-v[h])<30&&Math.abs(this.currentPosY-b[h])<30&&(e.setAttribute("x",v[h].toString()),e.setAttribute("y",b[h].toString()))}}class j{constructor(){this.image_complete="puzle.png",this.rows=4,this.columns=3,this.image_parts=[];for(let e=1;e<=this.rows;e++)for(let t=1;t<=this.columns;t++){let a=new Y(`row-${e}-column-${t}.png`);this.image_parts.push(a)}}testing(){let e=0,t=document.querySelectorAll(".piece-puzle"),n=document.querySelector("#guide-puzle").firstChild,{x:s,y:o,width:r,height:i}=n.getBBox(),l=s,m=s+r/3,u=s+r*2/3,d=o,g=o+i/4,E=o+i*2/4,v=o+i*3/4;var b=[l,m,u,l,m,u,l,m,u,l,m,u],h=[d,d,d,g,g,g,E,E,E,v,v,v];for(let A=0;A<this.rows*this.columns;A++){let S=t[A],M=parseFloat(S.firstChild.getAttribute("x")),q=parseFloat(S.firstChild.getAttribute("y")),L=parseInt(S.id);b[L]==M&&h[L]==q&&e++}return e>=this.image_parts.length}}class X extends w{constructor(){super(x.CANARIAS);this.index=0}endScreen(){let e=document.createTextNode("Reto Conseguido"),t=document.createTextNode("La ciguatera es un tipo de intoxicaci\xF3n alimentaria producida por el consumo de pescado que contiene ciguatoxinas. Esta toxina marina microsc\xF3pica se va acumulando a trav\xE9s de la cadena alimenticia donde los peces m\xE1s peque\xF1os son comidos por lo peces m\xE1s grandes. Es importante saber que esta toxina no se elimina por ninguna t\xE9cnica de conservaci\xF3n o cocinado (congelaci\xF3n, marinado, ahumado, frito, cocido, horno o plancha). El consumo accidental por parte del ser humano de especies con altos niveles de ciguatoxina suele venir asociado con problemas gastrointestinales, cardiovasculares y neurol\xF3gicos. La ciguatera es una intoxicaci\xF3n t\xEDpica de las \xE1reas tropicales y subtropicales, sin embargo, se han registrado casos en la \xFAltima d\xE9cada en Espa\xF1a y Portugal. La aparici\xF3n de esta toxina en la Regi\xF3n Macaron\xE9sica es un indicador de c\xF3mo el calentamiento global de los oc\xE9anos afecta a la seguridad alimentaria."),a=document.createElement("div");a.id="end-game";let n=document.createElement("h1"),s=document.createElement("p");s.appendChild(t);let o=document.createElement("button");o.innerHTML="Continua con tu aventura",n.appendChild(e),a.appendChild(n),a.appendChild(s),a.appendChild(o),o.addEventListener("click",()=>{this.container.parentElement.style.display="none",this.container.innerHTML="",y.dialog5()}),this.container.appendChild(a)}render(){const e=document.querySelector("#gameboard-background");e.style.background="#6EB6D6",e.style.display="flex";let t=new j,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.id="puzleContainer",a.setAttributeNS(null,"viewBox","0 0 600 600"),a.setAttributeNS(null,"width","600px"),a.setAttributeNS(null,"height","600px");var n=document.createElementNS("http://www.w3.org/2000/svg","g");n.id="guide-puzle";var s=document.createElementNS("http://www.w3.org/2000/svg","image");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/puzzle/${t.image_complete}`),s.setAttribute("width","600"),s.setAttribute("x","150"),s.setAttribute("y","20"),s.style.border="1px solid red",n.appendChild(s),a.appendChild(n),a.addEventListener("mouseup",()=>{if(t.testing()){a.replaceWith(a.cloneNode(!0));let o=document.querySelector("#guide-puzle");(o==null?void 0:o.firstChild).setAttribute("x","0"),document.querySelectorAll(".piece-puzle").forEach(l=>{let m=l.firstChild,u=parseInt(m.getAttribute("x"))-150;m.setAttribute("x",u.toString())}),this.endScreen()}}),t.image_parts.forEach((o,r)=>{var i=document.createElementNS("http://www.w3.org/2000/svg","g");i.id=r.toString(),i.classList.add("piece-puzle"),i.style.cursor="grab";var l=document.createElementNS("http://www.w3.org/2000/svg","image");l.setAttributeNS("http://www.w3.org/1999/xlink","href",`assets/puzzle/${o.img}`),l.setAttribute("width","200");let m=Math.floor(Math.random()*10)-100,u=Math.floor(Math.random()*200)+1;l.setAttribute("x",m.toString()),l.setAttribute("y",u.toString()),l.addEventListener("mousedown",d=>{o.selectedElement(d)}),l.addEventListener("mouseout",d=>{o.deselectedElement(d)}),l.addEventListener("mouseleave",d=>{o.deselectedElement(d)}),l.addEventListener("mouseup",d=>{o.deselectedElement(d),t.testing()}),l.addEventListener("touchstart",d=>{o.selectedElement(d)}),l.addEventListener("touchcancel",d=>{o.deselectedElement(d)}),l.addEventListener("touchend",d=>{if(o.deselectedElement(d),t.testing()){a.replaceWith(a.cloneNode(!0));let g=document.querySelector("#guide-puzle");(g==null?void 0:g.firstChild).setAttribute("x","0"),document.querySelectorAll(".piece-puzle").forEach(b=>{let h=b.firstChild,A=parseInt(h.getAttribute("x"))-150;h.setAttribute("x",A.toString())}),this.endScreen()}}),i.appendChild(l),a.appendChild(i)}),this.container.appendChild(a)}selectedItem(e){let t=e.target,a=0,n=0;window.TouchEvent&&e instanceof MouseEvent?(a=e.clientX,n=e.clientY):e instanceof TouchEvent&&(a=e.touches[0].clientX,n=e.touches[0].clientY);let s=parseFloat(t.getAttribute("x")||""),o=parseFloat(t.getAttribute("y")||"");t.addEventListener("mousemove",r=>this.movement(t,r,a,n,s,o)),t.addEventListener("touchmove",r=>this.movement(t,r,a,n,s,o))}movement(e,t,a,n,s,o){let r=0,i=0;window.TouchEvent&&t instanceof MouseEvent?(r=t.clientX-a,i=t.clientY-n):t instanceof TouchEvent&&(r=t.touches[0].clientX-a,i=t.touches[0].clientY-n),e.setAttribute("x",(s+r).toString()),e.setAttribute("y",(o+i).toString()),e.addEventListener("mouseout",l=>this.deselectedItem(e)),e.addEventListener("mouseup",l=>this.deselectedItem(e))}deselectedItem(e){e.removeEventListener("mousemove",t=>{this.movement}),e.removeEventListener("mouseout",()=>{this.deselectedItem}),e.removeEventListener("mouseup",()=>{this.deselectedItem})}}class y{constructor(){}static dialog1(){document.getElementById("dialog").style.display="flex";let e="...mientras el capit\xE1n resuelve el problema del aterrizaje, ayuda a los ciudadanos a resolver el problema en sus calles y casas.",t=0,a=6e3/e.length;async function n(){t<e.length?(document.getElementById("dialog").innerHTML+=e.charAt(t),t++,setTimeout(n,a)):await(o=>new Promise(r=>setTimeout(()=>{new N().start(),document.getElementById("dialog").style.display="none"},o)))(2e3)}n()}static dialog2(){document.getElementById("dialog").innerHTML="",document.getElementById("dialog").style.display="flex";let e="Gracias a la destreza del piloto, el avi\xF3n aterriza y haces una visita gastron\xF3mica por el lugar y te da tiempo a probar los deliciosos quesos elaborados de manera artesanal y sostenible que se elaboran en todo el archipi\xE9lago de Azores.",t=0,a=6e3/e.length;function n(){t<e.length?(document.getElementById("dialog").innerHTML+=e.charAt(t),t++,setTimeout(n,a)):(c.move2(),setTimeout(()=>{C.dialog2(),document.getElementById("dialog").style.display="none"},4e3))}n()}static dialog3(){document.getElementById("dialog").innerHTML="",document.getElementById("dialog").style.display="flex";let e=" No disponemos a salir para nuestro pr\xF3ximo destino, pero en las noticias anuncian una nueva entrada de calima. Es la en\xE9sima intrusi\xF3n de polvo sahariano que viven las Islas en lo que va de a\xF1o. El avi\xF3n no podr\xE1 aterrizar en las Islas Canarias por poca visibilidad por lo que debemos continuar nuestro viaje en barco",t=0,a=6e3/e.length;c.move3();function n(){t<e.length?(document.getElementById("dialog").innerHTML+=e.charAt(t),t++,setTimeout(n,a)):setTimeout(()=>{C.dialog3(),document.getElementById("dialog").style.display="none"},2e3)}n()}static dialog4(){document.getElementById("dialog").innerHTML="",document.getElementById("dialog").style.display="flex";let e=" ... para continuar nuestro viaje debes ayudar a la doctora a emitir el diagn\xF3stico, \xBFCu\xE1l ser\xE1 la causa de la enfermedad de los pasajeros? \xBFQu\xE9 habr\xE1n comido?",t=0,a=6e3/e.length;function n(){t<e.length?(document.getElementById("dialog").innerHTML+=e.charAt(t),t++,setTimeout(n,a)):setTimeout(()=>{new X().start(),document.getElementById("dialog").style.display="none"},2e3)}n()}static dialog5(){document.getElementById("dialog").innerHTML="",document.getElementById("dialog").style.display="flex";let e="La doctora tiene la intoxicaci\xF3n controlada y todos los pasajeros se encuentran ya en buen estado de salud por lo que se decide continuar el viaje hasta nuestro \xFAltimo destino, Cabo Verde!",t=0,a=6e3/e.length;function n(){t<e.length?(document.getElementById("dialog").innerHTML+=e.charAt(t),t++,setTimeout(n,a)):(c.move4(),setTimeout(()=>{y.dialog6(),document.getElementById("dialog").style.display="none"},4e3))}n()}static dialog6(){document.getElementById("dialog").innerHTML="",document.getElementById("dialog").style.display="flex";let e="Llegamos a nuestro destino final!",t=0,a=6e3/e.length;c.move4();function n(){t<e.length?(document.getElementById("dialog").innerHTML+=e.charAt(t),t++,setTimeout(n,a)):(C.dialog4(),document.getElementById("dialog").style.display="none")}n()}static dialog7(){document.getElementById("dialog").innerHTML="",document.getElementById("dialog").style.display="flex";let e=`
        El cambio clim\xE1tico es uno de los grandes desaf\xEDos a los que debemos enfrentarnos sin demora, tras el recorrido en la Macaronesia has podido observar algunos efectos del cambio clim\xE1tico. \xBFCu\xE1nto saber sobre el tema? Te retamos a que pongas a pruebas tus conocimientos sobre la materia, \xA1seguro que descubres cosas nuevas!        `,t=0,a=6e3/e.length;function n(){t<e.length?(document.getElementById("dialog").innerHTML+=e.charAt(t),t++,setTimeout(n,a)):(new z().start(),document.getElementById("dialog").style.display="none")}n()}}class G extends w{constructor(){super(x.MADEIRA);this.index=0,this.line=document.createElementNS("http://www.w3.org/2000/svg","line"),this.pairList=[],this.target=null,this.lineObj=new I}endScreen(){const e=document.querySelector("#gameboard-background");e.style.backgroundImage="url(assets/map/madeira_2.png)",e.style.backgroundRepeat="no-repeat";let t=document.createTextNode("Reto Conseguido"),a=document.createTextNode("El planeta se est\xE1 calentando, est\xE1 aumentando la temperatura promedio y van a ser cada vez m\xE1s frecuentes los eventos extremos: olas de calor y momentos de mucho fr\xEDo. Las Olas de Calor son episodios de temperaturas extremas muy altas que pueden tener consecuencias sobre la salud de la poblaci\xF3n: dermatitis, edemas, quemaduras, insolaci\xF3n, calambres, s\xEDncope por calor, etc"),n=document.createElement("div");n.id="end-game";let s=document.createElement("h1"),o=document.createElement("p");o.appendChild(a);let r=document.createElement("button");r.innerHTML="Continua con tu aventura",s.appendChild(t),n.appendChild(s),n.appendChild(o),n.appendChild(r),r.addEventListener("click",()=>{this.container.parentNode.style.display="none",this.container.innerHTML="",y.dialog3()}),this.container.appendChild(n)}render(){const e=document.querySelector("#gameboard-background");e.style.backgroundImage="url(assets/map/madeira_1.jpg)",e.style.display="flex";let t=new B,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.id="emojiContainer",a.setAttributeNS(null,"viewBox"," 0,0, 300,300"),a.setAttribute("width","100%");let n=document.createElementNS("http://www.w3.org/2000/svg","g");n.id="col-1",t.column1.forEach((s,o)=>{let r=s.createImage(o);r.classList.add("col-1"),r.setAttribute("x","50"),r.addEventListener("mousedown",i=>{this.addLine(i,s)}),n.appendChild(r)}),a.appendChild(n),n=document.createElementNS("http://www.w3.org/2000/svg","g"),n.id="col-2",t.column2.forEach((s,o)=>{let r=s.createImage(o);r.setAttribute("x","200"),r.classList.add("col-2"),r.addEventListener("mousedown",i=>{this.addLine(i,s)}),n.appendChild(r)}),a.appendChild(n),a.addEventListener("mouseup",()=>{if(!t.test()){document.querySelectorAll("line").length>=t.column1.length&&(this.container.removeChild(a),this.render());return}let s=a.cloneNode(!0);a.replaceWith(s),this.endScreen()}),this.container.appendChild(a)}addLine(e,t){let a=e.target;if(t.linkedValue!=null&&(document.querySelector("#emojiContainer").removeChild(t.line),t.unlink()),this.target==null){let l=a.getBBox(),m=l.x+l.width*.5,u=l.y+l.height*.5;this.lineObj.x1=m,this.lineObj.y1=u,this.target=t;return}if(this.target==t)return;if(this.target.col==t.col){this.lineObj.x1=0,this.lineObj.y1=0,this.target=null;return}let n=a.getBBox(),s=n.x+n.width*.5,o=n.y+n.height*.5;this.lineObj.x2=s,this.lineObj.y2=o;let r=this.lineObj.createLine();this.lineObj=new I,this.target.link(t,r),this.target=null,document.querySelector("#emojiContainer").appendChild(r)}}class C{static dialog1(){let e="Pasajeros debido a fuertes turbulencias no podemos aterrizar en el Azores. Un fuerte temporal con lluvias torrenciales y vendavales azota las islas y han dejado importantes consecuencias tanto en las calles como en las casas de la ciudad",t=0,a=4e3/e.length,n=document.getElementById("dialog-container");n.style.display="flex";let s=document.getElementById("dialog-character");s.src="assets/map/pilot.png";let o=document.getElementById("dialog-msg");function r(){if(t<e.length){let i=o.firstChild;i.innerHTML+=e.charAt(t),t++,setTimeout(r,a)}else{let i=document.createElement("button");i.innerHTML="Continuar >>",i.addEventListener("click",()=>{y.dialog1(),c.move1(),n.style.display="none",o.removeChild(i)}),o.appendChild(i)}}r()}static dialog2(){let e="Madeira atraviesa por una fuerte ola de calor beban mucha agua y si planean hacer senderismo informense  sobre las alertas que emiten las autoridades locales por las altas temperaturas.",t=document.getElementById("dialog-container");t.style.display="flex";let a=0,n=4e3/e.length,s=document.getElementById("dialog-character");s.src="assets/map/pilot.png";let o=document.getElementById("dialog-msg");o.firstChild.innerHTML="";function r(){if(a<e.length){let i=o.firstChild;i.innerHTML+=e.charAt(a),a++,setTimeout(r,n)}else{let i=document.createElement("button");i.innerHTML="Continuar >>",i.addEventListener("click",()=>{t.style.display="none",new G().start(),o.removeChild(i)}),o.appendChild(i)}}r()}static dialog3(){let e="Se\xF1ores pasajeros, es mi deber informarles que hay varios pasajeros que enfermaron por algo que comieron, hemos solicitado su traslado al hospital m\xE1s cercano. Les mantendremos informados ...",t=document.getElementById("dialog-container");t.style.display="flex";let a=0,n=4e3/e.length,s=document.getElementById("dialog-character");s.src="assets/map/doctor.png";let o=document.getElementById("dialog-msg");o.firstChild.innerHTML="";function r(){if(a<e.length){let i=o.firstChild;i.innerHTML+=e.charAt(a),a++,setTimeout(r,n)}else{let i=document.createElement("button");i.innerHTML="Continuar >>",i.addEventListener("click",()=>{t.style.display="none",y.dialog4(),o.removeChild(i)}),o.appendChild(i)}}r()}static dialog4(){let e="Se\xF1ores pasajeros hemos llegado a nuestro destino, el cielo esta despejado y tenemos una temperatura ambiente de 22\xBAC. No dejen de visitar la playa de Santa Mar\xEDa en la Isla de Sal, ni la ciudad de Mindelo en la isla de San Vicente, capital cultural de este maravilloso pa\xEDs.",t=document.getElementById("dialog-container");t.style.display="flex";let a=0,n=4e3/e.length,s=document.getElementById("dialog-character");s.src="assets/map/captain.png";let o=document.getElementById("dialog-msg");o.firstChild.innerHTML="";function r(){let i=o.firstChild;if(a<e.length)i.innerHTML+=e.charAt(a),a++,setTimeout(r,n);else{let l=document.createElement("button");l.innerHTML="Continuar >>",l.addEventListener("click",()=>{t.style.display="none",y.dialog7(),o.removeChild(l)}),o.appendChild(l)}}r()}static dialog5(){let e="Has ganado el juego de mesa *. Juega con tus amigos o en familia y aprende m\xE1s sobre c\xF3mo adaptarnos al Cambio Clim\xE1tico.",t=document.getElementById("dialog-container");t.style.display="flex";let a=0,n=4e3/e.length,s=document.getElementById("dialog-character");s.src="assets/map/actua_portada.jpg";let o=document.getElementById("dialog-msg");o.firstChild.innerHTML="";function r(){let i=o.firstChild;a<e.length?(e.charAt(a)=="*"?i.innerHTML+='<b>"Actua"</b>':i.innerHTML+=e.charAt(a),a++,setTimeout(r,n)):i.innerHTML+='<a href="https://drive.google.com/drive/folders/1sgQphduludSsMgyONvBex3TnNKFfHQoH?usp=sharing">Descarga el Juego</a>'}r()}}class V{constructor(e){this.img=e}start(){}end(){}}class U extends V{constructor(){super(T.INITIAL);this.areas=document.querySelector("map"),this.azoresArea=document.querySelector("#azores"),this.madeiraArea=document.querySelector("#madeira"),this.canariasArea=document.querySelector("#canarias"),this.caboVerdeArea=document.querySelector("#cabo-verde"),this.azoresGameRender=new N;let e=document.querySelector("#img-map");e.src=this.img}start(){let e=document.querySelector("#img-map");e.src=this.img;let t=document.createElement("div");t.id="intro",t.innerHTML=`
                <p>
                    Las islas debido a su situaci\xF3n geogr\xE1fica, son los territorios m\xE1s expuestos y vulnerables a los efectos del cambio clim\xE1tico. El aumento de temperatura, las variaciones en la precipitaci\xF3n y la elevaci\xF3n del nivel del mar son tres de las consecuencias m\xE1s destacadas de este cambio clim\xE1tico. Este es el caso de la regi\xF3n Macaron\xE9sica, en la que se encuentran los archipi\xE9lagos de Azores, Madeira, Canarias y Cabo Verde.
                </p>
                <p>
                Comparten semejanzas, entre otras cosas, en su climatolog\xEDa y su biodiversidad lo que los hace m\xE1s vulnerables al aumento de las temperaturas, las lluvias torrenciales, la subida del nivel del mar, las sequ\xEDas prolongadas y los episodios de vientos fuertes y calimas extremas. As\xED como la actividad humana a lo largo de estos a\xF1os, ha sido el principal motor del calentamiento global y con \xE9l, el cambio en los patrones de los fen\xF3menos meteorol\xF3gicos
                </p>
                <p>
                Est\xE1 en nuestras manos <span class="black"> actuar</span> y <span class="black">adaptarnos</span> a estos cambios y contribuir con acciones cotidianas a mejorar el planeta en el que vivimos.
                </p>    

                <span class="black">Te invitamos a conocer la Macaronesia, viaja por nuestros h\xE1bitats y cambia tus h\xE1bitos</span>
                        `,t.addEventListener("click",()=>{C.dialog1(),t.style.visibility="hidden"});let a=document.querySelector("body");a==null||a.appendChild(t)}}class W{constructor(){this.settings={effects:50,music:50,name:""},this.initialMap=new U,this.storyDialog=new y,this.airplane=new c}updateSettings(e){this.settings=e}async start(){var e;let t=document.querySelector("#img-map");t.src=H,t.style.height="100vh";let a=document.createElement("button");a.innerHTML="Empezar >>",a.id="start-btn",(e=t.parentNode)===null||e===void 0||e.appendChild(a),a.addEventListener("click",()=>{c.render(),this.initialMap.start(),t.parentNode.removeChild(a)})}}let F=new W;F.start();
