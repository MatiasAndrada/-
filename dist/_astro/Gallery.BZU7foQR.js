import{r as i}from"./index.NEDEFKed.js";var d={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=i,u=Symbol.for("react.element"),p=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,h=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function m(s,e,n){var r,l={},t=null,a=null;n!==void 0&&(t=""+n),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)x.call(e,r)&&!v.hasOwnProperty(r)&&(l[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)l[r]===void 0&&(l[r]=e[r]);return{$$typeof:u,type:s,key:t,ref:a,props:l,_owner:h.current}}c.Fragment=p;c.jsx=m;c.jsxs=m;d.exports=c;var o=d.exports;const y=({images:s})=>{const[e,n]=i.useState(null);i.useState([]);const r=t=>{n(t)},l=()=>{n(null)};return o.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-4",children:[s.map((t,a)=>o.jsx("div",{className:"relative cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105	",onClick:()=>r(t),children:o.jsx("img",{src:t,alt:`Image rocket ${a+1}`,className:"w-56 h-56 md:w-80 md:h-80 object-cover rounded-lg "})},a)),e&&o.jsx("div",{className:"fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-60",onClick:l,children:o.jsx("div",{className:"rounded-lg shadow-xl shadow-blue-950",children:o.jsx("img",{src:e,alt:"Selected",className:"h-4/5 md:h-[60vh] rounded-lg"})})})]})};export{y as default};
