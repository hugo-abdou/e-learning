import{aY as He,x as s,m as E,G,aZ as B,s as F,I as X,a_ as O,a$ as A,b0 as H,a3 as $,E as w,Z as I,b1 as J,L as M,ab as R,b2 as Ke,b3 as ze,Y as Ue,a9 as K,b4 as We,F as U,ag as je,ah as L,ar as ne,b5 as Qe,aL as le,b6 as q,aC as ee,b7 as Ye,b8 as Ze,aO as Xe,e as re,b9 as Je,a8 as j,aV as W,ba as Z,bb as qe,M as et,N as tt,bc as at,O as nt,Q as lt,bd as rt,R as ot,S as it,be as ut,U as st,W as dt,a0 as ct,bf as ft,bg as oe,a5 as ie}from"./main-8c6cae95.js";import{V as vt}from"./AppSelect.vue_vue_type_script_setup_true_lang-e0cde11a.js";import{c as te}from"./VCheckboxBtn-cc4c4e9f.js";import{m as gt,d as mt}from"./VList-04d013c6.js";import{V as ue}from"./VTable-18f30e34.js";const ae=He({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,n)=>{let{slots:a,attrs:t}=n;const l=e.tag??"td";return s(l,E({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:G(e.height),width:G(e.width),left:G(e.fixedOffset||null)}},t),{default:()=>{var r;return[(r=a.default)==null?void 0:r.call(a)]}})}),se=B({headers:{type:Array,default:()=>[]}},"v-data-table-header"),de=Symbol.for("vuetify:data-table-headers");function ce(e,n){const a=F([]),t=F([]);X(()=>e.headers,()=>{var y,P,p;const r=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],u=r.flatMap((h,b)=>h.map(g=>({column:g,row:b}))),d=r.length,o={title:"",sortable:!1},c={...o,width:48};if((y=n==null?void 0:n.groupBy)!=null&&y.value.length){const h=u.findIndex(b=>{let{column:g}=b;return g.key==="data-table-group"});h<0?u.unshift({column:{...o,key:"data-table-group",title:"Group",rowspan:d},row:0}):u.splice(h,1,{column:{...o,...u[h].column},row:u[h].row})}if((P=n==null?void 0:n.showSelect)!=null&&P.value){const h=u.findIndex(b=>{let{column:g}=b;return g.key==="data-table-select"});h<0?u.unshift({column:{...c,key:"data-table-select",rowspan:d},row:0}):u.splice(h,1,{column:{...c,...u[h].column},row:u[h].row})}if((p=n==null?void 0:n.showExpand)!=null&&p.value){const h=u.findIndex(b=>{let{column:g}=b;return g.key==="data-table-expand"});h<0?u.push({column:{...c,key:"data-table-expand",rowspan:d},row:0}):u.splice(h,1,{column:{...c,...u[h].column},row:u[h].row})}const i=O(d).map(()=>[]),v=O(d).fill(0);let f=0;u.forEach(h=>{let{column:b,row:g}=h;const T=b.key??`data-table-column-${f++}`;for(let V=g;V<=g+(b.rowspan??1)-1;V++)i[V].push({...b,key:T,fixedOffset:v[V],sortable:b.sortable??!!b.key}),v[V]+=b.width??0}),i.forEach(h=>{for(let b=h.length;b--;b>=0)if(h[b].fixed){h[b].lastFixed=!0;return}});const m=new Set;a.value=i.map(h=>{const b=[];for(const g of h)m.has(g.key)||(m.add(g.key),b.push(g));return b}),t.value=i.at(-1)??[]},{deep:!0,immediate:!0});const l={headers:a,columns:t};return A(de,l),l}function Q(){const e=H(de);if(!e)throw new Error("Missing headers!");return e}const fe=B({showSelect:Boolean,modelValue:{type:Array,default:()=>[]}},"v-data-table-select"),ve=Symbol.for("vuetify:data-table-selection");function ge(e,n){const a=$(e,"modelValue",e.modelValue,v=>new Set(v),v=>[...v.values()]);function t(v){return v.every(f=>a.value.has(f.value))}function l(v){return v.some(f=>a.value.has(f.value))}function r(v,f){const m=new Set(a.value);for(const y of v)f?m.add(y.value):m.delete(y.value);a.value=m}function u(v){r([v],!t([v]))}function d(v){r(n.value,v)}const o=w(()=>a.value.size>0),c=w(()=>t(n.value)),i={toggleSelect:u,select:r,selectAll:d,isSelected:t,isSomeSelected:l,someSelected:o,allSelected:c};return A(ve,i),i}function Y(){const e=H(ve);if(!e)throw new Error("Missing selection!");return e}const me=B({sortBy:{type:Array,default:()=>[]},multiSort:Boolean,mustSort:Boolean},"v-data-table-sort"),be=Symbol.for("vuetify:data-table-sort");function ye(e){const n=$(e,"sortBy"),a=I(e,"mustSort"),t=I(e,"multiSort");return{sortBy:n,mustSort:a,multiSort:t}}function he(e){const{sortBy:n,mustSort:a,multiSort:t,page:l}=e,u={sortBy:n,toggleSort:d=>{let o=n.value.map(i=>({...i}))??[];const c=o.find(i=>i.key===d);c?c.order==="desc"?a.value?c.order="asc":o=o.filter(i=>i.key!==d):c.order="desc":t.value?o=[...o,{key:d,order:"asc"}]:o=[{key:d,order:"asc"}],n.value=o,l&&(l.value=1)}};return A(be,u),u}function bt(){const e=H(be);if(!e)throw new Error("Missing sort!");return e}function yt(e,n,a){const t=w(()=>a.value.reduce((r,u)=>(u.sort&&(r[u.key]=u.sort),r),{}));return{sortedItems:w(()=>n.value.length?ht(e.value,n.value,"en",t.value):e.value)}}function ht(e,n,a,t){const l=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((r,u)=>{for(let d=0;d<n.length;d++){const o=n[d].key,c=n[d].order;if(c===!1)continue;let i=J(r.raw,o),v=J(u.raw,o);if(c==="desc"&&([i,v]=[v,i]),t!=null&&t[o]){const f=t[o](i,v);if(!f)continue;return f}if(!(i==null||v==null)){if(i instanceof Date&&v instanceof Date)return i.getTime()-v.getTime();if([i,v]=[i,v].map(f=>(f||"").toString().toLocaleLowerCase()),i!==v)return!isNaN(i)&&!isNaN(v)?Number(i)-Number(v):l.compare(i,v)}}return 0})}const xe=M()({name:"VDataTableHeaders",props:{color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:R,default:"$sortAsc"},sortDescIcon:{type:R,default:"$sortDesc"},...Ke()},setup(e,n){let{slots:a,emit:t}=n;const{toggleSort:l,sortBy:r}=bt(),{someSelected:u,allSelected:d,selectAll:o}=Y(),{columns:c,headers:i}=Q(),{loaderClasses:v}=ze(e),f=(b,g)=>!e.sticky&&!b.fixed?null:{position:"sticky",zIndex:b.fixed?4:e.sticky?3:void 0,left:b.fixed?G(b.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${g})`:void 0};function m(b){const g=r.value.find(T=>T.key===b);return g?g.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:y,backgroundColorStyles:P}=Ue(e,"color"),p=w(()=>({headers:i.value,columns:c.value,toggleSort:l,sortBy:r.value,someSelected:u.value,allSelected:d.value,selectAll:o,getSortIcon:m,getFixedStyles:f})),h=b=>{let{column:g,x:T,y:V}=b;const _=!!r.value.find(x=>x.key===g.key),N=g.key==="data-table-select"||g.key==="data-table-expand";return s(ae,{tag:"th",align:g.align,class:["v-data-table__th",{"v-data-table__th--sortable":g.sortable,"v-data-table__th--sorted":_},v.value],style:{width:G(g.width),minWidth:G(g.width),...f(g,V)},colspan:g.colspan,rowspan:g.rowspan,onClick:g.sortable?()=>l(g.key):void 0,lastFixed:g.lastFixed,noPadding:N},{default:()=>{var k;const x=`column.${g.key}`,S={column:g,selectAll:o};return a[x]?a[x](S):g.key==="data-table-select"?((k=a["column.data-table-select"])==null?void 0:k.call(a,S))??s(te,{modelValue:d.value,indeterminate:u.value&&!d.value,"onUpdate:modelValue":o},null):s("div",{class:"v-data-table-header__content"},[s("span",null,[g.title]),g.sortable&&s(je,{key:"icon",class:"v-data-table-header__sort-icon",icon:m(g.key)},null),e.multiSort&&_&&s("div",{key:"badge",class:["v-data-table-header__sort-badge",...y.value],style:P.value},[r.value.findIndex(C=>C.key===g.key)+1])])}})};K(()=>s(U,null,[a.headers?a.headers(p.value):i.value.map((b,g)=>s("tr",null,[b.map((T,V)=>s(h,{column:T,x:V,y:g},null))])),e.loading&&s("tr",{class:"v-data-table__progress"},[s("th",{colspan:c.value.length},[s(We,{name:"v-data-table-headers",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),Se=B({groupBy:{type:Array,default:()=>[]}},"data-table-group"),we=Symbol.for("vuetify:data-table-group");function ke(e){return{groupBy:$(e,"groupBy")}}function Pe(e){const{groupBy:n,sortBy:a}=e,t=F(new Set),l=w(()=>n.value.map(c=>({...c,order:c.order??!1})).concat(a.value));function r(c){return t.value.has(c.id)}function u(c){const i=new Set(t.value);r(c)?i.delete(c.id):i.add(c.id),t.value=i}function d(c){function i(v){const f=[];for(const m of v.items)m.type==="item"?f.push(m):f.push(...i(m));return f}return i({type:"group-header",items:c,id:"dummy",key:"dummy",value:"dummy",depth:0})}const o={sortByWithGroups:l,toggleGroup:u,opened:t,groupBy:n,extractRows:d,isGroupOpen:r};return A(we,o),o}function pe(){const e=H(we);if(!e)throw new Error("Missing group!");return e}function xt(e,n){if(!e.length)return[];const a=new Map;for(const t of e){const l=J(t.raw,n);a.has(l)||a.set(l,[]),a.get(l).push(t)}return a}function Ie(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!n.length)return[];const l=xt(e,n[0]),r=[],u=n.slice(1);return l.forEach((d,o)=>{const c=n[0],i=`${t}_${c}_${o}`;r.push({depth:a,id:i,key:c,value:o,items:u.length?Ie(d,u,a+1,i):d,type:"group-header"})}),r}function Ve(e,n){const a=[];for(const t of e)t.type==="group-header"?(t.value!=null&&a.push(t),(n.has(t.id)||t.value==null)&&a.push(...Ve(t.items,n))):a.push(t);return a}function Ce(e,n,a){return{flatItems:w(()=>{if(!n.value.length)return e.value;const l=Ie(e.value,n.value.map(r=>r.key));return Ve(l,a.value)})}}const St=M()({name:"VDataTableGroupHeaderRow",props:{item:{type:Object,required:!0}},setup(e,n){let{slots:a}=n;const{isGroupOpen:t,toggleGroup:l,extractRows:r}=pe(),{isSelected:u,isSomeSelected:d,select:o}=Y(),{columns:c}=Q(),i=w(()=>r([e.item]));return()=>s("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(v=>{var f,m;if(v.key==="data-table-group"){const y=t(e.item)?"$expand":"$next",P=()=>l(e.item);return((f=a["data-table-group"])==null?void 0:f.call(a,{item:e.item,count:i.value.length,props:{icon:y,onClick:P}}))??s(ae,{class:"v-data-table-group-header-row__column"},{default:()=>[s(L,{size:"small",variant:"text",icon:y,onClick:P},null),s("span",null,[e.item.value]),s("span",null,[ne("("),i.value.length,ne(")")])]})}if(v.key==="data-table-select"){const y=u(i.value),P=d(i.value)&&!y,p=h=>o(i.value,h);return((m=a["data-table-select"])==null?void 0:m.call(a,{props:{modelValue:y,indeterminate:P,"onUpdate:modelValue":p}}))??s("td",null,[s(te,{modelValue:y,indeterminate:P,"onUpdate:modelValue":p},null)])}return s("td",null,null)})])}}),De=B({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"v-data-table-expand"),Le=Symbol.for("vuetify:datatable:expanded");function Te(e){const n=I(e,"expandOnClick"),a=$(e,"expanded",e.expanded,d=>new Set(d),d=>[...d.values()]);function t(d,o){const c=new Set(a.value);o?c.add(d.value):c.delete(d.value),a.value=c}function l(d){return a.value.has(d.value)}function r(d){t(d,!l(d))}const u={expand:t,expanded:a,expandOnClick:n,isExpanded:l,toggleExpand:r};return A(Le,u),u}function Be(){const e=H(Le);if(!e)throw new Error("foo");return e}const wt=Qe({name:"VDataTableRow",props:{index:Number,item:Object,onClick:Function},setup(e,n){let{slots:a}=n;const{isSelected:t,toggleSelect:l}=Y(),{isExpanded:r,toggleExpand:u}=Be(),{columns:d}=Q();K(()=>s("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&d.value.map((o,c)=>s(ae,{align:o.align,fixed:o.fixed,fixedOffset:o.fixedOffset,lastFixed:o.lastFixed,noPadding:o.key==="data-table-select"||o.key==="data-table-expand",width:o.width},{default:()=>{var m,y;const i=e.item,v=`item.${o.key}`,f={index:e.index,item:e.item,columns:d.value,isSelected:t,toggleSelect:l,isExpanded:r,toggleExpand:u};return a[v]?a[v](f):o.key==="data-table-select"?((m=a["item.data-table-select"])==null?void 0:m.call(a,f))??s(te,{modelValue:t([i]),onClick:le(()=>l(i),["stop"])},null):o.key==="data-table-expand"?((y=a["item.data-table-expand"])==null?void 0:y.call(a,f))??s(L,{icon:r(i)?"$collapse":"$expand",size:"small",variant:"text",onClick:le(()=>u(i),["stop"])},null):q(i.columns,o.key)}}))]))}}),_e=M()({name:"VDataTableRows",props:{loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},setup(e,n){let{emit:a,slots:t}=n;const{columns:l}=Q(),{expandOnClick:r,toggleExpand:u,isExpanded:d}=Be(),{isSelected:o,toggleSelect:c}=Y(),{toggleGroup:i,isGroupOpen:v}=pe(),{t:f}=ee();return K(()=>{var m;return e.loading&&t.loading?s("tr",{class:"v-data-table-rows-loading",key:"loading"},[s("td",{colspan:l.value.length},[t.loading()])]):!e.loading&&!e.items.length&&!e.hideNoData?s("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[s("td",{colspan:l.value.length},[((m=t["no-data"])==null?void 0:m.call(t))??f(e.noDataText)])]):s(U,null,[e.items.map((y,P)=>{var h;if(y.type==="group-header")return t["group-header"]?t["group-header"]({index:P,item:y,columns:l.value,isExpanded:d,toggleExpand:u,isSelected:o,toggleSelect:c,toggleGroup:i,isGroupOpen:v}):s(St,{key:`group-header_${y.id}`,item:y},t);const p={index:P,item:y,columns:l.value,isExpanded:d,toggleExpand:u,isSelected:o,toggleSelect:c};return s(U,null,[t.item?t.item(p):s(wt,{key:`item_${y.value}`,onClick:r.value||e["onClick:row"]?b=>{var g;r.value&&u(y),(g=e["onClick:row"])==null||g.call(e,b,{item:y})}:void 0,index:P,item:y},t),d(y)&&((h=t["expanded-row"])==null?void 0:h.call(t,p))])})])}),{}}});const Fe=B({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"v-data-table-paginate"),$e=Symbol.for("vuetify:data-table-pagination");function Ae(e){const n=$(e,"page",void 0,t=>+(t??1)),a=$(e,"itemsPerPage",void 0,t=>+(t??10));return{page:n,itemsPerPage:a}}function Me(e){const{page:n,itemsPerPage:a,itemsLength:t}=e,l=w(()=>a.value===-1?0:a.value*(n.value-1)),r=w(()=>a.value===-1?t.value:Math.min(t.value,l.value+a.value)),u=w(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));function d(c){a.value=c,n.value=1}const o={page:n,itemsPerPage:a,itemsLength:t,startIndex:l,stopIndex:r,pageCount:u,setItemsPerPage:d};return A($e,o),o}function kt(){const e=H($e);if(!e)throw new Error("Missing pagination!");return e}function Pt(e){const{items:n,startIndex:a,stopIndex:t,itemsPerPage:l}=e;return{paginatedItems:w(()=>l.value<=0?n.value:n.value.slice(a.value,t.value))}}const Ne=M()({name:"VDataTableFooter",props:{prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},setup(e,n){let{slots:a}=n;const{t}=ee(),{page:l,pageCount:r,startIndex:u,stopIndex:d,itemsLength:o,itemsPerPage:c,setItemsPerPage:i}=kt(),v=w(()=>e.itemsPerPageOptions.map(f=>({...f,title:t(f.title)})));return()=>{var f;return s("div",{class:"v-data-table-footer"},[(f=a.prepend)==null?void 0:f.call(a),s("div",{class:"v-data-table-footer__items-per-page"},[s("span",null,[t(e.itemsPerPageText)]),s(vt,{items:v.value,modelValue:c.value,"onUpdate:modelValue":m=>i(Number(m)),density:"compact",variant:"outlined","hide-details":!0},null)]),s("div",{class:"v-data-table-footer__info"},[s("div",null,[t(e.pageText,o.value?u.value+1:0,d.value,o.value)])]),s("div",{class:"v-data-table-footer__pagination"},[s(L,{icon:e.firstIcon,variant:"plain",onClick:()=>l.value=1,disabled:l.value===1,"aria-label":t(e.firstPageLabel)},null),s(L,{icon:e.prevIcon,variant:"plain",onClick:()=>l.value=Math.max(1,l.value-1),disabled:l.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&s("span",{key:"page",class:"v-data-table-footer__page"},[l.value]),s(L,{icon:e.nextIcon,variant:"plain",onClick:()=>l.value=Math.min(r.value,l.value+1),disabled:l.value===r.value,"aria-label":t(e.nextPageLabel)},null),s(L,{icon:e.lastIcon,variant:"plain",onClick:()=>l.value=r.value,disabled:l.value===r.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),Ee=B({...gt({itemValue:"id"})},"v-data-table-item");function pt(e,n,a){const t=n.split(".");for(;t.length>1;){const l=t.shift();e[l]==null&&(e[l]={}),typeof e[l]=="object"&&(e=e[l])}e[t[0]]=a}function Oe(e,n){const{items:a}=mt(e);return{items:w(()=>a.value.map(l=>({...l,type:"item",columns:n.value.reduce((r,u)=>(pt(r,u.key,q(l.raw,u.value??u.key)),r),{})})))}}function Re(e){let{page:n,itemsPerPage:a,sortBy:t,groupBy:l,search:r}=e;const u=Ye("VDataTable"),d=w(()=>({page:n.value,itemsPerPage:a.value,sortBy:t.value,groupBy:l.value,search:r.value}));X(()=>r==null?void 0:r.value,()=>{n.value=1});let o=null;X(d,()=>{Ze(o,d.value)||(u.emit("update:options",d.value),o=d.value)},{deep:!0,immediate:!0})}const It=(e,n,a)=>e==null||n==null?-1:e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()),Vt=B({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Ct(e,n,a){var d;const t=[],l=(a==null?void 0:a.default)??It,r=a!=null&&a.filterKeys?Je(a.filterKeys):!1,u=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let o=0;o<e.length;o++){const c=e[o],i={},v={};let f=-1;if(n&&!(a!=null&&a.noFilter)){if(typeof c=="object"){const P=r||Object.keys(c);for(const p of P){const h=q(c,p,c),b=(d=a==null?void 0:a.customKeyFilter)==null?void 0:d[p];if(f=b?b(h,n,c):l(h,n,c),f!==-1&&f!==!1)b?i[p]=f:v[p]=f;else if((a==null?void 0:a.filterMode)==="every")continue e}}else f=l(c,n,c),f!==-1&&f!==!1&&(v.title=f);const m=Object.keys(v).length,y=Object.keys(i).length;if(!m&&!y||(a==null?void 0:a.filterMode)==="union"&&y!==u&&!m||(a==null?void 0:a.filterMode)==="intersection"&&(y!==u||!m))continue}t.push({index:o,matches:{...v,...i}})}return t}function Dt(e,n,a,t){const l=w(()=>typeof(a==null?void 0:a.value)!="string"&&typeof(a==null?void 0:a.value)!="number"?"":String(a.value)),r=F([]),u=F(new Map);Xe(()=>{r.value=[],u.value=new Map;const o=re(n);Ct(o,l.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:re(t==null?void 0:t.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).forEach(i=>{let{index:v,matches:f}=i;const m=o[v];r.value.push(m),u.value.set(m.value,f)})});function d(o){return u.value.get(o.value)}return{filteredItems:r,filteredMatches:u,getMatches:d}}const Ge=B({...Ee(),...se(),hideNoData:Boolean,hover:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},height:[String,Number],width:[String,Number],fixedHeader:Boolean,fixedFooter:Boolean,"onClick:row":Function,search:String},"v-data-table");M()({name:"VDataTable",props:{...Ge(),...De(),...Se(),...fe(),...me(),...Fe(),...Vt()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{groupBy:l}=ke(e),{sortBy:r,multiSort:u,mustSort:d}=ye(e),{page:o,itemsPerPage:c}=Ae(e),{columns:i}=ce(e,{groupBy:l,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:v}=Oe(e,i),f=w(()=>i.value.map(S=>"columns."+S.key)),m=I(e,"search"),{filteredItems:y}=Dt(e,v,m,{filterKeys:f});he({sortBy:r,multiSort:u,mustSort:d,page:o});const{sortByWithGroups:P,opened:p,extractRows:h}=Pe({groupBy:l,sortBy:r}),{sortedItems:b}=yt(y,P,i),{flatItems:g}=Ce(b,l,p),T=w(()=>g.value.length),{startIndex:V,stopIndex:_}=Me({page:o,itemsPerPage:c,itemsLength:T}),{paginatedItems:N}=Pt({items:g,startIndex:V,stopIndex:_,itemsPerPage:c}),x=w(()=>h(N.value));return ge(e,x),Te(e),Re({page:o,itemsPerPage:c,sortBy:r,groupBy:l,search:m}),j({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText")}}),K(()=>s(ue,{class:["v-data-table",{"v-data-table--show-select":e.showSelect}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height,hover:e.hover},{top:t.top,default:t.default??(()=>{var S,k,C,D;return s(U,null,[(S=t.colgroup)==null?void 0:S.call(t,{columns:i}),s("thead",null,[s(xe,{sticky:e.fixedHeader,multiSort:e.multiSort},t)]),(k=t.thead)==null?void 0:k.call(t),s("tbody",null,[t.body?t.body():s(_e,{items:N.value,"onClick:row":e["onClick:row"]},t)]),(C=t.tbody)==null?void 0:C.call(t),(D=t.tfoot)==null?void 0:D.call(t)])}),bottom:t.bottom??(()=>s(Ne,null,{prepend:t["footer.prepend"]}))})),{}}});const At=M()({name:"VDataTableServer",props:{color:String,loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},itemsLength:{type:[Number,String],required:!0},...Ge(),...De(),...se(),...Ee(),...fe(),...me(),...Fe(),...Se()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0,"click:row":(e,n)=>!0},setup(e,n){let{emit:a,slots:t}=n;const{groupBy:l}=ke(e),{sortBy:r,multiSort:u,mustSort:d}=ye(e),{page:o,itemsPerPage:c}=Ae(e),i=w(()=>parseInt(e.itemsLength,10));Te(e);const{columns:v}=ce(e,{groupBy:l,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:f}=Oe(e,v),{toggleSort:m}=he({sortBy:r,multiSort:u,mustSort:d,page:o}),{opened:y}=Pe({groupBy:l,sortBy:r});Me({page:o,itemsPerPage:c,itemsLength:i});const{flatItems:P}=Ce(f,l,y);ge(e,f),Re({page:o,itemsPerPage:c,sortBy:r,groupBy:l,search:I(e,"search")}),A("v-data-table",{toggleSort:m,sortBy:r}),j({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText"),loading:I(e,"loading"),loadingText:I(e,"loadingText")}}),K(()=>s(ue,{class:["v-data-table",{"v-data-table--loading":e.loading}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height,hover:e.hover},{top:t.top,default:t.default??(()=>{var p,h,b,g;return s(U,null,[(p=t.colgroup)==null?void 0:p.call(t,{columns:v}),s("thead",{class:"v-data-table__thead",role:"rowgroup"},[s(xe,{sticky:e.fixedHeader,loading:e.loading,color:e.color},t)]),(h=t.thead)==null?void 0:h.call(t),s("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[t.body?t.body():s(_e,{items:P.value,"onClick:row":e["onClick:row"]},t)]),(b=t.tbody)==null?void 0:b.call(t),(g=t.tfoot)==null?void 0:g.call(t)])}),bottom:t.bottom??(()=>s(Ne,null,{prepend:t["footer.prepend"]}))}))}}),Mt=w(()=>(e,n)=>{const a=(e.page-1)*e.itemsPerPage+1,t=Math.min(e.page*e.itemsPerPage,n);return`Showing ${a} to ${t} of ${n} entries`}),Nt=e=>{const n=e.toLowerCase();return n==="subscriber"?{color:"warning",icon:"tabler-circle-check"}:n==="author"?{color:"success",icon:"tabler-user"}:n==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:n==="editor"?{color:"info",icon:"tabler-edit"}:n==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},Et=e=>{const n=e.toLowerCase();return n===W.Draft?{color:"secondary",icon:"basil:lock-time-outline"}:n===W.Scheduled?{color:"info",icon:"healthicons:i-schedule-school-date-time"}:n===W.Published?{color:"success",icon:"material-symbols:published-with-changes-rounded"}:n===W.Error?{color:"error",icon:"codicon:error"}:{color:"default",icon:"clarity:unknown-status-line"}},Ot=e=>{const n=e.toLowerCase();return n===Z.Beginner?{color:"secondary",icon:"fluent:learning-app-20-regular"}:n===Z.Intermediate?{color:"primary",icon:"fluent-mdl2:learning-tools"}:n===Z.Advanced?{color:"success",icon:"carbon:machine-learning-model"}:{color:"default",icon:"clarity:unknown-status-line"}};function Lt(){const e=F([]);qe(()=>e.value=[]);function n(a,t){e.value[t]=a}return{refs:e,updateRef:n}}const Rt=M()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:R,default:"$first"},prevIcon:{type:R,default:"$prev"},nextIcon:{type:R,default:"$next"},lastIcon:{type:R,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...et(),...tt(),...at(),...nt(),...lt(),...rt(),...ot({tag:"nav"}),...it(),...ut({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,n){let{slots:a,emit:t}=n;const l=$(e,"modelValue"),{t:r,n:u}=ee(),{isRtl:d}=st(),{themeClasses:o}=dt(e),{width:c}=ct(),i=F(-1);j(void 0,{scoped:!0});const{resizeRef:v}=ft(x=>{if(!x.length)return;const{target:S,contentRect:k}=x[0],C=S.querySelector(".v-pagination__list > *");if(!C)return;const D=k.width,z=C.offsetWidth+parseFloat(getComputedStyle(C).marginRight)*2;i.value=P(D,z)}),f=w(()=>parseInt(e.length,10)),m=w(()=>parseInt(e.start,10)),y=w(()=>e.totalVisible?parseInt(e.totalVisible,10):i.value>=0?i.value:P(c.value,58));function P(x,S){const k=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((x-S*k)/S).toFixed(2)))}const p=w(()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(y.value<=1)return[l.value];if(f.value<=y.value)return O(f.value,m.value);const x=y.value%2===0,S=x?y.value/2:Math.floor(y.value/2),k=x?S:S+1,C=f.value-S;if(k-l.value>=0)return[...O(Math.max(1,y.value-1),m.value),e.ellipsis,f.value];if(l.value-C>=(x?1:0)){const D=y.value-1,z=f.value-D+m.value;return[m.value,e.ellipsis,...O(D,z)]}else{const D=Math.max(1,y.value-3),z=D===1?l.value:l.value-Math.ceil(D/2)+m.value;return[m.value,e.ellipsis,...O(D,z),e.ellipsis,f.value]}});function h(x,S,k){x.preventDefault(),l.value=S,k&&t(k,S)}const{refs:b,updateRef:g}=Lt();j({VPaginationBtn:{color:I(e,"color"),border:I(e,"border"),density:I(e,"density"),size:I(e,"size"),variant:I(e,"variant"),rounded:I(e,"rounded"),elevation:I(e,"elevation")}});const T=w(()=>p.value.map((x,S)=>{const k=C=>g(C,S);if(typeof x=="string")return{isActive:!1,key:`ellipsis-${S}`,page:x,props:{ref:k,ellipsis:!0,icon:!0,disabled:!0}};{const C=x===l.value;return{isActive:C,key:x,page:u(x),props:{ref:k,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:C?e.activeColor:e.color,ariaCurrent:C,ariaLabel:r(C?e.currentPageAriaLabel:e.pageAriaLabel,x),onClick:D=>h(D,x)}}}})),V=w(()=>{const x=!!e.disabled||l.value<=m.value,S=!!e.disabled||l.value>=m.value+f.value-1;return{first:e.showFirstLastPage?{icon:d.value?e.lastIcon:e.firstIcon,onClick:k=>h(k,m.value,"first"),disabled:x,ariaLabel:r(e.firstAriaLabel),ariaDisabled:x}:void 0,prev:{icon:d.value?e.nextIcon:e.prevIcon,onClick:k=>h(k,l.value-1,"prev"),disabled:x,ariaLabel:r(e.previousAriaLabel),ariaDisabled:x},next:{icon:d.value?e.prevIcon:e.nextIcon,onClick:k=>h(k,l.value+1,"next"),disabled:S,ariaLabel:r(e.nextAriaLabel),ariaDisabled:S},last:e.showFirstLastPage?{icon:d.value?e.firstIcon:e.lastIcon,onClick:k=>h(k,m.value+f.value-1,"last"),disabled:S,ariaLabel:r(e.lastAriaLabel),ariaDisabled:S}:void 0}});function _(){var S;const x=l.value-m.value;(S=b.value[x])==null||S.$el.focus()}function N(x){x.key===oe.left&&!e.disabled&&l.value>+e.start?(l.value=l.value-1,ie(_)):x.key===oe.right&&!e.disabled&&l.value<m.value+f.value-1&&(l.value=l.value+1,ie(_))}return K(()=>s(e.tag,{ref:v,class:["v-pagination",o.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:N,"data-test":"v-pagination-root"},{default:()=>[s("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&s("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(V.value.first):s(L,E({_as:"VPaginationBtn"},V.value.first),null)]),s("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(V.value.prev):s(L,E({_as:"VPaginationBtn"},V.value.prev),null)]),T.value.map((x,S)=>s("li",{key:x.key,class:["v-pagination__item",{"v-pagination__item--is-active":x.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(x):s(L,E({_as:"VPaginationBtn"},x.props),{default:()=>[x.page]})])),s("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(V.value.next):s(L,E({_as:"VPaginationBtn"},V.value.next),null)]),e.showFirstLastPage&&s("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(V.value.last):s(L,E({_as:"VPaginationBtn"},V.value.last),null)])])]})),{}}});export{At as V,Rt as a,Et as b,Ot as c,Mt as p,Nt as r};
