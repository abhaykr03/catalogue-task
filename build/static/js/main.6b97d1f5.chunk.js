(this["webpackJsonpcatalogue-task"]=this["webpackJsonpcatalogue-task"]||[]).push([[0],{65:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),r=t(16),s=t.n(r),i=t(19),d=t(3),o=t(1),l=function(){return Object(o.jsx)("div",{className:"ui fixed menu",children:Object(o.jsx)("div",{className:"ui container center",children:Object(o.jsx)("h2",{children:"Catalogue"})})})},j=t(11),u=t.n(j),b=t(17),O=t(18),h=t.n(O),p=t(9),x=function(){var e=Object(p.c)((function(e){return e.allProducts.products})).map((function(e){var c=e.id,t=e.title,n=e.image,a=e.price,r=e.category;return Object(o.jsx)("div",{className:"four wide column",children:Object(o.jsx)(i.b,{to:"/product/".concat(c),children:Object(o.jsx)("div",{className:"ui link cards",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"header",children:t}),Object(o.jsxs)("div",{className:"meta price",children:["$ ",a]}),Object(o.jsx)("div",{className:"meta",children:r})]})]})})})},c)}));return Object(o.jsx)(o.Fragment,{children:e})},m="SET_PRODUCTS",v="SELECTED_PRODUCT",f="REMOVE_SELECTED_PRODUCT",g=function(e){return{type:m,payload:e}},N=function(e){return{type:v,payload:e}},E=function(){Object(n.useEffect)((function(){t()}),[]);var e=Object(p.c)((function(e){return e}));console.log("products",e);var c=Object(p.b)(),t=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("Errors",e)}));case 2:t=e.sent,c(g(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"ui grid container",children:Object(o.jsx)(x,{})})},_=function(){var e=Object(p.c)((function(e){return e.product})),c=e.image,t=e.title,a=e.price,r=e.category,s=e.description,i=Object(d.f)().productId,l=Object(p.b)(),j=function(){var e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products/".concat(i)).catch((function(e){console.log("Error",e)}));case 2:c=e.sent,l(N(c.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return i&&""!==i&&j(),function(){l({type:f})}}),[i]),Object(o.jsx)("div",{className:"ui grid container",children:0===Object.keys(e).length?Object(o.jsx)("div",{children:"...Loading"}):Object(o.jsx)("div",{className:"ui placeholder segment",children:Object(o.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(o.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(o.jsxs)("div",{className:"middle aligned row",children:[Object(o.jsx)("div",{className:"column lp",children:Object(o.jsx)("img",{className:"ui fluid image",src:c,alt:t})}),Object(o.jsxs)("div",{className:"column rp",children:[Object(o.jsx)("h1",{children:t}),Object(o.jsx)("h2",{children:Object(o.jsxs)("a",{className:"ui teal tag label",children:["$",a]})}),Object(o.jsx)("h3",{className:"ui brown block header",children:r}),Object(o.jsx)("p",{children:s}),Object(o.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(o.jsx)("div",{className:"hidden content",children:Object(o.jsx)("i",{className:"shop icon"})}),Object(o.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})})})},w=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/",exact:!0,component:E}),Object(o.jsx)(d.a,{path:"/product/:productId",exact:!0,component:_}),Object(o.jsx)(d.a,{children:"404 Not Found!"})]})]})})},y=t(20),k=t(13),D={products:[]},T=Object(y.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;return t===m?Object(k.a)(Object(k.a)({},e),{},{products:n}):e},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case v:return Object(k.a)(Object(k.a)({},e),n);case f:return{};default:return e}}}),S=T,C=Object(y.b)(S,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p.a,{store:C,children:Object(o.jsx)(w,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.6b97d1f5.chunk.js.map