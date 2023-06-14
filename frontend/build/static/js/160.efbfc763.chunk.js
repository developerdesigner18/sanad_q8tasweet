"use strict";(self.webpackChunkelection=self.webpackChunkelection||[]).push([[160],{160:function(e,a,i){i.d(a,{Z:function(){return ee}});var s=i(1413),r=i(5987),l=i(1694),o=i.n(l),t=i(2007),n=i.n(t),d=i(2791),c=i(184),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=d.forwardRef((function(e,a){var i=e.as,l=void 0===i?"div":i,t=e.className,n=e.type,d=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,c.jsx)(l,(0,s.Z)((0,s.Z)({},u),{},{ref:a,className:o()(t,"".concat(d,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=i(4934),b=i(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],Z=d.forwardRef((function(e,a){var i=e.id,l=e.bsPrefix,t=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,Z=void 0!==u&&u,N=e.as,h=void 0===N?"input":N,y=(0,r.Z)(e,x),I=(0,d.useContext)(p.Z).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,c.jsx)(h,(0,s.Z)((0,s.Z)({},y),{},{ref:a,type:f,id:i||I,className:o()(t,l,m&&"is-valid",Z&&"is-invalid")}))}));Z.displayName="FormCheckInput";var N=Z,h=["bsPrefix","className","htmlFor"],y=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,t=e.htmlFor,n=(0,r.Z)(e,h),f=(0,d.useContext)(p.Z).controlId;return i=(0,b.vE)(i,"form-check-label"),(0,c.jsx)("label",(0,s.Z)((0,s.Z)({},n),{},{ref:a,htmlFor:t||f,className:o()(l,i)}))}));y.displayName="FormCheckLabel";var I=y,j=i(1701),w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],F=d.forwardRef((function(e,a){var i=e.id,l=e.bsPrefix,t=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,Z=void 0!==x&&x,h=e.isValid,y=void 0!==h&&h,F=e.isInvalid,k=void 0!==F&&F,P=e.feedbackTooltip,g=void 0!==P&&P,C=e.feedback,R=e.feedbackType,z=e.className,E=e.style,S=e.title,T=void 0===S?"":S,V=e.type,L=void 0===V?"checkbox":V,O=e.label,G=e.children,H=e.as,M=void 0===H?"input":H,W=(0,r.Z)(e,w);l=(0,b.vE)(l,"form-check"),t=(0,b.vE)(t,"form-switch");var X=(0,d.useContext)(p.Z).controlId,_=(0,d.useMemo)((function(){return{controlId:i||X}}),[X,i]),q=!G&&null!=O&&!1!==O||(0,j.XW)(G,I),A=(0,c.jsx)(N,(0,s.Z)((0,s.Z)({},W),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:y,isInvalid:k,disabled:Z,as:M}));return(0,c.jsx)(p.Z.Provider,{value:_,children:(0,c.jsx)("div",{style:E,className:o()(z,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===L&&t),children:G||(0,c.jsxs)(c.Fragment,{children:[A,q&&(0,c.jsx)(I,{title:T,children:O}),C&&(0,c.jsx)(u,{type:R,tooltip:g,children:C})]})})})}));F.displayName="FormCheck";var k=Object.assign(F,{Input:N,Label:I}),P=i(4942),g=(i(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=d.forwardRef((function(e,a){var i,l,t=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,Z=void 0!==x&&x,N=e.isInvalid,h=void 0!==N&&N,y=e.plaintext,I=e.readOnly,j=e.as,w=void 0===j?"input":j,F=(0,r.Z)(e,g),k=(0,d.useContext)(p.Z).controlId;(t=(0,b.vE)(t,"form-control"),y)?i=(0,P.Z)({},"".concat(t,"-plaintext"),!0):(l={},(0,P.Z)(l,t,!0),(0,P.Z)(l,"".concat(t,"-").concat(f),f),i=l);return(0,c.jsx)(w,(0,s.Z)((0,s.Z)({},F),{},{type:n,size:v,ref:a,readOnly:I,id:m||k,className:o()(u,i,Z&&"is-valid",h&&"is-invalid","color"===n&&"".concat(t,"-color"))}))}));C.displayName="FormControl";var R=Object.assign(C,{Feedback:u}),z=(0,i(6543).Z)("form-floating"),E=i(323),S=i(2677),T=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],V=d.forwardRef((function(e,a){var i=e.as,l=void 0===i?"label":i,t=e.bsPrefix,n=e.column,f=void 0!==n&&n,v=e.visuallyHidden,m=void 0!==v&&v,u=e.className,x=e.htmlFor,Z=(0,r.Z)(e,T),N=(0,d.useContext)(p.Z).controlId;t=(0,b.vE)(t,"form-label");var h="col-form-label";"string"===typeof f&&(h="".concat(h," ").concat(h,"-").concat(f));var y=o()(u,t,m&&"visually-hidden",f&&h);return x=x||N,f?(0,c.jsx)(S.Z,(0,s.Z)({ref:a,as:"label",className:y,htmlFor:x},Z)):(0,c.jsx)(l,(0,s.Z)({ref:a,className:y,htmlFor:x},Z))}));V.displayName="FormLabel";var L=V,O=["bsPrefix","className","id"],G=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,t=e.id,n=(0,r.Z)(e,O),f=(0,d.useContext)(p.Z).controlId;return i=(0,b.vE)(i,"form-range"),(0,c.jsx)("input",(0,s.Z)((0,s.Z)({},n),{},{type:"range",ref:a,className:o()(l,i),id:t||f}))}));G.displayName="FormRange";var H=G,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],W=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.size,t=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,Z=(0,r.Z)(e,M),N=(0,d.useContext)(p.Z).controlId;return i=(0,b.vE)(i,"form-select"),(0,c.jsx)("select",(0,s.Z)((0,s.Z)({},Z),{},{size:t,ref:a,className:o()(n,i,l&&"".concat(i,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||N}))}));W.displayName="FormSelect";var X=W,_=["bsPrefix","className","as","muted"],q=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,t=e.as,n=void 0===t?"small":t,d=e.muted,f=(0,r.Z)(e,_);return i=(0,b.vE)(i,"form-text"),(0,c.jsx)(n,(0,s.Z)((0,s.Z)({},f),{},{ref:a,className:o()(l,i,d&&"text-muted")}))}));q.displayName="FormText";var A=q,B=d.forwardRef((function(e,a){return(0,c.jsx)(k,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));B.displayName="Switch";var D=Object.assign(B,{Input:k.Input,Label:k.Label}),J=["bsPrefix","className","children","controlId","label"],K=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,t=e.children,n=e.controlId,d=e.label,f=(0,r.Z)(e,J);return i=(0,b.vE)(i,"form-floating"),(0,c.jsxs)(E.Z,(0,s.Z)((0,s.Z)({ref:a,className:o()(l,i),controlId:n},f),{},{children:[t,(0,c.jsx)("label",{htmlFor:n,children:d})]}))}));K.displayName="FloatingLabel";var Q=K,U=["className","validated","as"],Y={_ref:n().any,validated:n().bool,as:n().elementType},$=d.forwardRef((function(e,a){var i=e.className,l=e.validated,t=e.as,n=void 0===t?"form":t,d=(0,r.Z)(e,U);return(0,c.jsx)(n,(0,s.Z)((0,s.Z)({},d),{},{ref:a,className:o()(i,l&&"was-validated")}))}));$.displayName="Form",$.propTypes=Y;var ee=Object.assign($,{Group:E.Z,Control:R,Floating:z,Check:k,Switch:D,Label:L,Text:A,Range:H,Select:X,FloatingLabel:Q})},4934:function(e,a,i){var s=i(2791).createContext({});a.Z=s},323:function(e,a,i){var s=i(1413),r=i(5987),l=i(2791),o=i(4934),t=i(184),n=["controlId","as"],d=l.forwardRef((function(e,a){var i=e.controlId,d=e.as,c=void 0===d?"div":d,f=(0,r.Z)(e,n),v=(0,l.useMemo)((function(){return{controlId:i}}),[i]);return(0,t.jsx)(o.Z.Provider,{value:v,children:(0,t.jsx)(c,(0,s.Z)((0,s.Z)({},f),{},{ref:a}))})}));d.displayName="FormGroup",a.Z=d}}]);
//# sourceMappingURL=160.efbfc763.chunk.js.map