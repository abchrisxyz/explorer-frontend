(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[11],{261:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var s=i(11),n=i(12),c=i(16),a=i(15),o=i(0),r=i.n(o),l=i(18),b=i(1),d=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"bi-coin-value  u-word-wrap u-word-wrap--ellipsis",children:[this.getFormattedValue()," ",this.props.coinName?this.props.coinName:l.a.blockchain.coinName.toUpperCase()]})}},{key:"getFormattedValue",value:function(){var e=this.props.value/1e9;return e<1&&0!==e?e.toFixed(9).split("").reduceRight((function(e,t){return"0"===t&&0===e.length||e.push(t),e}),[]).reverse().join(""):e.toString()}}]),i}(r.a.PureComponent)},262:function(e,t,i){e.exports=function(){"use strict";var e=1e3,t=6e4,i=36e5,s="millisecond",n="second",c="minute",a="hour",o="day",r="week",l="month",b="quarter",d="year",u="date",h="Invalid Date",j=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(e,t,i){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(i)+e},f={s:p,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),s=Math.floor(i/60),n=i%60;return(t<=0?"+":"-")+p(s,2,"0")+":"+p(n,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var s=12*(i.year()-t.year())+(i.month()-t.month()),n=t.clone().add(s,l),c=i-n<0,a=t.clone().add(s+(c?-1:1),l);return+(-(s+(i-n)/(c?n-a:a-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:r,d:o,D:u,h:a,m:c,s:n,ms:s,Q:b}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",O={};O[x]=m;var k=function(e){return e instanceof g},v=function(e,t,i){var s;if(!e)return x;if("string"==typeof e)O[e]&&(s=e),t&&(O[e]=t,s=e);else{var n=e.name;O[n]=e,s=n}return!i&&s&&(x=s),s||!i&&x},w=function(e,t){if(k(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new g(i)},N=f;N.l=v,N.i=k,N.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var g=function(){function m(e){this.$L=v(e.locale,null,!0),this.parse(e)}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(N.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(j);if(s){var n=s[2]-1||0,c=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,c)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return N},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,t){var i=w(e);return this.startOf(t)<=i&&i<=this.endOf(t)},p.isAfter=function(e,t){return w(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<w(e)},p.$g=function(e,t,i){return N.u(e)?this[t]:this.set(i,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var i=this,s=!!N.u(t)||t,b=N.p(e),h=function(e,t){var n=N.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return s?n:n.endOf(o)},j=function(e,t){return N.w(i.toDate()[e].apply(i.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},_=this.$W,m=this.$M,p=this.$D,f="set"+(this.$u?"UTC":"");switch(b){case d:return s?h(1,0):h(31,11);case l:return s?h(1,m):h(0,m+1);case r:var x=this.$locale().weekStart||0,O=(_<x?_+7:_)-x;return h(s?p-O:p+(6-O),m);case o:case u:return j(f+"Hours",0);case a:return j(f+"Minutes",1);case c:return j(f+"Seconds",2);case n:return j(f+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var i,r=N.p(e),b="set"+(this.$u?"UTC":""),h=(i={},i[o]=b+"Date",i[u]=b+"Date",i[l]=b+"Month",i[d]=b+"FullYear",i[a]=b+"Hours",i[c]=b+"Minutes",i[n]=b+"Seconds",i[s]=b+"Milliseconds",i)[r],j=r===o?this.$D+(t-this.$W):t;if(r===l||r===d){var _=this.clone().set(u,1);_.$d[h](j),_.init(),this.$d=_.set(u,Math.min(this.$D,_.daysInMonth())).$d}else h&&this.$d[h](j);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[N.p(e)]()},p.add=function(s,b){var u,h=this;s=Number(s);var j=N.p(b),_=function(e){var t=w(h);return N.w(t.date(t.date()+Math.round(e*s)),h)};if(j===l)return this.set(l,this.$M+s);if(j===d)return this.set(d,this.$y+s);if(j===o)return _(1);if(j===r)return _(7);var m=(u={},u[c]=t,u[a]=i,u[n]=e,u)[j]||1,p=this.$d.getTime()+s*m;return N.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||h;var s=e||"YYYY-MM-DDTHH:mm:ssZ",n=N.z(this),c=this.$H,a=this.$m,o=this.$M,r=i.weekdays,l=i.months,b=function(e,i,n,c){return e&&(e[i]||e(t,s))||n[i].substr(0,c)},d=function(e){return N.s(c%12||12,e,"0")},u=i.meridiem||function(e,t,i){var s=e<12?"AM":"PM";return i?s.toLowerCase():s},j={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:N.s(o+1,2,"0"),MMM:b(i.monthsShort,o,l,3),MMMM:b(l,o),D:this.$D,DD:N.s(this.$D,2,"0"),d:String(this.$W),dd:b(i.weekdaysMin,this.$W,r,2),ddd:b(i.weekdaysShort,this.$W,r,3),dddd:r[this.$W],H:String(c),HH:N.s(c,2,"0"),h:d(1),hh:d(2),a:u(c,a,!0),A:u(c,a,!1),m:String(a),mm:N.s(a,2,"0"),s:String(this.$s),ss:N.s(this.$s,2,"0"),SSS:N.s(this.$ms,3,"0"),Z:n};return s.replace(_,(function(e,t){return t||j[e]||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(s,u,h){var j,_=N.p(u),m=w(s),p=(m.utcOffset()-this.utcOffset())*t,f=this-m,x=N.m(this,m);return x=(j={},j[d]=x/12,j[l]=x,j[b]=x/3,j[r]=(f-p)/6048e5,j[o]=(f-p)/864e5,j[a]=f/i,j[c]=f/t,j[n]=f/e,j)[_]||f,h?x:N.a(x)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return O[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),s=v(e,t,!0);return s&&(i.$L=s),i},p.clone=function(){return N.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),y=g.prototype;return w.prototype=y,[["$ms",s],["$s",n],["$m",c],["$H",a],["$W",o],["$M",l],["$y",d],["$D",u]].forEach((function(e){y[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,g,w),e.$i=!0),w},w.locale=v,w.isDayjs=k,w.unix=function(e){return w(1e3*e)},w.en=O[x],w.Ls=O,w.p={},w}()},263:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var s=i(11),n=i(12),c=i(16),a=i(15),o=i(262),r=i.n(o),l=i(0),b=i.n(l),d=(i(265),i(1)),u=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){var e=r()(this.props.timestamp);return this.props.vertical?Object(d.jsxs)("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis bi-timestamp--vertical",children:[Object(d.jsx)("span",{className:"bi-timestamp__time",children:e.format("HH:mm:ss")}),Object(d.jsx)("span",{className:"bi-timestamp__date",children:e.format("DD.MM.YYYY")})]}):Object(d.jsxs)("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis",children:[Object(d.jsx)("span",{className:"bi-timestamp__time",children:e.format("HH:mm:ss")}),Object(d.jsx)("span",{className:"bi-timestamp__date",children:e.format("DD.MM.YYYY")})]})}}]),i}(b.a.PureComponent)},265:function(e,t,i){},274:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var s=i(11),n=i(12),c=i(16),a=i(15),o=i(0),r=i.n(o),l=i(7),b=i(90),d=i.n(b),u=i(49),h=i.n(u),j=i(26),_=i(9),m=(i(281),i(1)),p=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){var e=this.props.title;return Object(m.jsxs)(d.a,{className:"bi-address-issued-tokens-modal bi-modal bi-modal--scale",overlayClassName:"bi-modal-overlay",isOpen:this.props.isOpen,onRequestClose:this.props.onClose,children:[Object(m.jsx)("button",{className:"bi-modal__btn-close",onClick:this.props.onClose,children:Object(m.jsx)(_.k,{className:"bi-modal__btn-close-icon"})}),Object(m.jsx)("div",{className:"bi-address-issued-tokens-modal__table-header",children:e||"Address tokens"}),Object(m.jsx)("div",{className:"bi-address-issued-tokens-modal__container",children:Object(m.jsx)("div",{className:"bi-address-issued-tokens-modal__table-body bi-table",children:this.props.issuedTokens&&this.props.issuedTokens.map((function(e,t){return Object(m.jsxs)("div",{className:"bi-address-issued-tokens-modal__row bi-table__row",children:[Object(m.jsx)(j.Link,{to:"/token/".concat(e.tokenId),className:"bi-address-issued-tokens-modal__cell bi-table__cell bi-address-issued-tokens-modal__cell--token-id",children:Object(m.jsx)(l.a,{id:e.name||e.tokenId})}),Object(m.jsx)("div",{className:"bi-address-issued-tokens-modal__cell bi-table__cell bi-address-issued-tokens-modal__cell--amount",children:h()({integerSeparator:" "})(e.decimals>0?e.amount/Math.pow(10,e.decimals):e.amount)})]},"".concat(Math.random()," - ").concat(t))}))})})]})}}]),i}(r.a.PureComponent)},275:function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var s=i(11),n=i(12),c=i(20),a=i(16),o=i(15),r=i(38),l=i.n(r),b=i(0),d=i.n(b),u=i(274),h=(i(283),i(1)),j=function(e){Object(a.a)(i,e);var t=Object(o.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={isDropdownShown:!1},n.toggleDropdown=n.toggleDropdown.bind(Object(c.a)(n)),n}return Object(n.a)(i,[{key:"render",value:function(){var e=this.props,t=e.list,i=e.button,s=l()({"bi-dropdown-list":!0});return Object(h.jsxs)("div",{className:s,children:[Object(h.jsx)("button",{className:"bi-dropdown-list__button g-flex bi-btn bi-btn--flat",onClick:this.toggleDropdown,children:Object(h.jsx)("span",{className:"bi-dropdown-list__button-label",children:i})}),this.state.isDropdownShown&&Object(h.jsx)(u.a,{isOpen:this.state.isDropdownShown,onClose:this.toggleDropdown,title:"Tokens",issuedTokens:t}),Object(h.jsx)("ul",{className:"bi-dropdown-list__dropdown",children:t.map((function(e,t){return Object(h.jsxs)("li",{className:"bi-dropdown-list__option",children:[Object(h.jsx)("span",{children:e.value}),"\xa0",e.label]},"".concat(e.value,"_").concat(t,"_").concat(e.label))}))})]})}},{key:"toggleDropdown",value:function(){this.setState({isDropdownShown:!this.state.isDropdownShown})}}]),i}(d.a.PureComponent)},280:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var s=i(51),n=i(11),c=i(12),a=i(33),o=i.n(a),r=i(18),l=function(){function e(){Object(n.a)(this,e)}return Object(c.a)(e,null,[{key:"apiUrl",get:function(){return"".concat(r.a.apiUrl,"/blocks")}},{key:"getBlock",value:function(t){return o.a.get("".concat(e.apiUrl,"/").concat(t)).then((function(i){return i?i.data:Promise.reject("Block api service. Request: ".concat(e.apiUrl,"/").concat(t,"."))}))}},{key:"getBlocks",value:function(t){var i=t.limit,s=t.offset,n=t.sortBy,c=t.sortDirection,a=t.startDate,r=t.endDate;return o.a.get("".concat(e.apiUrl),{params:{endDate:r,limit:i,offset:s,sortBy:n||"height",sortDirection:c||"desc",startDate:a}}).then((function(t){return t?t.data:Promise.reject("Block api service. Request: ".concat(e.apiUrl,"."))}))}}]),e}(),b={getBlocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,i=e.offset,n=e.sortBy,c=e.sortDirection,a=e.startDate,o=e.endDate;return function(e){return e({type:s.b}),l.getBlocks({limit:t,offset:i,sortBy:n,sortDirection:c,startDate:a,endDate:o}).then((function(n){e({payload:{data:n,limit:t,offset:i},type:s.c})}))}},getBlock:function(e){var t=e.id;return function(e){return e({type:s.a}),l.getBlock(t).then((function(t){e({payload:{data:t},type:s.d})}))}}}},281:function(e,t,i){},282:function(e,t,i){"use strict";i.d(t,"a",(function(){return x}));var s=i(3),n=i(11),c=i(12),a=i(16),o=i(15),r=i(0),l=i.n(r),b=i(7),d=i(25),u=i(26),h=i(261),j=i(263),_=i(275),m=i(9),p=(i(284),i(1)),f=function(e){Object(a.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(n.a)(this,i);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isClient:!1},e.getAddressInputs=function(){return e.props.transaction.inputs.reduce((function(t,i){var s=i.address,n=i.value;return s===e.props.address?t+n:t}),0)},e.getAddressOutputs=function(){return e.props.transaction.outputs.reduce((function(t,i){var s=i.address,n=i.value;return s===e.props.address?t+n:t}),0)},e.getTransactionState=function(){var t=e.getAddressInputs(),i=e.getAddressOutputs();return 0!==i&&i-t>0?"input":"output"},e}return Object(c.a)(i,[{key:"componentDidMount",value:function(){this.setState({isClient:!0,isShowMoreInputs:!1,isShowMoreOutputs:!1})}},{key:"renderAssets",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===e.length)return null;var t=e.map((function(e){var t=e.amount;return{label:e.tokenId.substr(0,4),value:t}})),i="+".concat(t.length);return Object(p.jsxs)(p.Fragment,{children:["\xa0",Object(p.jsx)(_.a,{list:e,button:i})]})}},{key:"render",value:function(){var e=this,t=this.props.transaction,i=this.state,s=i.isShowMoreInputs,n=i.isShowMoreOutputs,c=0,a=this.getAddressInputs(),o=this.getAddressOutputs(),r="output"===this.getTransactionState(),l=s?t.inputs:t.inputs.slice(0,5),d=n?t.outputs:t.outputs.slice(0,5);return Object(p.jsxs)("div",{className:"bi-transactions-item",children:[Object(p.jsxs)("div",{className:"bi-transactions-item__header g-flex",children:[Object(p.jsx)(u.Link,{className:"bi-transactions-item__title u-word-wrap g-flex__item-fixed",to:"/transactions/".concat(this.props.transaction.id),children:this.props.transaction.id}),Object(p.jsx)("div",{className:"bi-transactions-item__timestamp g-flex__item-fixed",children:Object(p.jsx)(j.a,{timestamp:this.props.transaction.creationTimestamp||this.props.transaction.timestamp})})]}),Object(p.jsxs)("div",{className:"bi-transactions-item__body g-flex",children:[Object(p.jsx)("div",{className:"bi-transactions-item__inputs g-flex__item",children:l.map((function(t,i){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"bi-transactions-item__input g-flex",children:[Object(p.jsx)("div",{className:"bi-transactions-item__address",children:t.address?Object(p.jsx)(u.Link,{className:"u-word-wrap u-word-wrap--ellipsis",to:"/addresses/".concat(t.address),children:t.address}):Object(p.jsx)(b.a,{id:"components.transaction-item.null-address"})}),e.props.isScriptsDisplayed&&t.outputTransactionId&&Object(p.jsxs)("div",{className:"bi-transactions-item__address-output g-flex g-flex__item-fixed",children:["(",Object(p.jsx)(h.a,{value:t.value}),t.assets?e.renderAssets(t.assets):"","\xa0-\xa0",Object(p.jsx)(u.Link,{to:"/transactions/".concat(t.outputTransactionId),children:Object(p.jsx)(b.a,{id:"components.transaction-item.address-output"})}),")"]})]},"".concat(i,"__").concat(t.id)),4===i&&Object(p.jsx)("div",{className:"bi-transactions-item__link",onClick:function(){return e.setState({isShowMoreInputs:!s})},children:Object(p.jsx)("a",{children:s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{id:"components.transaction-item.show-less"}),Object(p.jsx)(m.h,{className:"bi-transactions-item__rotated-icon"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{id:"components.transaction-item.show-more"}),Object(p.jsx)(m.h,{})]})})})]})}))}),this.props.address?Object(p.jsx)("div",{className:["bi-transactions-item__arrow",r?"bi-transactions-item__arrow--output":"bi-transactions-item__arrow--input"].join(" "),children:Object(p.jsx)(m.d,{className:"bi-transactions-item__arrow-icon"})}):Object(p.jsx)("div",{className:"bi-transactions-item__arrow",children:Object(p.jsx)(m.d,{className:"bi-transactions-item__arrow-icon"})}),Object(p.jsxs)("div",{className:"bi-transactions-item__outputs g-flex__item g-flex-column",children:[d.map((function(t,i){return c+=t.value,Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"bi-transactions-item__output g-flex",children:[Object(p.jsx)("div",{className:"bi-transactions-item__address g-flex__item-fixed",children:t.address?Object(p.jsx)(u.Link,{className:"u-word-wrap u-word-wrap--ellipsis",to:"/addresses/".concat(t.address),children:t.address}):Object(p.jsx)("span",{className:"u-word-wrap u-word-wrap--ellipsis",children:Object(p.jsx)(b.a,{id:"components.transaction-item.null-address"})})}),Object(p.jsx)("div",{className:"bi-transactions-item__address-spent g-flex__item u-word-wrap u-word-wrap--ellipsis",style:{display:e.props.isScriptsDisplayed||!e.state.isClient?"block":"none"},children:t.spentTransactionId?Object(p.jsx)(u.Link,{to:"/transactions/".concat(t.spentTransactionId),children:Object(p.jsx)(b.a,{id:"components.transaction-item.spent"})}):Object(p.jsx)(b.a,{id:"components.transaction-item.unspent"})}),Object(p.jsxs)("div",{className:"bi-transactions-item__value g-flex__item-fixed",children:[Object(p.jsx)(h.a,{value:t.value}),e.renderAssets(t.assets)]})]},"".concat(i,"__").concat(t.id)),4===i&&Object(p.jsx)("div",{className:"bi-transactions-item__link",onClick:function(){return e.setState({isShowMoreOutputs:!n})},children:Object(p.jsx)("a",{children:n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{id:"components.transaction-item.show-less"}),Object(p.jsx)(m.h,{className:"bi-transactions-item__rotated-icon"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{id:"components.transaction-item.show-more"}),Object(p.jsx)(m.h,{})]})})})]})})),Object(p.jsxs)("div",{className:"bi-transactions-item__footer g-flex-column__item-fixed g-flex",children:[this.props.confirmations>0&&Object(p.jsxs)("div",{className:"bi-transactions-item__confirmations g-flex__item-fixed",children:[this.props.confirmations," ",Object(p.jsx)(b.b,{value:this.props.confirmations,one:Object(p.jsx)(b.a,{id:"components.transaction-item.confirmation.one"}),other:Object(p.jsx)(b.a,{id:"components.transaction-item.confirmation.other"})})]}),!this.props.confirmations&&Object(p.jsx)("div",{className:"bi-transactions-item__confirmations g-flex__item-fixed item__confirmations--unconfirmed",children:Object(p.jsx)(b.a,{id:"components.transaction-item.unconfirmed"})}),Object(p.jsx)("div",{className:["bi-transactions-item__total-value g-flex__item-fixed",this.props.address&&(r?"bi-transactions-item__total-value--output":"bi-transactions-item__total-value--input")].join(" "),children:Object(p.jsx)(h.a,{value:this.props.address?Math.abs(o-a):c})})]})]})]})]})}}]),i}(l.a.Component);var x=Object(d.b)((function(e,t){return Object(s.a)(Object(s.a)({},e.settings),t)}))(f)},283:function(e,t,i){},284:function(e,t,i){},311:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var s=i(11),n=i(12),c=i(16),a=i(15),o=i(0),r=i.n(o),l=i(282),b=(i(312),i(1)),d=function(e){Object(c.a)(i,e);var t=Object(a.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"bi-transactions",children:this.props.transactions.map((function(t){return Object(b.jsx)(l.a,{transaction:t,address:e.props.address,confirmations:t.numConfirmations||t.confirmationsCount},t.id)}))})}}]),i}(r.a.PureComponent)},312:function(e,t,i){},442:function(e,t,i){},443:function(e,t,i){},444:function(e,t,i){},445:function(e,t,i){},446:function(e,t,i){},694:function(e,t,i){"use strict";i.r(t);var s=i(3),n=i(11),c=i(12),a=i(20),o=i(16),r=i(15),l=i(0),b=i.n(l),d=i(67),u=i.n(d),h=i(7),j=i(25),_=i(4),m=i(70),p=i(21),f=i(32),x=i(280),O=(i(442),i(1)),k=function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"bi-block-adproofs g-flex-column",children:[Object(O.jsx)("div",{className:"bi-block-adproofs__header g-flex-column__item-fixed u-word-wrap",children:this.props.block.header.id}),Object(O.jsx)("div",{className:"bi-block-adproofs__body g-flex-column__item u-word-wrap u-word-wrap--full",children:this.props.block.adProofs})]})}}]),i}(b.a.PureComponent),v=(i(443),function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"bi-block-ext",children:Object(O.jsxs)("div",{className:"bi-block-ext__table bi-table",children:[Object(O.jsxs)("div",{className:"bi-block-ext__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-ext__cell bi-block-ext__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.headerId"})}),Object(O.jsx)("div",{className:"bi-block-ext__cell bi-table__cell",children:this.props.extension.headerId})]}),Object(O.jsxs)("div",{className:"bi-block-ext__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-ext__cell bi-block-ext__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.digest"})}),Object(O.jsx)("div",{className:"bi-block-ext__cell bi-table__cell",children:this.props.extension.digest})]}),Object(O.jsxs)("div",{className:"bi-block-ext__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-ext__cell bi-block-ext__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.fields"})}),Object(O.jsx)("div",{className:"bi-block-ext__cell bi-table__cell",children:this.props.extension.fields.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:e[0]}),": ",e[1]]},e[0])}))})]})]})})}}]),i}(b.a.Component)),w=i(26),N=i(9),g=(i(444),function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"bi-block-header g-flex-column",children:[Object(O.jsx)("div",{className:"bi-block-header__line g-flex-column__item-fixed",children:Object(O.jsxs)(w.Link,{className:"bi-block-header__btn-back",to:"/".concat(this.props.prevLink),children:[Object(O.jsx)(N.b,{className:"bi-block-header__btn-back-icon"}),Object(O.jsx)("span",{className:"bi-block-header__btn-back-title",children:Object(O.jsx)(h.a,{id:"components.block-header.back"})})]})}),Object(O.jsxs)("div",{className:"bi-block-header__line g-flex-column__item g-flex",children:[Object(O.jsxs)("div",{className:"bi-block-header__title g-flex__item-fixed",children:[Object(O.jsx)(h.a,{id:"common.block.block"})," ",Object(O.jsxs)("span",{children:["#",this.props.block.header.height]})]}),Object(O.jsxs)("div",{className:"bi-block-header__navigation g-flex__item-fixed",children:[this.props.references.previousId&&0!==this.props.block.header.height?Object(O.jsx)(w.Link,{className:"bi-block-header__navigation-btn bi-block-header__navigation-btn--prev",to:"/blocks/".concat(this.props.references.previousId),children:Object(O.jsx)(N.b,{className:"bi-block-header__navigation-btn-icon"})}):null,this.props.references.nextId?Object(O.jsx)(w.Link,{className:"bi-block-header__navigation-btn bi-block-header__navigation-btn--next",to:"/blocks/".concat(this.props.references.nextId),children:Object(O.jsx)(N.b,{className:"bi-block-header__navigation-btn-icon"})}):null]}),Object(O.jsxs)("div",{className:"bi-block-header__tabs g-flex__item-fixed g-flex",children:[Object(O.jsx)(w.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id),children:Object(O.jsx)(h.a,{id:"components.block-header.information"})}),Object(O.jsx)(w.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id,"/transactions"),children:Object(O.jsx)(h.a,{id:"components.block-header.transactions"})}),Object(O.jsx)(w.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id,"/extension"),children:Object(O.jsx)(h.a,{id:"components.block-header.extension"})}),Object(O.jsx)(w.NavLink,{className:"bi-block-header__tab g-flex__item-fixed",activeClassName:"bi-block-header__tab--active",exact:!0,to:"/blocks/".concat(this.props.block.header.id,"/adproofs"),children:Object(O.jsx)(h.a,{id:"components.block-header.adproofs"})})]})]})]})}}]),i}(b.a.Component)),y=i(68),$=i(263),D=(i(445),function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:"bi-block-info",children:Object(O.jsxs)("div",{className:"bi-block-info__table bi-table",children:[Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.height"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell",children:this.props.block.header.height})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.age"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell",children:Object(O.jsx)($.a,{timestamp:this.props.block.header.timestamp})})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.id"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap",children:this.props.block.header.id})]}),0!==this.props.block.header.height&&Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.parent"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap",children:Object(O.jsx)(w.Link,{to:"/blocks/".concat(this.props.block.header.parentId),children:this.props.block.header.parentId})})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.difficulty"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap",children:this.props.block.header.difficulty})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.extensionHash"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap",children:this.props.block.header.extensionHash})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.version"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell",children:this.props.block.header.version})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.votes"})}),Object(O.jsxs)("div",{className:"bi-block-info__cell u-word-wrap",children:["[",this.props.block.header.votes.join(", "),"]"]})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.adProofsRoot"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap",children:this.props.block.header.adProofsRoot})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.transactionsRoot"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap",children:this.props.block.header.transactionsRoot})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.stateRoot"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell u-word-wrap",children:this.props.block.header.stateRoot})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.nBits"})}),Object(O.jsx)("div",{className:"bi-block-info__cell bi-table__cell",children:this.props.block.header.nBits})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.powSolutions"})}),Object(O.jsx)("div",{className:"bi-block-info__cell u-word-wrap",children:Object.keys(this.props.block.header.powSolutions).map((function(t){return Object(O.jsxs)("div",{children:[t,": ",e.props.block.header.powSolutions[t]]},t)}))})]}),Object(O.jsxs)("div",{className:"bi-block-info__row bi-table__row",children:[Object(O.jsx)("div",{className:"bi-block-info__cell bi-block-info__cell--header bi-table__cell",children:Object(O.jsx)(h.a,{id:"common.block.size"})}),Object(O.jsxs)("div",{className:"bi-block-info__cell bi-table__cell",children:[Object(y.a)(this.props.block.header.size,{desiredFormat:"k"}),"B"]})]})]})})}}]),i}(b.a.Component)),S=i(311),M=(i(446),function(e){Object(o.a)(i,e);var t=Object(r.a)(i);function i(e){var s;return Object(n.a)(this,i),(s=t.call(this,e)).prevLink="",s.renderComponent=s.renderComponent.bind(Object(a.a)(s)),s}return Object(c.a)(i,[{key:"componentDidMount",value:function(){this.props.preloaded?this.props.clearPreloadedState():this.props.getBlock({id:this.props.match.params.id})}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.match.params.id!==this.props.match.params.id&&this.props.getBlock({id:e.match.params.id})}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"bi-block g-flex-column__item-fixed",children:this.props.fetching?null:this.renderBlockPage()})}},{key:"renderBlockPage",value:function(){return this.props.block?(this.props.lastLocation&&"/"===this.props.lastLocation.pathname&&(this.prevLink=this.props.lastLocation.search),Object(O.jsxs)("div",{className:"bi-block__wrapper g-flex-column",children:[Object(O.jsx)(h.a,{id:"common.pages.block.title",values:{id:this.props.block.header.id},children:function(e){return Object(O.jsx)(u.a,{children:Object(O.jsx)("title",{children:e})})}}),Object(O.jsx)("div",{className:"bi-block__header g-flex-column__item-fixed",children:Object(O.jsx)(g,{block:this.props.block,prevLink:this.prevLink,references:this.props.references})}),Object(O.jsx)("div",{className:"bi-block__body g-flex-column__item g-scroll-y",children:Object(O.jsxs)(_.g,{children:[Object(O.jsx)(_.d,{path:"/blocks/:id",exact:!0,render:this.renderComponent(Object(O.jsx)(D,{block:this.props.block}))}),Object(O.jsx)(_.d,{path:"/blocks/:id/transactions",exact:!0,component:this.renderComponent(Object(O.jsx)(S.a,{transactions:this.props.block.blockTransactions}))}),Object(O.jsx)(_.d,{path:"/blocks/:id/extension",exact:!0,component:this.renderComponent(Object(O.jsx)(v,{extension:this.props.block.extension}))}),Object(O.jsx)(_.d,{path:"/blocks/:id/adproofs",exact:!0,component:this.renderComponent(Object(O.jsx)(k,{block:this.props.block}))})]})})]})):Object(O.jsx)(_.c,{to:"/"})}},{key:"renderComponent",value:function(e){return function(){return e}}}]),i}(b.a.Component));t.default=Object(j.b)((function(e){return Object(s.a)({},e.block)}),(function(e){return Object(p.bindActionCreators)(Object(s.a)(Object(s.a)({},x.a),f.a),e)}))(Object(m.withLastLocation)(M))}}]);
//# sourceMappingURL=11.1f4f763b.chunk.js.map