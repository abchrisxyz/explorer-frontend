(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[8],{261:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(11),i=a(12),c=a(16),r=a(15),s=a(0),o=a.n(s),l=a(18),u=a(1),d=function(t){Object(c.a)(a,t);var e=Object(r.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"bi-coin-value  u-word-wrap u-word-wrap--ellipsis",children:[this.getFormattedValue()," ",this.props.coinName?this.props.coinName:l.a.blockchain.coinName.toUpperCase()]})}},{key:"getFormattedValue",value:function(){var t=this.props.value/1e9;return t<1&&0!==t?t.toFixed(9).split("").reduceRight((function(t,e){return"0"===e&&0===t.length||t.push(e),t}),[]).reverse().join(""):t.toString()}}]),a}(o.a.PureComponent)},263:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(11),i=a(12),c=a(16),r=a(15),s=a(262),o=a.n(s),l=a(0),u=a.n(l),d=(a(265),a(1)),b=function(t){Object(c.a)(a,t);var e=Object(r.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=o()(this.props.timestamp);return this.props.vertical?Object(d.jsxs)("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis bi-timestamp--vertical",children:[Object(d.jsx)("span",{className:"bi-timestamp__time",children:t.format("HH:mm:ss")}),Object(d.jsx)("span",{className:"bi-timestamp__date",children:t.format("DD.MM.YYYY")})]}):Object(d.jsxs)("div",{className:"bi-timestamp u-word-wrap u-word-wrap--ellipsis",children:[Object(d.jsx)("span",{className:"bi-timestamp__time",children:t.format("HH:mm:ss")}),Object(d.jsx)("span",{className:"bi-timestamp__date",children:t.format("DD.MM.YYYY")})]})}}]),a}(u.a.PureComponent)},265:function(t,e,a){},273:function(t,e,a){"use strict";var n;a.d(e,"a",(function(){return n})),function(t){t.DAYS_30="30days",t.DAYS_180="180days",t.YEAR_1="1year",t.YEAR_2="2years"}(n||(n={}))},280:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(51),i=a(11),c=a(12),r=a(33),s=a.n(r),o=a(18),l=function(){function t(){Object(i.a)(this,t)}return Object(c.a)(t,null,[{key:"apiUrl",get:function(){return"".concat(o.a.apiUrl,"/blocks")}},{key:"getBlock",value:function(e){return s.a.get("".concat(t.apiUrl,"/").concat(e)).then((function(a){return a?a.data:Promise.reject("Block api service. Request: ".concat(t.apiUrl,"/").concat(e,"."))}))}},{key:"getBlocks",value:function(e){var a=e.limit,n=e.offset,i=e.sortBy,c=e.sortDirection,r=e.startDate,o=e.endDate;return s.a.get("".concat(t.apiUrl),{params:{endDate:o,limit:a,offset:n,sortBy:i||"height",sortDirection:c||"desc",startDate:r}}).then((function(e){return e?e.data:Promise.reject("Block api service. Request: ".concat(t.apiUrl,"."))}))}}]),t}(),u={getBlocks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.limit,a=t.offset,i=t.sortBy,c=t.sortDirection,r=t.startDate,s=t.endDate;return function(t){return t({type:n.b}),l.getBlocks({limit:e,offset:a,sortBy:i,sortDirection:c,startDate:r,endDate:s}).then((function(i){t({payload:{data:i,limit:e,offset:a},type:n.c})}))}},getBlock:function(t){var e=t.id;return function(t){return t({type:n.a}),l.getBlock(e).then((function(e){t({payload:{data:e},type:n.d})}))}}}},336:function(t,e,a){},337:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(11),i=a(12),c=a(16),r=a(15),s=a(0),o=a.n(s),l=a(306),u=(a(338),a(1)),d=["#0088FE","#85144b","#FFBB28","#FF8042","#2ECC40","#FF4136","#001f3f","#0074D9","#FF851B","#00C49F","#F012BE","#7FDBFF","#FFDC00","#39CCCC","#3D9970","#B10DC9","#01FF70"],b=function(t){Object(c.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(n.a)(this,a);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={activeIndex:0},t.renderActiveShape=function(t){var e=Math.PI/180,a=t.cx,n=t.cy,i=t.midAngle,c=t.innerRadius,r=t.outerRadius,s=t.startAngle,o=t.endAngle,d=t.fill,b=t.payload,j=t.percent,p=t.value,m=Math.sin(-e*i),h=Math.cos(-e*i),f=a+(r+10)*h,v=n+(r+10)*m,O=a+(r+30)*h,x=n+(r+30)*m,g=O+22*(h>=0?1:-1),k=x,y=h>=0?"start":"end";return Object(u.jsxs)("g",{children:[Object(u.jsx)("text",{x:a,y:n,dy:8,textAnchor:"middle",fill:d,children:b.name}),Object(u.jsx)(l.h,{cx:a,cy:n,innerRadius:c,outerRadius:r,startAngle:s,endAngle:o,fill:d}),Object(u.jsx)(l.h,{cx:a,cy:n,startAngle:s,endAngle:o,innerRadius:r+6,outerRadius:r+10,fill:d}),Object(u.jsx)("path",{d:"M".concat(f,",").concat(v,"L").concat(O,",").concat(x,"L").concat(g,",").concat(k),stroke:d,fill:"none"}),Object(u.jsx)("circle",{cx:g,cy:k,r:2,fill:d,stroke:"none"}),Object(u.jsx)("text",{x:g+12*(h>=0?1:-1),y:k,textAnchor:y,fill:"#333",children:"Blocks: ".concat(p)}),Object(u.jsx)("text",{x:g+12*(h>=0?1:-1),y:k,dy:18,textAnchor:y,fill:"#999",children:"(Rate: ".concat((100*j).toFixed(2),"%)")})]})},t.onPieEnter=function(e,a){t.setState({activeIndex:a})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this,e=this.props.data.map((function(t){return{name:t.name,value:t.value}})).sort((function(t,e){return e.y-t.y}));return Object(u.jsxs)("div",{className:"bi-pie-chart",children:[Object(u.jsx)("div",{className:"bi-pie-chart__chart",children:Object(u.jsx)(l.g,{children:Object(u.jsx)(l.f,{children:Object(u.jsx)(l.e,{activeIndex:this.state.activeIndex,activeShape:this.renderActiveShape,data:e,innerRadius:100,outerRadius:140,fill:"#8884d8",dataKey:"value",onMouseEnter:this.onPieEnter,children:e.map((function(t,e){return Object(u.jsx)(l.d,{fill:d[e%d.length]},"cell-".concat(t.value))}))})})})}),Object(u.jsxs)("div",{className:"bi-pie-chart__legend bi-pie-chart__table bi-table",children:[Object(u.jsxs)("div",{className:"bi-pie-chart__row bi-table__row bi-pie-chart__row--header",children:[Object(u.jsx)("div",{className:"bi-pie-chart__cell bi-table__cell",children:this.props.labels.name}),Object(u.jsx)("div",{className:"bi-pie-chart__cell bi-table__cell",children:this.props.labels.value})]}),this.props.data.map((function(e,a){return Object(u.jsxs)("div",{className:"bi-pie-chart__row bi-table__row",children:[Object(u.jsxs)("div",{className:"bi-pie-chart__cell bi-table__cell",children:[Object(u.jsx)("span",{children:t.props.labels.name})," ",e.name]}),Object(u.jsxs)("div",{className:"bi-pie-chart__cell bi-table__cell",children:[Object(u.jsx)("span",{children:t.props.labels.value})," ",e.value]})]},a)}))]})]})}}]),a}(o.a.PureComponent)},338:function(t,e,a){},343:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a(31),i=a(47),c=function(t){return Object(n.getStruct)(i.b)(t)}},344:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a(31),i=a(47),c=function(t){return Object(n.getStruct)(i.g)(t)}},346:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a(80),i=a(11),c=a(12),r=a(33),s=a.n(r),o=a(18),l=a(273),u=function(){function t(){Object(i.a)(this,t)}return Object(c.a)(t,null,[{key:"getChart",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.timespan;return s.a.get("".concat(o.a.apiUrl,"/charts/").concat(t),{params:{timespan:a||l.a.DAYS_30}}).then((function(e){return e?e.data:Promise.reject("Block api service. Request: ".concat(o.a.apiUrl,"/charts/").concat(t,"."))}))}}]),t}(),d={getChart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){return a({type:n.a}),u.getChart(t,e).then((function(t){a({payload:{data:t},type:n.b})}))}}}},347:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var n=a(3),i=a(11),c=a(12),r=a(20),s=a(16),o=a(15),l=a(262),u=a.n(l),d=a(0),b=a.n(d),j=a(306),p=a(91),m=a(68),h=(a(336),a(1)),f=function(t){Object(s.a)(a,t);var e=Object(o.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var t=u()(this.props.label).format("DD.MM.YYYY"),e=null,a=this.props.payload?this.props.payload[0]:null;if(a){var n=a.payload.type||"chart",i=this.props.isScale?a.payload.originalValue:this.props.payload[0].value;e=Object(p.a)(n,i)}return Object(h.jsxs)("div",{className:"bi-chart-tooltip",children:[Object(h.jsx)("div",{className:"bi-chart-tooltip__label",children:t}),e]})}}]),a}(b.a.PureComponent),v=1e-4,O=function(t){Object(s.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).formatLabel=n.formatLabel.bind(Object(r.a)(n)),n.formatXLabel=n.formatXLabel.bind(Object(r.a)(n)),n.formatTooltip=n.formatTooltip.bind(Object(r.a)(n)),n.renderTooltip=n.renderTooltip.bind(Object(r.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var t=this.props.data,e=Math.ceil(Math.max.apply(null,t.map((function(t){return t.value})))),a=(Math.ceil(e/Math.pow(10,e.toString().length-1))+2)*Math.pow(10,e.toString().length-1);return this.props.isScale&&(t=t.map((function(t){return Object(n.a)(Object(n.a)({},t),{},{originalValue:t.value,value:t.value<=0?v:t.value})}))),Object(h.jsx)(j.g,{width:"100%",height:"100%",children:Object(h.jsxs)(j.b,{data:t,children:[Object(h.jsx)("defs",{children:Object(h.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"1",x2:"1",y2:"0",children:[Object(h.jsx)("stop",{offset:"20%",stopColor:"#0078FF",stopOpacity:0}),Object(h.jsx)("stop",{offset:"80%",stopColor:"#0078FF",stopOpacity:.2})]})}),this.props.compact?null:Object(h.jsx)(j.c,{stroke:"#e8e8e8",vertical:!1,strokeDasharray:"6 4",fill:"#fff"}),Object(h.jsx)(j.j,{dataKey:"timestamp",tick:{fill:"#828795",fontSize:14},tickLine:!1,tickCount:100,tickMargin:10,tickFormatter:this.formatXLabel,minTickGap:30,hide:this.props.compact}),Object(h.jsx)(j.k,{dataKey:"value",domain:[this.props.isScale?v:0,a],scale:this.props.isScale?"log":"auto",tickMargin:10,tickLine:!1,tickCount:5,minTickGap:30,tick:{fill:"#828795",fontSize:14},tickFormatter:this.formatLabel,hide:this.props.compact}),Object(h.jsx)(j.i,{content:this.renderTooltip}),Object(h.jsx)(j.a,{type:"linear",dataKey:"value",stroke:"#0078FF",yAxisId:0,fillOpacity:1,fill:"url(#colorUv)",animationDuration:300,isAnimationActive:!this.props.compact})]})})}},{key:"renderTooltip",value:function(t){return Object(h.jsx)(f,Object(n.a)(Object(n.a)({},t),{},{isScale:this.props.isScale}))}},{key:"formatLabel",value:function(t){return Object(m.a)(t,{fractionDigits:0})}},{key:"formatXLabel",value:function(t){return u()(t).format("DD MMM YYYY")}},{key:"formatTooltip",value:function(t){return Object(p.a)("chart",t)}}]),a}(b.a.PureComponent)},349:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(11),i=a(12),c=a(18),r=a(88),s=a(47),o=function(){function t(){Object(n.a)(this,t)}return Object(i.a)(t,null,[{key:"apiUrl",get:function(){return"".concat(c.a.apiUrl)}},{key:"getAllIssuedTokens",value:function(t,e){var a=e.limit,n=e.offset;return Object(r.a)(s.b,{method:"get",url:"https://api.ergoplatform.com/api/v1/tokens",params:{limit:a,offset:n}},{dispatch:t})}},{key:"getSearchIssuedTokensByQuery",value:function(t,e){var a=e.searchQuery,n=e.limit,i=e.offset;return Object(r.a)(s.b,{method:"get",url:"https://api.ergoplatform.com/api/v1/tokens/search",params:{limit:n,offset:i,query:a}},{dispatch:t})}},{key:"getTotalIssuedTokens",value:function(t,e){var a=e.limit;return Object(r.a)(s.f,{method:"get",url:"https://api.ergoplatform.com/api/v1/tokens",params:{limit:a}},{dispatch:t})}},{key:"getIssuedTokensById",value:function(e,a){return Object(r.a)(s.c,{method:"get",url:"".concat(t.apiUrl,"/tokens/").concat(a,"/issuingBox")},{dispatch:e})}}]),t}(),l=a(99),u={getTokens:function(t){return function(e){var a,n;return!t.searchQuery||(null===(a=t.searchQuery)||void 0===a||null===(n=a.trim())||void 0===n?void 0:n.length)<3?o.getAllIssuedTokens(e,t).then((function(a){e({payload:{offset:t.offset||0},type:l.a})})):o.getSearchIssuedTokensByQuery(e,t).then((function(a){e({payload:{offset:t.offset||0},type:l.a})}))}}}},350:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(100),i=a(11),c=a(12),r=a(18),s=a(88),o=a(47),l=function(){function t(){Object(i.a)(this,t)}return Object(c.a)(t,null,[{key:"apiUrl",get:function(){return"".concat(r.a.apiUrl)}},{key:"getUnconfirmedTokensList",value:function(e,a){var n=a.limit,i=a.offset,c=a.sortBy,r=a.sortDirection;return Object(s.a)(o.g,{method:"get",url:"".concat(t.apiUrl,"/transactions/unconfirmed"),params:{limit:n,offset:i,sortBy:c||"size",sortDirection:r||"desc"}},{dispatch:e})}}]),t}(),u={getMempool:function(t){return function(e){return l.getUnconfirmedTokensList(e,t).then((function(a){e({payload:{offset:t.offset||0},type:n.a})}))}}}},673:function(t,e,a){},674:function(t,e,a){},675:function(t,e,a){},676:function(t,e,a){},677:function(t,e,a){},678:function(t,e,a){},679:function(t,e,a){},680:function(t,e,a){},681:function(t,e,a){},682:function(t,e,a){},683:function(t,e,a){},684:function(t,e,a){},685:function(t,e,a){},691:function(t,e,a){"use strict";a.r(e);var n=a(3),i=a(0),c=a.n(i),r=a(25),s=a(21),o=a(32),l=a(280),u=a(59),d=(a(673),a(1)),b=function(t){var e=t.children;return Object(d.jsx)("div",{className:"bi-widget",children:e})},j=a(26),p=a(7),m=(a(674),function(t){var e=t.title,a=t.to;return Object(d.jsx)(j.Link,{className:"bi-widget-button-more g-flex",to:a,children:Object(d.jsx)(p.a,{id:e})})}),h=(a(675),function(t){var e=t.title,a=t.icon;return Object(d.jsxs)("div",{className:"bi-widget-title g-flex",children:[a,Object(d.jsx)("h2",{className:"bi-widget-title__text",children:Object(d.jsx)(p.a,{id:e})})]})}),f=a(9),v=a(89),O=(a(676),function(t){return Object(d.jsx)("div",{className:"widget-table-header widget-table__row bi-widget-table__row",children:t.tiles.map((function(t){return Object(d.jsx)("div",{className:"widget-table__cell bi-widget-table__cell",children:Object(d.jsx)(p.a,{id:t})},t)}))})}),x=(a(677),function(t){var e=t.headerTiles,a=t.data;return t.isFetching?Object(d.jsx)("div",{className:"widget-table-loader",children:Object(d.jsx)(v.a,{})}):Object(d.jsxs)("div",{className:"widget-table bi-widget-table",children:[Object(d.jsx)(O,{tiles:e}),a?a.map((function(t,e){return Object(d.jsx)("div",{className:"widget-table__row bi-widget-table__row",children:Object.keys(t).map((function(e,a){return Object(d.jsx)("div",{className:"widget-table__cell bi-widget-table__cell",children:t[e].link?Object(d.jsx)(j.Link,{to:"".concat(t[e].linkValue),className:"u-word-wrap u-word-wrap--ellipsis",children:t[e].value}):t[e].value},a)}))},e)})):null]})}),g=(a(678),a(263)),k=a(261),y=(a(679),function(t){var e=t.children;return Object(d.jsx)("div",{className:"bi-widget-body",children:e})});var _=Object(r.b)((function(t){return t}),(function(t){return Object(s.bindActionCreators)(Object(n.a)({},l.a),t)}))((function(t){var e=t.getBlocks,a=t.blocks;Object(i.useEffect)((function(){e({limit:8})}),[]);var n=Object(i.useMemo)((function(){return null===a||void 0===a?void 0:a.blocks.reduce((function(t,e){var a=e.height,n=e.timestamp,i=e.miner,c=i.address,r=i.name,s=e.minerReward,o=e.id,l=e.transactionsCount;return[].concat(Object(u.a)(t),[{height:{value:a,link:!0,linkValue:"/blocks/".concat(o)},timestamp:{value:Object(d.jsx)(g.a,{vertical:!0,timestamp:n})},minerAddress:{value:r,link:!0,linkValue:"/addresses/".concat(c)},transactionsCount:{value:l},minerReward:{value:Object(d.jsx)(k.a,{value:s})}}])}),[])}),[a]);return Object(d.jsxs)(b,{className:"bi-widget-blocks",children:[Object(d.jsx)("div",{className:"g-flex  bi-widget-blocks__header",children:Object(d.jsx)(h,{title:"common.navigation.latest-blocks",icon:Object(d.jsx)(f.s,{})})}),Object(d.jsx)(y,{children:Object(d.jsx)(x,{headerTiles:["common.block.height","common.block.age","common.block.minedBy","common.block.transactions","common.block.minerReward"],data:n,isFetching:!n})}),Object(d.jsx)("div",{className:"bi-widget-blocks__button",children:Object(d.jsx)(m,{title:"components.widget.view-all-blocks",to:"/latest-blocks"})})]})})),w=a(11),N=a(12),T=a(20),C=a(16),D=a(15),F=a(38),A=a.n(F),B=a(67),M=a.n(B),S=a(273),Y=a(346),U=a(347),R=a(337),L=(a(680),function(t){Object(C.a)(a,t);var e=Object(D.a)(a);function a(t){return Object(w.a)(this,a),e.call(this,t)}return Object(N.a)(a,[{key:"render",value:function(){var t=this;return Object(d.jsx)("div",{className:"bi-timespan-compact",children:Object.keys(S.a).map((function(e){var a=A()({"bi-btn":!0,"bi-btn--flat":!0,"bi-timespan-compact__span":!0,"bi-timespan-compact__span--active":t.props.selected===S.a[e]});return Object(d.jsx)("button",{className:a,onClick:function(a){return t.props.setTimespan(S.a[e])},children:Object(d.jsx)(p.a,{id:"components.timespan.span.".concat(S.a[e])})},e)}))})}}]),a}(c.a.Component)),I=(a(681),function(t){Object(C.a)(a,t);var e=Object(D.a)(a);function a(t){var n;return Object(w.a)(this,a),(n=e.call(this,t)).state={timespan:S.a.DAYS_30},n.setTimespan=n.setTimespan.bind(Object(T.a)(n)),n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.getChart(this.props.chartType,this.state)}},{key:"render",value:function(){var t,e=A()({"bi-chart-compact":!0,"g-flex-column":!0,"g-flex-column__item-fixed":!0});return Object(d.jsxs)("div",{className:e,children:[Object(d.jsx)(p.a,{id:"common.pages.chart.title.".concat(this.props.chartType),children:function(t){return Object(d.jsx)(M.a,{children:Object(d.jsx)("title",{children:t})})}}),Object(d.jsxs)("div",{className:"bi-chart-compact__wrapper",children:[Object(d.jsxs)("div",{className:"bi-chart-compact__top g-flex",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"bi-chart-compact__subtitle",children:Object(d.jsx)(p.a,{id:"components.chart.subtitle.".concat(this.props.chartType)})}),Object(d.jsx)("div",{className:"bi-chart-compact__amount",children:String(null===(t=this.props.info.find((function(t){return"supply"===t.title})))||void 0===t?void 0:t.value).toUpperCase()})]}),this.renderControls()]}),this.renderBody()]})]})}},{key:"renderBody",value:function(){return Object(d.jsx)("div",{className:"bi-chart-compact__body g-flex-column__item",children:Object(d.jsx)("div",{className:"bi-chart-compact__chart",children:this.props.data&&this.renderChart()})})}},{key:"renderChart",value:function(){return"hash-rate-distribution"===this.props.chartType?Object(d.jsx)(R.a,{data:this.formatData(),labels:{name:Object(d.jsx)(p.a,{id:"components.chart.hash-rate-distribution.labels.name"}),value:Object(d.jsx)(p.a,{id:"components.chart.hash-rate-distribution.labels.value"})}}):Object(d.jsx)(U.a,{data:this.formatData(),isScale:!1})}},{key:"renderControls",value:function(){return"hash-rate-distribution"===this.props.chartType?null:Object(d.jsx)("div",{className:"bi-chart-compact__controls g-flex",children:Object(d.jsx)(L,{selected:this.state.timespan,setTimespan:this.setTimespan})})}},{key:"formatData",value:function(){switch(this.props.chartType){case"miners-revenue":case"total":return this.props.data.map((function(t){return{timestamp:t.timestamp,type:"coin",value:t.value/1e9}}));case"blockchain-size":case"block-size":return this.props.data.map((function(t){return{timestamp:t.timestamp,type:"bytes",value:t.value}}));case"hash-rate":return this.props.data.slice(0,this.props.data.length-1).map((function(t){return{timestamp:t.timestamp,type:"hashRateDay",value:t.value}}));default:return this.props.data}}},{key:"setTimespan",value:function(t){this.setState(Object(n.a)(Object(n.a)({},this.state),{},{timespan:t})),this.props.getChart(this.props.chartType,{timespan:t})}}]),a}(c.a.PureComponent));var P=Object(r.b)((function(t,e){return Object(n.a)(Object(n.a)(Object(n.a)({},t.chart),t.stats),e)}),(function(t){return Object(s.bindActionCreators)(Y.a,t)}))(I),E=(a(682),function(){return Object(d.jsxs)(b,{className:"bi-widget-charts",children:[Object(d.jsx)("div",{className:"g-flex bi-widget-charts__header",children:Object(d.jsx)(h,{title:"components.charts.title",icon:Object(d.jsx)(f.g,{})})}),Object(d.jsx)(P,{chartType:"total"}),Object(d.jsx)("div",{className:"bi-widget-charts__button",children:Object(d.jsx)(m,{title:"components.widget.view-all-charts",to:"/charts"})})]})}),V=a(49),z=a.n(V),q=(a(683),a(343)),Q=a(349),H=Object(r.b)((function(t){return{tokens:Object(q.a)(t),offset:t.tokens.offset}}),(function(t){return Object(s.bindActionCreators)(Object(n.a)({},Q.a),t)}))((function(t){var e=t.getTokens,a=t.tokens;Object(i.useEffect)((function(){e({limit:8})}),[]);var n=Object(i.useMemo)((function(){var t,e;return null===(t=a.data)||void 0===t||null===(e=t.items)||void 0===e?void 0:e.reduce((function(t,e){var a=e.id,n=e.name,i=e.emissionAmount,c=e.decimals;return[].concat(Object(u.a)(t),[{id:{value:a.slice(0,10),link:!0,linkValue:"/token/".concat(a)},name:{value:n},amount:{value:z()({integerSeparator:" "})(i)},decimals:{value:c}}])}),[])}),[a]);return Object(d.jsxs)(b,{className:"bi-widget-charts",children:[Object(d.jsx)("div",{className:"g-flex  bi-widget-charts__header",children:Object(d.jsx)(h,{title:"common.navigation.issued-tokens",icon:Object(d.jsx)(f.r,{})})}),Object(d.jsx)(y,{children:Object(d.jsx)(x,{headerTiles:["common.token.id","common.token.name","common.token.amount","common.token.decimals"],data:n,isFetching:!n})}),Object(d.jsx)("div",{className:"bi-widget-charts__button",children:Object(d.jsx)(m,{title:"components.widget.view-all",to:"/issued-tokens"})})]})})),K=(a(684),a(350)),X=a(344),G=a(68),J=Object(r.b)((function(t){return{unconfirmedTransactions:Object(X.a)(t),offset:t.unconfirmedTransactions.offset}}),(function(t){return Object(s.bindActionCreators)(Object(n.a)({},K.a),t)}))((function(t){var e=t.getMempool,a=t.unconfirmedTransactions;Object(i.useEffect)((function(){e({limit:8})}),[]);var n=Object(i.useMemo)((function(){var t,e;return null===(t=a.data)||void 0===t||null===(e=t.items)||void 0===e?void 0:e.reduce((function(t,e){var a=e.creationTimestamp,n=e.inputs,i=e.id,c=e.outputs,r=e.size;return[].concat(Object(u.a)(t),[{id:{value:i.slice(0,10),link:!0,linkValue:"/transactions/".concat(i)},creationTimestamp:{value:Object(d.jsx)(g.a,{vertical:!0,timestamp:a})},inputs:{value:n.length},outputs:{value:c.length},size:{value:Object(d.jsxs)("span",{className:"u-word-wrap u-word-wrap--ellipsis",children:[Object(G.a)(r,{desiredFormat:"k"}),"B"]})}}])}),[])}),[a]);return Object(d.jsxs)(b,{className:"bi-widget-charts",children:[Object(d.jsx)("div",{className:"g-flex  bi-widget-charts__header",children:Object(d.jsx)(h,{title:"common.navigation.mempool",icon:Object(d.jsx)(f.u,{})})}),Object(d.jsx)(y,{children:Object(d.jsx)(x,{headerTiles:["common.token.id","components.unconfirmed-transactions.creation-timestamp","components.unconfirmed-transactions.inputs-quantity","components.unconfirmed-transactions.outputs-quantity","common.block.size"],data:n,isFetching:!n})}),Object(d.jsx)("div",{className:"bi-widget-charts__button",children:Object(d.jsx)(m,{title:"components.widget.view-all",to:"/mempool"})})]})}));a(685);var W=Object(r.b)((function(t){return t}),(function(t){return Object(s.bindActionCreators)(Object(n.a)(Object(n.a)({},l.a),o.a),t)}))((function(){return Object(d.jsx)("div",{className:"bi-main",children:Object(d.jsxs)("div",{className:"bi-main__container",children:[Object(d.jsx)("div",{className:"bi-main__col",children:Object(d.jsx)(_,{})}),Object(d.jsx)("div",{className:"bi-main__col",children:Object(d.jsx)(J,{})}),Object(d.jsx)("div",{className:"bi-main__col",children:Object(d.jsx)(E,{})}),Object(d.jsx)("div",{className:"bi-main__col",children:Object(d.jsx)(H,{})})]})})}));e.default=W}}]);
//# sourceMappingURL=8.09465396.chunk.js.map