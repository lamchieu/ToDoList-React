var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var V=(o,t,n)=>t in o?X(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,w=(o,t)=>{for(var n in t||(t={}))te.call(t,n)&&V(o,n,t[n]);if(U)for(var n of U(t))ae.call(t,n)&&V(o,n,t[n]);return o},I=(o,t)=>Z(o,ee(t));import{j as m,a as e,B as F,m as le,c as oe,b as $,d as ne,e as se,u as L,o as re,r as h,M as ie,f as ce,T as de,C as S,g as y,v as me,l as O,R as ue,h as pe}from"./vendor.f4be0d54.js";const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function f(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};he();function fe(o){const{lengthTodo:t}=o;return m("footer",{className:"footer app__footer",children:[m("span",{className:"footer__count",children:[e("strong",{className:"todo__count",children:t}),m("strong",{children:[t>1?" items ":" item ","left"]})]}),e("ul",{className:"footer__filters",children:m("li",{className:"li__filters",children:[e("p",{href:"#",className:"filters--all",children:"All"}),e("p",{href:"#/active",className:"filters--active",children:"Active"}),e("p",{href:"#/completed",className:"filters--completed",children:"Completed"})]})}),e(F,{size:"small",children:"Clear completed"})]})}const _e=le({modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",backgroundColor:"#fff",boxShadow:"0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",padding:"30px",borderRadius:"5px"},typography:{color:"#205d91"},formControl:{paddingRight:"54px !important"},button:{margin:"10px 0 !important"}});function ge(o){const t=_e(),n=d=>{let c=new Date(d),p=("0"+(c.getMonth()+1)).slice(-2),a=("0"+c.getDate()).slice(-2);return[c.getFullYear(),p,a].join("-")},f=n(new Date),s=oe().shape({name:$().required("*Name is required"),url:$().url().required("*Url is required"),quantity:ne().test("Is positive?","The number must be greater than 0",d=>d>0),date:se().required("*Date is required").min(f,`Date should be equal or later than ${f}`)}),{handleSubmit:i,control:l,formState:{errors:g},reset:u}=L({defaultValues:{name:"",url:"",quantity:"",date:n(new Date)},resolver:re(s)}),v=d=>{o.addToDo(d),u()},[D,x]=h.exports.useState(!1),T=()=>{x(!0)},N=()=>{x(!1)};return m("div",{className:"item__add",children:[e(F,{className:t.button,type:"button",color:"primary",variant:"outlined",size:"small",onClick:T,children:"Add task"}),e(ie,{open:D,onClose:N,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:m(ce,{className:t.modal,children:[e(de,{variant:"h5",align:"center",pb:4,className:t.typography,children:"ADD TASK"}),m("form",{onSubmit:i(v),children:[e(S,{name:"name",control:l,render:({field:{onChange:d,value:c},fieldState:{invalid:p,error:a}})=>e(y,{value:c,onChange:d,size:"small",label:"Name",margin:"normal",variant:"outlined",fullWidth:!0,error:p,helperText:a==null?void 0:a.message})}),e(S,{name:"url",control:l,render:({field:{onChange:d,value:c},fieldState:{invalid:p,error:a}})=>e(y,{value:c,onChange:d,size:"small",label:"Url",margin:"normal",variant:"outlined",fullWidth:!0,error:p,helperText:a==null?void 0:a.message})}),e(S,{name:"quantity",control:l,render:({field:{onChange:d,value:c},fieldState:{invalid:p,error:a}})=>e(y,{value:c,onChange:d,size:"small",type:"number",label:"Quantity",margin:"normal",variant:"outlined",fullWidth:!0,error:p,helperText:a==null?void 0:a.message})}),e(S,{control:l,name:"date",render:({field:{onChange:d,value:c},fieldState:{invalid:p,error:a}})=>e(y,{size:"small",label:"Date",type:"date",error:p,helperText:a==null?void 0:a.message,value:c,margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},onChange:d})}),e("div",{className:"submit",children:e(F,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})]})})]})}function xe(o){const{id:t,name:n,quantity:f,date:s,url:i,complete:l}=o.todo,{handleDelete:g,handleUpdate:u,handleCheckBox:v,todo:D}=o,[x,T]=h.exports.useState(n),[N,d]=h.exports.useState(f),[c,p]=h.exports.useState(s),[a,E]=h.exports.useState(i),[k,j]=h.exports.useState(!1),[b,B]=h.exports.useState(l),z=()=>{j(!k)},R=r=>{let _=new Date(r),q=("0"+(_.getMonth()+1)).slice(-2);return[("0"+_.getDate()).slice(-2),q,_.getFullYear()].join("-")},W=r=>{let _=new Date(r),q=("0"+(_.getMonth()+1)).slice(-2),M=("0"+_.getDate()).slice(-2);return[_.getFullYear(),q,M].join("-")},Q=r=>{T(r.target.value)},P=r=>{E(r.target.value)},Y=r=>{p(r.target.value)},J=r=>{d(r.target.value)},[C,K]=h.exports.useState([]),G=()=>{const r=[];return N<0&&r.push("The number must be greater than 0"),r},H=()=>{const r=G();if(r.length>0){K(r);return}if(x&&x!==n||c&&c!==s||N>0&&N!==f||a&&a!==i){const _=I(w({},D),{name:x,date:c,quantity:N,url:a});u(_.id,_)}z()},A=()=>{B(!b);const r=I(w({},D),{complete:!l});u(r.id,r)};return m("li",{className:b?"checked":null,children:[!k&&m("div",{className:"item__view",children:[!b&&e("i",{className:"ion-ios-radio-button-off item__icon",type:"checkbox",checked:b,onClick:A}),b&&e("i",{className:"icon ion-ios-checkmark-circle-outline item__icon",type:"checkbox",checked:b,onClick:A}),e("p",{className:"item__text item__border grid__2",children:x}),e("p",{className:"item__text item__border",children:N}),e("p",{className:"item__text item__border",children:R(c)}),e("img",{className:"item__text",src:a,alt:a}),m("div",{className:"item__icon grid__6",children:[e("i",{className:"icon__edit ion-md-create",onClick:z}),e("i",{className:"icon__trash icon ion-md-trash",onClick:()=>g(t)})]})]}),k&&m("div",{className:"item__view",children:[e(y,{size:"small",className:"gridUI__2",id:"outlined-required",value:x,onChange:Q,helperText:C[1]}),e(y,{className:"gridUI",size:"small",type:"number",id:"outlined-required",value:N,onChange:J,helperText:C[0],error:C[0]}),e(y,{className:"gridUI",size:"small",id:"outlined-required",value:W(c),onChange:Y,type:"date"}),e(y,{className:"gridUI",size:"small",id:"outlined-required",value:a,onChange:P}),e("div",{className:"item__icon grid__5",children:e("i",{className:"icon__edit ion-md-checkmark",type:"submit",onClick:H})})]})]})}const Ne=()=>{const o=localStorage.getItem("todos");return o?JSON.parse(o):[]};function ye(o){const[t,n]=h.exports.useState(Ne());h.exports.useEffect(()=>{localStorage.setItem("todos",JSON.stringify(t))},[t]);const f=l=>{const g={id:me(),name:l.name,quantity:l.quantity,date:l.date,url:l.url,complete:!1},u=O.exports.cloneDeep(t);u.push(g),n(u)},s=l=>{const g=O.exports.cloneDeep(t);n(g.filter(u=>u.id!==l))},i=(l,g)=>{const u=O.exports.cloneDeep(t);n(u.map(v=>v.id===l?g:v))};return m("div",{className:"app",children:[m("div",{className:"app__todo",children:[e("form",{action:"",className:"form__todo",children:e("input",{type:"text",className:"form__add",placeholder:"What are you looking for ?"})}),m("div",{className:"item__title",children:[e("i",{className:"item__fb ion-logo-facebook"}),e("p",{className:"item__text item__border grid__2",children:"Name"}),e("p",{className:"item__text item__border",children:"Quantity"}),e("p",{className:"item__text item__border",children:"Date"}),e("p",{className:"item__text",children:"Image"}),e(ge,{addToDo:f})]}),e("ul",{className:"list__todo",children:t.length>0&&t.map(l=>e(xe,{todo:l,handleDelete:s,handleUpdate:i},l.id))})]}),e(fe,{lengthTodo:t.length})]})}function be(o){return h.exports.useState(!1),L(),m("div",{className:"todo",children:[e("h1",{children:"TO DO LIST"}),e(ye,{})]})}function ve(){return e("div",{children:e(be,{})})}ue.render(e(pe.StrictMode,{children:e(ve,{})}),document.getElementById("root"));
