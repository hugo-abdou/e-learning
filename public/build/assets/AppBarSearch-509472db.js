import{d as A,eI as K,r as _,w as y,a as C,o as V,h as R,f as t,b as s,b8 as L,bm as b,p as o,b0 as F,dT as S,e as l,a0 as g,J as m,c as U,F as z,j as N,A as u,v as P,x as D,K as v,bV as T,P as j,Q as E,_ as M}from"./main-6e33e0f4.js";import{P as Q}from"./vue3-perfect-scrollbar.esm-f2bbb6b6.js";import{V as J}from"./VTextField-c1b9a4f9.js";import{V as O}from"./VDivider-83731cf9.js";import{V as X,a as q}from"./VList-1acb65c4.js";import"./VField-2725232d.js";import"./VInput-0a556944.js";const G=c=>(j("data-v-d40748c2"),c=c(),E(),c),H={class:"d-flex align-center text-high-emphasis me-1"},W={class:"d-flex align-start"},Y={class:"h-100"},Z={class:"h-100"},ee={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},se={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},ae=G(()=>l("span",null,"No Result For ",-1)),te=A({__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean},searchResults:{}},emits:["update:isDialogVisible","search"],setup(c,{emit:w}){const r=c,h=w,{ctrl_k:x,meta_k:k}=K({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),f=_(),B=_(),a=_("");y([x,k],()=>{h("update:isDialogVisible",!0)});const p=()=>{a.value="",h("update:isDialogVisible",!1)},I=e=>{var i,d;e.key==="ArrowDown"?(e.preventDefault(),(i=f.value)==null||i.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(d=f.value)==null||d.focus("prev"))},$=e=>{a.value="",h("update:isDialogVisible",e)};return y(()=>r.isDialogVisible,()=>{a.value=""}),(e,i)=>{const d=C("IconBtn");return V(),R(T,{"max-width":"600","model-value":r.isDialogVisible,height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":$,onKeyup:S(p,["esc"])},{default:t(()=>[s(L,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[s(b,{class:"pt-2"},{default:t(()=>[s(J,{ref_key:"refSearchInput",ref:B,modelValue:o(a),"onUpdate:modelValue":[i[0]||(i[0]=n=>F(a)?a.value=n:null),i[1]||(i[1]=n=>e.$emit("search",o(a)))],autofocus:"",density:"comfortable",variant:"plain",onKeyup:S(p,["esc"]),onKeydown:I},{"prepend-inner":t(()=>[l("div",H,[s(g,{size:"22",icon:"tabler-search",style:{opacity:"1"}})])]),"append-inner":t(()=>[l("div",W,[l("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:p}," [esc] "),s(d,{size:"22",onClick:p},{default:t(()=>[s(g,{icon:"tabler-x",size:"20"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),s(O),s(o(Q),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[m(s(o(X),{ref_key:"refSearchList",ref:f,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(V(!0),U(z,null,N(r.searchResults,n=>u(e.$slots,"searchResult",{key:n,item:n},()=>[s(o(q),null,{default:t(()=>[P(D(n),1)]),_:2},1024)],!0)),128))]),_:3},512),[[v,o(a).length&&!!r.searchResults.length]]),m(l("div",Y,[u(e.$slots,"suggestions",{},void 0,!0)],512),[[v,!!r.searchResults&&!o(a)&&e.$slots.suggestions]]),m(l("div",Z,[u(e.$slots,"noData",{},()=>[s(b,{class:"h-100"},{default:t(()=>[l("div",ee,[s(g,{size:"75",icon:"tabler-file-x"}),l("div",se,[ae,l("span",null,'"'+D(o(a))+'"',1)]),u(e.$slots,"noDataSuggestion",{},void 0,!0)])]),_:3})],!0)],512),[[v,!r.searchResults.length&&o(a).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"])}}});const de=M(te,[["__scopeId","data-v-d40748c2"]]);export{de as default};