import{_ as w}from"./FileUploaderDialog.vue_vue_type_script_setup_true_lang-6bdbe54a.js";import{_ as C}from"./AppSelect.vue_vue_type_script_setup_true_lang-ae247772.js";import{_ as U}from"./InfoTooltip.vue_vue_type_script_setup_true_lang-5233097e.js";import{d as k,bP as D,c9 as b,r as m,w as B,o as f,c as V,b as e,f as a,p as t,b0 as h,F as q,b8 as F,b9 as T,h as E,aj as P,s as j,e as I,a0 as N,v as S,x as z}from"./main-6e33e0f4.js";import{r as _}from"./validators-f52bbb1d.js";import{M as A}from"./index-0c36f9df.js";import{U as M}from"./utils-fc59a690.js";import{V as O}from"./VForm-cfccf0e4.js";import{V as R,a as u}from"./VRow-26e77137.js";import{b as L}from"./VInput-0a556944.js";import{V as G}from"./VTextField-c1b9a4f9.js";import{V as H}from"./VTextarea-f1b863bb.js";const J={key:0,style:{"max-block-size":"200px"},class:"h-100"},K={class:"d-flex flex-column align-center"},ue=k({__name:"CourseDetailsForm",props:{course:{default:()=>({title:"",description:"",status:D.Draft,difficulty:b.Beginner,thumbnail:null,prerequisite_id:null})}},setup(v,{expose:y,emit:Q}){const p=v,r=m(!1),i=m(p.course),d=m({}),$=async()=>{try{const{valid:l}=await d.value.validate();return l?Promise.resolve(i.value):Promise.reject(new Error("validation faild"))}catch(l){throw l}},g=l=>{i.value.thumbnail=l[0].thumb_url,r.value=!1};return y({formEl:d,validate:$}),B(()=>p.course,l=>{i.value=l}),(l,o)=>{const n=U,c=C,x=w;return f(),V(q,null,[e(t(O),{ref_key:"formEl",ref:d},{default:a(()=>[e(F,null,{default:a(()=>[e(T,null,{default:a(()=>[e(R,{class:"mt-0"},{default:a(()=>[e(u,{cols:"12",md:"4"},{default:a(()=>[t(i).thumbnail?(f(),V("div",J,[e(A,{media:{thumb_url:t(i).thumbnail,status:2,type:"image"},deletable:"","is-preview":"",onOnDelete:o[0]||(o[0]=s=>t(i).thumbnail=null)},null,8,["media"])])):(f(),E(n,{key:1,text:l.$t("media.upload.description")},{default:a(({props:s})=>[e(P,j({...s,...t(M),style:"min-height: 130px"},{onClick:o[1]||(o[1]=W=>r.value=!0)}),{default:a(()=>[I("div",K,[e(N,{icon:"flat-color-icons:add-image",size:"28"}),e(L,{class:"mt-2"},{default:a(()=>[S(z(l.$t("media.thumbnale")),1)]),_:1})])]),_:2},1040)]),_:1},8,["text"]))]),_:1}),e(u,{cols:"12",md:"8"},{default:a(()=>[e(G,{modelValue:t(i).title,"onUpdate:modelValue":o[2]||(o[2]=s=>t(i).title=s),rules:[t(_)],label:l.$t("course.fields.title.label"),class:"mb-5"},{"append-inner":a(()=>[e(n,{text:l.$t("course.fields.title.description")},null,8,["text"])]),_:1},8,["modelValue","rules","label"]),e(H,{modelValue:t(i).description,"onUpdate:modelValue":o[3]||(o[3]=s=>t(i).description=s),rules:[t(_)],label:l.$t("course.fields.description.label")},{"append-inner":a(()=>[e(n,{text:l.$t("course.fields.description.description")},null,8,["text"])]),_:1},8,["modelValue","rules","label"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:a(()=>[e(c,{modelValue:t(i).difficulty,"onUpdate:modelValue":o[4]||(o[4]=s=>t(i).difficulty=s),items:Object.values(t(b)).map(s=>({title:l.$t(`course.fields.difficulty.options.${s}`),value:s})),label:l.$t("course.fields.difficulty.label")},{"append-inner":a(()=>[e(n,{text:l.$t("course.fields.difficulty.description")},null,8,["text"])]),_:1},8,["modelValue","items","label"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:a(()=>[e(c,{modelValue:t(i).prerequisite_id,"onUpdate:modelValue":o[5]||(o[5]=s=>t(i).prerequisite_id=s),items:[],label:l.$t("course.fields.prerequisite.label")},{"append-inner":a(()=>[e(n,{text:l.$t("course.fields.prerequisite.description")},null,8,["text"])]),_:1},8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512),e(x,{"is-dialog-visible":t(r),"onUpdate:isDialogVisible":o[6]||(o[6]=s=>h(r)?r.value=s:null),"allowed-file-types":["image/*"],"max-number-of-files":1,onDone:g},null,8,["is-dialog-visible"])],64)}}});export{ue as _};
