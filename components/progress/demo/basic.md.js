webpackJsonp([31],{3:function(n,t,e){"use strict";e(7),e(6)},6:function(n,t){},7:function(n,t){},11:function(n,t){"use strict";function e(n,t){var e={},a={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?e[s]=n[s]:a[s]=n[s]}),[e,a]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=e,n.exports=t["default"]},14:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),k=a(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.style,r=t.onClick,c=(0,k["default"])((n={},p(n,""+e,!0),p(n,s,!!s),p(n,e+"-ws"+a,!0),n));return i.createElement("div",{className:c,style:o,onClick:r})},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},15:function(n,t,e){"use strict";e(3),e(17)},17:function(n,t){},24:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function l(n){return"string"==typeof n}function i(n){return l(n.type)&&j(n.props.children)?y.cloneElement(n,{},n.props.children.split("").join(" ")):l(n)?(j(n)&&(n=n.split("").join(" ")),y.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},k=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var p,r=n[Symbol.iterator]();!(a=(p=r.next()).done)&&(e.push(p.value),!t||e.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{!a&&r["return"]&&r["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=e(1),y=s(d),b=e(2),m=a(b),g=e(25),h=a(g),v=e(11),w=a(v),O=/^[\u4e00-\u9fa5]{2}$/,j=O.test.bind(O),P=function(n){function t(){r(this,t);for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var o=c(this,n.call.apply(n,[this].concat(a)));return o.onClick=function(){o.props.onClick(o)},o}return u(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),e=k(t,2),a=e[0],s=a.children,o=a.className,r=a.prefixCls,c=a.type,u=a.size,l=a.ghost,d=a.inline,b=a.disabled,g=a.htmlType,v=a.icon,O=a.loading,j=e[1],P=(0,m["default"])((n={},p(n,o,o),p(n,r,!0),p(n,r+"-primary","primary"===c),p(n,r+"-ghost",l),p(n,r+"-warning","warning"===c),p(n,r+"-small","small"===u&&d),p(n,r+"-loading",O),p(n,r+"-inline",d),p(n,r+"-disabled",b),n)),C=O?"loading":v,x=y.Children.map(s,i);return y.createElement("button",f({},j,{type:g||"button",className:P,disabled:b,onClick:this.onClick}),C?y.createElement(h["default"],{type:C}):null,x)},t}(y.Component);t["default"]=P,P.propTypes={prefixCls:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),icon:d.PropTypes.bool},P.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},26:function(n,t,e){"use strict";e(3),e(30),e(27)},27:function(n,t){},31:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),k=a(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.children,r=t.style,c=(0,k["default"])((n={},p(n,""+e,!0),p(n,s,!!s),p(n,e+"-wb"+a,!0),n));return i.createElement("div",{className:c,style:r},o)},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},32:function(n,t,e){"use strict";e(3),e(33)},33:function(n,t){},41:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),k=a(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.direction,a=t.wrap,s=t.justify,o=t.align,r=t.alignContent,c=t.className,u=t.children,l=t.prefixCls,f=t.style,d=t.onClick,y=(0,k["default"])((n={},p(n,l,!0),p(n,l+"-dir-row","row"===e),p(n,l+"-dir-row-reverse","row-reverse"===e),p(n,l+"-dir-column","column"===e),p(n,l+"-dir-column-reverse","column-reverse"===e),p(n,l+"-nowrap","nowrap"===a),p(n,l+"-wrap","wrap"===a),p(n,l+"-wrap-reverse","wrap-reverse"===a),p(n,l+"-justify-start","start"===s),p(n,l+"-justify-end","end"===s),p(n,l+"-justify-center","center"===s),p(n,l+"-justify-between","between"===s),p(n,l+"-justify-around","around"===s),p(n,l+"-align-top","top"===o||"start"===o),p(n,l+"-align-middle","middle"===o||"center"===o),p(n,l+"-align-bottom","bottom"===o||"end"===o),p(n,l+"-align-baseline","baseline"===o),p(n,l+"-align-stretch","stretch"===o),p(n,l+"-align-content-start","start"===r),p(n,l+"-align-content-end","end"===r),p(n,l+"-align-content-center","center"===r),p(n,l+"-align-content-between","between"===r),p(n,l+"-align-content-around","around"===r),p(n,l+"-align-content-stretch","stretch"===r),p(n,c,c),n));return i.createElement("div",{className:y,style:f,onClick:d},u)},t}(i.Component);t["default"]=d,d.propTypes={direction:l.PropTypes.oneOf(["row","row-reverse","column","column-reverse"]),wrap:l.PropTypes.oneOf(["nowrap","wrap","wrap-reverse"]),justify:l.PropTypes.oneOf(["start","end","center","between","around"]),align:l.PropTypes.oneOf(["start","end","center","top","middle","bottom","baseline","stretch"]),alignContent:l.PropTypes.oneOf(["start","end","center","between","around","stretch"])},d.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=t["default"]},42:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),k=a(f),d=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.children,a=t.className,s=t.prefixCls,o=t.style,r=t.onClick,c=(0,k["default"])((n={},p(n,s+"-item",!0),p(n,a,a),n));return i.createElement("div",{className:c,style:o,onClick:r},e)},t}(i.Component);t["default"]=d,d.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},43:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=e(41),o=a(s),p=e(42),r=a(p);o["default"].Item=r["default"],t["default"]=o["default"],n.exports=t["default"]},55:function(n,t,e){"use strict";e(3),e(56)},56:function(n,t){},100:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},i=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var p,r=n[Symbol.iterator]();!(a=(p=r.next()).done)&&(e.push(p.value),!t||e.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{!a&&r["return"]&&r["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=e(1),k=s(f),d=e(2),y=a(d),b=e(25),m=a(b),g=e(11),h=a(g),v=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=(0,h["default"])(this.props,["prefixCls","children","mode","className","iconName","leftContent","rightContent","onLeftClick"]),e=i(t,2),a=e[0],s=a.prefixCls,o=a.children,r=a.mode,c=a.className,u=a.iconName,f=a.leftContent,d=a.rightContent,b=a.onLeftClick,g=e[1],v=(0,y["default"])((n={},p(n,c,c),p(n,s,!0),p(n,s+"-"+r,!0),n));return k.createElement("div",l({},g,{className:v}),k.createElement("div",{className:s+"-left",onClick:b},u?k.createElement("span",{className:s+"-left-icon"},k.createElement(m["default"],{type:u})):null,k.createElement("span",{className:s+"-left-content"},f)),k.createElement("div",{className:s+"-title"},o),k.createElement("div",{className:s+"-right"},d))},t}(k.Component);t["default"]=v,v.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=t["default"]},101:function(n,t,e){"use strict";e(3),e(103)},103:function(n,t){},753:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(32),e(31)),o=a(s),p=(e(55),e(43)),r=a(p),c=(e(26),e(24)),u=a(c),l=(e(15),e(14)),i=a(l),f=(e(843),e(842)),k=a(f),d=(e(101),e(100)),y=a(d),b=e(1),m=a(b),g=e(4);a(g);n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NavBar<span class="token punctuation" >,</span> Progress<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Flex<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> MyProgress <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      percent<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >increase</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >+</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >></span> <span class="token number" >100</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >100</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >decline</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >-</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >&lt;</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>progress-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >===</span> <span class="token number" >100</span> <span class="token operator" >?</span> <span class="token keyword" >null</span> <span class="token punctuation" >:</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>light<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fixed<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>increase<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >+</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>decline<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >-</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MyProgress</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=m["default"].createClass({displayName:"MyProgress",getInitialState:function(){return{percent:0}},increase:function(){var n=this.state.percent+10;n>100&&(n=100),this.setState({percent:n,status:status})},decline:function(){var n=this.state.percent-10;n<0&&(n=0),this.setState({percent:n,status:status})},render:function(){return m["default"].createElement("div",{className:"progress-container"},100===this.state.percent?null:m["default"].createElement("div",null,m["default"].createElement(y["default"],{iconName:!1,mode:"light"},"NavBar"),m["default"].createElement(k["default"],{percent:this.state.percent,position:"fixed"})),m["default"].createElement(k["default"],{percent:this.state.percent,position:"normal"}),m["default"].createElement(i["default"],{size:20}),m["default"].createElement(o["default"],{size:20},m["default"].createElement(r["default"],null,m["default"].createElement(r["default"].Item,null,m["default"].createElement(u["default"],{onClick:this.increase}," + ")),m["default"].createElement(r["default"].Item,null,m["default"].createElement(u["default"],{onClick:this.decline}," - ")))),m["default"].createElement(i["default"],{size:20}))}});return m["default"].createElement(n,null)}}},842:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),k=a(f),d=function(n){function t(e){r(this,t);var a=c(this,n.call(this,e));return a.state={},a}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.percent,s=t.position,o={width:a+"%",height:0},r=(0,k["default"])((n={},p(n,e+"-outer",!0),p(n,e+"-fixed-outer","fixed"===s),n));return i.createElement("div",{className:r},i.createElement("div",{className:e+"-bar",style:o}))},t}(i.Component);t["default"]=d,d.propTypes={prefixCls:l.PropTypes.string,position:l.PropTypes.oneOf(["fixed","normal"]),percent:l.PropTypes.number},d.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed"},n.exports=t["default"]},843:function(n,t,e){"use strict";e(3),e(1269)},1269:function(n,t){}});