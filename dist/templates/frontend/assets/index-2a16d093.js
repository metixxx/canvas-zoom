import{S as P,e as Q,s as R,G as J,k as B,O as G,N as q,K as k,o as O,p as w,z as S,v as N,A as C,x as T,V as Y,B as Z,am as y,P as V,R as H,U as j,M as v,Q as U,a1 as p,E as x,ae as $,h as z,j as D,q as ee,r as le,t as F,F as E}from"./index-666c05ef.js";/* empty css                                                  */import{B as te}from"./Button-41f5a565.js";import{B as ne}from"./BlockTitle-7916eabd.js";import"./Info-47e6a9e9.js";function K(l,e,n){const t=l.slice();return t[13]=e[n],t}function ie(l){let e;return{c(){e=V(l[3])},m(n,t){w(n,e,t)},p(n,t){t&8&&H(e,n[3])},d(n){n&&C(e)}}}function M(l){let e,n,t,f,c,u=l[13]+"",i,h,b,d;function m(){return l[10](l[13])}function s(..._){return l[11](l[13],..._)}return{c(){e=q("label"),n=q("input"),f=G(),c=q("span"),i=V(u),h=G(),n.disabled=l[2],n.checked=t=l[0].includes(l[13]),k(n,"type","checkbox"),k(n,"name","test"),k(n,"class","svelte-1qxcj04"),k(c,"class","ml-2 svelte-1qxcj04"),k(e,"class","svelte-1qxcj04"),j(e,"disabled",l[2]),j(e,"selected",l[0].includes(l[13]))},m(_,r){w(_,e,r),v(e,n),v(e,f),v(e,c),v(c,i),v(e,h),b||(d=[U(n,"change",m),U(n,"input",s)],b=!0)},p(_,r){l=_,r&4&&(n.disabled=l[2]),r&3&&t!==(t=l[0].includes(l[13]))&&(n.checked=t),r&2&&u!==(u=l[13]+"")&&H(i,u),r&4&&j(e,"disabled",l[2]),r&3&&j(e,"selected",l[0].includes(l[13]))},d(_){_&&C(e),b=!1,p(d)}}}function se(l){let e,n,t,f;e=new ne({props:{show_label:l[5],info:l[4],$$slots:{default:[ie]},$$scope:{ctx:l}}});let c=J(l[1]),u=[];for(let i=0;i<c.length;i+=1)u[i]=M(K(l,c,i));return{c(){B(e.$$.fragment),n=G(),t=q("div");for(let i=0;i<u.length;i+=1)u[i].c();k(t,"class","wrap svelte-1qxcj04"),k(t,"data-testid","checkbox-group")},m(i,h){O(e,i,h),w(i,n,h),w(i,t,h);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(t,null);f=!0},p(i,[h]){const b={};if(h&32&&(b.show_label=i[5]),h&16&&(b.info=i[4]),h&65544&&(b.$$scope={dirty:h,ctx:i}),e.$set(b),h&199){c=J(i[1]);let d;for(d=0;d<c.length;d+=1){const m=K(i,c,d);u[d]?u[d].p(m,h):(u[d]=M(m),u[d].c(),u[d].m(t,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=c.length}},i(i){f||(S(e.$$.fragment,i),f=!0)},o(i){N(e.$$.fragment,i),f=!1},d(i){i&&(C(n),C(t)),T(e,i),Y(u,i)}}}function ae(l,e,n){let{value:t=[]}=e,f=t.slice(),{value_is_output:c=!1}=e,{choices:u}=e,{disabled:i=!1}=e,{label:h}=e,{info:b=void 0}=e,{show_label:d}=e;const m=Z(),s=o=>{t.includes(o)?t.splice(t.indexOf(o),1):t.push(o),n(0,t)};function _(){m("change",t),c||m("input")}y(()=>{n(8,c=!1)});const r=o=>s(o),g=(o,A)=>m("select",{index:u.indexOf(o),value:o,selected:A.currentTarget.checked});return l.$$set=o=>{"value"in o&&n(0,t=o.value),"value_is_output"in o&&n(8,c=o.value_is_output),"choices"in o&&n(1,u=o.choices),"disabled"in o&&n(2,i=o.disabled),"label"in o&&n(3,h=o.label),"info"in o&&n(4,b=o.info),"show_label"in o&&n(5,d=o.show_label)},l.$$.update=()=>{l.$$.dirty&513&&JSON.stringify(t)!==JSON.stringify(f)&&(n(9,f=t.slice()),_())},[t,u,i,h,b,d,m,s,c,f,r,g]}class ue extends P{constructor(e){super(),Q(this,e,ae,se,R,{value:0,value_is_output:8,choices:1,disabled:2,label:3,info:4,show_label:5})}}function ce(l){let e,n,t,f,c,u;const i=[l[13]];let h={};for(let s=0;s<i.length;s+=1)h=x(h,i[s]);e=new $({props:h});function b(s){l[14](s)}function d(s){l[15](s)}let m={choices:l[5],label:l[10],info:l[11],show_label:l[12],disabled:l[9]==="static"};return l[0]!==void 0&&(m.value=l[0]),l[1]!==void 0&&(m.value_is_output=l[1]),t=new ue({props:m}),z.push(()=>D(t,"value",b)),z.push(()=>D(t,"value_is_output",d)),t.$on("select",l[16]),t.$on("change",l[17]),t.$on("input",l[18]),{c(){B(e.$$.fragment),n=G(),B(t.$$.fragment)},m(s,_){O(e,s,_),w(s,n,_),O(t,s,_),u=!0},p(s,_){const r=_&8192?ee(i,[le(s[13])]):{};e.$set(r);const g={};_&32&&(g.choices=s[5]),_&1024&&(g.label=s[10]),_&2048&&(g.info=s[11]),_&4096&&(g.show_label=s[12]),_&512&&(g.disabled=s[9]==="static"),!f&&_&1&&(f=!0,g.value=s[0],F(()=>f=!1)),!c&&_&2&&(c=!0,g.value_is_output=s[1],F(()=>c=!1)),t.$set(g)},i(s){u||(S(e.$$.fragment,s),S(t.$$.fragment,s),u=!0)},o(s){N(e.$$.fragment,s),N(t.$$.fragment,s),u=!1},d(s){s&&C(n),T(e,s),T(t,s)}}}function fe(l){let e,n;return e=new te({props:{visible:l[4],elem_id:l[2],elem_classes:l[3],type:"fieldset",container:l[6],scale:l[7],min_width:l[8],$$slots:{default:[ce]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment)},m(t,f){O(e,t,f),n=!0},p(t,[f]){const c={};f&16&&(c.visible=t[4]),f&4&&(c.elem_id=t[2]),f&8&&(c.elem_classes=t[3]),f&64&&(c.container=t[6]),f&128&&(c.scale=t[7]),f&256&&(c.min_width=t[8]),f&540195&&(c.$$scope={dirty:f,ctx:t}),e.$set(c)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function oe(l,e,n){let{elem_id:t=""}=e,{elem_classes:f=[]}=e,{visible:c=!0}=e,{value:u=[]}=e,{value_is_output:i=!1}=e,{choices:h}=e,{container:b=!0}=e,{scale:d=null}=e,{min_width:m=void 0}=e,{mode:s}=e,{label:_="Checkbox Group"}=e,{info:r=void 0}=e,{show_label:g}=e,{loading_status:o}=e;function A(a){u=a,n(0,u)}function I(a){i=a,n(1,i)}function L(a){E.call(this,l,a)}function W(a){E.call(this,l,a)}function X(a){E.call(this,l,a)}return l.$$set=a=>{"elem_id"in a&&n(2,t=a.elem_id),"elem_classes"in a&&n(3,f=a.elem_classes),"visible"in a&&n(4,c=a.visible),"value"in a&&n(0,u=a.value),"value_is_output"in a&&n(1,i=a.value_is_output),"choices"in a&&n(5,h=a.choices),"container"in a&&n(6,b=a.container),"scale"in a&&n(7,d=a.scale),"min_width"in a&&n(8,m=a.min_width),"mode"in a&&n(9,s=a.mode),"label"in a&&n(10,_=a.label),"info"in a&&n(11,r=a.info),"show_label"in a&&n(12,g=a.show_label),"loading_status"in a&&n(13,o=a.loading_status)},[u,i,t,f,c,h,b,d,m,s,_,r,g,o,A,I,L,W,X]}class _e extends P{constructor(e){super(),Q(this,e,oe,fe,R,{elem_id:2,elem_classes:3,visible:4,value:0,value_is_output:1,choices:5,container:6,scale:7,min_width:8,mode:9,label:10,info:11,show_label:12,loading_status:13})}}const ge=_e,ke=["static","dynamic"],ve=l=>({type:{payload:"Array<string>"},description:{payload:"list of selected choices"},example_data:l.choices.length?[l.choices[0]]:[]});export{ge as Component,ve as document,ke as modes};
//# sourceMappingURL=index-2a16d093.js.map