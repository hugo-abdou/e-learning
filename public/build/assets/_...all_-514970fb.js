import{d as l,o as t,i as r,D as s,G as a,y as o,B as p,ap as h,af as f,w as g,e as c,aP as i,aV as _}from"./main-0fb5c6c1.js";import{u as k,m as x,a as y}from"./useGenerateImageVariant-b1071140.js";const V={class:"text-center"},w={key:0,class:"text-h1 font-weight-medium"},C={key:1,class:"text-h4 font-weight-medium mb-3"},b={key:2},v=l({__name:"ErrorHeader",props:{errorCode:null,errorTitle:null,errorDescription:null},setup(n){const e=n;return(d,m)=>(t(),r("div",V,[e.errorCode?(t(),r("h1",w,s(e.errorCode),1)):a("",!0),e.errorTitle?(t(),r("h4",C,s(e.errorTitle),1)):a("",!0),e.errorDescription?(t(),r("p",b,s(e.errorDescription),1)):a("",!0)]))}}),B="/build/assets/404-c6f3c581.png",D={class:"misc-wrapper"},N={class:"misc-avatar w-100 text-center"},T=l({__name:"[...all]",setup(n){const e=k(y,x);return(d,m)=>{const u=v;return t(),r("div",D,[o(u,{"error-title":"Page Not Found :(","error-description":"We couldn't find the page you are looking for."}),o(f,{to:"/admin/dashboard",class:"mb-12"},{default:p(()=>[h(" Back to Home ")]),_:1}),g("div",N,[o(i,{src:c(B),alt:"Coming Soon","max-width":200,class:"mx-auto"},null,8,["src"])]),o(i,{src:c(e),class:"misc-footer-img d-none d-md-block"},null,8,["src"])])}}});typeof _=="function"&&_(T);export{T as default};
