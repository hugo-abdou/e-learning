import{d as m,q as h,r as g,o,f as l,z as e,x as t,aj as n,aK as x,aL as V,aM as v,au as C,e as p,al as y,av as S,g as A,F as I,i as k,aw as w,y as B,aN as N,v as d,C as _}from"./main-0fe8d6c4.js";import{V as z}from"./VMenu-04b4d8fd.js";import{V as D}from"./VDivider-4843e98e.js";const M={class:"text-base font-weight-medium mt-2 mb-0"},F={class:"text-sm"},$=m({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:null},setup(r){const s=r,c=h();return(f,i)=>{const u=g("IconBtn");return o(),l(u,null,{default:e(()=>[t(n,{size:"26",icon:s.togglerIcon},null,8,["icon"]),t(z,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(x,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(V,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(n,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(v,null,{default:e(()=>[C("Shortcuts")]),_:1})]),_:1}),t(D),t(p(y),{options:{wheelPropagation:!1}},{default:e(()=>[t(S,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),A(I,null,k(s.shortcuts,(a,b)=>(o(),l(w,{key:a.title,cols:"6",class:B(["text-center border-t cursor-pointer pa-4 shortcut-icon",(b+1)%2?"border-e":""]),onClick:L=>p(c).push(a.to)},{default:e(()=>[t(N,{variant:"tonal",size:"48"},{default:e(()=>[t(n,{icon:a.icon},null,8,["icon"])]),_:2},1024),d("h6",M,_(a.title),1),d("span",F,_(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const U=m({__name:"NavbarShortcuts",setup(r){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(c,f)=>{const i=$;return o(),l(i,{shortcuts:s})}}});export{U as default};
