import{a3 as T,az as G,a7 as P,bo as ge,N as _,R as j,a8 as fe,aq as O,bv as ve,b as f,ak as N,eM as rt,t as L,a9 as R,r as Q,ap as Pe,aD as Ie,eu as W,$ as k,eN as ee,eO as Y,bs as pe,ez as ut,cf as ot,ay as st,ab as q,cg as ct,F as H,a1 as it,x as we,bc as ke,y as dt,er as U,ei as ft,w as Te,q as Z,aR as De}from"./main-e240daf5.js";import{V as gt}from"./VSelect-a62939d2.js";import{V as me}from"./VCheckboxBtn-131bf67b.js";import{m as vt,V as te}from"./VTable-6ef119f2.js";const Ve=T({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Fe=Symbol.for("vuetify:data-table-pagination");function Be(e){const l=G(e,"page",void 0,t=>+(t??1)),a=G(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function Ce(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=P(()=>a.value===-1?0:a.value*(l.value-1)),c=P(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),i=P(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));ge(()=>{l.value>i.value&&(l.value=i.value)});function s(g){a.value=g,l.value=1}function r(){l.value=fe(l.value+1,1,i.value)}function o(){l.value=fe(l.value-1,1,i.value)}function u(g){l.value=fe(g,1,i.value)}const m={page:l,itemsPerPage:a,startIndex:n,stopIndex:c,pageCount:i,itemsLength:t,nextPage:r,prevPage:o,setPage:u,setItemsPerPage:s};return _(Fe,m),m}function mt(){const e=j(Fe);if(!e)throw new Error("Missing pagination!");return e}function yt(e){const{items:l,startIndex:a,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:P(()=>n.value<=0?l.value:l.value.slice(a.value,t.value))}}const ye=T({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),ae=O()({name:"VDataTableFooter",props:ye(),setup(e,l){let{slots:a}=l;const{t}=ve(),{page:n,pageCount:c,startIndex:i,stopIndex:s,itemsLength:r,itemsPerPage:o,setItemsPerPage:u}=mt(),m=P(()=>e.itemsPerPageOptions.map(g=>typeof g=="number"?{value:g,title:g===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(g)}:{...g,title:t(g.title)}));return()=>{var g;return f("div",{class:"v-data-table-footer"},[(g=a.prepend)==null?void 0:g.call(a),f("div",{class:"v-data-table-footer__items-per-page"},[f("span",null,[t(e.itemsPerPageText)]),f(gt,{items:m.value,modelValue:o.value,"onUpdate:modelValue":y=>u(Number(y)),density:"compact",variant:"outlined","hide-details":!0},null)]),f("div",{class:"v-data-table-footer__info"},[f("div",null,[t(e.pageText,r.value?i.value+1:0,s.value,r.value)])]),f("div",{class:"v-data-table-footer__pagination"},[f(N,{icon:e.firstIcon,variant:"plain",onClick:()=>n.value=1,disabled:n.value===1,"aria-label":t(e.firstPageLabel)},null),f(N,{icon:e.prevIcon,variant:"plain",onClick:()=>n.value=Math.max(1,n.value-1),disabled:n.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&f("span",{key:"page",class:"v-data-table-footer__page"},[n.value]),f(N,{icon:e.nextIcon,variant:"plain",onClick:()=>n.value=Math.min(c.value,n.value+1),disabled:n.value===c.value,"aria-label":t(e.nextPageLabel)},null),f(N,{icon:e.lastIcon,variant:"plain",onClick:()=>n.value=c.value,disabled:n.value===c.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),be=rt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a,attrs:t}=l;const n=e.tag??"td";return f(n,L({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:R(e.height),width:R(e.width),left:R(e.fixedOffset||null)}},t),{default:()=>{var c;return[(c=a.default)==null?void 0:c.call(a)]}})}),bt=T({headers:{type:Array,default:()=>[]}},"DataTable-header"),_e=Symbol.for("vuetify:data-table-headers");function Oe(e,l){const a=Q([]),t=Q([]);ge(()=>{var y,S,h;const c=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],i=c.flatMap((d,v)=>d.map(x=>({column:x,row:v}))),s=c.length,r={title:"",sortable:!1},o={...r,width:48};if((y=l==null?void 0:l.groupBy)!=null&&y.value.length){const d=i.findIndex(v=>{let{column:x}=v;return x.key==="data-table-group"});d<0?i.unshift({column:{...r,key:"data-table-group",title:"Group",rowspan:s},row:0}):i.splice(d,1,{column:{...r,...i[d].column},row:i[d].row})}if((S=l==null?void 0:l.showSelect)!=null&&S.value){const d=i.findIndex(v=>{let{column:x}=v;return x.key==="data-table-select"});d<0?i.unshift({column:{...o,key:"data-table-select",rowspan:s},row:0}):i.splice(d,1,{column:{...o,...i[d].column},row:i[d].row})}if((h=l==null?void 0:l.showExpand)!=null&&h.value){const d=i.findIndex(v=>{let{column:x}=v;return x.key==="data-table-expand"});d<0?i.push({column:{...o,key:"data-table-expand",rowspan:s},row:0}):i.splice(d,1,{column:{...o,...i[d].column},row:i[d].row})}const u=Pe(s).map(()=>[]),m=Pe(s).fill(0);i.forEach(d=>{let{column:v,row:x}=d;const w=v.key??(typeof v.value=="string"?v.value:null),p=v.value??v.key??null;for(let b=x;b<=x+(v.rowspan??1)-1;b++)u[b].push({...v,key:w,value:p,fixedOffset:m[b],sortable:v.sortable??w!=null}),m[b]+=Number(v.width??0)}),u.forEach(d=>{for(let v=d.length;v--;v>=0)if(d[v].fixed){d[v].lastFixed=!0;return}});const g=new Set;a.value=u.map(d=>{const v=[];for(const x of d)g.has(x.key)||(g.add(x.key),v.push(x));return v}),t.value=u.at(-1)??[]});const n={headers:a,columns:t};return _(_e,n),n}function re(){const e=j(_e);if(!e)throw new Error("Missing headers!");return e}const ht={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Ae={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Ae.select({items:a,value:l,selected:t})}},Ee={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return Ee.select({items:a,value:l,selected:t})}},St=T({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ie}},"DataTable-select"),$e=Symbol.for("vuetify:data-table-selection");function Me(e,l){let{allItems:a,currentPage:t}=l;const n=G(e,"modelValue",e.modelValue,d=>new Set(W(d).map(v=>{var x;return((x=a.value.find(w=>e.valueComparator(v,w.value)))==null?void 0:x.value)??v})),d=>[...d.values()]),c=P(()=>a.value.filter(d=>d.selectable)),i=P(()=>t.value.filter(d=>d.selectable)),s=P(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ht;case"all":return Ee;case"page":default:return Ae}});function r(d){return W(d).every(v=>n.value.has(v.value))}function o(d){return W(d).some(v=>n.value.has(v.value))}function u(d,v){const x=s.value.select({items:d,value:v,selected:new Set(n.value)});n.value=x}function m(d){u([d],!r([d]))}function g(d){const v=s.value.selectAll({value:d,allItems:c.value,currentPage:i.value,selected:new Set(n.value)});n.value=v}const y=P(()=>n.value.size>0),S=P(()=>{const d=s.value.allSelected({allItems:c.value,currentPage:i.value});return!!d.length&&r(d)}),h={toggleSelect:m,select:u,selectAll:g,isSelected:r,isSomeSelected:o,someSelected:y,allSelected:S,showSelectAll:s.value.showSelectAll};return _($e,h),h}function ue(){const e=j($e);if(!e)throw new Error("Missing selection!");return e}const xt=T({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Ne=Symbol.for("vuetify:data-table-sort");function Le(e){const l=G(e,"sortBy"),a=k(e,"mustSort"),t=k(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function Re(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,c=r=>{if(r.key==null)return;let o=l.value.map(m=>({...m}))??[];const u=o.find(m=>m.key===r.key);u?u.order==="desc"?a.value?u.order="asc":o=o.filter(m=>m.key!==r.key):u.order="desc":t.value?o=[...o,{key:r.key,order:"asc"}]:o=[{key:r.key,order:"asc"}],l.value=o,n&&(n.value=1)};function i(r){return!!l.value.find(o=>o.key===r.key)}const s={sortBy:l,toggleSort:c,isSorted:i};return _(Ne,s),s}function Pt(){const e=j(Ne);if(!e)throw new Error("Missing sort!");return e}function pt(e,l,a){const t=ve();return{sortedItems:P(()=>a.value.length?wt(l.value,a.value,t.current.value,e.customKeySort):l.value)}}function wt(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((c,i)=>{for(let s=0;s<l.length;s++){const r=l[s].key,o=l[s].order??"asc";if(o===!1)continue;let u=ee(c.raw,r),m=ee(i.raw,r);if(o==="desc"&&([u,m]=[m,u]),t!=null&&t[r]){const g=t[r](u,m);if(!g)continue;return g}if(u instanceof Date&&m instanceof Date)return u.getTime()-m.getTime();if([u,m]=[u,m].map(g=>g!=null?g.toString().toLocaleLowerCase():g),u!==m)return Y(u)&&Y(m)?0:Y(u)?-1:Y(m)?1:!isNaN(u)&&!isNaN(m)?Number(u)-Number(m):n.compare(u,m)}return 0})}const Ge=T({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:pe,default:"$sortAsc"},sortDescIcon:{type:pe,default:"$sortDesc"},...ut()},"VDataTableHeaders"),le=O()({name:"VDataTableHeaders",props:Ge(),setup(e,l){let{slots:a,emit:t}=l;const{toggleSort:n,sortBy:c,isSorted:i}=Pt(),{someSelected:s,allSelected:r,selectAll:o,showSelectAll:u}=ue(),{columns:m,headers:g}=re(),{loaderClasses:y}=ot(e),S=(p,b)=>{if(!(!e.sticky&&!p.fixed))return{position:"sticky",zIndex:p.fixed?4:e.sticky?3:void 0,left:p.fixed?R(p.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${b})`:void 0}};function h(p){const b=c.value.find(V=>V.key===p.key);return b?b.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:d,backgroundColorStyles:v}=st(e,"color"),x=P(()=>({headers:g.value,columns:m.value,toggleSort:n,isSorted:i,sortBy:c.value,someSelected:s.value,allSelected:r.value,selectAll:o,getSortIcon:h,getFixedStyles:S})),w=p=>{let{column:b,x:V,y:F}=p;const K=b.key==="data-table-select"||b.key==="data-table-expand";return f(be,{tag:"th",align:b.align,class:["v-data-table__th",{"v-data-table__th--sortable":b.sortable,"v-data-table__th--sorted":i(b)},y.value],style:{width:R(b.width),minWidth:R(b.width),...S(b,F)},colspan:b.colspan,rowspan:b.rowspan,onClick:b.sortable?()=>n(b):void 0,lastFixed:b.lastFixed,noPadding:K},{default:()=>{var $;const A=`column.${b.key}`,E={column:b,selectAll:o,isSorted:i,toggleSort:n,sortBy:c.value,someSelected:s.value,allSelected:r.value,getSortIcon:h};return a[A]?a[A](E):b.key==="data-table-select"?(($=a["column.data-table-select"])==null?void 0:$.call(a,E))??(u&&f(me,{modelValue:r.value,indeterminate:s.value&&!r.value,"onUpdate:modelValue":o},null)):f("div",{class:"v-data-table-header__content"},[f("span",null,[b.title]),b.sortable&&f(it,{key:"icon",class:"v-data-table-header__sort-icon",icon:h(b)},null),e.multiSort&&i(b)&&f("div",{key:"badge",class:["v-data-table-header__sort-badge",...d.value],style:v.value},[c.value.findIndex(B=>B.key===b.key)+1])])}})};q(()=>f(H,null,[a.headers?a.headers(x.value):g.value.map((p,b)=>f("tr",null,[p.map((V,F)=>f(w,{column:V,x:F,y:b},null))])),e.loading&&f("tr",{class:"v-data-table-progress"},[f("th",{colspan:m.value.length},[f(ct,{name:"v-data-table-progress",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),kt=T({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),He=Symbol.for("vuetify:data-table-group");function je(e){return{groupBy:G(e,"groupBy")}}function Ke(e){const{groupBy:l,sortBy:a}=e,t=Q(new Set),n=P(()=>l.value.map(o=>({...o,order:o.order??!1})).concat(a.value));function c(o){return t.value.has(o.id)}function i(o){const u=new Set(t.value);c(o)?u.delete(o.id):u.add(o.id),t.value=u}function s(o){function u(m){const g=[];for(const y of m.items)"type"in y&&y.type==="group"?g.push(...u(y)):g.push(y);return g}return u({type:"group",items:o,id:"dummy",key:"dummy",value:"dummy",depth:0})}const r={sortByWithGroups:n,toggleGroup:i,opened:t,groupBy:l,extractRows:s,isGroupOpen:c};return _(He,r),r}function ze(){const e=j(He);if(!e)throw new Error("Missing group!");return e}function Tt(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=ee(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Ue(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Tt(e,l[0]),c=[],i=l.slice(1);return n.forEach((s,r)=>{const o=l[0],u=`${t}_${o}_${r}`;c.push({depth:a,id:u,key:o,value:r,items:i.length?Ue(s,i,a+1,u):s,type:"group"})}),c}function We(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...We(t.items,l))):a.push(t);return a}function Qe(e,l,a){return{flatItems:P(()=>{if(!l.value.length)return e.value;const n=Ue(e.value,l.value.map(c=>c.key));return We(n,a.value)})}}const It=T({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Dt=O()({name:"VDataTableGroupHeaderRow",props:It(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:c}=ze(),{isSelected:i,isSomeSelected:s,select:r}=ue(),{columns:o}=re(),u=P(()=>c([e.item]));return()=>f("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[o.value.map(m=>{var g,y;if(m.key==="data-table-group"){const S=t(e.item)?"$expand":"$next",h=()=>n(e.item);return((g=a["data-table-group"])==null?void 0:g.call(a,{item:e.item,count:u.value.length,props:{icon:S,onClick:h}}))??f(be,{class:"v-data-table-group-header-row__column"},{default:()=>[f(N,{size:"small",variant:"text",icon:S,onClick:h},null),f("span",null,[e.item.value]),f("span",null,[we("("),u.value.length,we(")")])]})}if(m.key==="data-table-select"){const S=i(u.value),h=s(u.value)&&!S,d=v=>r(u.value,v);return((y=a["data-table-select"])==null?void 0:y.call(a,{props:{modelValue:S,indeterminate:h,"onUpdate:modelValue":d}}))??f("td",null,[f(me,{modelValue:S,indeterminate:h,"onUpdate:modelValue":d},null)])}return f("td",null,null)})])}}),Vt=T({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),qe=Symbol.for("vuetify:datatable:expanded");function Je(e){const l=k(e,"expandOnClick"),a=G(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,r){const o=new Set(a.value);r?o.add(s.value):o.delete(s.value),a.value=o}function n(s){return a.value.has(s.value)}function c(s){t(s,!n(s))}const i={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:c};return _(qe,i),i}function Xe(){const e=j(qe);if(!e)throw new Error("foo");return e}const Ft=T({index:Number,item:Object,onClick:Function},"VDataTableRow"),Bt=O()({name:"VDataTableRow",props:Ft(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=ue(),{isExpanded:c,toggleExpand:i}=Xe(),{columns:s}=re();q(()=>f("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&s.value.map((r,o)=>f(be,{align:r.align,fixed:r.fixed,fixedOffset:r.fixedOffset,lastFixed:r.lastFixed,noPadding:r.key==="data-table-select"||r.key==="data-table-expand",width:r.width},{default:()=>{var y,S;const u=e.item,m=`item.${r.key}`,g={index:e.index,item:u.raw,internalItem:u,value:ee(u.columns,r.key),column:r,isSelected:t,toggleSelect:n,isExpanded:c,toggleExpand:i};return a[m]?a[m](g):r.key==="data-table-select"?((y=a["item.data-table-select"])==null?void 0:y.call(a,g))??f(me,{disabled:!u.selectable,modelValue:t([u]),onClick:ke(()=>n(u),["stop"])},null):r.key==="data-table-expand"?((S=a["item.data-table-expand"])==null?void 0:S.call(a,g))??f(N,{icon:c(u)?"$collapse":"$expand",size:"small",variant:"text",onClick:ke(()=>i(u),["stop"])},null):dt(g.value)}}))]))}}),Ye=T({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},"VDataTableRows"),ne=O()({name:"VDataTableRows",props:Ye(),setup(e,l){let{emit:a,slots:t}=l;const{columns:n}=re(),{expandOnClick:c,toggleExpand:i,isExpanded:s}=Xe(),{isSelected:r,toggleSelect:o}=ue(),{toggleGroup:u,isGroupOpen:m}=ze(),{t:g}=ve();return q(()=>{var y,S;return e.loading?f("tr",{class:"v-data-table-rows-loading",key:"loading"},[f("td",{colspan:n.value.length},[((y=t.loading)==null?void 0:y.call(t))??g(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?f("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[f("td",{colspan:n.value.length},[((S=t["no-data"])==null?void 0:S.call(t))??g(e.noDataText)])]):f(H,null,[e.items.map((h,d)=>{var w;if(h.type==="group")return t["group-header"]?t["group-header"]({index:d,item:h,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:r,toggleSelect:o,toggleGroup:u,isGroupOpen:m}):f(Dt,{key:`group-header_${h.id}`,item:h},t);const v={index:d,item:h.raw,internalItem:h,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:r,toggleSelect:o},x={...v,props:{key:`item_${h.key??h.index}`,onClick:c.value||e["onClick:row"]?p=>{var b;c.value&&i(h),(b=e["onClick:row"])==null||b.call(e,p,{item:h.raw,internalItem:h})}:void 0,index:d,item:h}};return f(H,null,[t.item?t.item(x):f(Bt,x.props,t),s(h)&&((w=t["expanded-row"])==null?void 0:w.call(t,v))])})])}),{}}}),Ct=T({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataTable-items");function _t(e,l,a,t){const n=e.returnObject?l:U(l,e.itemValue),c=U(l,e.itemSelectable,!0),i=t.reduce((s,r)=>(r.key!=null&&(s[r.key]=U(l,r.value)),s),{});return{type:"item",key:e.returnObject?U(l,e.itemValue):n,index:a,value:n,selectable:c,columns:i,raw:l}}function Ot(e,l,a){return l.map((t,n)=>_t(e,t,n,a))}function Ze(e,l){return{items:P(()=>Ot(e,e.items,l.value))}}function et(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:c}=e;const i=ft("VDataTable"),s=P(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:c.value}));Te(()=>c==null?void 0:c.value,()=>{l.value=1});let r=null;Te(s,()=>{Ie(r,s.value)||(i.emit("update:options",s.value),r=s.value)},{deep:!0,immediate:!0})}const At=(e,l,a)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),Et=T({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function $t(e,l,a){var s;const t=[],n=(a==null?void 0:a.default)??At,c=a!=null&&a.filterKeys?W(a.filterKeys):!1,i=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let r=0;r<e.length;r++){const[o,u=o]=W(e[r]),m={},g={};let y=-1;if(l&&!(a!=null&&a.noFilter)){if(typeof o=="object"){const d=c||Object.keys(u);for(const v of d){const x=U(u,v,u),w=(s=a==null?void 0:a.customKeyFilter)==null?void 0:s[v];if(y=w?w(x,l,o):n(x,l,o),y!==-1&&y!==!1)w?m[v]=y:g[v]=y;else if((a==null?void 0:a.filterMode)==="every")continue e}}else y=n(o,l,o),y!==-1&&y!==!1&&(g.title=y);const S=Object.keys(g).length,h=Object.keys(m).length;if(!S&&!h||(a==null?void 0:a.filterMode)==="union"&&h!==i&&!S||(a==null?void 0:a.filterMode)==="intersection"&&(h!==i||!S))continue}t.push({index:r,matches:{...g,...m}})}return t}function Mt(e,l,a,t){const n=Q([]),c=Q(new Map),i=P(()=>t!=null&&t.transform?Z(l).map(r=>[r,t.transform(r)]):Z(l));ge(()=>{const r=typeof a=="function"?a():Z(a),o=typeof r!="string"&&typeof r!="number"?"":String(r),u=$t(i.value,o,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),m=Z(l),g=[],y=new Map;u.forEach(S=>{let{index:h,matches:d}=S;const v=m[h];g.push(v),y.set(v.value,d)}),n.value=g,c.value=y});function s(r){return c.value.get(r.value)}return{filteredItems:n,filteredMatches:c,getMatches:s}}const tt=T({...Ye(),width:[String,Number],search:String,...Vt(),...kt(),...bt(),...Ct(),...St(),...xt(),...Ge(),...vt()},"DataTable"),Nt=T({...Ve(),...tt(),...Et(),...ye()},"VDataTable");O()({name:"VDataTable",props:Nt(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,l){let{emit:a,slots:t}=l;const{groupBy:n}=je(e),{sortBy:c,multiSort:i,mustSort:s}=Le(e),{page:r,itemsPerPage:o}=Be(e),{columns:u,headers:m}=Oe(e,{groupBy:n,showSelect:k(e,"showSelect"),showExpand:k(e,"showExpand")}),{items:g}=Ze(e,u),y=k(e,"search"),{filteredItems:S}=Mt(e,g,y,{transform:M=>M.columns}),{toggleSort:h}=Re({sortBy:c,multiSort:i,mustSort:s,page:r}),{sortByWithGroups:d,opened:v,extractRows:x,isGroupOpen:w,toggleGroup:p}=Ke({groupBy:n,sortBy:c}),{sortedItems:b}=pt(e,S,d),{flatItems:V}=Qe(b,n,v),F=P(()=>V.value.length),{startIndex:K,stopIndex:A,pageCount:E,setItemsPerPage:$}=Ce({page:r,itemsPerPage:o,itemsLength:F}),{paginatedItems:B}=yt({items:V,startIndex:K,stopIndex:A,itemsPerPage:o}),J=P(()=>x(B.value)),{isSelected:oe,select:D,selectAll:se,toggleSelect:ce,someSelected:ie,allSelected:de}=Me(e,{allItems:g,currentPage:J}),{isExpanded:C,toggleExpand:X}=Je(e);et({page:r,itemsPerPage:o,sortBy:c,groupBy:n,search:y}),De({VDataTableRows:{hideNoData:k(e,"hideNoData"),noDataText:k(e,"noDataText"),loading:k(e,"loading"),loadingText:k(e,"loadingText")}});const I=P(()=>({page:r.value,itemsPerPage:o.value,sortBy:c.value,pageCount:E.value,toggleSort:h,setItemsPerPage:$,someSelected:ie.value,allSelected:de.value,isSelected:oe,select:D,selectAll:se,toggleSelect:ce,isExpanded:C,toggleExpand:X,isGroupOpen:w,toggleGroup:p,items:J.value,groupedItems:B.value,columns:u.value,headers:m.value}));return q(()=>{const[M]=ae.filterProps(e),[at]=le.filterProps(e),[lt]=ne.filterProps(e),[nt]=te.filterProps(e);return f(te,L({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},nt),{top:()=>{var z;return(z=t.top)==null?void 0:z.call(t,I.value)},default:()=>{var z,he,Se,xe;return t.default?t.default(I.value):f(H,null,[(z=t.colgroup)==null?void 0:z.call(t,I.value),f("thead",null,[f(le,at,t)]),(he=t.thead)==null?void 0:he.call(t,I.value),f("tbody",null,[t.body?t.body(I.value):f(ne,L(lt,{items:B.value}),t)]),(Se=t.tbody)==null?void 0:Se.call(t,I.value),(xe=t.tfoot)==null?void 0:xe.call(t,I.value)])},bottom:()=>t.bottom?t.bottom(I.value):f(H,null,[f(ae,M,{prepend:t["footer.prepend"]})])})}),{}}});const Lt=T({itemsLength:{type:[Number,String],required:!0},...Ve(),...tt(),...ye()},"VDataTableServer"),Kt=O()({name:"VDataTableServer",props:Lt(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,l){let{emit:a,slots:t}=l;const{groupBy:n}=je(e),{sortBy:c,multiSort:i,mustSort:s}=Le(e),{page:r,itemsPerPage:o}=Be(e),u=P(()=>parseInt(e.itemsLength,10)),{columns:m,headers:g}=Oe(e,{groupBy:n,showSelect:k(e,"showSelect"),showExpand:k(e,"showExpand")}),{items:y}=Ze(e,m),{toggleSort:S}=Re({sortBy:c,multiSort:i,mustSort:s,page:r}),{opened:h,isGroupOpen:d,toggleGroup:v,extractRows:x}=Ke({groupBy:n,sortBy:c}),{pageCount:w,setItemsPerPage:p}=Ce({page:r,itemsPerPage:o,itemsLength:u}),{flatItems:b}=Qe(y,n,h),{isSelected:V,select:F,selectAll:K,toggleSelect:A,someSelected:E,allSelected:$}=Me(e,{allItems:y,currentPage:y}),{isExpanded:B,toggleExpand:J}=Je(e),oe=P(()=>x(y.value));et({page:r,itemsPerPage:o,sortBy:c,groupBy:n,search:k(e,"search")}),_("v-data-table",{toggleSort:S,sortBy:c}),De({VDataTableRows:{hideNoData:k(e,"hideNoData"),noDataText:k(e,"noDataText"),loading:k(e,"loading"),loadingText:k(e,"loadingText")}});const D=P(()=>({page:r.value,itemsPerPage:o.value,sortBy:c.value,pageCount:w.value,toggleSort:S,setItemsPerPage:p,someSelected:E.value,allSelected:$.value,isSelected:V,select:F,selectAll:K,toggleSelect:A,isExpanded:B,toggleExpand:J,isGroupOpen:d,toggleGroup:v,items:oe.value,groupedItems:b.value,columns:m.value,headers:g.value}));q(()=>{const[se]=ae.filterProps(e),[ce]=le.filterProps(e),[ie]=ne.filterProps(e),[de]=te.filterProps(e);return f(te,L({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},de),{top:()=>{var C;return(C=t.top)==null?void 0:C.call(t,D.value)},default:()=>{var C,X,I,M;return t.default?t.default(D.value):f(H,null,[(C=t.colgroup)==null?void 0:C.call(t,D.value),f("thead",{class:"v-data-table__thead",role:"rowgroup"},[f(le,L(ce,{sticky:e.fixedHeader}),t)]),(X=t.thead)==null?void 0:X.call(t,D.value),f("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[t.body?t.body(D.value):f(ne,L(ie,{items:b.value}),t)]),(I=t.tbody)==null?void 0:I.call(t,D.value),(M=t.tfoot)==null?void 0:M.call(t,D.value)])},bottom:()=>t.bottom?t.bottom(D.value):f(ae,se,{prepend:t["footer.prepend"]})})})}});export{Kt as V};
