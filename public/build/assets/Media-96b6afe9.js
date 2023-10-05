import{J as B,o as l,f as p,ah as M,cd as P,ce as u,d as I,t as D,a9 as b,bo as N,d5 as c,bt as A,i as g,y as s,B as r,d6 as V,ae as E,G as m,e as t,K as j,D as h,H as _,x as k,af as G,w as H,d7 as J,m as K,ao as U}from"./main-834b9cca.js";import{c as q}from"./utils-91d4e8c2.js";import{V as w}from"./VChip-7003a31a.js";import{V as F}from"./VSpacer-447b73cb.js";const L={};function O(o,n){return l(),p(M,{variant:"tonal",size:"26"})}const Q=B(L,[["render",O]]),R=P({id:"media",state:()=>({}),actions:{get(o){return new Promise((n,i)=>{u.get("/media",{params:o}).then(e=>n(e.data)).catch(e=>i(e))})},getById:async o=>(await u.get(`/media/${o}`)).data,retry:async o=>(await u.post(`/media/${o}/retry`)).data,delete(o){return new Promise((n,i)=>{u.delete(`/media/${o}`).then(e=>{n(e.data)}).catch(e=>i(e))})}}}),W={class:"relative w-100 h-100"},X={class:"text-blur"},Y=["title"],Z=I({inheritAttrs:!1}),ee=I({...Z,__name:"Media",props:{hasTitle:{type:Boolean},media:null},emits:["onDelete"],setup(o,{emit:n}){const e=D(o.media),v=b(()=>q(e.value.status)),z={video:"/video_placeholder.gif",image:"/image-placeholder.jpg"},C=b(()=>e.value.thumb_url||z[e.value.type]),f=R();let y;const S=async()=>{try{const a=await f.getById(e.value.id);e.value=a,a.status===c.Completed&&clearInterval(y)}catch{}},$=async()=>{try{const a=await f.retry(e.value.id);e.value=a}catch{}},x=async a=>{try{await f.delete(a.id),n("onDelete",a.id)}catch(d){console.error(d)}};return N(()=>{(e.value.status===c.Pending||e.value.status===c.Processing)&&(y=setInterval(S,5e3))}),A(()=>{clearInterval(y)}),(a,d)=>{const T=Q;return l(),g("div",W,[s(U,K(a.$attrs,{src:t(C),style:{"aspect-ratio":"16/9"},cover:"",class:"rounded w-100 border relative"}),{default:r(()=>[s(V,{color:"#7e7e7e00",density:"compact"},{default:r(()=>[s(E,{size:"26",variant:"tonal",class:"ml-1 blurred-background",color:"blur"},{default:r(()=>[s(m,{size:"20",icon:t(e).type==="video"?"tabler:video":"mdi-panorama-variant-outline",color:"blur"},null,8,["icon"])]),_:1}),t(e).status!==t(c).Completed?(l(),p(w,{key:0,size:"small",class:"ma-1",color:t(v).color},{default:r(()=>[s(m,{start:"",size:"16",icon:t(v).icon},null,8,["icon"]),j(" "+h(t(v).lable),1)]),_:1},8,["color"])):_("",!0),t(e).status===t(c).Error?(l(),p(M,{key:1,onClick:$,icon:"",size:"26",variant:"tonal",color:"error"},{default:r(()=>[s(m,{icon:"tabler:refresh"})]),_:1})):_("",!0),k(a.$slots,"toolbar",{},void 0,!0),s(F),s(T,{onClick:d[0]||(d[0]=G(te=>x(t(e)),["stop"])),icon:"tabler-trash",color:"error",class:"ml-2"})]),_:3}),s(V,{color:"#7e7e7e00",density:"compact",absolute:"",style:{bottom:"0"}},{default:r(()=>[t(e).type==="video"?(l(),p(w,{key:0,size:"small",class:"ma-1 blurred-background",color:"blur"},{default:r(()=>[s(m,{start:"",size:"16",icon:"mdi-clock-fast",color:"blur"}),H("span",X,h(t(J)(t(e).duration)),1)]),_:1})):_("",!0)]),_:1})]),_:3},16,["src"]),o.hasTitle?(l(),g("p",{key:0,class:"truncate mt-2",title:t(e).name},h(t(e).name),9,Y)):_("",!0),k(a.$slots,"default",{},void 0,!0)])}}});const ne=B(ee,[["__scopeId","data-v-c164ed2b"]]);export{ne as _,Q as a,R as u};
