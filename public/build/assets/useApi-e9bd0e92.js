import{bT as c,bn as o,bU as n}from"./plugins-900eb03f.js";const i=c({baseUrl:{}.VITE_API_BASE_URL||"/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const r=o("access_token").value;return r&&(e.headers={...e.headers,Authorization:`Bearer ${r}`}),{options:e}},afterFetch(e){const{data:r,response:a}=e;let t=null;try{t=n(r)}catch(s){console.error(s)}return{data:t,response:a}}}});export{i as u};
