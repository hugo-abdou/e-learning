import{_ as b}from"./CoursePlayList.vue_vue_type_script_setup_true_lang-ca2e41a0.js";import{t as x,a3 as P,r as p,Q as B,aA as L,bX as d,w as S,v as l,z as m,A as r,n as s,H as o,x as v,s as N,bV as R,B as c,aa as f,a2 as T,L as U}from"./plugins-900eb03f.js";import{M as A}from"./index-cecf332b.js";import{P as M}from"./vue3-perfect-scrollbar.esm-201e2163.js";import{V as E}from"./VSkeletonLoader-4cfb77ed.js";import{a as k,V as $}from"./VRow-bc79db32.js";import{V as j}from"./VCard-6d8b9f87.js";import"./InfoTooltip.vue_vue_type_script_setup_true_lang-0241b29a.js";import"./VTooltip-5075abc5.js";import"./VOverlay-d2f68a91.js";import"./forwardRefs-6ea3df5c.js";import"./scopeId-b697eb6c.js";import"./ActionButton-88e06515.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveText.vue_vue_type_script_setup_true_lang-a0b04a89.js";import"./utils-01d7f181.js";import"./useCourseStore-eea862c2.js";import"./VList-ff1b2c79.js";import"./index-e8fbdf01.js";import"./ssrBoot-8b4eb22d.js";import"./createSimpleFunctional-e9ee8020.js";import"./VAvatar-98f875d9.js";import"./VDivider-bf01317e.js";import"./VChip-b4e7b548.js";import"./VSpacer-35711271.js";import"./VToolbar-4167c2d0.js";import"./_commonjsHelpers-de833af9.js";import"./VPagination-771c87c9.js";import"./VCardActions-6ec0444f.js";import"./VCardText-65c366cb.js";const z={key:0,class:"position-relative h-100 border"},H={key:0,class:"position-absolute w-100 h-100 d-flex gap-1 align-center justify-center",style:{"background-color":"rgba(0, 0, 0, 56.8%)",inset:"0"}},ke=x({__name:"watch",setup(O){const g=P(),e=p(),i=p(!1);B();const u=p(),_=p(),V=L(()=>{if(!e.value)return{};if(e.value.type===d.video)return{onReady:t=>{var a;return u.value=(a=t.target)==null?void 0:a.plyr},onEnded:t=>i.value=!0,onPause:t=>e.value.playing=!1,onPlay:t=>e.value.playing=!0};if(e.value.type===d.pdf)return{"onUpdate:pdf":C}}),C=({page:t,pages:a})=>{t==a&&(i.value=!0)},y=()=>{_.value.next(),i.value=!1},h=()=>{var t;((t=e.value)==null?void 0:t.type)===d.video&&setTimeout(()=>{var a;(a=u.value)==null||a.play()},500),i.value=!1};return S(e,t=>{t&&t.type==="video"&&(setTimeout(()=>{var a;(a=u.value)==null||a.play()},500),i.value=!1)}),(t,a)=>{const w=b;return l(),m($,{align:"start"},{default:r(()=>[s(k,{cols:"9",class:"py-0"},{default:r(()=>{var n;return[o(e)?(l(),v("div",z,[(l(),m(o(A),N(o(V),{key:(n=o(e))==null?void 0:n.id,"aspect-ratio":"1.77",media:o(e)}),R({_:2},[o(e).type===o(d).image?{name:"toolbar",fn:r(()=>[s(c,{variant:"elevated",color:"default","append-icon":"mdi-skip-forward",onClick:y},{default:r(()=>[f(" Continue ")]),_:1})]),key:"0"}:void 0]),1040,["media"])),o(i)?(l(),v("div",H,[s(c,{color:"default","prepend-icon":"mdi-rotate-left",onClick:h},{default:r(()=>[f(" Start Over ")]),_:1}),s(c,{color:"default","append-icon":"mdi-skip-forward",onClick:y},{default:r(()=>[f(" Continue ")]),_:1})])):T("",!0)])):(l(),m(o(E),{key:1,type:["image","image"]}))]}),_:1}),s(k,{cols:"3",class:"rounded pa-0"},{default:r(()=>[s(j,null,{default:r(()=>[s(o(M),{options:{wheelPropagation:!0}},{default:r(()=>[s(w,{ref_key:"playList",ref:_,selected:o(e),"onUpdate:selected":a[0]||(a[0]=n=>U(e)?e.value=n:null),"course-id":Number(o(g).params.id)},null,8,["selected","course-id"])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{ke as default};