import{_ as O}from"./CoursePlayList.vue_vue_type_script_setup_true_lang-3807061b.js";import{_ as U}from"./ResponsiveText.vue_vue_type_script_setup_true_lang-bd59f7a9.js";import{u as $}from"./useCourseStore-b6ef2792.js";import{a as Q}from"./formatters-386d1040.js";import{d as q,k as H,l as J,r as _,b5 as K,a6 as S,bQ as W,w as X,bM as Y,a as Z,o,c as V,b as a,f as s,b8 as ee,p as e,h as c,e as r,s as B,aj as g,v as p,z as R,bm as te,bO as y,ba as ae,x as m,bN as se,bb as oe,bp as re,F as ie,j as le,b9 as w,a0 as v,bR as ne,b0 as ce}from"./main-6e33e0f4.js";import{M as de}from"./index-0c36f9df.js";import{V as pe,a as T}from"./VRow-26e77137.js";import{V as ue}from"./VSpacer-7809d458.js";import{V as me}from"./VSlideGroup-52bd9628.js";import{V as M}from"./VDivider-83731cf9.js";import{V as fe}from"./VSlideGroupItem-5d32bf46.js";import{V as _e}from"./VChip-fe1053c6.js";import"./VMenu-02d70115.js";import"./VList-1acb65c4.js";import{b as N}from"./route-block-83d24a4e.js";import"./InfoTooltip.vue_vue_type_script_setup_true_lang-5233097e.js";import"./VTooltip-2814934d.js";import"./ActionButton-e7de0636.js";import"./utils-fc59a690.js";import"./VPagination-d993b6db.js";const he={class:"card"},ye={class:"position-relative"},ve={key:0,class:"position-absolute w-100 h-100 d-flex gap-1 align-center justify-center",style:{inset:"0","background-color":"rgba(0, 0, 0, 0.568)"}},xe={key:1},ke={class:"d-flex flex-column"},Ve={class:"text-base"},be=r("p",{class:"text-xs"}," Lorem ipsum dolor sit amet ",-1),ge={class:"mb-0 pt-1"},we={class:"d-flex flex-wrap mt-5"},Ce={class:"me-5"},Le={class:"text-nowrap"},Se={class:"text-nowrap"},Be={class:"text-nowrap"},Re={class:"text-nowrap"},Te={class:"text-nowrap"},Me={class:"position-sticky",style:{top:"90px"}},Ne=q({__name:"index",setup(Ie){const I=H(),A=J(),f=_(!1),P=$(),i=_(),h=_(!1),d=_(),C=_(),j=K(),b=_(),z=S(()=>{var l,n;return[{title:"edit",_if:j.user.id===((l=i.value)==null?void 0:l.author.id),props:{to:{name:"course-id-edit",params:{id:(n=i.value)==null?void 0:n.id}},"prepend-icon":"mdi-edit"}},{title:"share",_if:!0,props:{"prepend-icon":"tabler-share"}}]}),E=S(()=>{var l;if(d.value&&((l=d.value)==null?void 0:l.type)===W.video)return{onReady:n=>{var x;return b.value=(x=n.target)==null?void 0:x.plyr},onEnded:n=>h.value=!0,onPause:n=>d.value.playing=!1,onPlay:n=>d.value.playing=!0}}),L=()=>{C.value.next(),h.value=!1},D=()=>{setTimeout(()=>{var l;(l=b.value)==null||l.play()},500),h.value=!1};return X(d,l=>{l&&l.type==="video"&&(setTimeout(()=>{var n;(n=b.value)==null||n.play()},500),h.value=!1)}),Y(async()=>{f.value=!0;try{i.value=await P.getCourse(Number(I.params.id),{additional:{chapters:!0}})}catch{A.push({name:"course"})}f.value=!1}),(l,n)=>{const x=U,F=Z("RouterLink"),G=O;return o(),V("div",he,[a(pe,null,{default:s(()=>[a(T,{cols:"12",md:"8"},{default:s(()=>[a(ee,null,{default:s(()=>[!e(f)&&e(d)?(o(),c(te,{key:0,class:"py-0 px-0"},{default:s(()=>[r("div",ye,[(o(),c(de,B({...e(E)},{key:e(d).id,"aspect-ratio":"1.77",media:e(d)}),{toolbar:s(()=>[a(g,{variant:"elevated",color:"default","append-icon":"mdi-skip-forward",onClick:L},{default:s(()=>[p(" Continue ")]),_:1})]),_:1},16,["media"])),e(h)?(o(),V("div",ve,[a(g,{color:"default","prepend-icon":"mdi-rotate-left",onClick:D},{default:s(()=>[p(" Start Over ")]),_:1}),a(g,{color:"default","append-icon":"mdi-skip-forward",onClick:L},{default:s(()=>[p(" Continue ")]),_:1})])):R("",!0)])]),_:1})):(o(),c(e(y),{key:1,type:["image","image"]}))]),_:1}),e(f)?(o(),c(e(y),{key:1,type:["heading","list-item-avatar-three-line"]})):(o(),c(w,{key:0},{default:s(()=>[a(ae,{class:"text-capitalize text-h3 text-wrap d-flex"},{default:s(()=>{var t;return[a(x,{"max-lines":2,"char-width":3.5,text:((t=e(i))==null?void 0:t.title)||""},{default:s(({text:u})=>[p(m(u),1)]),_:1},8,["text"])]}),_:1}),a(se,{class:"d-flex mt-3 px-1 align-center"},{default:s(()=>[a(oe,{size:"35",class:"me-2"},{default:s(()=>{var t,u,k;return[(t=e(i))!=null&&t.author.profile_photo_url?(o(),c(re,{key:0,src:(u=e(i))==null?void 0:u.author.profile_photo_url,cover:""},null,8,["src"])):(o(),V("span",xe,m(e(Q)(((k=e(i))==null?void 0:k.author.name)||"")),1))]}),_:1}),r("div",ke,[r("h6",Ve,[a(F,{to:"#",class:"font-weight-medium user-list-name text-grey-600"},{default:s(()=>{var t;return[p(m((t=e(i))==null?void 0:t.author.name),1)]}),_:1})]),be]),a(ue),a(me,{"show-arrows":"","center-active":""},{default:s(()=>[(o(!0),V(ie,null,le(e(z).filter(({_if:t})=>t),t=>(o(),c(fe,{key:t.title},{default:s(()=>[a(_e,B(t.props,{class:"ma-1"}),{default:s(()=>[p(m(t.title),1)]),_:2},1040)]),_:2},1024))),128))]),_:1}),R("",!0)]),_:1})]),_:1})),a(M,{class:"mx-6"}),e(f)?(o(),c(e(y),{key:3,class:"py-5",type:["heading","paragraph"]})):(o(),c(w,{key:2,title:"About this course"},{default:s(()=>{var t;return[r("p",ge,m((t=e(i))==null?void 0:t.description),1)]}),_:1})),a(M,{class:"mx-6"}),e(f)?(o(),c(e(y),{key:5,class:"py-5",type:["heading","paragraph"]})):(o(),c(w,{key:4,title:"By the numbers"},{default:s(()=>{var t,u;return[r("div",we,[r("div",Ce,[r("p",Le,[a(v,{icon:"mdi-check-all",class:"me-2 mt-n2"}),p(" Skill level: "+m((t=e(i))==null?void 0:t.difficulty),1)]),r("p",Se,[a(v,{icon:"mdi-users",class:"me-2 mt-n2"}),p("Students: 38,815 ")]),r("p",Be,[a(v,{icon:"mdi-flag",class:"me-2 mt-n2"}),p("Languages: English ")])]),r("div",null,[r("p",Re,[a(v,{icon:"mdi-pencil",class:"me-2 mt-n2"}),p("Lectures: 19 ")]),r("p",Te,[a(v,{icon:"mdi-clock",class:"me-2 mt-n2"}),p("Video: "+m(e(ne)(((u=e(i))==null?void 0:u.duration)||0))+" total minutes ",1)])])])]}),_:1}))]),_:1}),a(T,{cols:"12",md:"4"},{default:s(()=>{var t,u;return[r("div",Me,[(t=e(i))!=null&&t.chapters?(o(),c(G,{key:0,ref_key:"playList",ref:C,attachment:e(d),"onUpdate:attachment":n[0]||(n[0]=k=>ce(d)?d.value=k:null),chapters:(u=e(i))==null?void 0:u.chapters},null,8,["attachment","chapters"])):(o(),c(e(y),{key:1,type:Array(5).fill("list-item-avatar-three-line")},null,8,["type"]))])]}),_:1})]),_:1})])}}});typeof N=="function"&&N(Ne);export{Ne as default};