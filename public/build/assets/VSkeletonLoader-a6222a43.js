import{M as h,d6 as f,P as p,U as k,Z as x,$ as y,da as S,a0 as w,X as C,aD as B,G as L,cW as T,aa as V,y as s}from"./main-6856e496.js";const P={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function _(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function r(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>i(t))}function i(e){let t=[];if(!e)return t;const a=P[e];if(e!==a){if(e.includes(","))return o(e);if(e.includes("@"))return r(e);a.includes(",")?t=o(a):a.includes("@")?t=r(a):a&&t.push(i(a))}return[_(e,t)]}function o(e){return e.replace(/\s/g,"").split(",").map(i)}const A=h()({name:"VSkeletonLoader",props:{boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"image"},...f(),...p(),...k()},setup(e,t){let{slots:a}=t;const{backgroundColorClasses:d,backgroundColorStyles:u}=x(y(e,"color")),{dimensionStyles:c}=S(e),{elevationClasses:g}=w(e),{themeClasses:v}=C(e),{t:m}=B(),b=L(()=>i(T(e.type).join(",")));return V(()=>{var l;const n=!a.default||e.loading;return s("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},v.value,d.value,g.value],style:[u.value,n?c.value:{}],"aria-busy":e.boilerplate?void 0:n,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:m(e.loadingText),role:e.boilerplate?void 0:"alert"},[n?b.value:(l=a.default)==null?void 0:l.call(a)])}),{}}});export{A as V};
