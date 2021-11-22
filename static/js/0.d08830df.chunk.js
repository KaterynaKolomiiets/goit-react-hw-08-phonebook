(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{90:function(e,a,t){"use strict";var i=t(0),c=i.createContext({});a.a=c},91:function(e,a,t){"use strict";var i=t(9),c=t(35),r=t(17),s=t(18),o=t.n(s),l=t(0),n=t(93),d=t(20),b=t(1),f=["as","bsPrefix","variant","size","active","className"],j=l.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,l=e.variant,j=e.size,u=e.active,v=e.className,m=Object(r.a)(e,f),O=Object(d.a)(s,"btn"),p=Object(n.b)(Object(i.a)({tagName:t},m)),x=Object(c.a)(p,2),N=x[0],y=x[1].tagName;return Object(b.jsx)(y,Object(i.a)(Object(i.a)(Object(i.a)({},m),N),{},{ref:a,className:o()(v,O,u&&"active",l&&"".concat(O,"-").concat(l),j&&"".concat(O,"-").concat(j),m.href&&m.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=j},92:function(e,a,t){"use strict";var i=t(9),c=t(17),r=t(18),s=t.n(r),o=t(0),l=t(96),n=t(20),d=t(1),b=["bsPrefix","className","children","controlId","label"],f=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.children,f=e.controlId,j=e.label,u=Object(c.a)(e,b);return t=Object(n.a)(t,"form-floating"),Object(d.jsxs)(l.a,Object(i.a)(Object(i.a)({ref:a,className:s()(r,t),controlId:f},u),{},{children:[o,Object(d.jsx)("label",{htmlFor:f,children:j})]}))}));f.displayName="FloatingLabel",a.a=f},93:function(e,a,t){"use strict";t.d(a,"b",(function(){return o}));var i=t(35),c=t(0),r=t(1),s=["as","disabled"];function o(e){var a=e.tagName,t=e.disabled,i=e.href,c=e.target,r=e.rel,s=e.onClick,o=e.tabIndex,l=void 0===o?0:o,n=e.type;a||(a=null!=i||null!=c||null!=r?"a":"button");var d={tagName:a};if("button"===a)return[{type:n||"button",disabled:t},d];var b=function(e){(t||"a"===a&&function(e){return!e||"#"===e.trim()}(i))&&e.preventDefault(),t?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:l,href:"a"===a&&t?void 0:i,target:"a"===a?c:void 0,"aria-disabled":t||void 0,rel:"a"===a?r:void 0,onClick:b,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),b(e))}},d]}var l=c.forwardRef((function(e,a){var t=e.as,c=e.disabled,l=function(e,a){if(null==e)return{};var t,i,c={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,s),n=o(Object.assign({tagName:t,disabled:c},l)),d=Object(i.a)(n,2),b=d[0],f=d[1].tagName;return Object(r.jsx)(f,Object.assign({},l,b,{ref:a}))}));l.displayName="Button",a.a=l},94:function(e,a,t){"use strict";var i=t(9),c=t(17),r=t(18),s=t.n(r),o=t(21),l=t.n(o),n=t(0),d=t(1),b=["as","className","type","tooltip"],f={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},j=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,o=e.className,l=e.type,n=void 0===l?"valid":l,f=e.tooltip,j=void 0!==f&&f,u=Object(c.a)(e,b);return Object(d.jsx)(r,Object(i.a)(Object(i.a)({},u),{},{ref:a,className:s()(o,"".concat(n,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=f;var u=j,v=t(90),m=t(20),O=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.className,l=e.type,b=void 0===l?"checkbox":l,f=e.isValid,j=void 0!==f&&f,u=e.isInvalid,p=void 0!==u&&u,x=e.as,N=void 0===x?"input":x,y=Object(c.a)(e,O),h=Object(n.useContext)(v.a).controlId;return r=Object(m.a)(r,"form-check-input"),Object(d.jsx)(N,Object(i.a)(Object(i.a)({},y),{},{ref:a,type:b,id:t||h,className:s()(o,r,j&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,N=["bsPrefix","className","htmlFor"],y=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.htmlFor,l=Object(c.a)(e,N),b=Object(n.useContext)(v.a).controlId;return t=Object(m.a)(t,"form-check-label"),Object(d.jsx)("label",Object(i.a)(Object(i.a)({},l),{},{ref:a,htmlFor:o||b,className:s()(r,t)}))}));y.displayName="FormCheckLabel";var h=y,g=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,b=void 0!==l&&l,f=e.disabled,j=void 0!==f&&f,O=e.isValid,p=void 0!==O&&O,N=e.isInvalid,y=void 0!==N&&N,P=e.feedbackTooltip,w=void 0!==P&&P,I=e.feedback,k=e.feedbackType,F=e.className,C=e.style,R=e.title,z=void 0===R?"":R,S=e.type,T=void 0===S?"checkbox":S,V=e.label,L=e.children,D=e.as,H=void 0===D?"input":D,B=Object(c.a)(e,g);r=Object(m.a)(r,"form-check"),o=Object(m.a)(o,"form-switch");var G=Object(n.useContext)(v.a).controlId,J=Object(n.useMemo)((function(){return{controlId:t||G}}),[G,t]),M=null!=V&&!1!==V&&!L,U=Object(d.jsx)(x,Object(i.a)(Object(i.a)({},B),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:p,isInvalid:y,disabled:j,as:H}));return Object(d.jsx)(v.a.Provider,{value:J,children:Object(d.jsx)("div",{style:C,className:s()(F,V&&r,b&&"".concat(r,"-inline"),"switch"===T&&o),children:L||Object(d.jsxs)(d.Fragment,{children:[U,M&&Object(d.jsx)(h,{title:z,children:V}),I&&Object(d.jsx)(u,{type:k,tooltip:w,children:I})]})})})}));P.displayName="FormCheck";var w=Object.assign(P,{Input:x,Label:h}),I=t(2),k=(t(95),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=n.forwardRef((function(e,a){var t,r,o=e.bsPrefix,l=e.type,b=e.size,f=e.htmlSize,j=e.id,u=e.className,O=e.isValid,p=void 0!==O&&O,x=e.isInvalid,N=void 0!==x&&x,y=e.plaintext,h=e.readOnly,g=e.as,P=void 0===g?"input":g,w=Object(c.a)(e,k),F=Object(n.useContext)(v.a).controlId;(o=Object(m.a)(o,"form-control"),y)?t=Object(I.a)({},"".concat(o,"-plaintext"),!0):(r={},Object(I.a)(r,o,!0),Object(I.a)(r,"".concat(o,"-").concat(b),b),t=r);return Object(d.jsx)(P,Object(i.a)(Object(i.a)({},w),{},{type:l,size:f,ref:a,readOnly:h,id:j||F,className:s()(u,t,p&&"is-valid",N&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));F.displayName="FormControl";var C=Object.assign(F,{Feedback:u}),R=/-(.)/g;var z=["className","bsPrefix","as"],S=function(e){return e[0].toUpperCase()+(a=e,a.replace(R,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var T=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,r=void 0===t?S(e):t,o=a.Component,l=a.defaultProps,b=n.forwardRef((function(a,t){var r=a.className,l=a.bsPrefix,n=a.as,b=void 0===n?o||"div":n,f=Object(c.a)(a,z),j=Object(m.a)(l,e);return Object(d.jsx)(b,Object(i.a)({ref:t,className:s()(r,j)},f))}));return b.defaultProps=l,b.displayName=r,b}("form-floating"),V=t(96),L=t(37),D=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],H=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,o=e.bsPrefix,l=e.column,b=e.visuallyHidden,f=e.className,j=e.htmlFor,u=Object(c.a)(e,D),O=Object(n.useContext)(v.a).controlId;o=Object(m.a)(o,"form-label");var p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));var x=s()(f,o,b&&"visually-hidden",l&&p);return j=j||O,l?Object(d.jsx)(L.a,Object(i.a)({ref:a,as:"label",className:x,htmlFor:j},u)):Object(d.jsx)(r,Object(i.a)({ref:a,className:x,htmlFor:j},u))}));H.displayName="FormLabel",H.defaultProps={column:!1,visuallyHidden:!1};var B=H,G=["bsPrefix","className","id"],J=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.id,l=Object(c.a)(e,G),b=Object(n.useContext)(v.a).controlId;return t=Object(m.a)(t,"form-range"),Object(d.jsx)("input",Object(i.a)(Object(i.a)({},l),{},{type:"range",ref:a,className:s()(r,t),id:o||b}))}));J.displayName="FormRange";var M=J,U=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],K=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,o=e.htmlSize,l=e.className,b=e.isValid,f=void 0!==b&&b,j=e.isInvalid,u=void 0!==j&&j,O=e.id,p=Object(c.a)(e,U),x=Object(n.useContext)(v.a).controlId;return t=Object(m.a)(t,"form-select"),Object(d.jsx)("select",Object(i.a)(Object(i.a)({},p),{},{size:o,ref:a,className:s()(l,t,r&&"".concat(t,"-").concat(r),f&&"is-valid",u&&"is-invalid"),id:O||x}))}));K.displayName="FormSelect";var _=K,q=["bsPrefix","className","as","muted"],A=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,l=void 0===o?"small":o,n=e.muted,b=Object(c.a)(e,q);return t=Object(m.a)(t,"form-text"),Object(d.jsx)(l,Object(i.a)(Object(i.a)({},b),{},{ref:a,className:s()(r,t,n&&"text-muted")}))}));A.displayName="FormText";var E=A,Q=n.forwardRef((function(e,a){return Object(d.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{ref:a,type:"switch"}))}));Q.displayName="Switch";var W=Object.assign(Q,{Input:w.Input,Label:w.Label}),X=t(92),Y=["className","validated","as"],Z={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},$=n.forwardRef((function(e,a){var t=e.className,r=e.validated,o=e.as,l=void 0===o?"form":o,n=Object(c.a)(e,Y);return Object(d.jsx)(l,Object(i.a)(Object(i.a)({},n),{},{ref:a,className:s()(t,r&&"was-validated")}))}));$.displayName="Form",$.propTypes=Z;a.a=Object.assign($,{Group:V.a,Control:C,Floating:T,Check:w,Switch:W,Label:B,Text:E,Range:M,Select:_,FloatingLabel:X.a})},95:function(e,a,t){"use strict";var i=function(){};e.exports=i},96:function(e,a,t){"use strict";var i=t(9),c=t(17),r=t(0),s=t(90),o=t(1),l=["controlId","as"],n=r.forwardRef((function(e,a){var t=e.controlId,n=e.as,d=void 0===n?"div":n,b=Object(c.a)(e,l),f=Object(r.useMemo)((function(){return{controlId:t}}),[t]);return Object(o.jsx)(s.a.Provider,{value:f,children:Object(o.jsx)(d,Object(i.a)(Object(i.a)({},b),{},{ref:a}))})}));n.displayName="FormGroup",a.a=n}}]);
//# sourceMappingURL=0.d08830df.chunk.js.map