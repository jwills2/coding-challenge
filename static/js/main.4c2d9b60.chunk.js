(this["webpackJsonpcoding-challenge"]=this["webpackJsonpcoding-challenge"]||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(6),u=(a(25),a(5)),s=a(8);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),f=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),p=function(e){var t=e.svgRef,a=e.title,n=m(e,["svgRef","title"]);return r.a.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,h,f)},g=r.a.forwardRef((function(e,t){return r.a.createElement(p,i({svgRef:t},e))})),E=(a.p,a(26),function(){var e=Object(u.g)().searchTerm,t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(u.f)();return r.a.createElement("form",{className:"search-bar",onSubmit:function(t){t.preventDefault(),c&&c!==e&&o.push("/coding-challenge/search/".concat(c),[c])},autoComplete:"off"},r.a.createElement("input",{className:"search-bar__input-field",name:"searchTerm",type:"search",value:c,onChange:function(e){return l(e.target.value)},placeholder:"I'm looking for..."}),r.a.createElement("button",{type:"submit",className:"search-bar__search-button"},r.a.createElement(g,{className:"search-bar__search-icon"})))});a(32);var b=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__inner-container"},r.a.createElement(o.b,{to:"/coding-challenge",className:"header__logo"},"Logo"),r.a.createElement(E,null)))},d=a(13),v=a.n(d),O=a(19),_=(a(34),function(e){var t=e.name,a=e.imageUrl,n=e.imageAlt;return r.a.createElement("article",{className:"product-listing"},r.a.createElement("img",{src:a,className:"product-listing__image",alt:n}),r.a.createElement("h2",{className:"product-listing__name"},t))}),j=(a(35),"https://cors-anywhere.herokuapp.com/"),y="http://www.mec.ca/api/v1/products/search?keywords=";var w=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),m=i[0],h=i[1],f=Object(n.useState)(!1),p=Object(s.a)(f,2),g=p[0],E=p[1],b=Object(u.g)().searchTerm;Object(n.useEffect)((function(){(function(){var e=Object(O.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,E(!1),e.next=5,fetch("".concat(j).concat(y).concat(b));case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,l(a.products||[]),h(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),E(!0),h(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}})()()}),[b]);var d=c.map((function(e){return r.a.createElement(_,{key:e.product_code,name:e.full_name,imageUrl:e.default_image_urls.main_image_url,imageAlt:e.name})}));return m?r.a.createElement("p",null,'Searching for "',b,'"'):g?r.a.createElement("p",null,'An error occured when searching for "',b,'"'):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,'Search results for "',b,'"'),r.a.createElement("p",null,d.length," products found"),d.length>0&&r.a.createElement("section",{className:"search-results__product-list"},d))};a(36);var N=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/coding-challenge/search/:searchTerm"},r.a.createElement(b,null),r.a.createElement("main",{className:"content"},r.a.createElement(w,null))),r.a.createElement(u.a,{path:"/"},r.a.createElement(b,null),r.a.createElement("main",{className:"content"},r.a.createElement("h1",null,"MEC Product Search"),r.a.createElement("p",{className:"content__heading-begin"},"Enter a search term above to begin"))))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4c2d9b60.chunk.js.map