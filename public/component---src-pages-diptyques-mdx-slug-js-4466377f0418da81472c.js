(self.webpackChunkhachem_bottini=self.webpackChunkhachem_bottini||[]).push([[376],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,l){return o()?(e.exports=u=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),u=r(9713),l=r(7316),a=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=l(e,a),c=f(t),d=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},c),t=Object.keys(e),u=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return i.createElement(d,s({},u))}},7198:function(e,t,r){"use strict";var n=r(7294),o=r(5444);t.Z=function(e){var t=e.pageTitle,r=e.children,u=(0,o.K2)("3159585216");return n.createElement("div",null,n.createElement("span",null,u.site.siteMetadata.title),n.createElement("nav",null,n.createElement("ul",null,n.createElement("li",null,n.createElement(o.rU,{to:"/"},"Home")),n.createElement("li",null,n.createElement(o.rU,{to:"/diptyques"},"Diptyques")),n.createElement("li",null,n.createElement(o.rU,{to:"/about"},"About")))),n.createElement("main",null,n.createElement("h1",null,t),r))}},6370:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(7294),o=r(6125),u=r(6725),l=r(7198),a=function(e){var t=e.data,r=(0,o.d)(t.mdx.frontmatter.n),a=(0,o.d)(t.mdx.frontmatter.t);return n.createElement(l.Z,{pageTitle:t.mdx.frontmatter.title},n.createElement("div",{className:"{mdx-slug}-module--images--m1ANv"},n.createElement(o.G,{image:r,alt:"nancy"}),n.createElement(o.G,{image:a,alt:"thomas"})),n.createElement(u.MDXRenderer,null,t.mdx.body))}}}]);
//# sourceMappingURL=component---src-pages-diptyques-mdx-slug-js-4466377f0418da81472c.js.map