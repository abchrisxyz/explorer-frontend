(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[8],{379:function(e,t,n){var r=n(407),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},380:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},384:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},386:function(e,t,n){var r=n(390),a=n(436),o=n(437),u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?a(e):o(e)}},390:function(e,t,n){var r=n(379).Symbol;e.exports=r},391:function(e,t,n){var r=n(386),a=n(384);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},398:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r="assets/tokenid/issuingBox",a="/dex/tokens/tokenid/unspentSellOrders",o="/dex/tokens/tokenid/unspentBuyOrders",u="/assets/issuingBoxes",c="/assets/issuingBoxes/total"},407:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(13))},417:function(e,t,n){var r=n(380),a=n(454),o=n(418),u=Math.max,c=Math.min;e.exports=function(e,t,n){var i,s,l,d,f,p,m=0,b=!1,v=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=s;return i=s=void 0,m=t,d=e.apply(r,n)}function O(e){return m=e,f=setTimeout(E,t),b?y(e):d}function k(e){var n=e-p;return void 0===p||n>=t||n<0||v&&e-m>=l}function E(){var e=a();if(k(e))return j(e);f=setTimeout(E,function(e){var n=t-(e-p);return v?c(n,l-(e-m)):n}(e))}function j(e){return f=void 0,h&&i?y(e):(i=s=void 0,d)}function g(){var e=a(),n=k(e);if(i=arguments,s=this,p=e,n){if(void 0===f)return O(p);if(v)return clearTimeout(f),f=setTimeout(E,t),y(p)}return void 0===f&&(f=setTimeout(E,t)),d}return t=o(t)||0,r(n)&&(b=!!n.leading,l=(v="maxWait"in n)?u(o(n.maxWait)||0,t):l,h="trailing"in n?!!n.trailing:h),g.cancel=function(){void 0!==f&&clearTimeout(f),m=0,i=p=s=f=void 0},g.flush=function(){return void 0===f?d:j(a())},g}},418:function(e,t,n){var r=n(380),a=n(391),o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=c.test(e);return n||i.test(e)?s(e.slice(2),n?2:8):u.test(e)?NaN:+e}},436:function(e,t,n){var r=n(390),a=Object.prototype,o=a.hasOwnProperty,u=a.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(i){}var a=u.call(e);return r&&(t?e[c]=n:delete e[c]),a}},437:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},454:function(e,t,n){var r=n(379);e.exports=function(){return r.Date.now()}},460:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(93),a=n(34),o=n.n(a),u=function(e,t,n,a){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return e(Object(r.startStructFetch)(t)),o.a[n](a,u).then((function(e){return e.body||e.data})).then((function(n){if(!n)return e(Object(r.stopStructFetch)(t,n)),Promise.resolve(n);var a=n.errors||n.error;return a?(e(Object(r.stopStructFetch)(t,new Error(a))),Promise.reject(new Error(a))):(e(Object(r.stopStructFetch)(t,n)),Promise.resolve(n))})).catch((function(n){return e(Object(r.stopStructFetch)(t,n)),Promise.reject(n)}))}},800:function(e,t,n){},801:function(e,t,n){},802:function(e,t,n){},817:function(e,t,n){"use strict";n.r(t),n.d(t,"OrderBookComponent",(function(){return C}));var r=n(5),a=n(6),o=n(8),u=n(7),c=n(0),i=n.n(c),s=n(1),l=n(417),d=n.n(l),f=n(51),p=n.n(f),m=n(4),b=(n(800),n(23)),v=n(15),h=n(10),y=n(460),O=n(398),k=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"searchTokenById",value:function(t,n){return Object(y.a)(t,O.c,"get","".concat(e.apiUrl,"/assets/").concat(n,"/issuingBox"))}},{key:"unspentSellOrdersByTokenId",value:function(t,n){return Object(y.a)(t,O.e,"get","".concat(e.apiUrl,"/dex/tokens/").concat(n,"/unspentSellOrders"))}},{key:"unspentBuyOrdersByTokenId",value:function(t,n){return Object(y.a)(t,O.d,"get","".concat(e.apiUrl,"/dex/tokens/").concat(n,"/unspentBuyOrders"))}},{key:"apiUrl",get:function(){return"".concat(h.a.apiUrl)}}]),e}(),E=n(93),j={searchByTokenId:function(e){return function(t){return k.searchTokenById(t,e)}},unspentSellOrdersByTokenId:function(e){return function(t){return k.unspentSellOrdersByTokenId(t,e)}},unspentBuyOrdersByTokenId:function(e){return function(t){return k.unspentBuyOrdersByTokenId(t,e)}},resetUnspentSellOrdersByTokenId:function(){return function(e){return e(Object(E.resetStruct)(O.e))}},resetUnspentBuyOrdersByTokenId:function(){return function(e){return e(Object(E.resetStruct)(O.d))}}},g=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).inputElement=void 0,a.onInputChangedDebounced=void 0,a.onSubmit=function(e){e.preventDefault(),a.onInputChanged()},a.onInputChanged=function(){var e=a.inputElement.value,t=e?{tokenId:e}:{};if(!e||!e.trim())return a.props.resetUnspentSellOrdersByTokenId(),void a.props.resetUnspentBuyOrdersByTokenId();a.props.history.push("/order-book?".concat(p.a.stringify(t))),a.props.unspentSellOrdersByTokenId(e),a.props.unspentBuyOrdersByTokenId(e)},a.onInputChangedDebounced=d()(a.onInputChanged,500),a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=p.a.parse(this.props.location.search).tokenId,t=void 0===e?"":e;t&&t.trim()&&this.onInputChanged()}},{key:"render",value:function(){var e=this,t=p.a.parse(this.props.location.search).tokenId;return i.a.createElement("div",{className:"bi-search-by-token"},i.a.createElement("form",{action:"/order-book",onSubmit:this.onSubmit},i.a.createElement("div",{className:"bi-search__form-group"},i.a.createElement("label",{htmlFor:"tokenid"},"Token id"),i.a.createElement("input",{ref:function(t){e.inputElement=t},defaultValue:t,onChange:this.onInputChangedDebounced,name:"tokenid",id:"tokenid",type:"text",placeholder:"a0f386048df205394d28594de6b38da1877ee989ad9e25074464a71fade6053e",className:"bi-search-by-token__input"}))),i.a.createElement("div",{className:"results"}))}}]),n}(i.a.PureComponent),N=Object(b.b)(null,(function(e){return Object(v.bindActionCreators)(Object(s.a)({},j),e)}))(Object(m.o)(g)),x=(n(801),function(e){return Object(E.getStruct)(O.e)(e)}),B=function(e){return Object(E.getStruct)(O.d)(e)},I=(n(802),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(e=t.call.apply(t,[this].concat(o))).sumQuantities=function(e){return e.reduce((function(e,t){return parseFloat((e+t.price*t.quantity).toFixed(8))}),0)},e.getPercentage=function(e,t){var n=100*(e?t/e:0);return n=Math.min(n,100),n=Math.max(n,0)},e.renderSellOrders=function(t,n){var r=0;return t.map((function(t,a){return t.cumulative=r+=parseFloat((t.price*t.quantity).toFixed(8)),i.a.createElement("tr",{key:a,className:"ask"},i.a.createElement("td",null,t.price),i.a.createElement("td",null,t.quantity),i.a.createElement("td",{className:"fill-ask"},t.cumulative,i.a.createElement("span",{style:{width:e.getPercentage(n,t.cumulative)+"%"}})))}))},e.renderBuyOrders=function(t,n){var r=0;return t.map((function(t,a){return t.cumulative=r+=parseFloat((Number(t.price)*Number(t.quantity)).toFixed(8)),i.a.createElement("tr",{key:a,className:"bid"},i.a.createElement("td",null,t.price),i.a.createElement("td",null,t.quantity),i.a.createElement("td",{className:"fill-bid"},t.cumulative,i.a.createElement("span",{style:{width:e.getPercentage(n,t.cumulative)+"%"}})))}))},e}return Object(a.a)(n,[{key:"render",value:function(){var e,t,n=this.props,r=n.sellOrders,a=n.buyOrders,o=r.data||[],u=a.data||[],c=o.map((function(e){return{price:(Number(e.amount)+Number(e.outputInfo.value))/Number(e.outputInfo.assets[0].amount)/1e6,quantity:Number(e.outputInfo.assets[0].amount)}})),s=u.map((function(e){return{price:Number(e.outputInfo.value)/Number(e.tokenAmount)/1e6,quantity:Number(e.tokenAmount)}})),l=this.sumQuantities(c),d=this.sumQuantities(s),f=Math.max(l,d),p=function(e){return e.map((function(e){return Object.assign({},e)}))},m=p(c).sort((function(e,t){return e.price>t.price})),b=p(s).sort((function(e,t){return e.price<t.price}));return r.isFetching||a.isFetching?i.a.createElement("div",{className:"bi-orders"},i.a.createElement("p",null,"Loading orders...")):r.data||a.data?0===(null===(e=r.data)||void 0===e?void 0:e.length)&&0===(null===(t=a.data)||void 0===t?void 0:t.length)?i.a.createElement("div",{className:"bi-orders"},i.a.createElement("p",null,"Order book is empty")):i.a.createElement("div",{className:"bi-orders"},i.a.createElement("div",{className:"bi-orders__content"},i.a.createElement("h2",null,"Order book"),i.a.createElement("table",{className:"bi-orders__table orders-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"orders-table__th"},"Price, ERG"),i.a.createElement("th",{className:"orders-table__th"},"Quantity"),i.a.createElement("th",{className:"orders-table__th"},"ERG Amount"))),i.a.createElement("tbody",null,this.renderSellOrders(m,f).reverse()),i.a.createElement("tbody",null,this.renderBuyOrders(b,f))))):i.a.createElement("div",{className:"bi-orders"},i.a.createElement("p",null,"Need to set token id"))}}]),n}(c.PureComponent)),S=Object(b.b)((function(e){return{sellOrders:x(e),buyOrders:B(e)}}),{})(I),T=n(22),_=n(92),F=n.n(_),C=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"bi-order-book"},i.a.createElement(T.a,{id:"common.pages.order-book.title"},(function(e){return i.a.createElement(F.a,null,i.a.createElement("title",null,e))})),i.a.createElement("h1",null,i.a.createElement(T.a,{id:"components.order-book.title"})),i.a.createElement("div",{className:"bi-order-book__search"},i.a.createElement(N,null)),i.a.createElement("div",{className:"bi-order-book__orders"},i.a.createElement(S,null)))}}]),n}(c.PureComponent);t.default=C}}]);
//# sourceMappingURL=8.70f3ae6b.chunk.js.map