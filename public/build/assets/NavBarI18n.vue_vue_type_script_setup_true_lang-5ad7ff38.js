import{d as g,aC as p,I as d,s as f,r as _,o as c,f as i,z as t,x as l,aj as L,e as b,am as h,g as C,F as I,i as V,au as v,C as x,b as k}from"./main-0fe8d6c4.js";import{V as B}from"./VMenu-04b4d8fd.js";import{V as S,a as w,b as A}from"./VList-df386f36.js";const E=g({__name:"I18n",props:{languages:null,location:{default:"bottom end"}},emits:["change"],setup(u){const o=u,{locale:s}=p({useScope:"global"});d(s,e=>{document.documentElement.setAttribute("lang",e),localStorage.setItem("locale",e)});const n=f([localStorage.getItem("locale")||"en"]);return(e,r)=>{const m=_("IconBtn");return c(),i(m,null,{default:t(()=>[l(L,{size:"26",icon:"tabler-language"}),l(B,{activator:"parent",location:o.location,offset:"14px"},{default:t(()=>[l(S,{selected:b(n),"onUpdate:selected":r[0]||(r[0]=a=>h(n)?n.value=a:null),"min-width":"175px"},{default:t(()=>[(c(!0),C(I,null,V(o.languages,a=>(c(),i(w,{key:a.i18nLang,value:a.i18nLang,onClick:F=>{s.value=a.i18nLang,e.$emit("change",a.i18nLang)}},{default:t(()=>[l(A,null,{default:t(()=>[v(x(a.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}}),y=g({__name:"NavBarI18n",setup(u){const{isAppRtl:o}=k(),s=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],n=e=>{o.value=e==="ar"};return(e,r)=>(c(),i(E,{languages:s,onChange:n}))}});export{y as _};