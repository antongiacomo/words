(this.webpackJsonpwords=this.webpackJsonpwords||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/logo512.8e1309ea.png"},34:function(e,t,n){e.exports=n(68)},63:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),l=n.n(o),c=n(11),s=n(9),i=n(7),u=n.n(i),d=n(13),f=n(2),m=n(4),p=n.n(m),h=(n(63),n(5)),w=n.n(h),b=n(30),g=n(32);function v(e){var t=Object(a.useState)(0),n=Object(f.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)(!1),s=Object(f.a)(c,2),i=s[0],u=s[1],d=Object(a.useState)(!1),m=Object(f.a)(d,2),p=m[0],h=m[1],w=Object(a.useRef)(),v=Object(a.useRef)();Object(g.a)(w,!0,(function(e){console.log(i),v.current&&e&&(v.current.style.left=e.left+"px",v.current.style.top=e.top+e.height+"px",v.current.style.width=e.width+"px")}));return r.a.createElement("div",null,r.a.createElement("input",{type:"text",autoComplete:"off",name:e.name,placeholder:e.placeholder,value:e.value,ref:w,className:e.className,onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()},onKeyUp:function(t){t.preventDefault(),t.persist(),h(!1),"ArrowUp"===t.key&&o-1>=0&&l(o-1),"ArrowDown"===t.key&&o+1<e.suggestions.length&&l(o+1),"Enter"===t.key&&(e.onSelect(e.suggestions[o]),u(!1),h(!0))},onChange:function(t){e.onChange(t)},onFocus:function(){return u(!0)},onBlur:function(){return u(!1)}}),r.a.createElement(b.a,null,r.a.createElement("div",{ref:v,className:"shadow absolute text-left z-10 text-black"},!p&&e.suggestions.length>0&&r.a.createElement("div",{className:"shadow border border-white bg-white text-gray-900 absolute text-left z-10 w-full h-64 overflow-auto rounded-lg"},!p&&e.suggestions.length>0&&e.suggestions.map((function(t,n){return r.a.createElement("div",{onClick:function(){e.onSelect(t),u(!1),h(!0)},className:"".concat(o===n?"bg-teal-100":""," p-2 cursor-pointer")},t)}))))))}var x=function(e){var t=e.word,n=e.handleWord,o=e.handleLoaded,l=window.$baseUrl,s=Object(a.useState)([]),i=Object(f.a)(s,2),m=i[0],b=i[1],g=Object(a.useState)(""),x=Object(f.a)(g,2),E=x[0],y=x[1],k=Object(c.useToasts)().addToast,N=function(e){y(e),n(e)};return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://www.wordreference.com/2012/autocomplete/autocomplete.aspx?dict=iten&query=".concat(E));case 2:t=e.sent,b(t.data.split("\n").map((function(e){return e.split("\t")[0]})).filter((function(e){return e.length>0})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]),r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{flipOnClick:!1,flipDirection:"horizontal"},r.a.createElement(h.FrontSide,{className:"flex items-center justify-center border w-full h-full p-4 rounded-lg shadow uppercase text-2xl",style:{height:"300px"}},r.a.createElement("form",{className:"w-full max-w-sm"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},r.a.createElement("input",{className:"hidden appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",onChange:function(e){return n(e.target.value.toLowerCase())},value:t}),r.a.createElement(v,{"aria-label":"Word",suggestions:m,value:E,placeholder:"Cerca",className:"w-full h-full border text-black appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none",onChange:function(e){return N(e.target.value)},onSelect:function(e){return N(e)}}),r.a.createElement("button",{onClick:function(){return p()(l+"/add/"+t).then((function(e){k(t+" Saved Successfully",{appearance:"success"}),o(e),N("")}))},className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"button"},"Add"),r.a.createElement("button",{className:"flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded",type:"button",onClick:function(){return N("")}},"Cancel"))))))},E=n(31),y=n.n(E);var k=function(e){var t=e.title,n=e.handleTitle,a=e.filter,o=e.handleFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex flex-no-wrap h-10 px-8"},r.a.createElement("img",{src:y.a,className:"h-full inline-block mr-2",alt:"Logo"}),r.a.createElement("input",{placeholder:"Search...",className:"w-full   h-full border py-2 px-4 rounded-lg shadow bg-transparent",onChange:function(e){return n(e.target.value.toLowerCase().split("&"))},value:t,onKeyPress:function(e){"Enter"===e.key&&(o(Object(s.a)(new Set([].concat(Object(s.a)(a),[e.target.value.toLowerCase()])))),n([""]))}})),r.a.createElement("div",{className:"flex px-8 flex-wrap space-x-2"},a.map((function(e){return r.a.createElement("span",{key:e,className:"rounded-full py-2 px-4 my-2 bg-gray-300 hover:shadow-md hover:translate-x-1"},e," ",r.a.createElement("span",{className:"ml-1 border cursor-pointer","data-value":e,onClick:function(e){return o(a.filter((function(t){return t!==e.target.dataset.value})))}},"\u2718"))}))))};function N(e){return e.trim().replace(/\u21d2/gi,"")}var j=function(e){var t,n=e.item,a=e.setLoaded,o=e.className,l=window.$baseUrl;return r.a.createElement("div",{className:o},r.a.createElement(w.a,{flipOnClick:!1,ref:function(e){return t=e},flipDirection:"horizontal"},r.a.createElement(h.FrontSide,{className:"flex items-center justify-center border w-full h-full p-4 rounded-lg shadow uppercase text-2xl",style:{height:"300px"}},r.a.createElement("div",{className:"absolute left-0 right-0 top-0 px-4 text-right"},r.a.createElement("span",{className:"text-sm cursor-pointer text-red-400",onClick:function(){return p.a.delete(l+"/remove/"+n.word).then((function(e){return a(e)}))}},"Delete")),r.a.createElement("span",{className:"cursor-pointer",onClick:function(){return t.toggle()}}," ",n.word),r.a.createElement("div",{className:"absolute bottom-0 pb-2"},r.a.createElement("span",{className:"text-teal-500 text-sm cursor-pointer",onClick:function(){return t.toggle()}},"Reveal"))),r.a.createElement(h.BackSide,{className:"border border-teal-500 w-full h-full p-4 rounded-lg shadow"},r.a.createElement("p",{className:"font-bold my-1 text-teal-300 "},n.translations[0]&&n.translations[0].title),r.a.createElement("div",{className:"flex flex-wrap space-x-2"},n.translations[0]&&n.translations[0].translations.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{key:"1".concat(e.to).concat(t)},N(e.to)),r.a.createElement("p",{key:"2".concat(e.to).concat(t)},"\u25cf"))}))),r.a.createElement("p",{className:"font-bold my-1 mt-2 text-teal-300"},n.translations[1]&&n.translations[1].title),n.translations[1]&&n.translations[1].translations.map((function(e,t){return r.a.createElement("p",{key:"3".concat(e.to).concat(t)},N(e.from)," \u2b95 ",N(e.to))})),r.a.createElement("div",{className:"absolute left-0 bottom-0 pb-2 w-full flex justify-center"},r.a.createElement("span",{className:"text-teal-500 text-sm cursor-pointer uppercase text-center",onClick:function(){return t.toggle()}},"UnReveal")))))};var O=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)([""]),c=Object(f.a)(l,2),i=c[0],m=c[1],h=Object(a.useState)([]),w=Object(f.a)(h,2),b=w[0],g=w[1],v=Object(a.useState)([]),E=Object(f.a)(v,2),y=E[0],N=E[1],O=Object(a.useState)(""),C=Object(f.a)(O,2),S=C[0],L=C[1],W=window.$baseUrl;return Object(a.useEffect)((function(){var e={headers:{"Access-Control-Allow-Origin":"*"}};(function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()(W+"/mywords",e);case 2:n=t.sent,o(n.data.reverse()),N("");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[S,W]),r.a.createElement("div",{className:"py-6"},r.a.createElement(k,{title:i,filter:b,handleFilter:g,handleTitle:m}),r.a.createElement("div",{className:"flex flex-wrap p-4"},r.a.createElement("div",{className:"xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4 relative",key:"0"},r.a.createElement(x,{word:y,handleLoaded:L,handleWord:N})),n.filter((function(e){return function(e){return[].concat(Object(s.a)(i),Object(s.a)(b)).map((function(t){return e.word.toLowerCase().includes(t)})).some((function(e){return e}))}(e)})).map((function(e,t){return r.a.createElement(j,{className:"xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-4 relative",item:e,key:"".concat(e.word).concat(t),setLoaded:L})}))))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}window.$baseUrl=null!=="https://wr.v2.moon-cloud.eu"?"https://wr.v2.moon-cloud.eu":"http://localhost:3000",l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.ToastProvider,{autoDismiss:!0,autoDismissTimeout:2e3,placement:"bottom-center"},r.a.createElement(O,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/words",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/words","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.1dd6f9c5.chunk.js.map