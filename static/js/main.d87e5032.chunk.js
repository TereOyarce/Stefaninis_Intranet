(this.webpackJsonpstefaninis_intranet=this.webpackJsonpstefaninis_intranet||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(28),l=t.n(c),i=t(45),o=t(17),s=t(16),m=(t(70),t(12)),u=(t(71),t(22)),d=function(e){var a=e.word,t=e.inputClass,c=Object(n.useState)(""),l=Object(m.a)(c,2),i=l[0],o=l[1],s=Object(n.useState)([]),u=Object(m.a)(s,2),d=u[0],p=u[1],E=Object(n.useState)(!0),g=Object(m.a)(E,2),b=g[0],f=g[1];return r.a.createElement("div",{className:"container-search"},r.a.createElement("input",{type:"text",placeholder:"   \xbfQu\xe9 est\xe1s buscando?",className:t,value:i,onChange:function(e){var t=e.target.value,n=[];t.length>0&&(n=a.sort().filter((function(e){return e.toLowerCase().includes(t.toLowerCase())})),f(0!==n.length)),p(n),o(t)}}),0!==d.length||""===i||b?r.a.createElement("ul",null,d.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("li",{onClick:function(){return a=e,console.log(a),o(a),void p([]);var a}},e),a!==d.length-1&&r.a.createElement("hr",null))}))):r.a.createElement("p",null,"Intenta con otro concepto"))},p=t(29),E=t.n(p),g=function(){var e=["stefanini","premios","roles","chapters","people and culture","administracion","finanzas","soporte","beneficios","convenios","seguros","reembolso","vidacamara","caja los andes","acsendo","academia","mentoring","trabajo","postular","kenoby","yammer","skill mapping"];return r.a.createElement("div",{className:"container-navbar"},r.a.createElement("div",{className:"container-gradient"},r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"container-logo"},r.a.createElement("img",{src:E.a,alt:"Stefanini",className:"logo-navbar"}))),r.a.createElement("button",{className:"category",onClick:function(){return window.open("http://verticales.inetcloud.cl:8082/rrhh/login.aspx")}},"RRHH"),r.a.createElement(s.b,{to:"/links"},r.a.createElement("button",{className:"category"},"Recursos")),r.a.createElement(s.b,{to:"/benefits"},r.a.createElement("button",{className:"category"},"Beneficios")),r.a.createElement(s.b,{to:"/insurance"},r.a.createElement("button",{className:"category"},"Seguro")),r.a.createElement(s.b,{to:"/vacancies"},r.a.createElement("button",{className:"category"},"Vacantes")),r.a.createElement(d,{word:e,inputClass:"input-1"}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn-bars",onClick:function(){return document.getElementById("category-menu").style.display="block"}},r.a.createElement(u.a,{icon:"feather:menu",color:"white",height:"30",rotate:2,hFlip:!0,vFlip:!0})))),r.a.createElement("div",{id:"category-menu"},r.a.createElement("div",{className:"close"},r.a.createElement("button",{className:"btn-close",onClick:function(){return document.getElementById("category-menu").style.display="none"}},r.a.createElement(u.a,{icon:"eva:close-fill",color:"#0b1641",height:"30",rotate:2,hFlip:!0,vFlip:!0}))),r.a.createElement("div",{className:"links-navbar"},r.a.createElement("button",{className:"category-3",onClick:function(){return window.open("http://verticales.inetcloud.cl:8082/rrhh/login.aspx")}},"RRHH")),r.a.createElement("div",{className:"links-navbar"},r.a.createElement(s.b,{to:"/links"},r.a.createElement("button",{className:"category-3"},"Recursos"))),r.a.createElement("div",{className:"links-navbar"},r.a.createElement(s.b,{to:"/benefits"},r.a.createElement("button",{className:"category-3"},"Beneficios"))),r.a.createElement("div",{className:"links-navbar"},r.a.createElement(s.b,{to:"/insurance"},r.a.createElement("button",{className:"category-3"},"Seguro"))),r.a.createElement("div",{className:"links-navbar"},r.a.createElement(s.b,{to:"/vacancies"},r.a.createElement("button",{className:"category-3"},"Vacantes"))),r.a.createElement("div",null,r.a.createElement(d,{word:e,inputClass:"input-2"}))))},b=(t(79),function(){return r.a.createElement("div",{className:"container-links"},r.a.createElement("div",{className:"header-link"},r.a.createElement("h1",null,"Recursos"),r.a.createElement("p",null,"\xa1Encuentra aqu\xed accesos directos a las p\xe1ginas que necesitas!")),r.a.createElement("div",{className:"body-links"},r.a.createElement("div",{className:"card-container"},r.a.createElement("a",{target:"_blank",href:"https://stefanini.konviva.com.br/lms/#/home"},r.a.createElement("div",{className:"overlay"},r.a.createElement("p",null,"Plataforma de Aprendizaje Corporativo impartido por Stefaniners para Stefaniners.")),r.a.createElement("div",{className:"title-box"},r.a.createElement("h2",null,"ACADEMIA")))),r.a.createElement("div",{className:"card-container"},r.a.createElement("a",{target:"_blank",href:"https://hr.acsendo.com/results/admin"},r.a.createElement("div",{className:"overlay"},r.a.createElement("p",null,"Somos una plataforma integral de Recursos Humanos para evaluar el desempe\xf1o, aumentar el engagement y desarrollar las habilidades de los colaboradores.")),r.a.createElement("div",{className:"title-box"},r.a.createElement("h2",null,"ASCENDO")))),r.a.createElement("div",{className:"card-container"},r.a.createElement("a",{target:"_blank",href:"https://mentoring.stefanini.io/#/login"},r.a.createElement("div",{className:"overlay"},r.a.createElement("p",null,"Plataforma que permite a todos los colaboradores la transmisi\xf3n informal del conocimiento a trav\xe9s de mentor\xedas, que suman al desarrollo profesional de quien lo recibe.")),r.a.createElement("div",{className:"title-box"},r.a.createElement("h2",null,"MENTORING")))),r.a.createElement("div",{className:"card-container"},r.a.createElement("a",{target:"_blank",href:"https://integra.stefanini.com/portal/0103PROD/PortalSkillMapping#"},r.a.createElement("div",{className:"overlay"},r.a.createElement("p",null,"Nuestro Mapa de Talento LATAM.")),r.a.createElement("div",{className:"title-box"},r.a.createElement("h2",null,"SKILL MAPPING")))),r.a.createElement("div",{className:"card-container"},r.a.createElement("a",{target:"_blank",href:"https://web.yammer.com/main/feed"},r.a.createElement("div",{className:"overlay"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),r.a.createElement("div",{className:"title-box"},r.a.createElement("h2",null,"YAMMER"))))))}),f=(t(80),t(33)),v=function(){var e=f.beneficios;console.log(e);var a=Object(n.useState)(f.beneficios),t=Object(m.a)(a,2),c=t[0],l=t[1];return r.a.createElement("div",{className:"container-benefits"},r.a.createElement("div",{className:"header-benefits"},r.a.createElement("h1",null,"Beneficios"),r.a.createElement("div",null,r.a.createElement("li",{onClick:function(){l(e)}}," Beneficios corporativos"),r.a.createElement("li",{onClick:function(){l(f.convenios)}},"Convenios"),r.a.createElement("li",{onClick:function(){l(f.descuentos)}},"Descuentos"),r.a.createElement("li",{onClick:function(){l(f.dudas)}},"Dudas y consultas"))),r.a.createElement("div",{className:"body-benefits"},r.a.createElement("div",null,c.map((function(e){return r.a.createElement("div",{key:e.id,className:"pdfImages-container"},r.a.createElement("h3",{className:"pdfImages-name"},e.name),r.a.createElement("img",{src:e.img,width:"70%",className:"screenCapture",alt:"..."}))})))))},h=(t(81),t(52)),N=t.n(h),y=t(53),j=t.n(y),O=t(54),C=t.n(O),S=t(55),k=t.n(S),A=(t(82),t(56)),w=t.n(A),R=function(e){var a=e.ytId,t=Object(n.useState)(!1),c=Object(m.a)(t,2),l=c[0],i=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{channel:"youtube",autoplay:!0,isOpen:l,videoId:a,onClose:function(){return i(!1)}}),r.a.createElement("button",{className:"btn-insurance",onClick:function(){return i(!0)}},r.a.createElement(u.a,{icon:"logos:youtube-icon",height:20}),"Mira este video"))},x=t(57),I=t.n(x),L=t(58),q=t.n(L),P=t(59),D=t.n(P),M=t(60),B=t.n(M),T=function(){return r.a.createElement("div",{className:"containter-insurance"},r.a.createElement("div",{className:"header-insurance"},r.a.createElement("h1",null,"Seguros"),r.a.createElement("div",null,r.a.createElement("li",{onClick:function(){return document.querySelector(".general-insurance").style.display="",document.querySelector(".manual-insurance").style.display="none",void(document.querySelector(".refund-insurance").style.display="none")}},"Informaci\xf3n general"),r.a.createElement("li",{onClick:function(){return document.querySelector(".manual-insurance").style.display="",document.querySelector(".general-insurance").style.display="none",void(document.querySelector(".refund-insurance").style.display="none")}},"Manual del usuario"),r.a.createElement("li",{onClick:function(){return document.querySelector(".refund-insurance").style.display="",document.querySelector(".general-insurance").style.display="none",void(document.querySelector(".manual-insurance").style.display="none")}},"Reembolso"))),r.a.createElement("div",{className:"body-insurance"},r.a.createElement("div",{className:"general-insurance"},r.a.createElement("h3",null,"SEGURO COMPLEMENTARIO"),r.a.createElement("img",{src:N.a,alt:"Seguro",className:"img-insurance"}),r.a.createElement("h4",null,"Vigencia 01 de enero 2021 al 31 de diciembre de 2021."),r.a.createElement("div",{className:"p-insurance"},r.a.createElement("p",null,"Junto con saludar, nos es grato contarte que, en una permanente b\xfasqueda por mejorar nuestros beneficios , hemos renovado el Programa de Seguro Complementario de Vida y Salud , con la participacio\u0301n de la compa\xf1\xeda Vida C\xe1mara.")),r.a.createElement("h4",null,"Dentro de este folleto encontrar\xe1s:"),r.a.createElement("li",null,"Tu plan de cobertura"),r.a.createElement("li",null,"Convenios y beneficios de salud"),r.a.createElement("button",{className:"btn-insurance",onClick:function(){return window.open(I.a)}},"Lee m\xe1s ",r.a.createElement(u.a,{icon:"vscode-icons:file-type-pdf",height:50})),r.a.createElement("h4",null,"Si a\xfan tienes dudas sobre c\xf3mo leer tu seguro de salud"),r.a.createElement(R,{ytId:"m5NV2tYLEpo"})),r.a.createElement("div",{className:"manual-insurance",style:{display:"none"}},r.a.createElement("h3",null,"MANUAL DEL USUARIO"),r.a.createElement("img",{src:C.a,alt:"Seguro",className:"img-insurance"}),r.a.createElement("div",{className:"p-insurance"},r.a.createElement("p",null,"Este manual tiene por objetivo entregarte informaci\xf3n de c\xf3mo hacer uso de tu seguro complementario de salud."),r.a.createElement("p",null,"Este seguro complementa la cobertura entregada por el sistema de salud previsional de cada beneficiario, y act\xfaa una vez que la Isapre, Fonasa u otra entidad haya reembolsado un gasto m\xe9dico que se encuentre contenido en el plan de coberturas del seguro complementario Vida C\xe1mara."),r.a.createElement("p",null,"Es importante que sepas que cada plan es diferente pues est\xe1 hecho de acuerdo a las necesidades y requerimientos de cada organizaci\xf3n que contrata a Vida C\xe1mara, por eso, te invitamos a leer tu Plan de Reembolso y P\xf3liza.")),r.a.createElement("h4",null,"Manual general para asegurados:"),r.a.createElement("button",{className:"btn-insurance",onClick:function(){return window.open(q.a)}},"Lee m\xe1s ",r.a.createElement(u.a,{icon:"vscode-icons:file-type-pdf",height:40})),r.a.createElement("a",{href:"https://www.vidacamara.cl/",target:"_blank"},r.a.createElement("img",{src:j.a,alt:"Logo-VC",className:"logo-vc"}))),r.a.createElement("div",{className:"refund-insurance",style:{display:"none"}},r.a.createElement("h3",null,"REEMBOLSO"),r.a.createElement("img",{src:k.a,alt:"Seguro",className:"img-insurance"}),r.a.createElement("div",{className:"p-insurance"},r.a.createElement("p",null,"Es importante mantenerte informado respecto a los documentos que debes presentar para realizar correctamente tus solicitudes de reembolso.")),r.a.createElement("div",{className:"box-insurance"},r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Documentaci\xf3n requerida:"),r.a.createElement("button",{className:"btn-insurance",onClick:function(){return window.open(D.a)}},"Lee m\xe1s ",r.a.createElement(u.a,{icon:"vscode-icons:file-type-pdf",height:40}))),r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Pasos a paso para tu reembolso:"),r.a.createElement("button",{className:"btn-insurance",onClick:function(){return window.open(B.a)}},"Lee m\xe1s ",r.a.createElement(u.a,{icon:"vscode-icons:file-type-pdf",height:40}))),r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Aprende a usar la app de reembolso"),r.a.createElement(R,{ytId:"fQ3VMNCk9Lw"}))))))},F=t(6),V=(t(90),t(38)),U=t.n(V),G=t(34),H=function(){return r.a.createElement("div",{className:"container-sidebar"},r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"container-logo"},r.a.createElement("img",{src:E.a,alt:"Stefanini",className:"logo-navbar"}))),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:U.a,alt:"profile default",className:"img-profile"})),r.a.createElement(s.b,{to:"/profile"},r.a.createElement("div",{className:"links-sidebar"},r.a.createElement("button",{className:"category-2"},"PERFIL"))),r.a.createElement(s.b,{to:"calendar"},r.a.createElement("div",{className:"links-sidebar"},r.a.createElement("button",{className:"category-2"},"CALENDARIO"))),r.a.createElement(s.b,{to:"/auth"},r.a.createElement("div",{className:"links-sidebar"},r.a.createElement("button",Object(F.a)({onClick:function(){return Object(G.d)(Object(G.a)())},className:"category-2"},"className","link-log"),"CERRAR SESI\xd3N",r.a.createElement(u.a,{icon:"bx:bx-log-out",height:"15",rotate:2,hFlip:!0,vFlip:!0,className:"log-icon"})))))},z=t(0),_=t.n(z),K=t(13),Y=t(3),Q=(t(92),t(61)),W=t(32),X=t(36),Z=Object(Q.a)({apiKey:"AIzaSyC1DxtPpjcUGfN2-fVux5WAO8jB7K_49lE",authDomain:"stefanini-intranet.firebaseapp.com",projectId:"stefanini-intranet",storageBucket:"stefanini-intranet.appspot.com",messagingSenderId:"284259092918",appId:"1:284259092918:web:f9ccb7f90185e33f429917"}),J=Object(n.createContext)(),$=function(e){var a=Object(n.useState)(),t=Object(m.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(),o=Object(m.a)(i,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){var e=Object(W.b)(Object(W.a)(),l,u);return function(){return e()}}),[]),r.a.createElement(J.Provider,Object.assign({value:{user:c,error:s}},e))},ee=function(){var e=Object(n.useContext)(J);return Object(K.a)(Object(K.a)({},e),{},{isAuthenticated:null!=e.user})},ae=Object(X.c)(Z),te=function(){var e=Object(n.useState)("Andr\xe9s Quilodr\xe1n"),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(168547362),i=Object(m.a)(l,2),o=i[0],s=i[1],u=Object(n.useState)("Masculino"),d=Object(m.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)("05-08-1996"),b=Object(m.a)(g,2),f=b[0],v=b[1],h=Object(n.useState)("Avenida Siempre Viva #133"),N=Object(m.a)(h,2),y=N[0],j=N[1],O=Object(n.useState)("9604682"),C=Object(m.a)(O,2),S=C[0],k=C[1],A=Object(n.useState)("0"),w=Object(m.a)(A,2),R=w[0],x=w[1],I=Object(n.useState)("M"),L=Object(m.a)(I,2),q=L[0],P=L[1];return r.a.createElement("div",{className:"container-profile"},r.a.createElement("div",{className:"header-profile"},r.a.createElement("h1",null,"Mi Perfil")),r.a.createElement("div",{className:"body-profile"},r.a.createElement("div",{className:"profile-shadow"},r.a.createElement("img",{src:U.a,alt:"profile image",className:"profile-img"}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(Y.a)(_.a.mark((function e(){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t,rut:o,gender:p,birthday:f,address:y,phone:S,familiar:R,tshirt:q},n=Object(X.b)(ae,"users"),e.next=4,Object(X.a)(n,Object(K.a)({},a));case 4:r=e.sent,console.log(r.id);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){alert("Guardado correctamente")})).catch((function(e){console.log(e.message)}))}},r.a.createElement("label",null,"Nombre "),r.a.createElement("input",{type:"text",className:"input-profile",name:"name",placeholder:"Nombre",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",null,"RUT "),r.a.createElement("input",{type:"number",className:"input-profile",name:"rut",placeholder:"Rut",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("label",null,"G\xe9nero "),r.a.createElement("input",{type:"text",className:"input-profile",name:"gender",placeholder:"G\xe9nero",value:p,onChange:function(e){return E(e.target.value)}}),r.a.createElement("label",null,"Fecha de Nacimiento "),r.a.createElement("input",{type:"date",className:"input-profile",name:"birthday",placeholder:"Fecha de Nacimiento",value:f,onChange:function(e){return v(e.target.value)}}),r.a.createElement("label",null,"Direcci\xf3n "),r.a.createElement("input",{type:"text",className:"input-profile",name:"address",placeholder:"Direcci\xf3n",value:y,onChange:function(e){return j(e.target.value)}}),r.a.createElement("label",null,"Tel\xe9fono"),r.a.createElement("input",{type:"tel",className:"input-profile",name:"phone",placeholder:"Tel\xe9fono",value:S,onChange:function(e){return k(e.target.value)}}),r.a.createElement("label",null,"Carga Familiar "),r.a.createElement("input",{type:"text",className:"input-profile",name:"familiar",placeholder:"Carga Familiar",value:R,onChange:function(e){return x(e.target.value)}}),r.a.createElement("select",{name:"t-shirt",id:"t-shirt",value:q,onChange:function(e){return P(e.target.value)}},r.a.createElement("option",{value:""},"Talla de Polera"),r.a.createElement("option",{value:"s"},"S"),r.a.createElement("option",{value:"m"},"M"),r.a.createElement("option",{value:"l"},"L"),r.a.createElement("option",{value:"xl"},"XL"),r.a.createElement("option",{value:"xxl"},"XXL")),r.a.createElement("button",{type:"submit",className:"profile-button"},"GUARDAR")))))},ne=t(64),re=t(62),ce=(t(96),function(){return r.a.createElement("div",{className:"container-calendar"},r.a.createElement("div",{className:"calendar-profile"},r.a.createElement("h1",null,"Calendario")),r.a.createElement("div",{className:"body-calendar"},r.a.createElement(ne.a,{plugins:[re.a],initialView:"dayGridMonth",events:[{title:"Talent Fest!",date:"2021-10-26"},{title:"Demo Night y fin Talent Fest",date:"2021-10-27"},{title:"Birthday",date:"2021-10-28"}]})))}),le=(t(97),function(){return r.a.createElement("div",{className:"container-vacancies"},r.a.createElement("div",{className:"header-vacancies"},r.a.createElement("h1",null,"Vacantes"),r.a.createElement("p",null,"\xa1Mantente al corriente de los cargos disponibles en Stefanini Chile y LATAM!   "),r.a.createElement("button",{className:"redirec-btn",onClick:function(){return window.open("https://jobs.kenoby.com/stefaninilatam?utm_source=website")}}," \xa1Revisa Aqu\xed! ")),r.a.createElement("div",{className:"body-vacancies"},r.a.createElement("div",{className:"top-container"},r.a.createElement("h4",null,"\xbfNO ENCONTRASTE NINGUNA OPORTUNIDAD COMPATIBLE?"),r.a.createElement("p",null,"\xa1Envianos tu CV y forma parte de nuestro Base de Candidatos para futuras oportunidades!"),r.a.createElement("button",{className:"cv-btn",onClick:function(){return window.open("https://portal.kenoby.com/stefaninilatam/login?redirect=%2Fstefaninilatam%2Fcadastrar&1=1&utm_source=website&action=email")}}," ENVIAR AHORA")),r.a.createElement("div",{className:"title-container"},r.a.createElement("h2",null,"En Stefanini puedes tener muchos beneficios, como")),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Aprendizaje"),r.a.createElement("p",null,"Contamos con convenios en centros de formaci\xf3n de primera linea para que puedas contar con un entrenamiento constante.")),r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Asumir grandes desafios"),r.a.createElement("p",null,"Podras enfrentar desafios de clase mundial, compartiendo experiencias y conocimeitnos con equipos de otros paises.")),r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Generas ideas"),r.a.createElement("p",null,"Estamos atentos a las ideas que generas, estas son tenidas en cuenta para el desarrollo de tu gesti\xf3n y profesi\xf3n.")),r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Equipo global"),r.a.createElement("p",null,"Trabajamos interconectados, contamos con presencia en mas de 40 paises para que compartan sus conocimeintos.")),r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Nos interesas"),r.a.createElement("p",null,"Contamos con beneficios pensados para cuidar tu salud, con convenios para que realices actividades deportivas y una cobertura de salud pensada para tu bienestar.")))))}),ie=(t(49),t(63)),oe=t.n(ie);t(98);var se=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"carousel-container"},r.a.createElement("div",{className:"header-carousel"},r.a.createElement("h1",null,"Bienvenido al portal del Colaborador"),r.a.createElement("p",null,"Creemos en que la innovaci\xf3n tecnol\xf3gica puede desarrollarse con mentes dispuestas a romper con lo normal. Ser disruptivos es atreverse al cambio,",r.a.createElement("br",null)," co-crear y potenciar las habilidades de cada uno en conjunto, para entre todos, transformar el mundo desde adentro.")),r.a.createElement("div",{className:"body-carousel"},r.a.createElement(oe.a,{updateOnItemClick:!0,className:" updateOnItemClick",containerProps:{style:{}},activeSlideIndex:t,activeSlideProps:{style:{}},onRequestChange:c,forwardBtnProps:{children:">",style:{width:60,height:60,minWidth:60,alignSelf:"center",border:"none",background:"#16857B",borderRadius:"50%",color:"white",margin:"0.5rem",cursor:"pointer"}},backwardBtnProps:{children:"<",style:{width:60,height:60,minWidth:60,alignSelf:"center",border:"none",background:"#16857B",borderRadius:"50%",color:"white",margin:"0.5rem",cursor:"pointer"}},itemsToShow:1,speed:400},r.a.createElement("img",{src:"https://i.imgur.com/QsIG4bG.png",alt:"",onClick:function(){return window.open("http://verticales.inetcloud.cl:8082/rrhh/login.aspx")}}),r.a.createElement(s.b,{to:"/links"},r.a.createElement("img",{src:"https://i.imgur.com/Up7nDHE.png",alt:""})),r.a.createElement(s.b,{to:"/benefits"},r.a.createElement("img",{src:"https://i.imgur.com/4bkBU6v.png",alt:""})),r.a.createElement(s.b,{to:"/insurance"},r.a.createElement("img",{src:"https://i.imgur.com/2teWAFF.png",alt:""})),r.a.createElement(s.b,{to:"/vacancies"},r.a.createElement("img",{src:"https://i.imgur.com/Zo0FfPg.png",alt:""})))))},me=(t(99),function(){var e=Object(n.useCallback)(function(){var e=Object(Y.a)(_.a.mark((function e(a){var t,n,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=a.target.elements,n=t.email,r=t.password,c=Object(W.a)(),e.prev=3,e.next=6,Object(W.c)(c,n.value,r.value);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(a){return e.apply(this,arguments)}}(),[]);return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:E.a,alt:"StefaniniLogo",className:"logo-login"})),r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"glass-container"},r.a.createElement("div",{className:"form-title"},r.a.createElement("h1",null,"PORTAL DEL COLABORADOR")),r.a.createElement("br",null),r.a.createElement("form",{className:"form-input",onSubmit:e},r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Email",name:"email",type:"email"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Contrase\xf1a",name:"password",type:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"INGRESAR")),r.a.createElement("div",{className:"miniLogo-container"},r.a.createElement("img",{src:E.a,alt:"StefaniniLogo",className:"miniLogo"})))))}),ue=function(){return r.a.createElement("div",{className:"container-intranet"},r.a.createElement(s.a,null,r.a.createElement(g,null),r.a.createElement(H,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/vacancies",component:le}),r.a.createElement(o.b,{path:"/calendar",component:ce}),r.a.createElement(o.b,{path:"/profile",component:te}),r.a.createElement(o.b,{path:"/links",component:b}),r.a.createElement(o.b,{path:"/benefits",component:v}),r.a.createElement(o.b,{path:"/insurance",component:T}),r.a.createElement(o.b,{path:"/auth",component:me}),r.a.createElement(o.b,{path:"/",component:se}))))},de=["component"],pe=["component"],Ee=function(e){var a=e.component,t=Object(i.a)(e,de),n=ee().isAuthenticated;return console.log("AuthenticatedRoute: ".concat(n)),r.a.createElement(o.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(o.a,{to:"/auth"})}}))},ge=function(e){var a=e.component,t=Object(i.a)(e,pe),n=ee().isAuthenticated;return r.a.createElement(o.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(o.a,{to:"/"}):r.a.createElement(a,e)}}))};var be=function(){return r.a.createElement($,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ge,{exact:!0,path:"/auth",component:me}),r.a.createElement(Ee,{exact:!0,path:"/",component:ue}))))};t(100);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root"))},29:function(e,a,t){e.exports=t.p+"static/media/logo.eb45f3a8.png"},33:function(e){e.exports=JSON.parse('{"beneficios":[{"id":1,"name":"BENEFICIOS DEL COLABORADOR","img":"https://i.imgur.com/siHILMP.jpg"},{"id":2,"img":"https://i.imgur.com/E0RzzEb.jpg"},{"id":3,"img":"https://i.imgur.com/mP3SNHC.jpg"},{"id":4,"img":"https://i.imgur.com/NXu7xOH.jpg"},{"id":5,"img":"https://i.imgur.com/2RYbhZZ.jpg"}],"convenios":[{"id":6,"name":"SALUD Y BIENESTAR","img":"https://i.imgur.com/yKGgtcl.jpg"},{"id":7,"img":"https://i.imgur.com/D1qCHrC.jpg"},{"id":8,"img":"https://i.imgur.com/4gpwZPB.jpg"},{"id":9,"img":"https://i.imgur.com/I9puvFU.jpg"},{"id":10,"img":"https://i.imgur.com/L71UHWl.jpg"},{"id":11,"img":"https://i.imgur.com/kQbrGuD.jpg"},{"id":12,"img":"https://i.imgur.com/Tfd3X0Q.jpg"},{"id":13,"img":"https://i.imgur.com/oV7AutK.jpg"},{"id":14,"name":"EDUCACI\xd3N","img":"https://i.imgur.com/PEeiLAe.jpg"},{"id":15,"img":"https://i.imgur.com/rLUtSAe.jpg"},{"id":16,"name":"SISTEMA PREVISIONAL","img":"https://i.imgur.com/2HL6vsC.jpg"},{"id":17,"name":"BANCA Y FINANZAS","img":"https://i.imgur.com/15TSCzg.jpg"}],"descuentos":[{"id":18,"name":"DESCUENTOS Y ALIANZAS","img":"https://i.imgur.com/VDn8EWi.jpg"},{"id":19,"name":"","img":"https://i.imgur.com/9fPaHKg.jpg"},{"id":20,"name":"","img":"https://i.imgur.com/ruEYqPb.jpg"},{"id":21,"name":"","img":"https://i.imgur.com/0oIPxOw.jpg"},{"id":22,"name":"","img":"https://i.imgur.com/MpxzvOV.jpg"},{"id":23,"name":"","img":"https://i.imgur.com/UBHU5uq.jpg"},{"id":24,"name":"","img":"https://i.imgur.com/owCK66X.jpg"},{"id":25,"name":"","img":"https://i.imgur.com/h7GliIC.jpg"},{"id":26,"name":"","img":"https://i.imgur.com/LfwGRy2.jpg"}],"dudas":[{"id":27,"name":"CONT\xc1CTANOS","img":"https://i.imgur.com/PRbwBuA.jpg"}]}')},38:function(e,a,t){e.exports=t.p+"static/media/profiledefault.3e5c87e0.png"},49:function(e,a,t){},52:function(e,a,t){e.exports=t.p+"static/media/insurance.4c5effef.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/logovc.91a31799.png"},54:function(e,a,t){e.exports=t.p+"static/media/insurance2.60cdd48d.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/insurance3.b647f571.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/folleto.4fb55f6d.pdf"},58:function(e,a,t){e.exports=t.p+"static/media/manual.a030f2f9.pdf"},59:function(e,a,t){e.exports=t.p+"static/media/reembolso.f5ea117f.pdf"},60:function(e,a,t){e.exports=t.p+"static/media/infografia.f1f2a97a.pdf"},65:function(e,a,t){e.exports=t(101)},70:function(e,a,t){},71:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},90:function(e,a,t){},92:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.d87e5032.chunk.js.map