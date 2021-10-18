(this["webpackJsonpfrontend-redux"]=this["webpackJsonpfrontend-redux"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},68:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(20),s=c.n(a),i=(c(42),c(22)),o=(c(43),c(5)),d=c(3),l=(c(44),c(4)),j=c(14),u=c.n(j),p=(c(68),c(0)),b=function(e){var t=e.imageUrl,c=e.name,r=e.price,n=e.description,a=e.productId;return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsx)("img",{src:t,alt:c}),Object(p.jsxs)("div",{className:"product__info",children:[Object(p.jsx)("p",{className:"info__name",children:c}),Object(p.jsxs)("p",{className:"info__description",children:[n.substring(0,100),"..."]}),Object(p.jsx)("p",{className:"info_price",children:r}),Object(p.jsx)(o.b,{to:"product/".concat(a),className:"info__button",children:"View"})]})]})},h=c(11),O=c.n(h),m=c(18),x="GET_PRODUCTS_REQUEST",f="GET_PRODUCTS_SUCCESS",_="GET_PRODUCTS_FAIL",g="GET_PRODUCTS_DETAILS_REQUEST",v="GET_PRODUCTS_DETAILS_SUCCESS",y="GET_PRODUCTS_DETAILS_FAIL",N="GET_PRODUCTS_DETAILS_RESET",S=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.getProducts})),c=t.products,n=t.loading,a=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(m.a)(O.a.mark((function e(t){var c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x}),e.next=4,u.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:f,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:_,payload:e.t0.response&&e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(p.jsxs)("div",{className:"homescreen",children:[Object(p.jsx)("h2",{className:"homescreen__title",children:"Latest Product"}),Object(p.jsx)("div",{className:"homescreen__products",children:n?Object(p.jsx)("h2",{children:"Loading..."}):a?Object(p.jsx)("h2",{children:a}):c.map((function(e){return Object(p.jsx)(b,{productId:e._id,name:e.name,price:e.price,description:e.description,imageUrl:e.imageUrl},e._id)}))})]})},I=c(15),k=(c(75),"ADD_TO_CART"),C="REMOVE_FROM_CART",T=function(e,t){return function(){var c=Object(m.a)(O.a.mark((function c(r,n){var a,s;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,u.a.get("api/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:k,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},E=function(e){var t=e.match,c=e.history,n=Object(r.useState)(1),a=Object(i.a)(n,2),s=a[0],o=a[1],d=Object(l.b)(),j=Object(l.c)((function(e){return e.getProductDetails})),b=j.loading,h=j.error,x=j.product;Object(r.useEffect)((function(){var e;x&&t.params.id!==x._id&&d((e=t.params.id,function(){var t=Object(m.a)(O.a.mark((function t(c){var r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:g}),t.next=4,u.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:v,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:y,payload:t.t0.response&&t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[d,t,x]);return Object(p.jsx)("div",{className:"productscreen",children:b?Object(p.jsx)("h2",{children:"Loading..."}):h?Object(p.jsx)("h2",{children:h}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"productscreen__left",children:[Object(p.jsx)("div",{className:"left__image",children:Object(p.jsx)("img",{src:x.imageUrl,alt:x.name})}),Object(p.jsxs)("div",{className:"left__info",children:[Object(p.jsx)("p",{className:"left__name",children:x.name}),Object(p.jsxs)("p",{children:["Price: $",x.price]}),Object(p.jsxs)("p",{children:["Description: ",x.description]})]})]}),Object(p.jsx)("div",{className:"productscreen__right",children:Object(p.jsxs)("div",{className:"right__info",children:[Object(p.jsxs)("p",{children:["Price:",Object(p.jsxs)("span",{children:["$",x.price]})]}),Object(p.jsxs)("p",{children:["Status:",Object(p.jsx)("span",{children:x.countInStock>0?"In Stock":"Out of Stock"})]}),Object(p.jsxs)("p",{children:["Qty",Object(p.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:Object(I.a)(Array(x.countInStock).keys()).map((function(e){return Object(p.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(p.jsx)("p",{children:Object(p.jsx)("button",{type:"button",onClick:function(){d(T(x._id,s)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},w=(c(76),c(77),function(e){var t=e.item,c=e.qtyChangeHandler,r=e.removeHandler;return Object(p.jsxs)("div",{className:"cartitem",children:[Object(p.jsx)("div",{className:"cartitem_image",children:Object(p.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(p.jsx)(o.b,{to:"product/".concat(t.product),className:"cartitem__name",children:Object(p.jsx)("p",{children:t.name})}),Object(p.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(p.jsx)("select",{className:"cartitem__select",value:t.qty,onChange:function(e){return c(t.product,e.target.value)},children:Object(I.a)(Array(t.countInStock).keys()).map((function(e){return Object(p.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(p.jsx)("button",{className:"cartitem__deleteBtn",onClick:function(){return r(t.product)},children:Object(p.jsx)("i",{className:"fas fa-trash"})})]})}),D=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cart})).cartItems,c=function(t,c){e(T(t,c))},r=function(t){e(function(e){return function(t,c){t({type:C,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(p.jsxs)("div",{className:"cartscreen",children:[Object(p.jsxs)("div",{className:"cartscreen__left",children:[Object(p.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(p.jsxs)("div",{children:["Your cart is empty ",Object(p.jsx)(o.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(p.jsx)(w,{item:e,qtyChangeHandler:c,removeHandler:r},e.product)}))]}),Object(p.jsxs)("div",{className:"cartscreen__right",children:[Object(p.jsxs)("div",{className:"cartscreen__info",children:[Object(p.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(p.jsxs)("p",{children:["$",t.reduce((function(e,t){return Number(t.price*t.qty)+e}),0).toFixed(2)]})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Proceed To Checkout"})})]})]})},U=(c(78),function(e){var t=e.click,c=Object(l.c)((function(e){return e.cart})).cartItems;return Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)("div",{className:"navbar__logo",children:Object(p.jsx)("h2",{children:"MERN Shopping Cart"})}),Object(p.jsxs)("ul",{className:"navbar__links",children:[Object(p.jsx)("li",{children:Object(p.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(p.jsx)("i",{className:"fas fa-shopping-cart"}),Object(p.jsxs)("span",{children:["Cart",Object(p.jsx)("span",{className:"cartlogo__badge",children:c.reduce((function(e,t){return e+Number(t.qty)}),0)})]})]})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/",children:"Shop"})})]}),Object(p.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})]})}),P=(c(79),function(e){var t=e.show,c=e.click;return t&&Object(p.jsx)("div",{className:"backdrop",onClick:c})}),R=(c(80),function(e){var t=["sidedrawer"];e.show&&t.push("show");var c=Object(l.c)((function(e){return e.cart})).cartItems;return Object(p.jsx)("div",{className:t.join(" "),children:Object(p.jsxs)("ul",{className:"sidedrawer__links",onClick:onclick,children:[Object(p.jsx)("li",{children:Object(p.jsxs)(o.b,{to:"/cart",children:[Object(p.jsx)("i",{className:"fas fa-shopping-cart"}),Object(p.jsxs)("span",{children:["Cart ",Object(p.jsx)("span",{className:"sidedrawer_cartbadge",children:c.reduce((function(e,t){return e+Number(t.qty)}),0)})]})]})}),Object(p.jsx)("li",{children:Object(p.jsx)(o.b,{to:"/",children:"Shop"})})]})})});var A=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(p.jsxs)(o.a,{children:[Object(p.jsx)(U,{click:function(){return n(!0)}}),Object(p.jsx)(R,{show:c,click:function(){return n(!1)}}),Object(p.jsx)(P,{show:c,click:function(){return n(!1)}}),Object(p.jsx)("main",{children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(d.a,{exact:!0,path:"/product/:id",component:E}),Object(p.jsx)(d.a,{exact:!0,path:"/cart",component:D})]})})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},F=c(19),q=c(36),G=c(37),J=c(12),M=Object(F.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(J.a)(Object(J.a)({},e),{},{cartItems:[].concat(Object(I.a)(e.cartItems),[c])});case C:return Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0,products:[]};case f:return{loading:!1,products:t.payload};case _:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0};case v:return{loading:!1,product:t.payload};case y:return{loading:!1,error:t.payload};case N:return{product:{}};default:return e}}}),B=[q.a],H={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},$=Object(F.createStore)(M,H,Object(G.composeWithDevTools)(F.applyMiddleware.apply(void 0,B)));s.a.render(Object(p.jsx)(l.a,{store:$,children:Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(A,{})})}),document.getElementById("root")),L()}},[[81,1,2]]]);
//# sourceMappingURL=main.aa9435c5.chunk.js.map