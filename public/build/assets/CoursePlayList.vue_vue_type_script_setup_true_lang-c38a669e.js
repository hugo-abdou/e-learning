import{_ as S}from"./InfoTooltip.vue_vue_type_script_setup_true_lang-5b9b39a6.js";import{_ as z}from"./ActionButton-8a4a1c1c.js";import{_ as N}from"./ResponsiveText.vue_vue_type_script_setup_true_lang-ba0e4df2.js";import{d as D,b as M,I as P,t as $,K as A,o,f as d,B as t,i as V,F as b,j as E,e as c,E as x,G as m,y as n,aP as F,dK as J,ap as f,D as _,dL as K,dM as O,m as j}from"./main-0fb5c6c1.js";import{a as v,c as G,b as k,V as R}from"./VList-48ccb2a7.js";import{V as U}from"./VChip-3b2a7de1.js";import{V as q}from"./VSpacer-a52f38da.js";const se=D({__name:"CoursePlayList",props:{chapters:null,attachment:null},emits:["update:attachment","play"],setup(g,{expose:I,emit:y}){const h=g,C=M(),T=P(()=>C.skin.value==="bordered"),p=$([]),w=s=>{s[0]&&y("update:attachment",s[0])};return I({next:()=>{var s,a;if(h.attachment){let l=((s=h.attachment)==null?void 0:s.index)+1;((a=p.value[l])==null?void 0:a.type)==="header"&&l++;const i=p.value.find(({index:e})=>l===e);i&&y("update:attachment",i)}},prev:()=>{}}),A(()=>{p.value=h.chapters.reduce((a,{attachments:r,title:l,id:i})=>(r.length&&(a.push({type:"header",title:l,id:i}),a.push(...JSON.parse(JSON.stringify(r.map((e,L)=>({...e,chapter_id:i})))))),a),[]).map((a,r)=>({...a,index:r}));const s=p.value.filter(({type:a})=>a!=="header")[0];y("update:attachment",s)}),(s,a)=>{const r=N,l=z,i=S;return o(),d(R,{lines:"three",border:c(T),selected:[g.attachment],"onUpdate:selected":w},{default:t(()=>[(o(!0),V(b,null,E(c(p),(e,L)=>(o(),V(b,{key:e.id},[e.type!=="header"?(o(),d(v,{key:0,value:e,title:e.name},{prepend:t(({isActive:u})=>[e.type=="video"&&e.playing&&u?(o(),d(x,{key:0,class:"position-absolute",style:{left:"3px"},size:"14",icon:"tabler-pause"})):m("",!0),n(F,{style:{width:"100px","aspect-ratio":"16/9"},class:"rounded mr-2 bg-background border",src:e.thumb_url||c(J)(e.type),cover:""},null,8,["src"])]),title:t(({title:u})=>[n(r,{text:u,"max-lines":2,"char-width":2},{default:t(({text:B})=>[f(_(B),1)]),_:2},1032,["text"])]),default:t(()=>[n(G,{class:"d-flex gap-2 pa-1 align-center"},{default:t(()=>[n(x,{size:"16",icon:c(K)(e.type)},null,8,["icon"]),e.type=="video"?(o(),d(U,{key:0,size:"x-small"},{default:t(()=>[n(x,{icon:"mdi-clock-fast",size:"16",class:"mr-1"}),f(" "+_(c(O)(e.duration)),1)]),_:2},1024)):m("",!0),n(q),e.download?(o(),d(i,{key:1,text:"download"},{default:t(({props:u})=>[n(l,j({size:"x-small",icon:"mdi-download",download:"",href:e.path},u),null,16,["href"])]),_:2},1024)):m("",!0)]),_:2},1024)]),_:2},1032,["value","title"])):(o(),d(v,{key:1},{default:t(()=>[n(k,null,{default:t(()=>[f(_(s.$t("Chapter"))+" - "+_(e.title),1)]),_:2},1024)]),_:2},1024))],64))),128)),c(p).length?m("",!0):(o(),d(v,{key:0},{default:t(()=>[n(k,null,{default:t(()=>[f("Chapter empty")]),_:1})]),_:1}))]),_:1},8,["border","selected"])}}});export{se as _};
