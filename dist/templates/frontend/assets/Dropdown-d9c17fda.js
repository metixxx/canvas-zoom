import{S as Y,e as Z,s as x,f as V,g as m,h as J,j as y,n as q,k as R,y as he,m as S,o as H,Q as me,p as U,w as j,r as $,u as E,v as ee,B as ge,C as we,I as P,K as L,ag as be,am as ie,O as pe,t as ne,N as A,x as te,R as W,U as Ce,F as X,G as F,an as se,X as Ne,H as G,a0 as Se,a1 as Ee,al as Te}from"./index-86f847d0.js";import{b as oe}from"./Button-787144df.js";import{B as ze}from"./BlockTitle-913ace04.js";function Je(t){let e,l;return{c(){e=V("svg"),l=V("path"),m(l,"d","M5 8l4 4 4-4z"),m(e,"class","dropdown-arrow svelte-p5edak"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"width","18"),m(e,"height","18"),m(e,"viewBox","0 0 18 18")},m(r,s){J(r,e,s),y(e,l)},p:q,i:q,o:q,d(r){r&&R(e)}}}class Re extends Y{constructor(e){super(),Z(this,e,null,Je,x,{})}}function Ue(t){let e,l;return{c(){e=V("svg"),l=V("path"),m(l,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"width","16"),m(e,"height","16"),m(e,"viewBox","0 0 24 24")},m(r,s){J(r,e,s),y(e,l)},p:q,i:q,o:q,d(r){r&&R(e)}}}class ve extends Y{constructor(e){super(),Z(this,e,null,Ue,x,{})}}function fe(t,e,l){const r=t.slice();return r[24]=e[l],r}function ue(t){let e,l,r,s,_,n=P(t[0]),o=[];for(let i=0;i<n.length;i+=1)o[i]=re(fe(t,n,i));return{c(){e=S("ul");for(let i=0;i<o.length;i+=1)o[i].c();m(e,"class","options svelte-1aonegi"),L(e,"top",t[7]),L(e,"bottom",t[8]),L(e,"max-height",`calc(${t[9]}px - var(--window-padding))`),L(e,"width",t[6]+"px")},m(i,f){J(i,e,f);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null);t[21](e),r=!0,s||(_=U(e,"mousedown",be(t[20])),s=!0)},p(i,f){if(f&2053){n=P(i[0]);let u;for(u=0;u<n.length;u+=1){const g=fe(i,n,u);o[u]?o[u].p(g,f):(o[u]=re(g),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=n.length}f&128&&L(e,"top",i[7]),f&256&&L(e,"bottom",i[8]),f&512&&L(e,"max-height",`calc(${i[9]}px - var(--window-padding))`),f&64&&L(e,"width",i[6]+"px")},i(i){r||(i&&he(()=>{r&&(l||(l=ie(e,oe,{duration:200,y:5},!0)),l.run(1))}),r=!0)},o(i){i&&(l||(l=ie(e,oe,{duration:200,y:5},!1)),l.run(0)),r=!1},d(i){i&&R(e),pe(o,i),t[21](null),i&&l&&l.end(),s=!1,_()}}}function re(t){let e,l,r,s=t[24]+"",_,n,o,i;return{c(){e=S("li"),l=S("span"),l.textContent="✓",r=H(),_=ne(s),n=H(),m(l,"class","inner-item svelte-1aonegi"),A(l,"hide",!t[11].includes(t[24])),m(e,"class","item svelte-1aonegi"),m(e,"role","button"),m(e,"data-value",o=t[24]),m(e,"aria-label",i=t[24]),m(e,"data-testid","dropdown-option"),A(e,"selected",t[11].includes(t[24])),A(e,"active",t[2]===t[24]),A(e,"bg-gray-100",t[2]===t[24]),A(e,"dark:bg-gray-600",t[2]===t[24])},m(f,u){J(f,e,u),y(e,l),y(e,r),y(e,_),y(e,n)},p(f,u){u&2049&&A(l,"hide",!f[11].includes(f[24])),u&1&&s!==(s=f[24]+"")&&te(_,s),u&1&&o!==(o=f[24])&&m(e,"data-value",o),u&1&&i!==(i=f[24])&&m(e,"aria-label",i),u&2049&&A(e,"selected",f[11].includes(f[24])),u&5&&A(e,"active",f[2]===f[24]),u&5&&A(e,"bg-gray-100",f[2]===f[24]),u&5&&A(e,"dark:bg-gray-600",f[2]===f[24])},d(f){f&&R(e)}}}function He(t){let e,l,r,s,_;he(t[18]);let n=t[1]&&!t[3]&&ue(t);return{c(){e=S("div"),l=H(),n&&n.c(),r=me(),m(e,"class","reference")},m(o,i){J(o,e,i),t[19](e),J(o,l,i),n&&n.m(o,i),J(o,r,i),s||(_=[U(window,"scroll",t[12]),U(window,"resize",t[18])],s=!0)},p(o,[i]){o[1]&&!o[3]?n?(n.p(o,i),i&10&&j(n,1)):(n=ue(o),n.c(),j(n,1),n.m(r.parentNode,r)):n&&($(),E(n,1,1,()=>{n=null}),ee())},i(o){j(n)},o(o){E(n)},d(o){o&&(R(e),R(l),R(r)),t[19](null),n&&n.d(o),s=!1,ge(_)}}}function Ie(t,e,l){let r,{value:s=void 0}=e,{filtered:_}=e,{showOptions:n=!1}=e,{activeOption:o}=e,{disabled:i=!1}=e,f,u,g,k,O,T,D,B,d,p;function v(){const{top:b,bottom:z}=O.getBoundingClientRect();l(15,f=b),l(16,u=p-z)}let C=null;function I(){n&&(C!==null&&clearTimeout(C),C=setTimeout(()=>{v(),C=null},10))}const h=we();function K(){l(10,p=window.innerHeight)}function M(b){W[b?"unshift":"push"](()=>{O=b,l(4,O)})}const c=b=>h("change",b);function w(b){W[b?"unshift":"push"](()=>{T=b,l(5,T)})}return t.$$set=b=>{"value"in b&&l(14,s=b.value),"filtered"in b&&l(0,_=b.filtered),"showOptions"in b&&l(1,n=b.showOptions),"activeOption"in b&&l(2,o=b.activeOption),"disabled"in b&&l(3,i=b.disabled)},t.$$.update=()=>{if(t.$$.dirty&245810){if(n&&O){if(T&&typeof s=="string"){let z=T.querySelectorAll("li");for(const Q of Array.from(z))if(Q.getAttribute("data-value")===s){T?.scrollTo?.(0,Q.offsetTop);break}}v();const b=O.parentElement?.getBoundingClientRect();l(17,g=b?.height||0),l(6,k=b?.width||0)}u>f?(l(7,D=`${f}px`),l(9,d=u),l(8,B=null)):(l(8,B=`${u+g}px`),l(9,d=f-g),l(7,D=null))}t.$$.dirty&16384&&l(11,r=Array.isArray(s)?s:[s])},[_,n,o,i,O,T,k,D,B,d,p,r,I,h,s,f,u,g,K,M,c,w]}class Le extends Y{constructor(e){super(),Z(this,e,Ie,He,x,{value:14,filtered:0,showOptions:1,activeOption:2,disabled:3})}}function ae(t,e,l){const r=t.slice();return r[34]=e[l],r}function Me(t){let e;return{c(){e=ne(t[1])},m(l,r){J(l,e,r)},p(l,r){r[0]&2&&te(e,l[1])},d(l){l&&R(e)}}}function ce(t){let e,l,r=P(t[0]),s=[];for(let n=0;n<r.length;n+=1)s[n]=de(ae(t,r,n));const _=n=>E(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=me()},m(n,o){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(n,o);J(n,e,o),l=!0},p(n,o){if(o[0]&24593){r=P(n[0]);let i;for(i=0;i<r.length;i+=1){const f=ae(n,r,i);s[i]?(s[i].p(f,o),j(s[i],1)):(s[i]=de(f),s[i].c(),j(s[i],1),s[i].m(e.parentNode,e))}for($(),i=r.length;i<s.length;i+=1)_(i);ee()}},i(n){if(!l){for(let o=0;o<r.length;o+=1)j(s[o]);l=!0}},o(n){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)E(s[o]);l=!1},d(n){n&&R(e),pe(s,n)}}}function _e(t){let e,l,r,s;return l=new ve({}),{c(){e=S("div"),X(l.$$.fragment),m(e,"class","token-remove svelte-1xsj8nn"),m(e,"title",r=t[13]("common.remove")+" "+t[34]),A(e,"hidden",t[4])},m(_,n){J(_,e,n),F(l,e,null),s=!0},p(_,n){(!s||n[0]&8193&&r!==(r=_[13]("common.remove")+" "+_[34]))&&m(e,"title",r),(!s||n[0]&16)&&A(e,"hidden",_[4])},i(_){s||(j(l.$$.fragment,_),s=!0)},o(_){E(l.$$.fragment,_),s=!1},d(_){_&&R(e),G(l)}}}function de(t){let e,l,r=t[34]+"",s,_,n,o,i,f,u=!t[4]&&_e(t);function g(){return t[25](t[34])}return{c(){e=S("div"),l=S("span"),s=ne(r),_=H(),u&&u.c(),n=H(),m(l,"class","svelte-1xsj8nn"),m(e,"class","token svelte-1xsj8nn")},m(k,O){J(k,e,O),y(e,l),y(l,s),y(e,_),u&&u.m(e,null),y(e,n),o=!0,i||(f=U(e,"click",be(g)),i=!0)},p(k,O){t=k,(!o||O[0]&1)&&r!==(r=t[34]+"")&&te(s,r),t[4]?u&&($(),E(u,1,1,()=>{u=null}),ee()):u?(u.p(t,O),O[0]&16&&j(u,1)):(u=_e(t),u.c(),j(u,1),u.m(e,n))},i(k){o||(j(u),o=!0)},o(k){E(u),o=!1},d(k){k&&R(e),u&&u.d(),i=!1,f()}}}function qe(t){let e,l,r,s,_,n=t[3]&&Array.isArray(t[0]),o,i,f,u,g,k,O,T,D,B,d,p,v,C,I;l=new ze({props:{show_label:t[5],info:t[2],$$slots:{default:[Me]},$$scope:{ctx:t}}});let h=n&&ce(t);k=new ve({}),D=new Re({});function K(c){t[29](c)}let M={showOptions:t[11],filtered:t[10],activeOption:t[9],disabled:t[4]};return t[0]!==void 0&&(M.value=t[0]),d=new Le({props:M}),W.push(()=>Ce(d,"value",K)),d.$on("change",t[18]),{c(){e=S("label"),X(l.$$.fragment),r=H(),s=S("div"),_=S("div"),h&&h.c(),o=H(),i=S("div"),f=S("input"),u=H(),g=S("div"),X(k.$$.fragment),T=H(),X(D.$$.fragment),B=H(),X(d.$$.fragment),m(f,"class","border-none svelte-1xsj8nn"),f.disabled=t[4],m(f,"autocomplete","off"),A(f,"subdued",t[0]!==t[8]&&!t[7]),m(g,"class","token-remove remove-all svelte-1xsj8nn"),m(g,"title",O=t[13]("common.clear")),A(g,"hide",!t[3]||!t[0]?.length||t[4]),m(i,"class","secondary-wrap svelte-1xsj8nn"),m(_,"class","wrap-inner svelte-1xsj8nn"),A(_,"showOptions",t[11]),m(s,"class","wrap svelte-1xsj8nn"),m(e,"class","svelte-1xsj8nn"),A(e,"container",t[6])},m(c,w){J(c,e,w),F(l,e,null),y(e,r),y(e,s),y(s,_),h&&h.m(_,null),y(_,o),y(_,i),y(i,f),se(f,t[8]),t[27](f),y(i,u),y(i,g),F(k,g,null),y(i,T),F(D,i,null),y(s,B),F(d,s,null),v=!0,C||(I=[U(f,"input",t[26]),U(f,"keydown",t[19]),U(f,"keyup",t[28]),U(f,"blur",t[16]),U(f,"focus",t[17]),U(g,"click",t[15])],C=!0)},p(c,w){const b={};w[0]&32&&(b.show_label=c[5]),w[0]&4&&(b.info=c[2]),w[0]&2|w[1]&64&&(b.$$scope={dirty:w,ctx:c}),l.$set(b),w[0]&9&&(n=c[3]&&Array.isArray(c[0])),n?h?(h.p(c,w),w[0]&9&&j(h,1)):(h=ce(c),h.c(),j(h,1),h.m(_,o)):h&&($(),E(h,1,1,()=>{h=null}),ee()),(!v||w[0]&16)&&(f.disabled=c[4]),w[0]&256&&f.value!==c[8]&&se(f,c[8]),(!v||w[0]&385)&&A(f,"subdued",c[0]!==c[8]&&!c[7]),(!v||w[0]&8192&&O!==(O=c[13]("common.clear")))&&m(g,"title",O),(!v||w[0]&25)&&A(g,"hide",!c[3]||!c[0]?.length||c[4]),(!v||w[0]&2048)&&A(_,"showOptions",c[11]);const z={};w[0]&2048&&(z.showOptions=c[11]),w[0]&1024&&(z.filtered=c[10]),w[0]&512&&(z.activeOption=c[9]),w[0]&16&&(z.disabled=c[4]),!p&&w[0]&1&&(p=!0,z.value=c[0],Ne(()=>p=!1)),d.$set(z),(!v||w[0]&64)&&A(e,"container",c[6])},i(c){v||(j(l.$$.fragment,c),j(h),j(k.$$.fragment,c),j(D.$$.fragment,c),j(d.$$.fragment,c),v=!0)},o(c){E(l.$$.fragment,c),E(h),E(k.$$.fragment,c),E(D.$$.fragment,c),E(d.$$.fragment,c),v=!1},d(c){c&&R(e),G(l),h&&h.d(),t[27](null),G(k),G(D),G(d),C=!1,ge(I)}}}function Ke(t,e,l){let r;Se(t,Ee,a=>l(13,r=a));let{label:s}=e,{info:_=void 0}=e,{value:n}=e,o=Array.isArray(n)?n.slice():n,{value_is_output:i=!1}=e,{multiselect:f=!1}=e,{max_choices:u}=e,{choices:g}=e,{disabled:k=!1}=e,{show_label:O}=e,{container:T=!0}=e,{allow_custom_value:D=!1}=e;const B=we();let d,p,v=!1,C,I=[],h=[];function K(){(g!==I||typeof d=="string")&&(l(24,I=g),l(10,h=g.filter(a=>d?a.toLowerCase().includes(d.toLowerCase()):a)))}function M(){B("change",n),i||B("input")}Te(()=>{l(20,i=!1)});function c(a){l(0,n),(!u||n.length<u)&&(n.push(a),B("select",{index:g.indexOf(a),value:a,selected:!0})),l(0,n)}function w(a){k||(l(0,n),l(0,n=n.filter(N=>N!==a))),B("select",{index:g.indexOf(a),value:a,selected:!1})}function b(a){l(0,n=[]),l(8,d=""),a.preventDefault()}function z(a){f?l(8,d=""):D||n!==d&&(typeof n=="string"&&d==""?l(8,d=n):(l(0,n=void 0),l(8,d=""))),l(11,v=!1),B("blur")}function Q(a){B("focus"),l(11,v=!0),l(10,h=g)}function ke(a){const N=a.detail.target.dataset.value;D&&l(8,d=N),N!==void 0&&(f?(n?.includes(N)?w(N):c(N),l(8,d="")):(l(0,n=N),l(8,d=N),l(11,v=!1),B("select",{index:g.indexOf(N),value:N,selected:!0}),C.blur()))}function Oe(a){if(a.key==="Enter"&&p!=null)f?f&&Array.isArray(n)&&(n.includes(p)?w(p):c(p),l(8,d="")):(n!==p&&(l(0,n=p),B("select",{index:g.indexOf(n),value:n,selected:!0})),l(8,d=p),l(11,v=!1),C.blur());else if(l(11,v=!0),a.key==="ArrowUp"||a.key==="ArrowDown"){p===null&&l(9,p=h[0]);const N=a.key==="ArrowUp"?-1:1,le=h.indexOf(p)+N;l(9,p=le<0?h[h.length-1]:le===h.length?h[0]:h[le]),a.preventDefault()}else a.key==="Escape"?l(11,v=!1):a.key==="Backspace"?f&&(!d||d==="")&&Array.isArray(n)&&n.length>0&&(w(n[n.length-1]),l(8,d="")):l(11,v=!0)}const ye=a=>w(a);function Ae(){d=this.value,l(8,d),l(0,n)}function je(a){W[a?"unshift":"push"](()=>{C=a,l(12,C)})}const De=()=>{D&&l(0,n=d)};function Be(a){n=a,l(0,n)}return t.$$set=a=>{"label"in a&&l(1,s=a.label),"info"in a&&l(2,_=a.info),"value"in a&&l(0,n=a.value),"value_is_output"in a&&l(20,i=a.value_is_output),"multiselect"in a&&l(3,f=a.multiselect),"max_choices"in a&&l(21,u=a.max_choices),"choices"in a&&l(22,g=a.choices),"disabled"in a&&l(4,k=a.disabled),"show_label"in a&&l(5,O=a.show_label),"container"in a&&l(6,T=a.container),"allow_custom_value"in a&&l(7,D=a.allow_custom_value)},t.$$.update=()=>{t.$$.dirty[0]&1&&(typeof n=="string"||n===null)&&l(8,d=n),t.$$.dirty[0]&16777472&&K(),t.$$.dirty[0]&1536&&(!p||!h.includes(p))&&l(9,p=h.length?h[0]:null),t.$$.dirty[0]&8388609&&JSON.stringify(n)!=JSON.stringify(o)&&(l(23,o=Array.isArray(n)?n.slice():n),M()),t.$$.dirty[0]&8388609&&JSON.stringify(n)!=JSON.stringify(o)&&(B("change",n),l(23,o=Array.isArray(n)?n.slice():n))},[n,s,_,f,k,O,T,D,d,p,h,v,C,r,w,b,z,Q,ke,Oe,i,u,g,o,I,ye,Ae,je,De,Be]}class Qe extends Y{constructor(e){super(),Z(this,e,Ke,qe,x,{label:1,info:2,value:0,value_is_output:20,multiselect:3,max_choices:21,choices:22,disabled:4,show_label:5,container:6,allow_custom_value:7},null,[-1,-1])}}export{Qe as D};
//# sourceMappingURL=Dropdown-d9c17fda.js.map