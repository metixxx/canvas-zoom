import{S as j,e as B,s as H,N as L,K as o,U as d,p as g,n as T,A as v,B as S,h as q,k as h,o as b,z as k,v as w,x as M,E as z,ae as C,O as E,q as A,r as D,F}from"./index-666c05ef.js";import{B as K}from"./Button-41f5a565.js";function N(s){let e,a,i;return{c(){e=L("div"),o(e,"id",s[0]),o(e,"class",a="prose "+s[1].join(" ")+" svelte-1yrv54"),o(e,"data-testid","markdown"),o(e,"dir",i=s[5]?"rtl":"ltr"),d(e,"min",s[4]),d(e,"hide",!s[2])},m(t,_){g(t,e,_),e.innerHTML=s[3],s[7](e)},p(t,[_]){_&8&&(e.innerHTML=t[3]),_&1&&o(e,"id",t[0]),_&2&&a!==(a="prose "+t[1].join(" ")+" svelte-1yrv54")&&o(e,"class",a),_&32&&i!==(i=t[5]?"rtl":"ltr")&&o(e,"dir",i),_&18&&d(e,"min",t[4]),_&6&&d(e,"hide",!t[2])},i:T,o:T,d(t){t&&v(e),s[7](null)}}}function O(s,e,a){let{elem_id:i=""}=e,{elem_classes:t=[]}=e,{visible:_=!0}=e,{value:r}=e,{min_height:u=!1}=e,{rtl:l=!1}=e;const m=S();let c;function f(n){q[n?"unshift":"push"](()=>{c=n,a(6,c)})}return s.$$set=n=>{"elem_id"in n&&a(0,i=n.elem_id),"elem_classes"in n&&a(1,t=n.elem_classes),"visible"in n&&a(2,_=n.visible),"value"in n&&a(3,r=n.value),"min_height"in n&&a(4,u=n.min_height),"rtl"in n&&a(5,l=n.rtl)},s.$$.update=()=>{s.$$.dirty&8&&m("change")},[i,t,_,r,u,l,c,f]}class U extends j{constructor(e){super(),B(this,e,O,N,H,{elem_id:0,elem_classes:1,visible:2,value:3,min_height:4,rtl:5})}}function G(s){let e,a,i,t,_;const r=[s[4],{variant:"center"}];let u={};for(let l=0;l<r.length;l+=1)u=z(u,r[l]);return e=new C({props:u}),t=new U({props:{min_height:s[4]&&s[4].status!=="complete",value:s[3],elem_id:s[0],elem_classes:s[1],visible:s[2],rtl:s[5]}}),t.$on("change",s[7]),{c(){h(e.$$.fragment),a=E(),i=L("div"),h(t.$$.fragment),o(i,"class","svelte-1ed2p3z"),d(i,"pending",s[4]?.status==="pending")},m(l,m){b(e,l,m),g(l,a,m),g(l,i,m),b(t,i,null),_=!0},p(l,m){const c=m&16?A(r,[D(l[4]),r[1]]):{};e.$set(c);const f={};m&16&&(f.min_height=l[4]&&l[4].status!=="complete"),m&8&&(f.value=l[3]),m&1&&(f.elem_id=l[0]),m&2&&(f.elem_classes=l[1]),m&4&&(f.visible=l[2]),m&32&&(f.rtl=l[5]),t.$set(f),(!_||m&16)&&d(i,"pending",l[4]?.status==="pending")},i(l){_||(k(e.$$.fragment,l),k(t.$$.fragment,l),_=!0)},o(l){w(e.$$.fragment,l),w(t.$$.fragment,l),_=!1},d(l){l&&(v(a),v(i)),M(e,l),M(t)}}}function I(s){let e,a;return e=new K({props:{visible:s[2],elem_id:s[0],elem_classes:s[1],container:!1,$$slots:{default:[G]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment)},m(i,t){b(e,i,t),a=!0},p(i,[t]){const _={};t&4&&(_.visible=i[2]),t&1&&(_.elem_id=i[0]),t&2&&(_.elem_classes=i[1]),t&575&&(_.$$scope={dirty:t,ctx:i}),e.$set(_)},i(i){a||(k(e.$$.fragment,i),a=!0)},o(i){w(e.$$.fragment,i),a=!1},d(i){M(e,i)}}}function J(s,e,a){let{label:i}=e,{elem_id:t=""}=e,{elem_classes:_=[]}=e,{visible:r=!0}=e,{value:u=""}=e,{loading_status:l}=e,{rtl:m=!1}=e;const c=S();function f(n){F.call(this,s,n)}return s.$$set=n=>{"label"in n&&a(6,i=n.label),"elem_id"in n&&a(0,t=n.elem_id),"elem_classes"in n&&a(1,_=n.elem_classes),"visible"in n&&a(2,r=n.visible),"value"in n&&a(3,u=n.value),"loading_status"in n&&a(4,l=n.loading_status),"rtl"in n&&a(5,m=n.rtl)},s.$$.update=()=>{s.$$.dirty&64&&c("change")},[t,_,r,u,l,m,i,f]}class P extends j{constructor(e){super(),B(this,e,J,I,H,{label:6,elem_id:0,elem_classes:1,visible:2,value:3,loading_status:4,rtl:5})}}const V=P,W=["static"],X=s=>({type:{payload:"string"},description:{payload:"HTML rendering of markdown"}});export{V as Component,X as document,W as modes};
//# sourceMappingURL=index-9f02ab02.js.map