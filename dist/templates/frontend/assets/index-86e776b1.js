import{S as U,e as V,s as W,F as k,G as v,w,u as C,H as S,a0 as Z,a1 as z,Z as A,ad as D,R as I,U as X,o as E,h as J,V as K,W as L,X as j,k as M}from"./index-7a57bd3a.js";import{C as N}from"./Checkboxgroup-7b404270.js";import{B as O}from"./Button-778c588b.js";import"./BlockTitle-26eaf739.js";import"./Info-b61421b5.js";function P(l){let n,a,t,s,u,h;const c=[l[13]];let f={};for(let i=0;i<c.length;i+=1)f=A(f,c[i]);n=new D({props:f});function g(i){l[14](i)}function r(i){l[15](i)}let m={choices:l[5],label:l[9],info:l[10],show_label:l[11]};return l[0]!==void 0&&(m.value=l[0]),l[1]!==void 0&&(m.value_is_output=l[1]),t=new N({props:m}),I.push(()=>X(t,"value",g)),I.push(()=>X(t,"value_is_output",r)),t.$on("select",l[16]),t.$on("change",l[17]),t.$on("input",l[18]),{c(){k(n.$$.fragment),a=E(),k(t.$$.fragment)},m(i,_){v(n,i,_),J(i,a,_),v(t,i,_),h=!0},p(i,_){const d=_&8192?K(c,[L(i[13])]):{};n.$set(d);const o={};_&32&&(o.choices=i[5]),_&512&&(o.label=i[9]),_&1024&&(o.info=i[10]),_&2048&&(o.show_label=i[11]),!s&&_&1&&(s=!0,o.value=i[0],j(()=>s=!1)),!u&&_&2&&(u=!0,o.value_is_output=i[1],j(()=>u=!1)),t.$set(o)},i(i){h||(w(n.$$.fragment,i),w(t.$$.fragment,i),h=!0)},o(i){C(n.$$.fragment,i),C(t.$$.fragment,i),h=!1},d(i){i&&M(a),S(n,i),S(t,i)}}}function Q(l){let n,a;return n=new O({props:{visible:l[4],elem_id:l[2],elem_classes:l[3],type:"fieldset",container:l[6],scale:l[7],min_width:l[8],$$slots:{default:[P]},$$scope:{ctx:l}}}),{c(){k(n.$$.fragment)},m(t,s){v(n,t,s),a=!0},p(t,[s]){const u={};s&16&&(u.visible=t[4]),s&4&&(u.elem_id=t[2]),s&8&&(u.elem_classes=t[3]),s&64&&(u.container=t[6]),s&128&&(u.scale=t[7]),s&256&&(u.min_width=t[8]),s&1064483&&(u.$$scope={dirty:s,ctx:t}),n.$set(u)},i(t){a||(w(n.$$.fragment,t),a=!0)},o(t){C(n.$$.fragment,t),a=!1},d(t){S(n,t)}}}function T(l,n,a){let t;Z(l,z,e=>a(19,t=e));let{elem_id:s=""}=n,{elem_classes:u=[]}=n,{visible:h=!0}=n,{value:c=[]}=n,{value_is_output:f=!1}=n,{choices:g}=n,{container:r=!0}=n,{scale:m=null}=n,{min_width:i=void 0}=n,{label:_=t("checkbox.checkbox_group")}=n,{info:d=void 0}=n,{show_label:o}=n,{gradio:b}=n,{loading_status:B}=n;function q(e){c=e,a(0,c)}function F(e){f=e,a(1,f)}const G=e=>b.dispatch("select",e.detail),H=()=>b.dispatch("change"),R=()=>b.dispatch("input");return l.$$set=e=>{"elem_id"in e&&a(2,s=e.elem_id),"elem_classes"in e&&a(3,u=e.elem_classes),"visible"in e&&a(4,h=e.visible),"value"in e&&a(0,c=e.value),"value_is_output"in e&&a(1,f=e.value_is_output),"choices"in e&&a(5,g=e.choices),"container"in e&&a(6,r=e.container),"scale"in e&&a(7,m=e.scale),"min_width"in e&&a(8,i=e.min_width),"label"in e&&a(9,_=e.label),"info"in e&&a(10,d=e.info),"show_label"in e&&a(11,o=e.show_label),"gradio"in e&&a(12,b=e.gradio),"loading_status"in e&&a(13,B=e.loading_status)},[c,f,s,u,h,g,r,m,i,_,d,o,b,B,q,F,G,H,R]}class Y extends U{constructor(n){super(),V(this,n,T,Q,W,{elem_id:2,elem_classes:3,visible:4,value:0,value_is_output:1,choices:5,container:6,scale:7,min_width:8,label:9,info:10,show_label:11,gradio:12,loading_status:13})}}const ne=Y;export{ne as default};
//# sourceMappingURL=index-86e776b1.js.map