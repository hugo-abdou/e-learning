import{b0 as Re,x as s,m as E,G,b1 as C,s as F,I as X,b2 as O,b3 as M,b4 as H,a3 as $,E as k,Z as I,b5 as Y,L as A,ab as R,b6 as Ge,ae as He,Y as Ke,a9 as K,af as ze,F as U,aj as Ue,ak as L,au as te,b7 as We,aO as ae,b8 as Z,aF as J,b9 as je,ba as Qe,aV as Xe,e as ne,bb as Ye,a8 as W,bc as Ze,M as Je,N as qe,bd as et,O as tt,Q as at,be as nt,R as lt,S as rt,bf as it,U as ot,W as ut,a0 as st,bg as dt,bh as le,a5 as re}from"./main-0fe8d6c4.js";import{V as ct}from"./AppSelect.vue_vue_type_script_setup_true_lang-fa57a4e6.js";import{c as q}from"./VCheckboxBtn-105f566a.js";import{m as ft,u as vt}from"./VList-df386f36.js";import{V as ie}from"./VTable-e2b6c00d.js";const ee=Re({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,n)=>{let{slots:a,attrs:t}=n;const l=e.tag??"td";return s(l,E({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:G(e.height),width:G(e.width),left:G(e.fixedOffset||null)}},t),{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}})}),oe=C({headers:{type:Array,default:()=>[]}},"v-data-table-header"),ue=Symbol.for("vuetify:data-table-headers");function se(e,n){const a=F([]),t=F([]);X(()=>e.headers,()=>{var y,P,p;const r=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],u=r.flatMap((h,b)=>h.map(g=>({column:g,row:b}))),d=r.length,i={title:"",sortable:!1},c={...i,width:48};if((y=n==null?void 0:n.groupBy)!=null&&y.value.length){const h=u.findIndex(b=>{let{column:g}=b;return g.key==="data-table-group"});h<0?u.unshift({column:{...i,key:"data-table-group",title:"Group",rowspan:d},row:0}):u.splice(h,1,{column:{...i,...u[h].column},row:u[h].row})}if((P=n==null?void 0:n.showSelect)!=null&&P.value){const h=u.findIndex(b=>{let{column:g}=b;return g.key==="data-table-select"});h<0?u.unshift({column:{...c,key:"data-table-select",rowspan:d},row:0}):u.splice(h,1,{column:{...c,...u[h].column},row:u[h].row})}if((p=n==null?void 0:n.showExpand)!=null&&p.value){const h=u.findIndex(b=>{let{column:g}=b;return g.key==="data-table-expand"});h<0?u.push({column:{...c,key:"data-table-expand",rowspan:d},row:0}):u.splice(h,1,{column:{...c,...u[h].column},row:u[h].row})}const o=O(d).map(()=>[]),v=O(d).fill(0);let f=0;u.forEach(h=>{let{column:b,row:g}=h;const B=b.key??`data-table-column-${f++}`;for(let V=g;V<=g+(b.rowspan??1)-1;V++)o[V].push({...b,key:B,fixedOffset:v[V],sortable:b.sortable??!!b.key}),v[V]+=b.width??0}),o.forEach(h=>{for(let b=h.length;b--;b>=0)if(h[b].fixed){h[b].lastFixed=!0;return}});const m=new Set;a.value=o.map(h=>{const b=[];for(const g of h)m.has(g.key)||(m.add(g.key),b.push(g));return b}),t.value=o.at(-1)??[]},{deep:!0,immediate:!0});const l={headers:a,columns:t};return M(ue,l),l}function j(){const e=H(ue);if(!e)throw new Error("Missing headers!");return e}const de=C({showSelect:Boolean,modelValue:{type:Array,default:()=>[]}},"v-data-table-select"),ce=Symbol.for("vuetify:data-table-selection");function fe(e,n){const a=$(e,"modelValue",e.modelValue,v=>new Set(v),v=>[...v.values()]);function t(v){return v.every(f=>a.value.has(f.value))}function l(v){return v.some(f=>a.value.has(f.value))}function r(v,f){const m=new Set(a.value);for(const y of v)f?m.add(y.value):m.delete(y.value);a.value=m}function u(v){r([v],!t([v]))}function d(v){r(n.value,v)}const i=k(()=>a.value.size>0),c=k(()=>t(n.value)),o={toggleSelect:u,select:r,selectAll:d,isSelected:t,isSomeSelected:l,someSelected:i,allSelected:c};return M(ce,o),o}function Q(){const e=H(ce);if(!e)throw new Error("Missing selection!");return e}const ve=C({sortBy:{type:Array,default:()=>[]},multiSort:Boolean,mustSort:Boolean},"v-data-table-sort"),ge=Symbol.for("vuetify:data-table-sort");function me(e){const n=$(e,"sortBy"),a=I(e,"mustSort"),t=I(e,"multiSort");return{sortBy:n,mustSort:a,multiSort:t}}function be(e){const{sortBy:n,mustSort:a,multiSort:t,page:l}=e,u={sortBy:n,toggleSort:d=>{let i=n.value.map(o=>({...o}))??[];const c=i.find(o=>o.key===d);c?c.order==="desc"?a.value?c.order="asc":i=i.filter(o=>o.key!==d):c.order="desc":t.value?i=[...i,{key:d,order:"asc"}]:i=[{key:d,order:"asc"}],n.value=i,l&&(l.value=1)}};return M(ge,u),u}function gt(){const e=H(ge);if(!e)throw new Error("Missing sort!");return e}function mt(e,n,a){const t=k(()=>a.value.reduce((r,u)=>(u.sort&&(r[u.key]=u.sort),r),{}));return{sortedItems:k(()=>n.value.length?bt(e.value,n.value,"en",t.value):e.value)}}function bt(e,n,a,t){const l=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((r,u)=>{for(let d=0;d<n.length;d++){const i=n[d].key,c=n[d].order;if(c===!1)continue;let o=Y(r.raw,i),v=Y(u.raw,i);if(c==="desc"&&([o,v]=[v,o]),t!=null&&t[i]){const f=t[i](o,v);if(!f)continue;return f}if(!(o==null||v==null)){if(o instanceof Date&&v instanceof Date)return o.getTime()-v.getTime();if([o,v]=[o,v].map(f=>(f||"").toString().toLocaleLowerCase()),o!==v)return!isNaN(o)&&!isNaN(v)?Number(o)-Number(v):l.compare(o,v)}}return 0})}const ye=A()({name:"VDataTableHeaders",props:{color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:R,default:"$sortAsc"},sortDescIcon:{type:R,default:"$sortDesc"},...Ge()},setup(e,n){let{slots:a,emit:t}=n;const{toggleSort:l,sortBy:r}=gt(),{someSelected:u,allSelected:d,selectAll:i}=Q(),{columns:c,headers:o}=j(),{loaderClasses:v}=He(e),f=(b,g)=>!e.sticky&&!b.fixed?null:{position:"sticky",zIndex:b.fixed?4:e.sticky?3:void 0,left:b.fixed?G(b.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${g})`:void 0};function m(b){const g=r.value.find(B=>B.key===b);return g?g.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:y,backgroundColorStyles:P}=Ke(e,"color"),p=k(()=>({headers:o.value,columns:c.value,toggleSort:l,sortBy:r.value,someSelected:u.value,allSelected:d.value,selectAll:i,getSortIcon:m,getFixedStyles:f})),h=b=>{let{column:g,x:B,y:V}=b;const _=!!r.value.find(x=>x.key===g.key),N=g.key==="data-table-select"||g.key==="data-table-expand";return s(ee,{tag:"th",align:g.align,class:["v-data-table__th",{"v-data-table__th--sortable":g.sortable,"v-data-table__th--sorted":_},v.value],style:{width:G(g.width),minWidth:G(g.width),...f(g,V)},colspan:g.colspan,rowspan:g.rowspan,onClick:g.sortable?()=>l(g.key):void 0,lastFixed:g.lastFixed,noPadding:N},{default:()=>{var w;const x=`column.${g.key}`,S={column:g,selectAll:i};return a[x]?a[x](S):g.key==="data-table-select"?((w=a["column.data-table-select"])==null?void 0:w.call(a,S))??s(q,{modelValue:d.value,indeterminate:u.value&&!d.value,"onUpdate:modelValue":i},null):s("div",{class:"v-data-table-header__content"},[s("span",null,[g.title]),g.sortable&&s(Ue,{key:"icon",class:"v-data-table-header__sort-icon",icon:m(g.key)},null),e.multiSort&&_&&s("div",{key:"badge",class:["v-data-table-header__sort-badge",...y.value],style:P.value},[r.value.findIndex(T=>T.key===g.key)+1])])}})};K(()=>s(U,null,[a.headers?a.headers(p.value):o.value.map((b,g)=>s("tr",null,[b.map((B,V)=>s(h,{column:B,x:V,y:g},null))])),e.loading&&s("tr",{class:"v-data-table__progress"},[s("th",{colspan:c.value.length},[s(ze,{name:"v-data-table-headers",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),he=C({groupBy:{type:Array,default:()=>[]}},"data-table-group"),xe=Symbol.for("vuetify:data-table-group");function Se(e){return{groupBy:$(e,"groupBy")}}function ke(e){const{groupBy:n,sortBy:a}=e,t=F(new Set),l=k(()=>n.value.map(c=>({...c,order:c.order??!1})).concat(a.value));function r(c){return t.value.has(c.id)}function u(c){const o=new Set(t.value);r(c)?o.delete(c.id):o.add(c.id),t.value=o}function d(c){function o(v){const f=[];for(const m of v.items)m.type==="item"?f.push(m):f.push(...o(m));return f}return o({type:"group-header",items:c,id:"dummy",key:"dummy",value:"dummy",depth:0})}const i={sortByWithGroups:l,toggleGroup:u,opened:t,groupBy:n,extractRows:d,isGroupOpen:r};return M(xe,i),i}function we(){const e=H(xe);if(!e)throw new Error("Missing group!");return e}function yt(e,n){if(!e.length)return[];const a=new Map;for(const t of e){const l=Y(t.raw,n);a.has(l)||a.set(l,[]),a.get(l).push(t)}return a}function Pe(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!n.length)return[];const l=yt(e,n[0]),r=[],u=n.slice(1);return l.forEach((d,i)=>{const c=n[0],o=`${t}_${c}_${i}`;r.push({depth:a,id:o,key:c,value:i,items:u.length?Pe(d,u,a+1,o):d,type:"group-header"})}),r}function pe(e,n){const a=[];for(const t of e)t.type==="group-header"?(t.value!=null&&a.push(t),(n.has(t.id)||t.value==null)&&a.push(...pe(t.items,n))):a.push(t);return a}function Ie(e,n,a){return{flatItems:k(()=>{if(!n.value.length)return e.value;const l=Pe(e.value,n.value.map(r=>r.key));return pe(l,a.value)})}}const ht=A()({name:"VDataTableGroupHeaderRow",props:{item:{type:Object,required:!0}},setup(e,n){let{slots:a}=n;const{isGroupOpen:t,toggleGroup:l,extractRows:r}=we(),{isSelected:u,isSomeSelected:d,select:i}=Q(),{columns:c}=j(),o=k(()=>r([e.item]));return()=>s("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(v=>{var f,m;if(v.key==="data-table-group"){const y=t(e.item)?"$expand":"$next",P=()=>l(e.item);return((f=a["data-table-group"])==null?void 0:f.call(a,{item:e.item,count:o.value.length,props:{icon:y,onClick:P}}))??s(ee,{class:"v-data-table-group-header-row__column"},{default:()=>[s(L,{size:"small",variant:"text",icon:y,onClick:P},null),s("span",null,[e.item.value]),s("span",null,[te("("),o.value.length,te(")")])]})}if(v.key==="data-table-select"){const y=u(o.value),P=d(o.value)&&!y,p=h=>i(o.value,h);return((m=a["data-table-select"])==null?void 0:m.call(a,{props:{modelValue:y,indeterminate:P,"onUpdate:modelValue":p}}))??s("td",null,[s(q,{modelValue:y,indeterminate:P,"onUpdate:modelValue":p},null)])}return s("td",null,null)})])}}),Ve=C({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"v-data-table-expand"),Te=Symbol.for("vuetify:datatable:expanded");function De(e){const n=I(e,"expandOnClick"),a=$(e,"expanded",e.expanded,d=>new Set(d),d=>[...d.values()]);function t(d,i){const c=new Set(a.value);i?c.add(d.value):c.delete(d.value),a.value=c}function l(d){return a.value.has(d.value)}function r(d){t(d,!l(d))}const u={expand:t,expanded:a,expandOnClick:n,isExpanded:l,toggleExpand:r};return M(Te,u),u}function Le(){const e=H(Te);if(!e)throw new Error("foo");return e}const xt=We({name:"VDataTableRow",props:{index:Number,item:Object,onClick:Function},setup(e,n){let{slots:a}=n;const{isSelected:t,toggleSelect:l}=Q(),{isExpanded:r,toggleExpand:u}=Le(),{columns:d}=j();K(()=>s("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&d.value.map((i,c)=>s(ee,{align:i.align,fixed:i.fixed,fixedOffset:i.fixedOffset,lastFixed:i.lastFixed,noPadding:i.key==="data-table-select"||i.key==="data-table-expand",width:i.width},{default:()=>{var m,y;const o=e.item,v=`item.${i.key}`,f={index:e.index,item:e.item,columns:d.value,isSelected:t,toggleSelect:l,isExpanded:r,toggleExpand:u};return a[v]?a[v](f):i.key==="data-table-select"?((m=a["item.data-table-select"])==null?void 0:m.call(a,f))??s(q,{modelValue:t([o]),onClick:ae(()=>l(o),["stop"])},null):i.key==="data-table-expand"?((y=a["item.data-table-expand"])==null?void 0:y.call(a,f))??s(L,{icon:r(o)?"$collapse":"$expand",size:"small",variant:"text",onClick:ae(()=>u(o),["stop"])},null):Z(o.columns,i.key)}}))]))}}),Be=A()({name:"VDataTableRows",props:{loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},setup(e,n){let{emit:a,slots:t}=n;const{columns:l}=j(),{expandOnClick:r,toggleExpand:u,isExpanded:d}=Le(),{isSelected:i,toggleSelect:c}=Q(),{toggleGroup:o,isGroupOpen:v}=we(),{t:f}=J();return K(()=>{var m;return e.loading&&t.loading?s("tr",{class:"v-data-table-rows-loading",key:"loading"},[s("td",{colspan:l.value.length},[t.loading()])]):!e.loading&&!e.items.length&&!e.hideNoData?s("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[s("td",{colspan:l.value.length},[((m=t["no-data"])==null?void 0:m.call(t))??f(e.noDataText)])]):s(U,null,[e.items.map((y,P)=>{var h;if(y.type==="group-header")return t["group-header"]?t["group-header"]({index:P,item:y,columns:l.value,isExpanded:d,toggleExpand:u,isSelected:i,toggleSelect:c,toggleGroup:o,isGroupOpen:v}):s(ht,{key:`group-header_${y.id}`,item:y},t);const p={index:P,item:y,columns:l.value,isExpanded:d,toggleExpand:u,isSelected:i,toggleSelect:c};return s(U,null,[t.item?t.item(p):s(xt,{key:`item_${y.value}`,onClick:r.value||e["onClick:row"]?b=>{var g;r.value&&u(y),(g=e["onClick:row"])==null||g.call(e,b,{item:y})}:void 0,index:P,item:y},t),d(y)&&((h=t["expanded-row"])==null?void 0:h.call(t,p))])})])}),{}}});const Ce=C({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"v-data-table-paginate"),_e=Symbol.for("vuetify:data-table-pagination");function Fe(e){const n=$(e,"page",void 0,t=>+(t??1)),a=$(e,"itemsPerPage",void 0,t=>+(t??10));return{page:n,itemsPerPage:a}}function $e(e){const{page:n,itemsPerPage:a,itemsLength:t}=e,l=k(()=>a.value===-1?0:a.value*(n.value-1)),r=k(()=>a.value===-1?t.value:Math.min(t.value,l.value+a.value)),u=k(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));function d(c){a.value=c,n.value=1}const i={page:n,itemsPerPage:a,itemsLength:t,startIndex:l,stopIndex:r,pageCount:u,setItemsPerPage:d};return M(_e,i),i}function St(){const e=H(_e);if(!e)throw new Error("Missing pagination!");return e}function kt(e){const{items:n,startIndex:a,stopIndex:t,itemsPerPage:l}=e;return{paginatedItems:k(()=>l.value<=0?n.value:n.value.slice(a.value,t.value))}}const Me=A()({name:"VDataTableFooter",props:{prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},setup(e,n){let{slots:a}=n;const{t}=J(),{page:l,pageCount:r,startIndex:u,stopIndex:d,itemsLength:i,itemsPerPage:c,setItemsPerPage:o}=St(),v=k(()=>e.itemsPerPageOptions.map(f=>({...f,title:t(f.title)})));return()=>{var f;return s("div",{class:"v-data-table-footer"},[(f=a.prepend)==null?void 0:f.call(a),s("div",{class:"v-data-table-footer__items-per-page"},[s("span",null,[t(e.itemsPerPageText)]),s(ct,{items:v.value,modelValue:c.value,"onUpdate:modelValue":m=>o(Number(m)),density:"compact",variant:"outlined","hide-details":!0},null)]),s("div",{class:"v-data-table-footer__info"},[s("div",null,[t(e.pageText,i.value?u.value+1:0,d.value,i.value)])]),s("div",{class:"v-data-table-footer__pagination"},[s(L,{icon:e.firstIcon,variant:"plain",onClick:()=>l.value=1,disabled:l.value===1,"aria-label":t(e.firstPageLabel)},null),s(L,{icon:e.prevIcon,variant:"plain",onClick:()=>l.value=Math.max(1,l.value-1),disabled:l.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&s("span",{key:"page",class:"v-data-table-footer__page"},[l.value]),s(L,{icon:e.nextIcon,variant:"plain",onClick:()=>l.value=Math.min(r.value,l.value+1),disabled:l.value===r.value,"aria-label":t(e.nextPageLabel)},null),s(L,{icon:e.lastIcon,variant:"plain",onClick:()=>l.value=r.value,disabled:l.value===r.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),Ae=C({...ft({itemValue:"id"})},"v-data-table-item");function wt(e,n,a){const t=n.split(".");for(;t.length>1;){const l=t.shift();e[l]==null&&(e[l]={}),typeof e[l]=="object"&&(e=e[l])}e[t[0]]=a}function Ne(e,n){const{items:a}=vt(e);return{items:k(()=>a.value.map(l=>({...l,type:"item",columns:n.value.reduce((r,u)=>(wt(r,u.key,Z(l.raw,u.value??u.key)),r),{})})))}}function Ee(e){let{page:n,itemsPerPage:a,sortBy:t,groupBy:l,search:r}=e;const u=je("VDataTable"),d=k(()=>({page:n.value,itemsPerPage:a.value,sortBy:t.value,groupBy:l.value,search:r.value}));X(()=>r==null?void 0:r.value,()=>{n.value=1});let i=null;X(d,()=>{Qe(i,d.value)||(u.emit("update:options",d.value),i=d.value)},{deep:!0,immediate:!0})}const Pt=(e,n,a)=>e==null||n==null?-1:e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()),pt=C({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function It(e,n,a){var d;const t=[],l=(a==null?void 0:a.default)??Pt,r=a!=null&&a.filterKeys?Ye(a.filterKeys):!1,u=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let i=0;i<e.length;i++){const c=e[i],o={},v={};let f=-1;if(n&&!(a!=null&&a.noFilter)){if(typeof c=="object"){const P=r||Object.keys(c);for(const p of P){const h=Z(c,p,c),b=(d=a==null?void 0:a.customKeyFilter)==null?void 0:d[p];if(f=b?b(h,n,c):l(h,n,c),f!==-1&&f!==!1)b?o[p]=f:v[p]=f;else if((a==null?void 0:a.filterMode)==="every")continue e}}else f=l(c,n,c),f!==-1&&f!==!1&&(v.title=f);const m=Object.keys(v).length,y=Object.keys(o).length;if(!m&&!y||(a==null?void 0:a.filterMode)==="union"&&y!==u&&!m||(a==null?void 0:a.filterMode)==="intersection"&&(y!==u||!m))continue}t.push({index:i,matches:{...v,...o}})}return t}function Vt(e,n,a,t){const l=k(()=>typeof(a==null?void 0:a.value)!="string"&&typeof(a==null?void 0:a.value)!="number"?"":String(a.value)),r=F([]),u=F(new Map);Xe(()=>{r.value=[],u.value=new Map;const i=ne(n);It(i,l.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:ne(t==null?void 0:t.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).forEach(o=>{let{index:v,matches:f}=o;const m=i[v];r.value.push(m),u.value.set(m.value,f)})});function d(i){return u.value.get(i.value)}return{filteredItems:r,filteredMatches:u,getMatches:d}}const Oe=C({...Ae(),...oe(),hideNoData:Boolean,hover:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},height:[String,Number],width:[String,Number],fixedHeader:Boolean,fixedFooter:Boolean,"onClick:row":Function,search:String},"v-data-table");A()({name:"VDataTable",props:{...Oe(),...Ve(),...he(),...de(),...ve(),...Ce(),...pt()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{groupBy:l}=Se(e),{sortBy:r,multiSort:u,mustSort:d}=me(e),{page:i,itemsPerPage:c}=Fe(e),{columns:o}=se(e,{groupBy:l,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:v}=Ne(e,o),f=k(()=>o.value.map(S=>"columns."+S.key)),m=I(e,"search"),{filteredItems:y}=Vt(e,v,m,{filterKeys:f});be({sortBy:r,multiSort:u,mustSort:d,page:i});const{sortByWithGroups:P,opened:p,extractRows:h}=ke({groupBy:l,sortBy:r}),{sortedItems:b}=mt(y,P,o),{flatItems:g}=Ie(b,l,p),B=k(()=>g.value.length),{startIndex:V,stopIndex:_}=$e({page:i,itemsPerPage:c,itemsLength:B}),{paginatedItems:N}=kt({items:g,startIndex:V,stopIndex:_,itemsPerPage:c}),x=k(()=>h(N.value));return fe(e,x),De(e),Ee({page:i,itemsPerPage:c,sortBy:r,groupBy:l,search:m}),W({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText")}}),K(()=>s(ie,{class:["v-data-table",{"v-data-table--show-select":e.showSelect}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height,hover:e.hover},{top:t.top,default:t.default??(()=>{var S,w,T,D;return s(U,null,[(S=t.colgroup)==null?void 0:S.call(t,{columns:o}),s("thead",null,[s(ye,{sticky:e.fixedHeader,multiSort:e.multiSort},t)]),(w=t.thead)==null?void 0:w.call(t),s("tbody",null,[t.body?t.body():s(Be,{items:N.value,"onClick:row":e["onClick:row"]},t)]),(T=t.tbody)==null?void 0:T.call(t),(D=t.tfoot)==null?void 0:D.call(t)])}),bottom:t.bottom??(()=>s(Me,null,{prepend:t["footer.prepend"]}))})),{}}});const Ft=A()({name:"VDataTableServer",props:{color:String,loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},itemsLength:{type:[Number,String],required:!0},...Oe(),...Ve(),...oe(),...Ae(),...de(),...ve(),...Ce(),...he()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0,"click:row":(e,n)=>!0},setup(e,n){let{emit:a,slots:t}=n;const{groupBy:l}=Se(e),{sortBy:r,multiSort:u,mustSort:d}=me(e),{page:i,itemsPerPage:c}=Fe(e),o=k(()=>parseInt(e.itemsLength,10));De(e);const{columns:v}=se(e,{groupBy:l,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:f}=Ne(e,v),{toggleSort:m}=be({sortBy:r,multiSort:u,mustSort:d,page:i}),{opened:y}=ke({groupBy:l,sortBy:r});$e({page:i,itemsPerPage:c,itemsLength:o});const{flatItems:P}=Ie(f,l,y);fe(e,f),Ee({page:i,itemsPerPage:c,sortBy:r,groupBy:l,search:I(e,"search")}),M("v-data-table",{toggleSort:m,sortBy:r}),W({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText"),loading:I(e,"loading"),loadingText:I(e,"loadingText")}}),K(()=>s(ie,{class:["v-data-table",{"v-data-table--loading":e.loading}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height,hover:e.hover},{top:t.top,default:t.default??(()=>{var p,h,b,g;return s(U,null,[(p=t.colgroup)==null?void 0:p.call(t,{columns:v}),s("thead",{class:"v-data-table__thead",role:"rowgroup"},[s(ye,{sticky:e.fixedHeader,loading:e.loading,color:e.color},t)]),(h=t.thead)==null?void 0:h.call(t),s("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[t.body?t.body():s(Be,{items:P.value,"onClick:row":e["onClick:row"]},t)]),(b=t.tbody)==null?void 0:b.call(t),(g=t.tfoot)==null?void 0:g.call(t)])}),bottom:t.bottom??(()=>s(Me,null,{prepend:t["footer.prepend"]}))}))}}),$t=k(()=>(e,n)=>{const a=(e.page-1)*e.itemsPerPage+1,t=Math.min(e.page*e.itemsPerPage,n);return`Showing ${a} to ${t} of ${n} entries`}),Mt=e=>{const n=e.toLowerCase();return n==="subscriber"?{color:"warning",icon:"tabler-circle-check"}:n==="author"?{color:"success",icon:"tabler-user"}:n==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:n==="editor"?{color:"info",icon:"tabler-edit"}:n==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}};function Tt(){const e=F([]);Ze(()=>e.value=[]);function n(a,t){e.value[t]=a}return{refs:e,updateRef:n}}const At=A()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:R,default:"$first"},prevIcon:{type:R,default:"$prev"},nextIcon:{type:R,default:"$next"},lastIcon:{type:R,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Je(),...qe(),...et(),...tt(),...at(),...nt(),...lt({tag:"nav"}),...rt(),...it({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,n){let{slots:a,emit:t}=n;const l=$(e,"modelValue"),{t:r,n:u}=J(),{isRtl:d}=ot(),{themeClasses:i}=ut(e),{width:c}=st(),o=F(-1);W(void 0,{scoped:!0});const{resizeRef:v}=dt(x=>{if(!x.length)return;const{target:S,contentRect:w}=x[0],T=S.querySelector(".v-pagination__list > *");if(!T)return;const D=w.width,z=T.offsetWidth+parseFloat(getComputedStyle(T).marginRight)*2;o.value=P(D,z)}),f=k(()=>parseInt(e.length,10)),m=k(()=>parseInt(e.start,10)),y=k(()=>e.totalVisible?parseInt(e.totalVisible,10):o.value>=0?o.value:P(c.value,58));function P(x,S){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((x-S*w)/S).toFixed(2)))}const p=k(()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(y.value<=1)return[l.value];if(f.value<=y.value)return O(f.value,m.value);const x=y.value%2===0,S=x?y.value/2:Math.floor(y.value/2),w=x?S:S+1,T=f.value-S;if(w-l.value>=0)return[...O(Math.max(1,y.value-1),m.value),e.ellipsis,f.value];if(l.value-T>=(x?1:0)){const D=y.value-1,z=f.value-D+m.value;return[m.value,e.ellipsis,...O(D,z)]}else{const D=Math.max(1,y.value-3),z=D===1?l.value:l.value-Math.ceil(D/2)+m.value;return[m.value,e.ellipsis,...O(D,z),e.ellipsis,f.value]}});function h(x,S,w){x.preventDefault(),l.value=S,w&&t(w,S)}const{refs:b,updateRef:g}=Tt();W({VPaginationBtn:{color:I(e,"color"),border:I(e,"border"),density:I(e,"density"),size:I(e,"size"),variant:I(e,"variant"),rounded:I(e,"rounded"),elevation:I(e,"elevation")}});const B=k(()=>p.value.map((x,S)=>{const w=T=>g(T,S);if(typeof x=="string")return{isActive:!1,key:`ellipsis-${S}`,page:x,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const T=x===l.value;return{isActive:T,key:x,page:u(x),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:T?e.activeColor:e.color,ariaCurrent:T,ariaLabel:r(T?e.currentPageAriaLabel:e.pageAriaLabel,x),onClick:D=>h(D,x)}}}})),V=k(()=>{const x=!!e.disabled||l.value<=m.value,S=!!e.disabled||l.value>=m.value+f.value-1;return{first:e.showFirstLastPage?{icon:d.value?e.lastIcon:e.firstIcon,onClick:w=>h(w,m.value,"first"),disabled:x,ariaLabel:r(e.firstAriaLabel),ariaDisabled:x}:void 0,prev:{icon:d.value?e.nextIcon:e.prevIcon,onClick:w=>h(w,l.value-1,"prev"),disabled:x,ariaLabel:r(e.previousAriaLabel),ariaDisabled:x},next:{icon:d.value?e.prevIcon:e.nextIcon,onClick:w=>h(w,l.value+1,"next"),disabled:S,ariaLabel:r(e.nextAriaLabel),ariaDisabled:S},last:e.showFirstLastPage?{icon:d.value?e.firstIcon:e.lastIcon,onClick:w=>h(w,m.value+f.value-1,"last"),disabled:S,ariaLabel:r(e.lastAriaLabel),ariaDisabled:S}:void 0}});function _(){var S;const x=l.value-m.value;(S=b.value[x])==null||S.$el.focus()}function N(x){x.key===le.left&&!e.disabled&&l.value>+e.start?(l.value=l.value-1,re(_)):x.key===le.right&&!e.disabled&&l.value<m.value+f.value-1&&(l.value=l.value+1,re(_))}return K(()=>s(e.tag,{ref:v,class:["v-pagination",i.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:N,"data-test":"v-pagination-root"},{default:()=>[s("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&s("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(V.value.first):s(L,E({_as:"VPaginationBtn"},V.value.first),null)]),s("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(V.value.prev):s(L,E({_as:"VPaginationBtn"},V.value.prev),null)]),B.value.map((x,S)=>s("li",{key:x.key,class:["v-pagination__item",{"v-pagination__item--is-active":x.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(x):s(L,E({_as:"VPaginationBtn"},x.props),{default:()=>[x.page]})])),s("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(V.value.next):s(L,E({_as:"VPaginationBtn"},V.value.next),null)]),e.showFirstLastPage&&s("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(V.value.last):s(L,E({_as:"VPaginationBtn"},V.value.last),null)])])]})),{}}});export{Ft as V,At as a,$t as p,Mt as r};
