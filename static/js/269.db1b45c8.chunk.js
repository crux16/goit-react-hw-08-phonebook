"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[269],{9269:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var a=n(3050),r=n(2791);const s="ContactForm_form__dhl+T",o="ContactForm_formField__O5fo+",c="ContactForm_formLabel__TSwxK";var l=n(4420),i=n(826),u=n(3553);const d=e=>e.filter,m=e=>e.contacts.items,p=e=>e.contacts.error,h=e=>e.contacts.isLoading,v=(0,u.P1)([m,d],((e,t)=>e.filter((e=>{let{name:n}=e;return n.toLowerCase().includes(t.toLowerCase())}))));var f=n(3756),x=n(2419),y=n(5523),j=n(5985),g=n(184);const b=()=>{const e=(0,l.I0)(),t=(0,l.v9)(m),[n,a]=(0,r.useState)(""),[u,d]=(0,r.useState)("");return(0,g.jsxs)("form",{className:s,onSubmit:r=>{if(r.preventDefault(),""===n.trim()||""===u.trim())return;t.find((e=>e.name.toLowerCase()===n.toLowerCase()))?j.Am.warning("".concat(n," is already in contacts!")):(e((0,i.uK)({name:n,number:u})),a(""),d(""))},children:[(0,g.jsxs)("label",{className:o,children:[(0,g.jsx)("p",{className:c,children:"Name"}),(0,g.jsx)(y.ZP,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:n,onChange:e=>{a(e.target.value)}})]}),(0,g.jsxs)("label",{className:o,children:[(0,g.jsx)("p",{className:c,children:"Number"}),(0,g.jsx)(y.ZP,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:u,onChange:e=>{d(e.target.value)}})]}),(0,g.jsxs)(f.Z,{type:"submit",variant:"solid",style:{width:"fit-content"},children:[(0,g.jsx)(x.Z,{}),"Phone Contact"]})]})},C="Filter_container__L5eml",Z="Filter_filterList__Sfn16",w="Filter_filter__vxThR";var _=n(1634);const z=(0,n(5320).Z)((0,g.jsx)("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList"),L=()=>{const e=(0,l.I0)(),t=(0,l.v9)(d);return(0,g.jsxs)("div",{className:C,children:[(0,g.jsx)("p",{children:"Find Contacts by Name"}),(0,g.jsxs)("label",{className:Z,children:[(0,g.jsx)(y.ZP,{type:"text",name:"filter",placeholder:"Search by name",value:t,onChange:t=>{e((0,_.T)(t.target.value))}}),(0,g.jsx)(z,{className:w})]})]})},P="ContactListItem_contactListItem__21QwY",k="ContactListItem_contactEdit__2sHut";var F=n(7247),S=n(1286),E=n(872),N=n(6711);const O=e=>{let{filteredContact:t,dispatch:n}=e;const[a,s]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[l,u]=(0,r.useState)(!1),d=()=>{s(t.name),c(t.number),u(!l)};return(0,g.jsx)("li",{className:P,children:l?(0,g.jsxs)("form",{className:k,children:[(0,g.jsx)(y.ZP,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:a,onChange:e=>{s(e.target.value)}}),(0,g.jsx)(y.ZP,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:e=>{c(e.target.value)}}),(0,g.jsxs)("span",{style:{display:"inline-flex",gap:"8px"},children:[(0,g.jsx)(f.Z,{onClick:d,color:"primary",size:"sm",children:(0,g.jsx)(N.Z,{})}),(0,g.jsx)(f.Z,{onClick:()=>{if(a.toLowerCase()===t.name.toLowerCase()&&o.toLowerCase()===t.number.toLowerCase())return j.Am.info("nothing Changed!"),void u(!l);n((0,i.Tk)({id:t.id,name:a,number:o})),j.Am.success("successfuly changed"),u(!l)},color:"success",size:"sm",children:(0,g.jsx)(E.Z,{})})]})]}):(0,g.jsxs)("div",{className:k,children:[(0,g.jsxs)("p",{children:[t.name," :"]}),(0,g.jsx)("p",{children:t.number}),(0,g.jsxs)("span",{style:{display:"inline-flex",gap:"8px"},children:[(0,g.jsx)(f.Z,{onClick:()=>{n((0,i.GK)(t.id))},color:"danger",size:"2",children:(0,g.jsx)(F.Z,{})}),(0,g.jsx)(f.Z,{onClick:d,color:"success",variant:"outlined",size:"sm",children:(0,g.jsx)(S.Z,{})})]})]})})};var A={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function M(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return A[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function I(e){var t=M(e);return"".concat(t.value).concat(t.unit)}var T=function(){return T=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},T.apply(this,arguments)},R=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},q=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var s=r.sheet,o="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(o,0),a}("GridLoader","0% {transform: scale(1)} 50% {transform: scale(0.5); opacity: 0.7} 100% {transform: scale(1); opacity: 1}","grid"),V=function(e){return Math.random()*e};const H=function(e){var t=e.loading,n=void 0===t||t,a=e.color,s=void 0===a?"#000000":a,o=e.speedMultiplier,c=void 0===o?1:o,l=e.cssOverride,i=void 0===l?{}:l,u=e.size,d=void 0===u?15:u,m=e.margin,p=void 0===m?2:m,h=R(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=M(d),f=M(p),x=3*parseFloat(v.value.toString())+6*parseFloat(f.value.toString()),y=T({width:"".concat(x).concat(v.unit),fontSize:0,display:"inline-block"},i),j=function(e){return{display:"inline-block",backgroundColor:s,width:"".concat(I(d)),height:"".concat(I(d)),margin:I(p),borderRadius:"100%",animationFillMode:"both",animation:"".concat(q," ").concat((e/100+.6)/c,"s ").concat(e/100-.2,"s infinite ease")}};return n?r.createElement("span",T({style:y},h,{ref:function(e){e&&e.style.setProperty("width","".concat(x).concat(v.unit),"important")}}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))}),r.createElement("span",{style:j(V(100))})):null},D="Loader_span__7xqfd",B=()=>(0,g.jsx)(H,{className:D,color:"#000",size:"30px",margin:"4px"}),G=()=>{const e=(0,l.v9)(v),t=(0,l.v9)(p),n=(0,l.v9)(h),a=(0,l.I0)();return(0,r.useEffect)((()=>{a((0,i.yF)())}),[a]),(0,g.jsxs)("ul",{children:[n&&!t&&(0,g.jsx)(B,{}),!n&&!t&&0===e.length&&(0,g.jsx)("p",{children:"The Phonebook is empty. Please add a contact"}),!n&&!t&&e.length>0&&e.map((e=>(0,g.jsx)(O,{filteredContact:e,dispatch:a},e.id)))]})},K=()=>(0,g.jsxs)(a.B6,{children:[(0,g.jsx)(a.ql,{children:(0,g.jsx)("title",{children:"Phonebook"})}),(0,g.jsx)(b,{}),(0,g.jsx)("h3",{children:"Filter"}),(0,g.jsx)(L,{}),(0,g.jsx)("h3",{children:"Contact List:"}),(0,g.jsx)(G,{})]})},2419:(e,t,n)=>{var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(184);t.Z=(0,r.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},6711:(e,t,n)=>{var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(184);t.Z=(0,r.default)((0,s.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},872:(e,t,n)=>{var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(184);t.Z=(0,r.default)((0,s.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},7247:(e,t,n)=>{var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(184);t.Z=(0,r.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},1286:(e,t,n)=>{var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(184);t.Z=(0,r.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},5649:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(3404)},3404:(e,t,n)=>{n.r(t),n.d(t,{capitalize:()=>r.Z,createChainedFunction:()=>s,createSvgIcon:()=>o.Z,debounce:()=>c,deprecatedPropType:()=>l,isMuiElement:()=>u,ownerDocument:()=>m,ownerWindow:()=>p,requirePropFactory:()=>h,setRef:()=>v,unstable_ClassNameGenerator:()=>w,unstable_useEnhancedEffect:()=>x,unstable_useId:()=>y,unsupportedProp:()=>j,useControlled:()=>g,useEventCallback:()=>b,useForkRef:()=>C,useIsFocusVisible:()=>Z});var a=n(4925),r=n(4036);const s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}),(()=>{}))};var o=n(5320);const c=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function a(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];const o=()=>{e.apply(this,r)};clearTimeout(t),t=setTimeout(o,n)}return a.clear=()=>{clearTimeout(t)},a};const l=function(e,t){return()=>null};var i=n(2791);const u=function(e,t){var n,a;return i.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(a=e.type)||null==(a=a._payload)||null==(a=a.value)?void 0:a.muiName)};var d=n(2530);const m=d.Z;const p=function(e){return(0,d.Z)(e).defaultView||window};n(7462);const h=function(e,t){return()=>null};const v=n(7576).Z;var f=n(2060);const x=f.Z;const y=n(6046).Z;const j=function(e,t,n,a,r){return null};const g=function(e){let{controlled:t,default:n,name:a,state:r="value"}=e;const{current:s}=i.useRef(void 0!==t),[o,c]=i.useState(n);return[s?t:o,i.useCallback((e=>{s||c(e)}),[])]};const b=function(e){const t=i.useRef(e);return(0,f.Z)((()=>{t.current=e})),i.useRef((function(){return(0,t.current)(...arguments)})).current};const C=n(3626).Z;const Z=n(5698).Z,w={configure:e=>{a.Z.configure(e)}}}}]);
//# sourceMappingURL=269.db1b45c8.chunk.js.map