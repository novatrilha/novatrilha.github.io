import{S as Y,i as H,s as J,k as $,l as I,m as L,h as g,n as p,b as M,g as K,R as re,T as Te,d as W,f as V,t as N,L as Z,U as De,V as Me,e as Q,v as q,w as G,x as A,W as Ve,y as X,a as T,q as j,c as D,r as z,H as B,I as v,X as U,u as le,J as x,K as ae,Y as ie,M as ee,Z as ce,_ as oe,$ as P,a0 as Ne,a1 as Ue,a2 as fe,a3 as Fe}from"../../chunks/singletons-c554daff.js";import{c as Oe,C as Re,d as ne,s as te,f as he,a as se,b as je,e as de}from"../../chunks/dados-f3068020.js";import"../../chunks/stores-8d8da22c.js";function _e(i,e,t){const s=i.slice();return s[3]=e[t],s[4]=e,s[5]=t,s}function pe(i,e){let t,s,c,r;function u(n){e[2](n,e[3],e[4],e[5])}let a={};return e[3]!==void 0&&(a.candidato=e[3]),s=new Re({props:a}),De.push(()=>Me(s,"candidato",u)),{key:i,first:null,c(){t=Q(),q(s.$$.fragment),this.h()},l(n){t=Q(),G(s.$$.fragment,n),this.h()},h(){this.first=t},m(n,l){M(n,t,l),A(s,n,l),r=!0},p(n,l){e=n;const f={};!c&&l&1&&(c=!0,f.candidato=e[3],Ve(()=>c=!1)),s.$set(f)},i(n){r||(V(s.$$.fragment,n),r=!0)},o(n){N(s.$$.fragment,n),r=!1},d(n){n&&g(t),X(s,n)}}}function ze(i){let e,t=[],s=new Map,c,r=i[0];const u=a=>a[3].id;for(let a=0;a<r.length;a+=1){let n=_e(i,r,a),l=u(n);s.set(l,t[a]=pe(l,n))}return{c(){e=$("section");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=I(a,"SECTION",{class:!0});var n=L(e);for(let l=0;l<t.length;l+=1)t[l].l(n);n.forEach(g),this.h()},h(){p(e,"class","svelte-tv6h1p")},m(a,n){M(a,e,n);for(let l=0;l<t.length;l+=1)t[l].m(e,null);c=!0},p(a,[n]){n&1&&(r=a[0],K(),t=re(t,n,u,1,a,r,s,e,Te,pe,null,_e),W())},i(a){if(!c){for(let n=0;n<r.length;n+=1)V(t[n]);c=!0}},o(a){for(let n=0;n<t.length;n+=1)N(t[n]);c=!1},d(a){a&&g(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function Be(i,e,t){let s,c;Z(i,Oe,u=>t(1,c=u));function r(u,a,n,l){n[l]=u,t(0,s),t(1,c)}return i.$$.update=()=>{i.$$.dirty&2&&t(0,s=c)},[s,c,r]}class Pe extends Y{constructor(e){super(),H(this,e,Be,ze,J,{})}}const qe=""+new URL("../../assets/chevron-left-7614fffb.svg",import.meta.url).href,Ge=""+new URL("../../assets/chevron-right-375c87e1.svg",import.meta.url).href;function me(i,e,t){const s=i.slice();return s[5]=e[t],s}function ve(i){let e,t,s;function c(){return i[4](i[5])}return{c(){e=$("div"),this.h()},l(r){e=I(r,"DIV",{class:!0}),L(e).forEach(g),this.h()},h(){p(e,"class","step svelte-n0dbbr"),ee(e,"selected",i[5]===i[0])},m(r,u){M(r,e,u),t||(s=U(e,"click",c),t=!0)},p(r,u){i=r,u&3&&ee(e,"selected",i[5]===i[0])},d(r){r&&g(e),t=!1,s()}}}function Ae(i){let e,t,s,c,r,u,a,n,l,f,h,o,_,d,k=i[1],S=[];for(let E=0;E<k.length;E+=1)S[E]=ve(me(i,k,E));return{c(){e=$("section"),t=$("div"),s=$("img"),r=T(),u=$("div"),a=j(i[0]),n=T(),l=$("img"),h=T(),o=$("div");for(let E=0;E<S.length;E+=1)S[E].c();this.h()},l(E){e=I(E,"SECTION",{class:!0});var y=L(e);t=I(y,"DIV",{class:!0});var w=L(t);s=I(w,"IMG",{class:!0,src:!0,alt:!0}),r=D(w),u=I(w,"DIV",{class:!0});var F=L(u);a=z(F,i[0]),F.forEach(g),n=D(w),l=I(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(g),h=D(y),o=I(y,"DIV",{class:!0});var m=L(o);for(let b=0;b<S.length;b+=1)S[b].l(m);m.forEach(g),y.forEach(g),this.h()},h(){p(s,"class","clickable svelte-n0dbbr"),B(s.src,c=qe)||p(s,"src",c),p(s,"alt","Mensagem anterior"),p(u,"class","text svelte-n0dbbr"),p(l,"class","clickable svelte-n0dbbr"),B(l.src,f=Ge)||p(l,"src",f),p(l,"alt","Pr\xF3xima mensagem"),p(t,"class","content-container svelte-n0dbbr"),p(o,"class","steps-container svelte-n0dbbr"),p(e,"class","svelte-n0dbbr")},m(E,y){M(E,e,y),v(e,t),v(t,s),v(t,r),v(t,u),v(u,a),v(t,n),v(t,l),v(e,h),v(e,o);for(let w=0;w<S.length;w+=1)S[w].m(o,null);_||(d=[U(s,"click",i[3]),U(l,"click",i[2])],_=!0)},p(E,[y]){if(y&1&&le(a,E[0]),y&3){k=E[1];let w;for(w=0;w<k.length;w+=1){const F=me(E,k,w);S[w]?S[w].p(F,y):(S[w]=ve(F),S[w].c(),S[w].m(o,null))}for(;w<S.length;w+=1)S[w].d(1);S.length=k.length}},i:x,o:x,d(E){E&&g(e),ae(S,E),_=!1,ie(d)}}}function Xe(i,e,t){let s;const c=["Voc\xEA sabia que a PB s\xF3 tem XX de deputados negros?","Sample 1","Sample 2"],r=()=>{let n=c.indexOf(s)+1;n===c.length&&(n=0),t(0,s=c[n])},u=()=>{let n=c.indexOf(s)-1;n===-1&&(n=c.length-1),t(0,s=c[n])},a=n=>t(0,s=n);return t(0,s=c[0]),[s,c,r,u,a]}class Ye extends Y{constructor(e){super(),H(this,e,Xe,Ae,J,{})}}const He=""+new URL("../../assets/filter-icon-0fd2fccf.svg",import.meta.url).href,Je=""+new URL("../../assets/chevron-down-yellow-bfe9aef5.svg",import.meta.url).href,Ke=""+new URL("../../assets/checked-975bd7f8.svg",import.meta.url).href;function ge(i,e,t){const s=i.slice();return s[9]=e[t],s}function be(i,e,t){const s=i.slice();return s[12]=e[t],s}function ke(i){let e,t,s,c=i[2],r=[];for(let a=0;a<c.length;a+=1)r[a]=Ie(ge(i,c,a));const u=a=>N(r[a],1,1,()=>{r[a]=null});return{c(){e=$("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=I(a,"DIV",{class:!0});var n=L(e);for(let l=0;l<r.length;l+=1)r[l].l(n);n.forEach(g),this.h()},h(){p(e,"class","options-container svelte-1rhjiwy")},m(a,n){M(a,e,n);for(let l=0;l<r.length;l+=1)r[l].m(e,null);s=!0},p(a,n){if(n&14){c=a[2];let l;for(l=0;l<c.length;l+=1){const f=ge(a,c,l);r[l]?(r[l].p(f,n),V(r[l],1)):(r[l]=Ie(f),r[l].c(),V(r[l],1),r[l].m(e,null))}for(K(),l=c.length;l<r.length;l+=1)u(l);W()}},i(a){if(!s){for(let n=0;n<c.length;n+=1)V(r[n]);oe(()=>{t||(t=P(e,te,{duration:100},!0)),t.run(1)}),s=!0}},o(a){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)N(r[n]);t||(t=P(e,te,{duration:100},!1)),t.run(0),s=!1},d(a){a&&g(e),ae(r,a),a&&t&&t.end()}}}function we(i){let e,t=[],s=new Map,c,r,u,a=i[9].values;const n=l=>l[12].label;for(let l=0;l<a.length;l+=1){let f=be(i,a,l),h=n(f);s.set(h,t[l]=$e(h,f))}return{c(){e=$("div");for(let l=0;l<t.length;l+=1)t[l].c();c=T(),this.h()},l(l){e=I(l,"DIV",{class:!0});var f=L(e);for(let h=0;h<t.length;h+=1)t[h].l(f);c=D(f),f.forEach(g),this.h()},h(){p(e,"class","suboptions-container svelte-1rhjiwy")},m(l,f){M(l,e,f);for(let h=0;h<t.length;h+=1)t[h].m(e,null);v(e,c),u=!0},p(l,f){f&12&&(a=l[9].values,t=re(t,f,n,1,l,a,s,e,Ue,$e,c,be))},i(l){u||(oe(()=>{r||(r=P(e,te,{duration:100},!0)),r.run(1)}),u=!0)},o(l){r||(r=P(e,te,{duration:100},!1)),r.run(0),u=!1},d(l){l&&g(e);for(let f=0;f<t.length;f+=1)t[f].d();l&&r&&r.end()}}}function ye(i){let e,t;return{c(){e=$("img"),this.h()},l(s){e=I(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){B(e.src,t=Ke)||p(e,"src",t),p(e,"alt","Caixa de sele\xE7\xE3o marcada"),p(e,"class","svelte-1rhjiwy")},m(s,c){M(s,e,c)},p:x,d(s){s&&g(e)}}}function $e(i,e){let t,s=e[12].label.toLowerCase()+"",c,r,u,a,n,l,f;function h(){return e[8](e[12])}let o=e[12].checked&&ye();return{key:i,first:null,c(){t=$("label"),c=j(s),r=T(),u=$("input"),n=T(),o&&o.c(),this.h()},l(_){t=I(_,"LABEL",{class:!0});var d=L(t);c=z(d,s),r=D(d),u=I(d,"INPUT",{type:!0,class:!0}),n=D(d),o&&o.l(d),d.forEach(g),this.h()},h(){p(u,"type","checkbox"),u.checked=a=e[12].checked,p(u,"class","svelte-1rhjiwy"),p(t,"class","suboption clickable svelte-1rhjiwy"),this.first=t},m(_,d){M(_,t,d),v(t,c),v(t,r),v(t,u),v(t,n),o&&o.m(t,null),l||(f=[U(u,"change",h),U(t,"click",ce(e[4]))],l=!0)},p(_,d){e=_,d&4&&s!==(s=e[12].label.toLowerCase()+"")&&le(c,s),d&4&&a!==(a=e[12].checked)&&(u.checked=a),e[12].checked?o?o.p(e,d):(o=ye(),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(_){_&&g(t),o&&o.d(),l=!1,ie(f)}}}function Ie(i){let e,t=i[9].label.toLowerCase()+"",s,c,r,u,a,n,l,f,h;function o(){return i[7](i[9])}let _=i[1]===i[9].label&&we(i);return{c(){e=$("div"),s=j(t),c=T(),r=$("img"),a=T(),_&&_.c(),n=Q(),this.h()},l(d){e=I(d,"DIV",{class:!0});var k=L(e);s=z(k,t),c=D(k),r=I(k,"IMG",{src:!0,alt:!0}),k.forEach(g),a=D(d),_&&_.l(d),n=Q(),this.h()},h(){B(r.src,u=Je)||p(r,"src",u),p(r,"alt","\xCDcone de expandir op\xE7\xF5es"),p(e,"class","option clickable svelte-1rhjiwy")},m(d,k){M(d,e,k),v(e,s),v(e,c),v(e,r),M(d,a,k),_&&_.m(d,k),M(d,n,k),l=!0,f||(h=U(e,"click",ce(o)),f=!0)},p(d,k){i=d,(!l||k&4)&&t!==(t=i[9].label.toLowerCase()+"")&&le(s,t),i[1]===i[9].label?_?(_.p(i,k),k&6&&V(_,1)):(_=we(i),_.c(),V(_,1),_.m(n.parentNode,n)):_&&(K(),N(_,1,1,()=>{_=null}),W())},i(d){l||(V(_),l=!0)},o(d){N(_),l=!1},d(d){d&&g(e),d&&g(a),_&&_.d(d),d&&g(n),f=!1,h()}}}function We(i){let e,t,s,c,r,u,a,n,l,f=i[0]&&ke(i);return{c(){e=$("div"),t=$("button"),s=$("img"),r=j(`\r
    filtros`),u=T(),f&&f.c(),this.h()},l(h){e=I(h,"DIV",{class:!0});var o=L(e);t=I(o,"BUTTON",{"data-tertiary":!0,class:!0});var _=L(t);s=I(_,"IMG",{src:!0,alt:!0}),r=z(_,`\r
    filtros`),_.forEach(g),u=D(o),f&&f.l(o),o.forEach(g),this.h()},h(){B(s.src,c=He)||p(s,"src",c),p(s,"alt","\xCDcone do bot\xE3o de filtros"),p(t,"data-tertiary",""),p(t,"class","filters svelte-1rhjiwy"),p(e,"class","container svelte-1rhjiwy")},m(h,o){M(h,e,o),v(e,t),v(t,s),v(t,r),v(e,u),f&&f.m(e,null),a=!0,n||(l=[U(window,"click",i[5]),U(t,"click",ce(i[6]))],n=!0)},p(h,[o]){h[0]?f?(f.p(h,o),o&1&&V(f,1)):(f=ke(h),f.c(),V(f,1),f.m(e,null)):f&&(K(),N(f,1,1,()=>{f=null}),W())},i(h){a||(V(f),a=!0)},o(h){N(f),a=!1},d(h){h&&g(e),f&&f.d(),n=!1,ie(l)}}}function Ze(i,e,t){let s,c,r;Z(i,ne,o=>t(2,r=o));const u=o=>{o.checked=!o.checked,ne.update(_=>[..._])};function a(o){Ne.call(this,i,o)}const n=()=>t(0,s=!1),l=()=>t(0,s=!s),f=o=>t(1,c=c===o.label?"":o.label),h=o=>u(o);return i.$$.update=()=>{i.$$.dirty&1&&(s||t(1,c=""))},t(0,s=!1),t(1,c=""),[s,c,r,u,a,n,l,f,h]}class Qe extends Y{constructor(e){super(),H(this,e,Ze,We,J,{})}}const xe=""+new URL("../../assets/close-85af3ed8.svg",import.meta.url).href;function Ee(i,e,t){const s=i.slice();return s[9]=e[t],s}function Ce(i,e,t){const s=i.slice();return s[12]=e[t],s}function Se(i){let e,t=i[12].label+"",s,c,r,u;function a(){return i[6](i[12])}return{c(){e=$("button"),s=j(t),this.h()},l(n){e=I(n,"BUTTON",{"data-secondary":!0});var l=L(e);s=z(l,t),l.forEach(g),this.h()},h(){p(e,"data-secondary",c=i[12].value!==i[1].type)},m(n,l){M(n,e,l),v(e,s),r||(u=U(e,"click",a),r=!0)},p(n,l){i=n,l&2&&c!==(c=i[12].value!==i[1].type)&&p(e,"data-secondary",c)},d(n){n&&g(e),r=!1,u()}}}function Le(i,e){let t,s=e[9].label.toLowerCase()+"",c,r,u,a,n,l,f,h,o;function _(){return e[8](e[9])}return{key:i,first:null,c(){t=$("span"),c=j(s),r=T(),u=$("img"),n=T(),this.h()},l(d){t=I(d,"SPAN",{class:!0});var k=L(t);c=z(k,s),r=D(k),u=I(k,"IMG",{src:!0,alt:!0,class:!0}),n=D(k),k.forEach(g),this.h()},h(){B(u.src,a=xe)||p(u,"src",a),p(u,"alt","Remover filtro"),p(u,"class","svelte-z9lufi"),p(t,"class","filter svelte-z9lufi"),this.first=t},m(d,k){M(d,t,k),v(t,c),v(t,r),v(t,u),v(t,n),f=!0,h||(o=U(u,"click",_),h=!0)},p(d,k){e=d,(!f||k&4)&&s!==(s=e[9].label.toLowerCase()+"")&&le(c,s)},i(d){f||(oe(()=>{l||(l=P(t,de,{duration:150},!0)),l.run(1)}),f=!0)},o(d){l||(l=P(t,de,{duration:150},!1)),l.run(0),f=!1},d(d){d&&g(t),d&&l&&l.end(),h=!1,o()}}}function et(i){let e,t,s,c,r,u,a,n,l,f,h,o=[],_=new Map,d,k,S,E=he,y=[];for(let m=0;m<E.length;m+=1)y[m]=Se(Ce(i,E,m));u=new Qe({});let w=i[2];const F=m=>m[9].label;for(let m=0;m<w.length;m+=1){let b=Ee(i,w,m),C=F(b);_.set(C,o[m]=Le(C,b))}return{c(){e=$("div"),t=$("div");for(let m=0;m<y.length;m+=1)y[m].c();s=T(),c=$("input"),r=T(),q(u.$$.fragment),a=T(),n=$("div"),l=$("span"),f=j("Filtros aplicados:"),h=T();for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l(m){e=I(m,"DIV",{class:!0});var b=L(e);t=I(b,"DIV",{class:!0});var C=L(t);for(let R=0;R<y.length;R+=1)y[R].l(C);C.forEach(g),s=D(b),c=I(b,"INPUT",{class:!0,placeholder:!0}),r=D(b),G(u.$$.fragment,b),a=D(b),n=I(b,"DIV",{class:!0});var O=L(n);l=I(O,"SPAN",{class:!0});var ue=L(l);f=z(ue,"Filtros aplicados:"),ue.forEach(g),h=D(O);for(let R=0;R<o.length;R+=1)o[R].l(O);O.forEach(g),b.forEach(g),this.h()},h(){p(t,"class","buttons-container svelte-z9lufi"),p(c,"class","search-input svelte-z9lufi"),p(c,"placeholder","Buscar..."),p(l,"class","title svelte-z9lufi"),ee(l,"empty",i[2].length===0),p(n,"class","active-filters svelte-z9lufi"),p(e,"class","search-container svelte-z9lufi")},m(m,b){M(m,e,b),v(e,t);for(let C=0;C<y.length;C+=1)y[C].m(t,null);v(e,s),v(e,c),fe(c,i[0]),v(e,r),A(u,e,null),v(e,a),v(e,n),v(n,l),v(l,f),v(n,h);for(let C=0;C<o.length;C+=1)o[C].m(n,null);d=!0,k||(S=U(c,"input",i[7]),k=!0)},p(m,[b]){if(b&18){E=he;let C;for(C=0;C<E.length;C+=1){const O=Ce(m,E,C);y[C]?y[C].p(O,b):(y[C]=Se(O),y[C].c(),y[C].m(t,null))}for(;C<y.length;C+=1)y[C].d(1);y.length=E.length}b&1&&c.value!==m[0]&&fe(c,m[0]),b&4&&ee(l,"empty",m[2].length===0),b&12&&(w=m[2],K(),o=re(o,b,F,1,m,w,_,n,Te,Le,null,Ee),W())},i(m){if(!d){V(u.$$.fragment,m);for(let b=0;b<w.length;b+=1)V(o[b]);d=!0}},o(m){N(u.$$.fragment,m);for(let b=0;b<o.length;b+=1)N(o[b]);d=!1},d(m){m&&g(e),ae(y,m),X(u);for(let b=0;b<o.length;b+=1)o[b].d();k=!1,S()}}}function tt(i,e,t){let s,c,r;Z(i,se,o=>t(1,c=o)),Z(i,je,o=>t(2,r=o));let u=null;const a=o=>{o.checked=!1,ne.update(_=>[..._])},n=o=>{se.update(_=>({..._,type:o.value}))},l=o=>n(o);function f(){s=this.value,t(0,s)}const h=o=>a(o);return i.$$.update=()=>{i.$$.dirty&33&&(clearTimeout(u),t(5,u=setTimeout(()=>{se.update(o=>({...o,text:s}))},500)))},t(0,s=""),[s,c,r,a,n,u,l,f,h]}class lt extends Y{constructor(e){super(),H(this,e,tt,et,J,{})}}function st(i){let e,t,s,c,r,u,a,n;return s=new Ye({}),r=new lt({}),a=new Pe({}),{c(){e=T(),t=$("section"),q(s.$$.fragment),c=T(),q(r.$$.fragment),u=T(),q(a.$$.fragment),this.h()},l(l){Fe('[data-svelte="svelte-s27v0q"]',document.head).forEach(g),e=D(l),t=I(l,"SECTION",{class:!0});var h=L(t);G(s.$$.fragment,h),c=D(h),G(r.$$.fragment,h),u=D(h),G(a.$$.fragment,h),h.forEach(g),this.h()},h(){document.title="Nova Trilha",p(t,"class","svelte-i0nczt")},m(l,f){M(l,e,f),M(l,t,f),A(s,t,null),v(t,c),A(r,t,null),v(t,u),A(a,t,null),n=!0},p:x,i(l){n||(V(s.$$.fragment,l),V(r.$$.fragment,l),V(a.$$.fragment,l),n=!0)},o(l){N(s.$$.fragment,l),N(r.$$.fragment,l),N(a.$$.fragment,l),n=!1},d(l){l&&g(e),l&&g(t),X(s),X(r),X(a)}}}function nt(i){return[]}class ct extends Y{constructor(e){super(),H(this,e,nt,st,J,{})}}export{ct as default};
