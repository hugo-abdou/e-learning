import{a2 as A,a3 as T,ap as E,aa as O,b as l,br as p,ei as I,ey as Y,ak as Z,aJ as ee,aK as le,ce as ae,aw as ne,an as te,a6 as d,bv as ie,r as F,ax as se,$ as oe,ar as re,w as de,ez as ce,bO as ue,eA as ve,a8 as fe,eB as be,cf as ge,ev as ye,J as me,K as Ce,F as he,s as _e,eC as ke}from"./main-bf1e147a.js";import{b as pe,m as Ie,u as Fe,e as Pe}from"./VInput-86d12209.js";const Ve=A({floating:Boolean,...T()},"VFieldLabel"),_=E()({name:"VFieldLabel",props:Ve(),setup(e,u){let{slots:i}=u;return O(()=>l(pe,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),xe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Be=A({appendInnerIcon:p,bgColor:String,clearable:Boolean,clearIcon:{type:p,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:p,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>xe.includes(e)},"onClick:clear":I(),"onClick:appendInner":I(),"onClick:prependInner":I(),...T(),...Y(),...Z(),...ee()},"VField"),Le=E()({name:"VField",inheritAttrs:!1,props:{id:String,...Ie(),...Be()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:i,emit:Se,slots:a}=u;const{themeClasses:D}=le(e),{loaderClasses:U}=ae(e),{focusClasses:J,isFocused:P,focus:V,blur:x}=Fe(e),{InputIcon:k}=Pe(e),{roundedClasses:K}=ne(e),{rtlClasses:M}=te(),f=d(()=>e.dirty||e.active),b=d(()=>!e.singleLine&&!!(e.label||a.label)),W=ie(),s=d(()=>e.id||`input-${W}`),j=d(()=>`${s.value}-messages`),B=F(),g=F(),L=F(),S=d(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:q,backgroundColorStyles:z}=se(oe(e,"bgColor")),{textColorClasses:$,textColorStyles:w}=re(d(()=>e.error||e.disabled?void 0:f.value&&P.value?e.color:e.baseColor));de(f,c=>{if(b.value){const t=B.value.$el,o=g.value.$el;requestAnimationFrame(()=>{const r=ve(t),n=o.getBoundingClientRect(),m=n.x-r.x,C=n.y-r.y-(r.height/2-n.height/2),v=n.width/.75,h=Math.abs(v-r.width)>1?{maxWidth:fe(v)}:void 0,X=getComputedStyle(t),R=getComputedStyle(o),G=parseFloat(X.transitionDuration)*1e3||150,H=parseFloat(R.getPropertyValue("--v-field-label-scale")),Q=R.getPropertyValue("color");t.style.visibility="visible",o.style.visibility="hidden",be(t,{transform:`translate(${m}px, ${C}px) scale(${H})`,color:Q,...h},{duration:G,easing:ke,direction:c?"normal":"reverse"}).finished.then(()=>{t.style.removeProperty("visibility"),o.style.removeProperty("visibility")})})}},{flush:"post"});const y=d(()=>({isActive:f,isFocused:P,controlRef:L,blur:x,focus:V}));function N(c){c.target!==document.activeElement&&c.preventDefault()}return O(()=>{var m,C,v;const c=e.variant==="outlined",t=a["prepend-inner"]||e.prependInnerIcon,o=!!(e.clearable||a.clear),r=!!(a["append-inner"]||e.appendInnerIcon||o),n=a.label?a.label({...y.value,label:e.label,props:{for:s.value}}):e.label;return l("div",_e({class:["v-field",{"v-field--active":f.value,"v-field--appended":r,"v-field--center-affix":e.centerAffix??!S.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":t,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!n,[`v-field--variant-${e.variant}`]:!0},D.value,q.value,J.value,U.value,K.value,M.value,e.class],style:[z.value,e.style],onClick:N},i),[l("div",{class:"v-field__overlay"},null),l(ge,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),t&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(k,{key:"prepend-icon",name:"prependInner"},null),(m=a["prepend-inner"])==null?void 0:m.call(a,y.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&b.value&&l(_,{key:"floating-label",ref:g,class:[$.value],floating:!0,for:s.value,style:w.value},{default:()=>[n]}),l(_,{ref:B,for:s.value},{default:()=>[n]}),(C=a.default)==null?void 0:C.call(a,{...y.value,props:{id:s.value,class:"v-field__input","aria-describedby":j.value},focus:V,blur:x})]),o&&l(ye,{key:"clear"},{default:()=>[me(l("div",{class:"v-field__clearable",onMousedown:h=>{h.preventDefault(),h.stopPropagation()}},[a.clear?a.clear():l(k,{name:"clear"},null)]),[[Ce,e.dirty]])]}),r&&l("div",{key:"append",class:"v-field__append-inner"},[(v=a["append-inner"])==null?void 0:v.call(a,y.value),e.appendInnerIcon&&l(k,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",$.value],style:w.value},[c&&l(he,null,[l("div",{class:"v-field__outline__start"},null),b.value&&l("div",{class:"v-field__outline__notch"},[l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n]})]),l("div",{class:"v-field__outline__end"},null)]),S.value&&b.value&&l(_,{ref:g,floating:!0,for:s.value},{default:()=>[n]})])])}),{controlRef:L}}});function Re(e){const u=Object.keys(Le.props).filter(i=>!ce(i)&&i!=="class"&&i!=="style");return ue(e,u)}export{Le as V,Re as f,Be as m};