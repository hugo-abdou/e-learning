import{M,ab as h,aP as w,df as D,a4 as O,aQ as x,ad as R,G as v,t as m,bF as A,dg as f,J as I,m as g,aa as T,aR as V,y as P,de as U,aS as $,bZ as j}from"./main-d3200a92.js";const F=M()({name:"VMenu",props:{id:String,...h(w({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:D}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:o}=p;const t=O(a,"modelValue"),{scopeId:y}=x(),C=R(),u=v(()=>a.id||`v-menu-${C}`),i=m(),e=A(f,null),s=m(0);j(f,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(t.value=!1,e==null||e.closeParents())},40)}}),I(t,l=>{l?e==null||e.register():e==null||e.unregister()});function S(){e==null||e.closeParents()}const b=v(()=>g({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":u.value},a.activatorProps));return T(()=>{const[l]=V.filterProps(a);return P(V,g({ref:i,class:["v-menu",a.class],style:a.style},l,{modelValue:t.value,"onUpdate:modelValue":r=>t.value=r,absolute:!0,activatorProps:b.value,"onClick:outside":S},y),{activator:o.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return P(U,{root:!0},{default:()=>{var d;return[(d=o.default)==null?void 0:d.call(o,...c)]}})}})}),$({id:u,ΨopenChildren:s},i)}});export{F as V};