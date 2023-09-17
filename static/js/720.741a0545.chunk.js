"use strict";(self.webpackChunkcars_test=self.webpackChunkcars_test||[]).push([[720],{214:function(e,n,a){a.d(n,{Z:function(){return X}});var r=a(439),i=a(791),t={container:"CardsList_container__vyGGI",loadMoreButton:"CardsList_loadMoreButton__w0Mc8"},s=a(984),l={cardList:"Cards_cardList__dbSTW",card:"Cards_card__nqjco",favoriteButton:"Cards_favoriteButton__zEPbB",favoriteIcon:"Cards_favoriteIcon__4rjVJ",activeFavoriteIcon:"Cards_activeFavoriteIcon__LJLcw",imageWrapper:"Cards_imageWrapper__BvMfC",image:"Cards_image__YeKry",title:"Cards_title__w0R1s",model:"Cards_model__XzHkF",information:"Cards_information__1lGUS",informationList:"Cards_informationList__45R-1",learnMoreButton:"Cards_learnMoreButton__Fy9BE"};var c=a.p+"static/media/sprite.76e2dab478f05328ce92555f00a8836b.svg",o="Button_button__BcoUA",d=a(184),u=function(e){var n=e.children,a=e.onClick,r=e.additionalStyles;return(0,d.jsx)("button",{className:"".concat(o," ").concat(r),onClick:a,children:n})};function _(e){var n=e.handleClick,a=e.onData,r=e.currentPage,i=e.adverts,t=e.filterData,o=(0,s.r)(),_=o.toggleFavorite,h=o.itemStates,m=function(e,n){return e.split(",")[n].trim()},p=i.filter((function(e){return!t.brand||e.make.toLowerCase().includes(t.brand.toLowerCase())&&(!parseInt(t.price)||parseInt(e.rentalPrice.replace("$",""))<=parseInt(t.price))&&!parseInt(t.fromValue)||parseInt(t.fromValue)<=parseInt(e.mileage)&&!parseInt(t.toValue)||parseInt(e.mileage)<=parseInt(t.toValue)}));return(0,d.jsx)("ul",{className:l.cardList,children:p.slice(0,8*r).map((function(e){return(0,d.jsxs)("li",{className:l.card,children:[(0,d.jsx)("button",{className:l.favoriteButton,onClick:function(){return _(e)},children:(0,d.jsx)("svg",{width:"18",height:"18",className:" ".concat(h[e.id]?l.activeFavoriteIcon:l.favoriteIcon),children:(0,d.jsx)("use",{xlinkHref:"".concat(c,"#heart")})})}),(0,d.jsx)("div",{className:l.imageWrapper,children:(0,d.jsx)("img",{src:e.img||e.photoLink,alt:e.description,className:l.image})}),(0,d.jsxs)("div",{className:l.title,children:[(0,d.jsxs)("p",{children:[e.make," ",(0,d.jsxs)("span",{className:l.model,children:[e.model,","]})," ",e.year]}),(0,d.jsx)("span",{children:e.rentalPrice})]}),(0,d.jsxs)("div",{className:l.information,children:[(0,d.jsxs)("ul",{className:l.informationList,children:[(0,d.jsx)("li",{children:m(e.address,1)}),(0,d.jsx)("li",{children:m(e.address,2)}),(0,d.jsx)("li",{children:e.rentalCompany})]}),(0,d.jsxs)("ul",{className:l.informationList,children:[(0,d.jsx)("li",{children:e.type}),(0,d.jsx)("li",{children:e.model}),(0,d.jsx)("li",{children:e.mileage}),(0,d.jsx)("li",{style:{width:"150px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:e.functionalities[0]})]})]}),(0,d.jsx)(u,{additionalStyles:l.learnMoreButton,onClick:function(){n(),a(e)},children:"Learn more"})]},e.id)}))})}var h="Modal_backdrop__ZMv61",m="Modal_modal__dVwwO",p="Modal_closeButton__tbI8P",x="Modal_closeIcon__JC1jY",f="Modal_imageWrapper__V6AKG",j="Modal_modalImage__-GWJx",v="Modal_title__yG08f",g="Modal_information__Y6BHS",C="Modal_informationList__uPXg+",N="Modal_description__A7VrK",M="Modal_titles__tVuDF",k="Modal_accessoriesFunctionalities__1coiS",I="Modal_conditions__31snv",b="Modal_model__ALDxW",y="Modal_learnMoreButton__6ABn6",F="Modal_test__RvvPv",w=a(164),S=document.querySelector("#modal-root"),B=function(e){var n=e.openModal,a=e.car;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);var r=function(e,n){return e.split(",")[n].trim()},t=new Date;return(0,w.createPortal)((0,d.jsx)("div",{className:h,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("button",{type:"button",className:p,onClick:function(){return n()},children:(0,d.jsx)("svg",{width:"24",height:"24",className:x,children:(0,d.jsx)("use",{xlinkHref:"".concat(c,"#x")})})}),(0,d.jsx)("div",{className:f,children:(0,d.jsx)("img",{src:a.img,alt:a.description,className:j})}),(0,d.jsxs)("div",{className:F,children:[(0,d.jsx)("div",{className:v,children:(0,d.jsxs)("p",{children:[a.make," ",(0,d.jsxs)("span",{className:b,children:[a.model,","]})," ",a.year]})}),(0,d.jsxs)("div",{className:g,children:[(0,d.jsxs)("ul",{className:C,children:[(0,d.jsx)("li",{children:r(a.address,1)}),(0,d.jsx)("li",{children:r(a.address,2)}),(0,d.jsxs)("li",{children:["Id: ",a.id]}),(0,d.jsxs)("li",{children:["Year: ",a.year]}),(0,d.jsxs)("li",{children:["Type: ",a.type]})]}),(0,d.jsxs)("ul",{className:C,children:[(0,d.jsxs)("li",{children:["Fuel Consumption: ",a.fuelConsumption]}),(0,d.jsxs)("li",{children:["Engine Size: ",a.engineSize]})]})]}),(0,d.jsx)("p",{className:N,children:a.description}),(0,d.jsx)("p",{className:M,children:"Accessories and functionalities:"}),(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)("ul",{children:a.accessories.map((function(e){return(0,d.jsx)("li",{children:e},e)}))}),(0,d.jsx)("ul",{children:a.functionalities.map((function(e){return(0,d.jsx)("li",{children:e},e)}))})]}),(0,d.jsx)("p",{className:M,children:"Rental Conditions: "}),(0,d.jsxs)("div",{className:I,children:[(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:["Minimum age: ",(0,d.jsx)("span",{children:t.getFullYear()-a.year})]}),(0,d.jsx)("li",{children:"Valid driver's license"})]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Security deposite required "}),(0,d.jsxs)("li",{children:["Mileage:"," ",(0,d.jsx)("span",{children:a.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),(0,d.jsxs)("li",{children:["Price: ",(0,d.jsx)("span",{children:a.rentalPrice})]})]})]}),(0,d.jsx)("a",{href:"tel:+380730000000",target:"_blank",rel:"noreferrer noopener",children:(0,d.jsx)(u,{additionalStyles:y,children:"Rental car"})})]})]})}),S)},L=a(942),V=a(413),P="Filter_form__8wkn5",Z="Filter_searchInput__kx3Nh",D="Filter_searchIcon__92OIP",A="Filter_rotateIcon__nyYHj",E="Filter_dropDown__ryI3F",H="Filter_option__SGCAI",G="Filter_priceInput__Rc66B",R="Filter_searchPriceIcon__a5Fo4",W="Filter_rotatePriceIcon__yQ+9o",K="Filter_dropDownPrice__K0dK4",T="Filter_inputBlock__bZuAn",Y="Filter_rangeInputs__Dkvej",z="Filter_toValue__MFo8b",J="Filter_fromValue__dU1RD",O="Filter_searchButton__M1Tdc",U=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"]'),q=function(e){var n=e.setFilterData,a=(0,i.useState)(U),t=(0,r.Z)(a,2),s=t[0],l=(t[1],(0,i.useState)(!1)),o=(0,r.Z)(l,2),_=o[0],h=o[1],m=(0,i.useState)(!1),p=(0,r.Z)(m,2),x=p[0],f=p[1],j=(0,i.useState)({price:"",brand:"",fromValue:"",toValue:""}),v=(0,r.Z)(j,2),g=v[0],C=v[1],N=function(e){var n=e.target,a=n.name,r=n.value;C((0,V.Z)((0,V.Z)({},g),{},(0,L.Z)({},a,r)))},M=Array.from({length:61},(function(e,n){return 0+10*n}));return(0,d.jsxs)("form",{className:P,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"carSearch",children:"Car brand"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{type:"text",id:"carSearch",placeholder:"Enter the text",value:g.brand,onChange:N,className:Z,autoComplete:"off"}),(0,d.jsx)("svg",{width:"20",height:"20",className:"".concat(D," ").concat(_?"":A),onClick:function(){return h(!_)},children:(0,d.jsx)("use",{xlinkHref:"".concat(c,"#chevron-down")})})]}),_&&(0,d.jsx)("ul",{className:E,children:s.map((function(e){return(0,d.jsx)("li",{onClick:function(){return function(e){g.brand=e,h(!1)}(e)},className:H,children:e},e)}))})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"priceInput",children:"Price/ 1 hour"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{type:"text",id:"priceInput",name:"price",value:g.price,onChange:N,placeholder:"To $",className:G,autoComplete:"off"}),(0,d.jsx)("svg",{width:"20",height:"20",className:"".concat(R," ").concat(x?"":W),onClick:function(){return f(!x)},children:(0,d.jsx)("use",{xlinkHref:"".concat(c,"#chevron-down")})})]}),x&&(0,d.jsx)("ul",{className:K,children:M.map((function(e){return(0,d.jsx)("li",{onClick:function(){return n=e,g.price=n,void f(!1);var n},className:H,children:e},e)}))})]}),(0,d.jsxs)("div",{className:T,children:[(0,d.jsx)("label",{htmlFor:"mileageInput",children:"Car mileage / km"}),(0,d.jsxs)("div",{className:Y,children:[(0,d.jsx)("input",{type:"number",id:"mileageInput",name:"fromValue",value:g.fromValue,onChange:N,placeholder:"From",className:J,autoComplete:"off"}),(0,d.jsx)("input",{type:"number",id:"mileageInput",name:"toValue",value:g.toValue,onChange:N,placeholder:"To",className:z,autoComplete:"off"})]})]}),(0,d.jsx)(u,{type:"submit",onClick:function(e){e.preventDefault(),n(g)},additionalStyles:O,children:"Search"})]})};function X(e){var n=e.adverts,a=(0,i.useState)(),s=(0,r.Z)(a,2),l=s[0],c=s[1],o=(0,i.useState)(null),u=(0,r.Z)(o,2),h=u[0],m=u[1],p=(0,i.useState)(1),x=(0,r.Z)(p,2),f=x[0],j=x[1],v=(0,i.useState)(!0),g=(0,r.Z)(v,2),C=g[0],N=g[1],M=(0,i.useState)({price:"",brand:"",fromValue:"",toValue:""}),k=(0,r.Z)(M,2),I=k[0],b=k[1];return(0,d.jsxs)("section",{className:t.container,children:[(0,d.jsx)(q,{filterData:I,setFilterData:b}),(0,d.jsx)(_,{handleClick:function(){c(!l)},onData:function(e,n){m(e),n&&N(!0)},currentPage:f,adverts:n,filterData:I}),l&&(0,d.jsx)(B,{openModal:c,car:h}),C&&(0,d.jsx)("button",{onClick:function(){j(f+1),8*f>=50&&N(!1)},className:t.loadMoreButton,children:"Load more"})]})}},720:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});var r=a(439),i=a(214),t=a(791),s=a(184);function l(){var e=(0,t.useState)([]),n=(0,r.Z)(e,2),a=n[0],l=n[1];return(0,t.useEffect)((function(){fetch("https://648b429517f1536d65eab001.mockapi.io/adverts").then((function(e){if(!e.ok)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438: ".concat(e.status));return e.json()})).then((function(e){l(e)})).catch((function(e){console.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445:",e)}))}),[]),(0,s.jsx)(i.Z,{adverts:a})}}}]);
//# sourceMappingURL=720.741a0545.chunk.js.map