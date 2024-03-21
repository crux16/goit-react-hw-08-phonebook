"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[557],{557:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(50),r=n(791);const s="ContactForm_form__dhl+T",o="ContactForm_formField__O5fo+",c="ContactForm_formLabel__TSwxK",i="ContactForm_formButton__TN6Jq";var l=n(420),d=n(826),u=n(553);const m=e=>e.filter,p=e=>e.contacts.items,h=e=>e.contacts.error,v=e=>e.contacts.isLoading,x=(0,u.P1)([p,m],((e,t)=>e.filter((e=>{let{name:n}=e;return n.toLowerCase().includes(t.toLowerCase())}))));var f=n(184);const b=()=>{const e=(0,l.I0)(),t=(0,l.v9)(p),[n,a]=(0,r.useState)(""),[u,m]=(0,r.useState)("");return(0,f.jsxs)("form",{className:s,onSubmit:r=>{if(r.preventDefault(),""===n.trim()||""===u.trim())return;t.find((e=>e.name.toLowerCase()===n.toLowerCase()))?alert("".concat(n," is already in contacts!")):(e((0,d.uK)({name:n,number:u})),a(""),m(""))},children:[(0,f.jsxs)("label",{className:o,children:[(0,f.jsx)("p",{className:c,children:"Name"}),(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:n,onChange:e=>{a(e.target.value)}})]}),(0,f.jsxs)("label",{className:o,children:[(0,f.jsx)("p",{className:c,children:"Number"}),(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:u,onChange:e=>{m(e.target.value)}})]}),(0,f.jsx)("button",{className:i,type:"submit",children:"Add Contact"})]})},j="Filter_container__L5eml";var y=n(634);const g=()=>{const e=(0,l.I0)(),t=(0,l.v9)(m);return(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)("p",{children:"Find Contacts by Name"}),(0,f.jsx)("input",{type:"text",name:"filter",placeholder:"Search by name",value:t,onChange:t=>{e((0,y.T)(t.target.value))}})]})},C="ContactListItem_contactListItem__21QwY",w=e=>{let{filteredContact:t}=e;const n=(0,l.I0)(),[a,s]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[i,u]=(0,r.useState)(!1);return(0,f.jsx)("li",{className:C,children:i?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:a,onChange:e=>{s(e.target.value)}}),(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:e=>{c(e.target.value)}}),(0,f.jsx)("button",{onClick:()=>{n((0,d.Tk)({id:t.id,name:a,number:o})),u(!1)},children:"Done"})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{children:[t.name,":"]}),(0,f.jsx)("p",{children:t.number}),(0,f.jsx)("button",{onClick:()=>{n((0,d.GK)(t.id))},children:"Delete"}),(0,f.jsx)("button",{onClick:()=>{s(t.name),c(t.number),u(!0)},children:"Edit"})]})})};var _={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function k(e){var t=function(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return _[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var O=function(){return O=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},O.apply(this,arguments)},F=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},N=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var s=r.sheet,o="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(o,0),a}("SyncLoader","33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}","sync");const S=function(e){var t=e.loading,n=void 0===t||t,a=e.color,s=void 0===a?"#000000":a,o=e.speedMultiplier,c=void 0===o?1:o,i=e.cssOverride,l=void 0===i?{}:i,d=e.size,u=void 0===d?15:d,m=e.margin,p=void 0===m?2:m,h=F(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=O({display:"inherit"},l),x=function(e){return{backgroundColor:s,width:k(u),height:k(u),margin:k(p),borderRadius:"100%",display:"inline-block",animation:"".concat(N," ").concat(.6/c,"s ").concat(.07*e,"s infinite ease-in-out"),animationFillMode:"both"}};return n?r.createElement("span",O({style:v},h),r.createElement("span",{style:x(1)}),r.createElement("span",{style:x(2)}),r.createElement("span",{style:x(3)})):null},A=()=>(0,f.jsx)(S,{color:"#36d7b7"}),z=()=>{const e=(0,l.v9)(x),t=(0,l.v9)(h),n=(0,l.v9)(v),a=(0,l.I0)();return(0,r.useEffect)((()=>{a((0,d.yF)())}),[a]),(0,f.jsxs)("ul",{children:[n&&!t&&(0,f.jsx)(A,{}),!n&&!t&&0===e.length&&(0,f.jsx)("p",{children:"The Phonebook is empty. Please add a contact"}),!n&&!t&&e.length>0&&e.map((e=>(0,f.jsx)(w,{filteredContact:e},e.id)))]})},L=()=>(0,f.jsxs)(a.B6,{children:[(0,f.jsx)(a.ql,{children:(0,f.jsx)("title",{children:"Phonebook"})}),(0,f.jsx)(b,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(g,{}),(0,f.jsx)(z,{})]})}}]);
//# sourceMappingURL=557.96095f62.chunk.js.map