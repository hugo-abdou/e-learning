import{cV as a,cW as s,cX as i}from"./plugins-900eb03f.js";const o=r=>a(r)||s(r)||r===!1?"This field is required":!!String(r).trim().length||"This field is required",d=r=>{if(i(r))return!0;const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(r)?r.every(e=>t.test(String(e)))||"The Email field must be a valid email":t.test(String(r))||"The Email field must be a valid email"},l=(r,t)=>r===t||"The Confirm Password field confirmation does not match",c=r=>i(r)?!0:/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(String(r))||"URL is invalid",f=r=>{if(i(r))return!0;const t=String(r);return/^[0-9A-Z_-]*$/i.test(t)||"All Character are not valid"};export{f as a,l as c,d as e,o as r,c as u};
