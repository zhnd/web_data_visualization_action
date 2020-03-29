(this["webpackJsonpdata-visualization-action"]=this["webpackJsonpdata-visualization-action"]||[]).push([[4,9],{224:function(t,e,n){"use strict";var r=n(0),o=n(1),a=n.n(o),c=n(85),i=n(210),u=n(88);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var l=["xxl","xl","lg","md","sm","xs"],f={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},p=[],y=-1,h={},b={matchHandlers:{},dispatch:function(t){return h=t,!(p.length<1)&&(p.forEach((function(t){t.func(h)})),!0)},subscribe:function(t){0===p.length&&this.register();var e=(++y).toString();return p.push({token:e,func:t}),t(h),e},unsubscribe:function(t){0===(p=p.filter((function(e){return e.token!==t}))).length&&this.unregister()},unregister:function(){var t=this;Object.keys(f).forEach((function(e){var n=f[e],r=t.matchHandlers[n];r&&r.mql&&r.listener&&r.mql.removeListener(r.listener)}))},register:function(){var t=this;Object.keys(f).forEach((function(e){var n=f[e],r=function(n){var r,o,a,c=n.matches;t.dispatch(s(s({},h),(a=c,(o=e)in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r)))},o=window.matchMedia(n);o.addListener(r),t.matchHandlers[n]={mql:o,listener:r},r(o)}))}};function m(t){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var E=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},P=(Object(u.a)("top","middle","bottom","stretch"),Object(u.a)("start","end","center","space-around","space-between"),function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(f,t);var e,n,o,u,s=(e=f,function(){var t,n=x(e);if(j()){var r=x(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return w(this,t)});function f(){var t;return g(this,f),(t=s.apply(this,arguments)).state={screens:{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}},t.renderRow=function(e){var n,o=e.getPrefixCls,c=e.direction,u=t.props,s=u.prefixCls,l=u.justify,f=u.align,p=u.className,y=u.style,h=u.children,b=E(u,["prefixCls","justify","align","className","style","children"]),m=o("row",s),g=t.getGutter(),O=a()(m,(v(n={},"".concat(m,"-").concat(l),l),v(n,"".concat(m,"-").concat(f),f),v(n,"".concat(m,"-rtl"),"rtl"===c),n),p),w=d(d(d({},g[0]>0?{marginLeft:g[0]/-2,marginRight:g[0]/-2}:{}),g[1]>0?{marginTop:g[1]/-2,marginBottom:g[1]/2}:{}),y),j=d({},b);return delete j.gutter,r.createElement(i.a.Provider,{value:{gutter:g}},r.createElement("div",d({},j,{className:O,style:w}),h))},t}return n=f,(o=[{key:"componentDidMount",value:function(){var t=this;this.token=b.subscribe((function(e){var n=t.props.gutter;(!Array.isArray(n)&&"object"===m(n)||Array.isArray(n)&&("object"===m(n[0])||"object"===m(n[1])))&&t.setState({screens:e})}))}},{key:"componentWillUnmount",value:function(){b.unsubscribe(this.token)}},{key:"getGutter",value:function(){var t=[0,0],e=this.props.gutter,n=this.state.screens;return(Array.isArray(e)?e:[e,0]).forEach((function(e,r){if("object"===m(e))for(var o=0;o<l.length;o++){var a=l[o];if(n[a]&&void 0!==e[a]){t[r]=e[a];break}}else t[r]=e||0})),t}},{key:"render",value:function(){return r.createElement(c.a,null,this.renderRow)}}])&&O(n.prototype,o),u&&O(n,u),f}(r.Component));P.defaultProps={gutter:0};e.a=P},52:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(267),a=n(204);e.default=function(){var t=r.useEffect;return t((function(){!function(){var t=[[.5,.5],[.7,.8],[.4,.9],[.11,.32],[.88,.25],[.75,.12],[.5,.1],[.2,.3],[.4,.1],[.6,.7]],e=30,n=30,r=a.h("#scatter-1").append("svg").attr("width",500).attr("height",500),o=a.g().domain([0,1.2*a.f(t,(function(t){return t[0]}))]).range([0,400]),c=a.g().domain([0,1.2*a.f(t,(function(t){return t[1]}))]).range([0,400]);r.selectAll("circle").data(t).enter().append("circle").attr("fill","black").attr("cx",(function(t){return n+o(t[0])})).attr("cy",(function(t){return 500-e-c(t[1])})).attr("r",5);var i=a.a(o).ticks(5);c.range([400,0]);var u=a.b(c).ticks(5);r.append("g").attr("transform","translate( ".concat(n,", ").concat(500-e," )")).call(i),r.append("g").attr("transform","translate(".concat(n,",").concat(500-e-400,")")).call(u)}()}),[]),r.createElement(o.a,{span:12},r.createElement("div",{id:"scatter-1"}))}},57:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(224),c=n(52);e.default=function(){return o.a.createElement(a.a,null,o.a.createElement(c.default,null))}}}]);
//# sourceMappingURL=4.d41d5e04.chunk.js.map