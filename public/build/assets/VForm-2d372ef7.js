import{a2 as p,a3 as b,ap as v,r as F,aa as V,ck as y,b as h}from"./main-bf1e147a.js";import{c as R,d as k}from"./VInput-86d12209.js";const P=p({...b(),...R()},"VForm"),S=v()({name:"VForm",props:P(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:f}=i;const r=k(o),s=F();function c(t){t.preventDefault(),r.reset()}function l(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(u=>{var m;let{valid:d}=u;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return V(()=>{var t;return h("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:c,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,r)])}),y(r,s)}});export{S as V};