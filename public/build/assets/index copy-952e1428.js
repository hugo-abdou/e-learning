import{l as v}from"./lodash-c2667fb2.js";import{u as x}from"./useCourseStore-c17730ae.js";import{V as B}from"./VSlideGroup-14ea7fb7.js";import{V as S,a as I}from"./VRow-4a6d7b26.js";import{V as w}from"./VSlideGroupItem-3141f46e.js";import{d as T,r as i,I as z,o,c as l,b as e,f as t,F as p,j as b,q as f,b4 as G,aU as g,a4 as N,y as c,z as u,h as P,bb as E,bm as F,bc as L,bd as R,bG as U,bh as h,be as j,b9 as q,e as A}from"./main-83f81ad7.js";const D={key:0,class:"ma-0"},M={key:1,class:"ma-0"},H=A("p",{class:"mt-2"}," 50% Complete ",-1),Z=T({__name:"index copy",setup(J){const s=i(0),_=[{title:"accounting",icon:"tabler-users",tab:"accounting"},{title:"computer science",icon:"tabler-lock",tab:"computer science"},{title:"enginnering",icon:"tabler-lock",tab:"enginnering"},{title:"filming",icon:"tabler-lock",tab:"filming"},{title:"fitness",icon:"tabler-lock",tab:"fitness"},{title:"music",icon:"tabler-lock",tab:"music"},{title:"photography",icon:"tabler-lock",tab:"photography"}],d=i([]),V=i({page:1,itemsPerPage:100,sortBy:[],groupBy:[],search:void 0}),C=x(),y=v.debounce(()=>{C.getCourses({...V.value,additional:{chaptersCount:!0}}).then(({data:m,meta:r})=>{d.value=m})},500);return z(y),(m,r)=>(o(),l("div",null,[e(B,{modelValue:f(s),"onUpdate:modelValue":r[0]||(r[0]=a=>G(s)?s.value=a:null),class:"pa-4","selected-class":"bg-primary","show-arrows":""},{default:t(()=>[(o(),l(p,null,b(_,a=>e(w,{key:a.tab},{default:t(({isSelected:n,toggle:k})=>[e(g,{size:"large",color:n?"primary":"secondary",class:"ma-1",onClick:k},{default:t(()=>[e(N,{start:"",size:"16",icon:a.icon},null,8,["icon"]),c(" "+u(a.title),1)]),_:2},1032,["color","onClick"])]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(S,null,{default:t(()=>[(o(!0),l(p,null,b(f(d),(a,n)=>(o(),P(I,{key:n,cols:"12",sm:"6",md:"4",lg:"3"},{default:t(()=>[e(E,null,{default:t(()=>[e(F,{src:a.thumbnail||"",cover:"",height:"200px"},null,8,["src"]),e(L,null,{default:t(()=>[e(R,null,{default:t(()=>[c(u(a.title),1)]),_:2},1024),e(U,null,{default:t(()=>[e(g,{color:"secondary"},{default:t(()=>[c(" filming ")]),_:1})]),_:1})]),_:2},1024),e(h,{class:"d-flex align-center gap-2"},{default:t(()=>[e(j,{color:"primary",variant:"tonal",icon:"bi:book"}),a.chaptersCount?(o(),l("p",D,u(a.chaptersCount)+" chapters ",1)):(o(),l("p",M," no chapters "))]),_:2},1024),e(h,null,{default:t(()=>[e(q,{rounded:"","rounded-bar":"","model-value":50,max:100,height:"10",color:"primary"}),H]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1})]))}});export{Z as default};