import{l as y}from"./lodash-5666b82a.js";import{r as x}from"./validators-f52bbb1d.js";import{_ as p}from"./Media-96b6afe9.js";import{d as B,o as s,f as n,B as t,y as e,aj as d,e as h,ab as g,ac as v,G as u,K as V,ai as m,ah as C,m as i,i as T,F as _,j as D,H as F}from"./main-834b9cca.js";import{V as N}from"./VTextField-87129457.js";const I=B({__name:"ChapterForm",props:{chapter:null},emits:["upload","update:title"],setup(a,{emit:r}){const c={class:"border-md border-dashed bg-background w-100 h-100",style:"min-height: 120px",variant:"plain",color:"secondary"},b=y.debounce(f=>{r("update:title",f.target.value)},50);return(f,l)=>(s(),n(m,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(N,{rules:[h(x)],"model-value":a.chapter.title,onChange:l[0]||(l[0]=o=>h(b)(o)),label:"Chapter Title"},null,8,["rules","model-value"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(g,null,{default:t(()=>[e(v,{class:"mb-1"},{default:t(()=>[e(u,{icon:"system-uicons:video"}),V("Video")]),_:1}),e(m,{class:"me-0"},{default:t(()=>[e(d,{cols:"12",lg:"4",md:"6",sm:"4"},{default:t(()=>[a.chapter.video?(s(),n(p,{key:0,media:a.chapter.video,hasTitle:"",onOnDelete:l[1]||(l[1]=o=>a.chapter.video=null)},null,8,["media"])):(s(),n(C,i({key:1,onClick:l[2]||(l[2]=o=>r("upload","upload-chapter-video"))},c),{default:t(()=>[e(u,{icon:"fluent:video-add-20-regular",size:"28"})]),_:1},16))]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:t(()=>[e(g,{class:"pt-0"},{default:t(()=>[e(v,{class:"mb-2"},{default:t(()=>[e(u,{icon:"system-uicons:document"}),V(" Documents")]),_:1}),e(m,{class:"me-0"},{default:t(()=>[e(d,{cols:"12",lg:"4",md:"6",sm:"4",class:"mb-10"},{default:t(()=>[e(C,i(c,{onClick:l[3]||(l[3]=o=>r("upload","upload-chapter-document"))}),{default:t(()=>[e(u,{icon:"fluent:document-add-20-regular",size:"28"})]),_:1},16)]),_:1}),a.chapter.documents.length?(s(!0),T(_,{key:0},D(a.chapter.documents,o=>(s(),n(d,i({cols:12,lg:4,md:6,sm:4},{key:o.id}),{default:t(()=>[e(p,{media:o,hasTitle:"",onOnDelete:$=>a.chapter.documents=a.chapter.documents.filter(({id:k})=>k!==o.id)},null,8,["media","onOnDelete"])]),_:2},1040))),128)):F("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{I as _};
