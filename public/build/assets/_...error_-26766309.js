import{d as _,o as t,c as s,x as a,z as r,b as o,f as l,v as p,aj as h,e as f,p as n,bh as i}from"./main-bf1e147a.js";import{u as x}from"./useGenerateImageVariant-2a1f5d62.js";import{a as g,b as k}from"./misc-mask-light-1df3cfef.js";const V={class:"text-center"},v={key:0,class:"text-h1 font-weight-medium"},y={key:1,class:"text-h4 font-weight-medium mb-3"},b={key:2,style:{"max-inline-size":"50vw"}},w=_({__name:"ErrorHeader",props:{statusCode:{},title:{},description:{}},setup(c){const e=c;return(d,m)=>(t(),s("div",V,[e.statusCode?(t(),s("h1",v,a(e.statusCode),1)):r("",!0),e.title?(t(),s("h4",y,a(e.title),1)):r("",!0),e.description?(t(),s("p",b,a(e.description),1)):r("",!0)]))}}),C="/build/assets/404-c6f3c581.png",B={class:"misc-wrapper"},N={class:"misc-avatar w-100 text-center"},$=_({__name:"[...error]",setup(c){const e=x(k,g);return(d,m)=>{const u=w;return t(),s("div",B,[o(u,{"status-code":"404",title:"Page Not Found ⚠️",description:"We couldn't find the page you are looking for."}),o(h,{to:"/",class:"mb-12"},{default:l(()=>[p(" Back to Home ")]),_:1}),f("div",N,[o(i,{src:n(C),alt:"Coming Soon","max-width":200,class:"mx-auto"},null,8,["src"])]),o(i,{src:n(e),class:"misc-footer-img d-none d-md-block"},null,8,["src"])])}}});export{$ as default};