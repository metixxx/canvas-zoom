import{S as P,e as Q,s as R,N as I,O as U,P as G,K as k,U as z,p as j,M as C,Q as A,R as H,n as D,A as B,a1 as V,B as W,am as X,k as S,o as T,z as h,v,x as q,E as Y,ae as Z,h as F,j as K,q as p,r as y,u as x,y as $,t as M,F as N}from"./index-666c05ef.js";/* empty css                                                  */import{B as ee}from"./Button-41f5a565.js";import{I as te}from"./Info-47e6a9e9.js";function ae(n){let e,t,a,l,u,o,c;return{c(){e=I("label"),t=I("input"),a=U(),l=I("span"),u=G(n[2]),t.disabled=n[1],k(t,"type","checkbox"),k(t,"name","test"),k(t,"data-testid","checkbox"),k(t,"class","svelte-1ojmf70"),k(l,"class","ml-2 svelte-1ojmf70"),k(e,"class","svelte-1ojmf70"),z(e,"disabled",n[1])},m(_,d){j(_,e,d),C(e,t),t.checked=n[0],C(e,a),C(e,l),C(l,u),o||(c=[A(t,"change",n[5]),A(t,"input",n[6])],o=!0)},p(_,[d]){d&2&&(t.disabled=_[1]),d&1&&(t.checked=_[0]),d&4&&H(u,_[2]),d&2&&z(e,"disabled",_[1])},i:D,o:D,d(_){_&&B(e),o=!1,V(c)}}}function ne(n,e,t){let{value:a}=e,{value_is_output:l=!1}=e,{disabled:u=!1}=e,{label:o}=e;const c=W();function _(){c("change",a),l||c("input")}X(()=>{t(4,l=!1)});function d(){a=this.checked,t(0,a)}const f=m=>{t(0,a=m.currentTarget.checked),c("select",{index:0,value:o,selected:m.currentTarget.checked})};return n.$$set=m=>{"value"in m&&t(0,a=m.value),"value_is_output"in m&&t(4,l=m.value_is_output),"disabled"in m&&t(1,u=m.disabled),"label"in m&&t(2,o=m.label)},n.$$.update=()=>{n.$$.dirty&1&&_()},[a,u,o,c,l,d,f]}class le extends P{constructor(e){super(),Q(this,e,ne,ae,R,{value:0,value_is_output:4,disabled:1,label:2})}}function O(n){let e,t;return e=new te({props:{$$slots:{default:[se]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},m(a,l){T(e,a,l),t=!0},p(a,l){const u={};l&131136&&(u.$$scope={dirty:l,ctx:a}),e.$set(u)},i(a){t||(h(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){q(e,a)}}}function se(n){let e;return{c(){e=G(n[6])},m(t,a){j(t,e,a)},p(t,a){a&64&&H(e,t[6])},d(t){t&&B(e)}}}function ie(n){let e,t,a,l,u,o,c;const _=[n[11]];let d={};for(let s=0;s<_.length;s+=1)d=Y(d,_[s]);e=new Z({props:d});let f=n[6]&&O(n);function m(s){n[12](s)}function w(s){n[13](s)}let g={label:n[5],disabled:n[7]==="static"};return n[0]!==void 0&&(g.value=n[0]),n[1]!==void 0&&(g.value_is_output=n[1]),l=new le({props:g}),F.push(()=>K(l,"value",m)),F.push(()=>K(l,"value_is_output",w)),l.$on("change",n[14]),l.$on("input",n[15]),l.$on("select",n[16]),{c(){S(e.$$.fragment),t=U(),f&&f.c(),a=U(),S(l.$$.fragment)},m(s,b){T(e,s,b),j(s,t,b),f&&f.m(s,b),j(s,a,b),T(l,s,b),c=!0},p(s,b){const E=b&2048?p(_,[y(s[11])]):{};e.$set(E),s[6]?f?(f.p(s,b),b&64&&h(f,1)):(f=O(s),f.c(),h(f,1),f.m(a.parentNode,a)):f&&(x(),v(f,1,1,()=>{f=null}),$());const r={};b&32&&(r.label=s[5]),b&128&&(r.disabled=s[7]==="static"),!u&&b&1&&(u=!0,r.value=s[0],M(()=>u=!1)),!o&&b&2&&(o=!0,r.value_is_output=s[1],M(()=>o=!1)),l.$set(r)},i(s){c||(h(e.$$.fragment,s),h(f),h(l.$$.fragment,s),c=!0)},o(s){v(e.$$.fragment,s),v(f),v(l.$$.fragment,s),c=!1},d(s){s&&(B(t),B(a)),q(e,s),f&&f.d(s),q(l,s)}}}function ue(n){let e,t;return e=new ee({props:{visible:n[4],elem_id:n[2],elem_classes:n[3],container:n[8],scale:n[9],min_width:n[10],$$slots:{default:[ie]},$$scope:{ctx:n}}}),{c(){S(e.$$.fragment)},m(a,l){T(e,a,l),t=!0},p(a,[l]){const u={};l&16&&(u.visible=a[4]),l&4&&(u.elem_id=a[2]),l&8&&(u.elem_classes=a[3]),l&256&&(u.container=a[8]),l&512&&(u.scale=a[9]),l&1024&&(u.min_width=a[10]),l&133347&&(u.$$scope={dirty:l,ctx:a}),e.$set(u)},i(a){t||(h(e.$$.fragment,a),t=!0)},o(a){v(e.$$.fragment,a),t=!1},d(a){q(e,a)}}}function fe(n,e,t){let{elem_id:a=""}=e,{elem_classes:l=[]}=e,{visible:u=!0}=e,{value:o=!1}=e,{value_is_output:c=!1}=e,{label:_="Checkbox"}=e,{info:d=void 0}=e,{mode:f}=e,{container:m=!0}=e,{scale:w=null}=e,{min_width:g=void 0}=e,{loading_status:s}=e;function b(i){o=i,t(0,o)}function E(i){c=i,t(1,c)}function r(i){N.call(this,n,i)}function J(i){N.call(this,n,i)}function L(i){N.call(this,n,i)}return n.$$set=i=>{"elem_id"in i&&t(2,a=i.elem_id),"elem_classes"in i&&t(3,l=i.elem_classes),"visible"in i&&t(4,u=i.visible),"value"in i&&t(0,o=i.value),"value_is_output"in i&&t(1,c=i.value_is_output),"label"in i&&t(5,_=i.label),"info"in i&&t(6,d=i.info),"mode"in i&&t(7,f=i.mode),"container"in i&&t(8,m=i.container),"scale"in i&&t(9,w=i.scale),"min_width"in i&&t(10,g=i.min_width),"loading_status"in i&&t(11,s=i.loading_status)},[o,c,a,l,u,_,d,f,m,w,g,s,b,E,r,J,L]}class ce extends P{constructor(e){super(),Q(this,e,fe,ue,R,{elem_id:2,elem_classes:3,visible:4,value:0,value_is_output:1,label:5,info:6,mode:7,container:8,scale:9,min_width:10,loading_status:11})}}const be=ce,re=["static","dynamic"],he=n=>({type:{payload:"boolean"},description:{payload:"checked status"},example_data:n.value});export{be as Component,he as document,re as modes};
//# sourceMappingURL=index-18dc5e74.js.map