import{_ as c}from"./AppSelect.vue_vue_type_script_setup_true_lang-b3c9fd04.js";import{u as l}from"./useRolesStore-bfb1d70b.js";import{d as n,r as p,I as i,o as m,h as u,q as _}from"./main-83f81ad7.js";const x=n({__name:"RolesSelectBox",props:{defaultRoles:{}},setup(t){const o=p(t.defaultRoles||[]),a=l();return i(async()=>{const s=await a.fetchRoles();o.value=s.data.map(({id:r,name:e})=>({title:e,value:e}))}),(s,r)=>{const e=c;return m(),u(e,{items:_(o),multiple:"",chips:"","clear-icon":"tabler-x"},null,8,["items"])}}});export{x as _};