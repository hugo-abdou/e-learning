import{M as S,ab as h,de as O,a4 as x,dg as T,ad as w,G as e,t as A,m as u,aa as C,di as d,y as G,dj as I}from"./main-6856e496.js";const R=S()({name:"VTooltip",props:{id:String,text:String,...h(O({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:a}=v;const n=x(t,"modelValue"),{scopeId:g}=T(),f=w(),r=e(()=>t.id||`v-tooltip-${f}`),l=A(),m=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),y=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),P=e(()=>u({"aria-describedby":r.value},t.activatorProps));return C(()=>{const[b]=d.filterProps(t);return G(d,u({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,transition:y.value,absolute:!0,location:m.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:P.value,_disableGlobalStack:!0},g),{activator:a.activator,default:function(){var c;for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return((c=a.default)==null?void 0:c.call(a,...s))??t.text}})}),I({},l)}});export{R as V};
