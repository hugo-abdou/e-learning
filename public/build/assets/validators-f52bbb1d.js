const i=r=>r==null||r===""?!0:!!(Array.isArray(r)&&r.length===0),n=r=>r==null,s=r=>Array.isArray(r)&&r.length===0,a=r=>n(r)||s(r)||r===!1?"This field is required":!!String(r).trim().length||"This field is required",o=r=>{if(i(r))return!0;const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(r)?r.every(e=>t.test(String(e)))||"The Email field must be a valid email":t.test(String(r))||"The Email field must be a valid email"},d=(r,t)=>r===t||"The Confirm Password field confirmation does not match",l=r=>{if(i(r))return!0;const t=String(r);return/^[0-9A-Z_-]*$/i.test(t)||"All Character are not valid"};export{l as a,d as c,o as e,a as r};
