/*! For license information please see 729.9a2d6cc2.chunk.js.LICENSE.txt */
(self.webpackChunkelection=self.webpackChunkelection||[]).push([[729],{1238:function(e,t,n){"use strict";n.d(t,{HS:function(){return a},LL:function(){return r}});var r="http://3.233.196.8:8000/",a=("".concat("http://3.233.196.8:8000/","Backend/images/"),[{key:0,value:"created",color:"cyan"},{key:1,value:"broken",color:"red"},{key:2,value:"approved",color:"orange"},{key:3,value:"waiting...",color:"purple"},{key:4,value:"processing...",color:"blue"},{key:5,value:"done",color:"green"}])},2707:function(e,t,n){"use strict";var r=n(9439),a=n(2791),s=n(1238),c=n(184);t.Z=function(e){var t=e.imagePath,n=(0,a.useState)(null),i=(0,r.Z)(n,2),o=i[0],u=i[1];return(0,a.useEffect)((function(){console.log("imagePath",t),t&&fetch(s.LL+"getImage/?imagePath="+t,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("imagedata",e),u(e.data)}))}),[t]),(0,c.jsxs)(c.Fragment,{children:[console.log("imageData",o),o&&(0,c.jsx)("img",{alt:"Responsive",className:"card-img-top w-100",style:{height:"185px"},src:"data:image;base64, ".concat(o)})]})}},8729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(9439),a=n(2791),s=n(2461),c=n(9743),i=n(2677),o=n(9140),u=n(1238),l=n(2426),d=n.n(l),f=n(2707),m=n(184),v=function(e){var t=a.useState({count:0,total:0}),n=(0,r.Z)(t,2),s=n[0],c=n[1];return a.useEffect((function(){fetch(u.LL+"getCountCandidate/?id="+e.id,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e.data)}))}),[]),(0,m.jsx)("div",{children:(0,m.jsxs)(o.Z,{className:" custom-card card-img-top-1",children:[(0,m.jsx)("a",{href:"".concat(""," /elections/")+e.id,children:(0,m.jsx)(f.Z,{imagePath:e.image})}),(0,m.jsx)(o.Z.Body,{className:" pb-0",children:(0,m.jsx)("a",{href:"".concat(""," /elections/")+e.id,children:(0,m.jsx)("h4",{className:"card-title",children:e.title})})}),(0,m.jsxs)("div",{className:"item7-card-desc d-flex p-3 pt-0 align-items-center justify-content-center border-top",children:[(0,m.jsx)("div",{className:"ms-auto",children:(0,m.jsxs)("span",{className:"phone me-3 font-weight-semibold text-muted",children:[(0,m.jsx)("span",{className:"fe fe-user text-muted me-2 tx-16"}),s.count,"/",s.total]})}),(0,m.jsx)("div",{className:"ms-auto",children:(0,m.jsxs)("span",{className:"phone me-3 font-weight-semibold text-muted",children:[(0,m.jsx)("span",{className:"fe fe-calendar text-muted me-2 tx-16"}),d()(e.date).format("YYYY-MM-DD")]})})]})]})})};v.defaultProps={};var p=v,h=function(e){var t=e.imagePath,n=(0,a.useState)(null),s=(0,r.Z)(n,2),c=s[0],i=s[1];return(0,a.useEffect)((function(){fetch(u.LL+"getImage/?imagePath="+t,{method:"GET"}).then((function(e){return e.json()})).then((function(e){i(e.data)}))}),[t]),(0,m.jsx)(m.Fragment,{children:c&&(0,m.jsx)("img",{className:"avatar br-5 avatar-lg me-3 my-auto",alt:"avatar-img",style:{height:"200px"},src:"data:image;base64, ".concat(c)})})},x=function(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("a",{href:"".concat(""," /elections/")+e.id,children:(0,m.jsx)(h,{imagePath:e.image})}),(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("span",{className:"d-block",children:d()(e.date).format("MM-DD-YYYY A")}),(0,m.jsx)("a",{className:"text-default fs-16 font-weight-semibold",href:"".concat(""," /elections/")+e.id,children:e.title}),(0,m.jsx)("small",{className:"d-block text-muted",children:e.status})]})]})};x.defaultProps={};var b=x,g=function(){var e=a.useState(null),t=(0,r.Z)(e,2),n=t[0],l=t[1],d=a.useState(null),f=(0,r.Z)(d,2),v=f[0],h=f[1];return a.useEffect((function(){fetch(u.LL+"getUpElection",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("data1411",e),l(e.data)})),fetch(u.LL+"getPrev5Election",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log("prevelection",e),h(e.data)}))}),[]),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"breadcrumb-header justify-content-between",children:[(0,m.jsx)("div",{className:"left-content",children:(0,m.jsx)("span",{className:"main-content-title mg-b-0 mg-b-lg-1",children:"ELECTION DASHBOARD"})}),(0,m.jsx)("div",{className:"justify-content-center mt-2",children:(0,m.jsxs)(s.Z,{className:"breadcrumb",children:[(0,m.jsx)(s.Z.Item,{className:"breadcrumb-item tx-15",to:"#",children:"Election Dashboard"}),(0,m.jsx)(s.Z.Item,{className:"breadcrumb-item ",active:!0,"aria-current":"page",children:"Sales"})]})})]}),(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(i.Z,{md:12,lg:9,xl:9,children:(0,m.jsx)(c.Z,{children:n&&n.map((function(e){return(0,m.jsx)(i.Z,{lg:6,xl:3,sm:6,children:(0,m.jsx)(p,{id:e.id,title:e.title,image:e.image,date:e.date})},e.id)}))})}),(0,m.jsx)(i.Z,{sm:6,lg:6,xl:3,children:(0,m.jsxs)(o.Z,{className:"overflow-hidden",children:[(0,m.jsx)(o.Z.Header,{className:" pb-0",children:(0,m.jsx)("h3",{className:"card-title mb-2",children:"PREVIOUS 5 ELECTIONS"})}),(0,m.jsx)(o.Z.Body,{className:" pt-1",children:(0,m.jsx)("div",{className:"list-catergory1",children:(0,m.jsx)("div",{className:"item-list",children:(0,m.jsxs)("ul",{className:"list-group mb-0",children:[v&&v.map((function(e){return(0,m.jsx)("li",{className:"list-group-item d-flex border-bottom-0 pt-4",children:(0,m.jsx)(b,{id:e.id,title:e.title,date:e.date,image:e.image,status:"old"})},e.id)})),(0,m.jsx)("li",{className:"list-group-item d-flex border-bottom pt-4",children:v&&v.length-5===0?(0,m.jsx)(m.Fragment,{}):(0,m.jsx)("p",{children:"View All Previous Elections."})})]})})})})]})})]})]})};g.defaultProps={};var j=g},7731:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2791);function a(){return(0,r.useState)(null)}},7904:function(e,t,n){"use strict";var r=n(2791);t.Z=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t}},9007:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2791),a=n(7904);function s(e){var t=(0,a.Z)(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},9392:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2791),a=n(9007);function s(e,t,n,s){void 0===s&&(s=!1);var c=(0,a.Z)(n);(0,r.useEffect)((function(){var n="function"===typeof e?e():e;return n.addEventListener(t,c,s),function(){return n.removeEventListener(t,c,s)}}),[e])}},9815:function(e,t,n){"use strict";var r=n(2791),a="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,s="undefined"!==typeof document;t.Z=s||a?r.useLayoutEffect:r.useEffect},5746:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2791);function a(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}},2803:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2791);function a(e){var t=(0,r.useRef)(null);return(0,r.useEffect)((function(){t.current=e})),t.current}},6445:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9439),a=n(2791),s=(n(7731),n(7904),n(9007));n(9392);n(5746),n(2803);n(9815),new WeakMap;var c=n(5341),i=n(184),o=["onKeyDown"];var u=a.forwardRef((function(e,t){var n,a=e.onKeyDown,u=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o),l=(0,c.FT)(Object.assign({tagName:"a"},u)),d=(0,r.Z)(l,1)[0],f=(0,s.Z)((function(e){d.onKeyDown(e),null==a||a(e)}));return(n=u.href)&&"#"!==n.trim()&&"button"!==u.role?(0,i.jsx)("a",Object.assign({ref:t},u,{onKeyDown:a})):(0,i.jsx)("a",Object.assign({ref:t},u,d,{onKeyDown:f}))}));u.displayName="Anchor";var l=u},5341:function(e,t,n){"use strict";n.d(t,{FT:function(){return i}});var r=n(9439),a=n(2791),s=n(184),c=["as","disabled"];function i(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,s=e.rel,c=e.role,i=e.onClick,o=e.tabIndex,u=void 0===o?0:o,l=e.type;t||(t=null!=r||null!=a||null!=s?"a":"button");var d={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},d];var f=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=c?c:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?s:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var o=a.forwardRef((function(e,t){var n=e.as,a=e.disabled,o=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,c),u=i(Object.assign({tagName:n,disabled:a},o)),l=(0,r.Z)(u,2),d=l[0],f=l[1].tagName;return(0,s.jsx)(f,Object.assign({},o,d,{ref:t}))}));o.displayName="Button",t.ZP=o},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},2461:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(1413),a=n(5987),s=n(1694),c=n.n(s),i=n(2791),o=n(162),u=n(6445),l=n(184),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.active,i=void 0!==s&&s,f=e.children,m=e.className,v=e.as,p=void 0===v?"li":v,h=e.linkAs,x=void 0===h?u.Z:h,b=e.linkProps,g=void 0===b?{}:b,j=e.href,Z=e.title,N=e.target,y=(0,a.Z)(e,d),P=(0,o.vE)(n,"breadcrumb-item");return(0,l.jsx)(p,(0,r.Z)((0,r.Z)({ref:t},y),{},{className:c()(P,m,{active:i}),"aria-current":i?"page":void 0,children:i?f:(0,l.jsx)(x,(0,r.Z)((0,r.Z)({},g),{},{href:j,title:Z,target:N,children:f}))}))}));f.displayName="BreadcrumbItem";var m=f,v=["bsPrefix","className","listProps","children","label","as"],p=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.listProps,u=void 0===i?{}:i,d=e.children,f=e.label,m=void 0===f?"breadcrumb":f,p=e.as,h=void 0===p?"nav":p,x=(0,a.Z)(e,v),b=(0,o.vE)(n,"breadcrumb");return(0,l.jsx)(h,(0,r.Z)((0,r.Z)({"aria-label":m,className:s,ref:t},x),{},{children:(0,l.jsx)("ol",(0,r.Z)((0,r.Z)({},u),{},{className:c()(b,null==u?void 0:u.className),children:d}))}))}));p.displayName="Breadcrumb";var h=Object.assign(p,{Item:m})},9140:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(1413),a=n(5987),s=n(1694),c=n.n(s),i=n(2791),o=n(162),u=n(6543),l=n(7472),d=n(184),f=["bsPrefix","className","variant","as"],m=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.variant,u=e.as,l=void 0===u?"img":u,m=(0,a.Z)(e,f),v=(0,o.vE)(n,"card-img");return(0,d.jsx)(l,(0,r.Z)({ref:t,className:c()(i?"".concat(v,"-").concat(i):v,s)},m))}));m.displayName="CardImg";var v=m,p=n(6040),h=["bsPrefix","className","as"],x=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,u=e.as,l=void 0===u?"div":u,f=(0,a.Z)(e,h),m=(0,o.vE)(n,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,d.jsx)(p.Z.Provider,{value:v,children:(0,d.jsx)(l,(0,r.Z)((0,r.Z)({ref:t},f),{},{className:c()(s,m)}))})}));x.displayName="CardHeader";var b=x,g=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,l.Z)("h5"),Z=(0,l.Z)("h6"),N=(0,u.Z)("card-body"),y=(0,u.Z)("card-title",{Component:j}),P=(0,u.Z)("card-subtitle",{Component:Z}),O=(0,u.Z)("card-link",{Component:"a"}),w=(0,u.Z)("card-text",{Component:"p"}),E=(0,u.Z)("card-footer"),k=(0,u.Z)("card-img-overlay"),C=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.bg,u=e.text,l=e.border,f=e.body,m=void 0!==f&&f,v=e.children,p=e.as,h=void 0===p?"div":p,x=(0,a.Z)(e,g),b=(0,o.vE)(n,"card");return(0,d.jsx)(h,(0,r.Z)((0,r.Z)({ref:t},x),{},{className:c()(s,b,i&&"bg-".concat(i),u&&"text-".concat(u),l&&"border-".concat(l)),children:m?(0,d.jsx)(N,{children:v}):v}))}));C.displayName="Card";var S=Object.assign(C,{Img:v,Title:y,Subtitle:P,Body:N,Link:O,Text:w,Header:b,Footer:E,ImgOverlay:k})},6040:function(e,t,n){"use strict";var r=n(2791).createContext(null);r.displayName="CardHeaderContext",t.Z=r},2677:function(e,t,n){"use strict";var r=n(9439),a=n(1413),s=n(5987),c=n(1694),i=n.n(c),o=n(2791),u=n(162),l=n(184),d=["as","bsPrefix","className"],f=["className"];var m=o.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,r=e.className,c=(0,s.Z)(e,d);n=(0,u.vE)(n,"col");var o=(0,u.pi)(),l=(0,u.zG)(),f=[],m=[];return o.forEach((function(e){var t,r,a,s=c[e];delete c[e],"object"===typeof s&&null!=s?(t=s.span,r=s.offset,a=s.order):t=s;var i=e!==l?"-".concat(e):"";t&&f.push(!0===t?"".concat(n).concat(i):"".concat(n).concat(i,"-").concat(t)),null!=a&&m.push("order".concat(i,"-").concat(a)),null!=r&&m.push("offset".concat(i,"-").concat(r))})),[(0,a.Z)((0,a.Z)({},c),{},{className:i().apply(void 0,[r].concat(f,m))}),{as:t,bsPrefix:n,spans:f}]}(e),c=(0,r.Z)(n,2),o=c[0],m=o.className,v=(0,s.Z)(o,f),p=c[1],h=p.as,x=void 0===h?"div":h,b=p.bsPrefix,g=p.spans;return(0,l.jsx)(x,(0,a.Z)((0,a.Z)({},v),{},{ref:t,className:i()(m,!g.length&&b)}))}));m.displayName="Col",t.Z=m},9743:function(e,t,n){"use strict";var r=n(1413),a=n(5987),s=n(1694),c=n.n(s),i=n(2791),o=n(162),u=n(184),l=["bsPrefix","className","as"],d=i.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,i=e.as,d=void 0===i?"div":i,f=(0,a.Z)(e,l),m=(0,o.vE)(n,"row"),v=(0,o.pi)(),p=(0,o.zG)(),h="".concat(m,"-cols"),x=[];return v.forEach((function(e){var t,n=f[e];delete f[e],t=null!=n&&"object"===typeof n?n.cols:n;var r=e!==p?"-".concat(e):"";null!=t&&x.push("".concat(h).concat(r,"-").concat(t))})),(0,u.jsx)(d,(0,r.Z)((0,r.Z)({ref:t},f),{},{className:c().apply(void 0,[s,m].concat(x))}))}));d.displayName="Row",t.Z=d},162:function(e,t,n){"use strict";n.d(t,{SC:function(){return u},pi:function(){return i},vE:function(){return c},zG:function(){return o}});var r=n(2791),a=(n(184),["xxl","xl","lg","md","sm","xs"]),s=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"});s.Consumer,s.Provider;function c(e,t){var n=(0,r.useContext)(s).prefixes;return e||n[t]||t}function i(){return(0,r.useContext)(s).breakpoints}function o(){return(0,r.useContext)(s).minBreakpoint}function u(){return"rtl"===(0,r.useContext)(s).dir}},6543:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(1413),a=n(5987),s=n(1694),c=n.n(s),i=/-(.)/g;var o=n(2791),u=n(162),l=n(184),d=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,s=void 0===n?f(e):n,i=t.Component,m=t.defaultProps,v=o.forwardRef((function(t,n){var s=t.className,o=t.bsPrefix,f=t.as,v=void 0===f?i||"div":f,p=(0,a.Z)(t,d),h=(0,r.Z)((0,r.Z)({},m),p),x=(0,u.vE)(o,e);return(0,l.jsx)(v,(0,r.Z)({ref:n,className:c()(s,x)},h))}));return v.displayName=s,v}},7472:function(e,t,n){"use strict";var r=n(1413),a=n(2791),s=n(1694),c=n.n(s),i=n(184);t.Z=function(e){return a.forwardRef((function(t,n){return(0,i.jsx)("div",(0,r.Z)((0,r.Z)({},t),{},{ref:n,className:c()(t.className,e)}))}))}},4942:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(9142);function a(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5987:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,s=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=729.9a2d6cc2.chunk.js.map