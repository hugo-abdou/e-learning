import{d as m,s as h,r as g,o,f as l,B as e,y as t,ah as n,aI as V,aJ as x,aK as C,as as v,e as p,aj as y,at as S,i as A,F as I,j as B,au as k,z as w,aL as D,w as d,D as _}from"./main-d3200a92.js";import{V as z}from"./VMenu-fe26a8c9.js";import{V as N}from"./VDivider-4e3adaff.js";const F={class:"text-base font-weight-medium mt-2 mb-0"},M={class:"text-sm"},$=m({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:null},setup(r){const s=r,c=h();return(f,i)=>{const u=g("IconBtn");return o(),l(u,null,{default:e(()=>[t(n,{size:"26",icon:s.togglerIcon},null,8,["icon"]),t(z,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(V,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(x,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(n,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(C,null,{default:e(()=>[v("Shortcuts")]),_:1})]),_:1}),t(N),t(p(y),{options:{wheelPropagation:!1}},{default:e(()=>[t(S,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),A(I,null,B(s.shortcuts,(a,b)=>(o(),l(k,{key:a.title,cols:"6",class:w(["text-center border-t cursor-pointer pa-4 shortcut-icon",(b+1)%2?"border-e":""]),onClick:j=>p(c).push(a.to)},{default:e(()=>[t(D,{variant:"tonal",size:"48"},{default:e(()=>[t(n,{icon:a.icon},null,8,["icon"])]),_:2},1024),d("h6",F,_(a.title),1),d("span",M,_(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const T=m({__name:"NavbarShortcuts",setup(r){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(c,f)=>{const i=$;return o(),l(i,{shortcuts:s})}}});export{T as default};