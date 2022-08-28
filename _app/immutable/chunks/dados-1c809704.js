import{a4 as w,a5 as oe,S as le,i as re,s as ne,k as m,a as D,q as $,l as _,m as E,c as I,h,r as O,H as K,n as u,b as ee,I as r,X as ie,u as j,_ as ce,$ as Q,a6 as B,a7 as ae,a8 as de}from"./singletons-db5fbb24.js";import{p as fe}from"./stores-b51c6bf1.js";w.disable_scroll_handling;const ue=w.goto;w.invalidate;w.prefetch;w.prefetch_routes;w.before_navigate;w.after_navigate;function pe(a){const e=a-1;return e*e*e+1}function Y(a,{delay:e=0,duration:t=400,easing:s=oe}={}){const o=+getComputedStyle(a).opacity;return{delay:e,duration:t,easing:s,css:n=>`opacity: ${n*o}`}}function Ae(a,{delay:e=0,duration:t=400,easing:s=pe}={}){const o=getComputedStyle(a),n=+o.opacity,k=parseFloat(o.height),l=parseFloat(o.paddingTop),C=parseFloat(o.paddingBottom),A=parseFloat(o.marginTop),y=parseFloat(o.marginBottom),p=parseFloat(o.borderTopWidth),v=parseFloat(o.borderBottomWidth);return{delay:e,duration:t,easing:s,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*n};height: ${d*k}px;padding-top: ${d*l}px;padding-bottom: ${d*C}px;margin-top: ${d*A}px;margin-bottom: ${d*y}px;border-top-width: ${d*p}px;border-bottom-width: ${d*v}px;`}}function Z(a){let e,t;return{c(){e=m("div"),t=$("Reelei\xE7\xE3o"),this.h()},l(s){e=_(s,"DIV",{class:!0});var o=E(e);t=O(o,"Reelei\xE7\xE3o"),o.forEach(h),this.h()},h(){u(e,"class","badge svelte-aaufrr")},m(s,o){ee(s,e,o),r(e,t)},d(s){s&&h(e)}}}function he(a){let e,t,s,o,n,k,l,C=a[0].nomeUrna.toLowerCase()+"",A,y,p,v,d=a[0].partido.sigla+"",R,M,P,S=a[0].numero+"",U,T,F,G,b,g,V,W,i=a[0].st_REELEICAO&&Z();return{c(){e=m("div"),t=m("div"),s=m("img"),n=D(),i&&i.c(),k=D(),l=m("span"),A=$(C),y=D(),p=m("div"),v=m("span"),R=$(d),M=D(),P=m("span"),U=$(S),T=D(),F=m("button"),G=$("ir para o perfil"),this.h()},l(f){e=_(f,"DIV",{class:!0});var c=E(e);t=_(c,"DIV",{class:!0});var L=E(t);s=_(L,"IMG",{src:!0,alt:!0,class:!0}),n=I(L),i&&i.l(L),L.forEach(h),k=I(c),l=_(c,"SPAN",{class:!0});var H=E(l);A=O(H,C),H.forEach(h),y=I(c),p=_(c,"DIV",{class:!0});var N=E(p);v=_(N,"SPAN",{class:!0});var X=E(v);R=O(X,d),X.forEach(h),M=I(N),P=_(N,"SPAN",{class:!0});var z=E(P);U=O(z,S),z.forEach(h),N.forEach(h),T=I(c),F=_(c,"BUTTON",{});var J=E(F);G=O(J,"ir para o perfil"),J.forEach(h),c.forEach(h),this.h()},h(){K(s.src,o=a[0].fotoUrl)||u(s,"src",o),u(s,"alt","Foto do candidato"),u(s,"class","svelte-aaufrr"),u(t,"class","image-container svelte-aaufrr"),u(l,"class","nome svelte-aaufrr"),u(v,"class","partido"),u(P,"class","numero"),u(p,"class","bloco svelte-aaufrr"),u(e,"class","container svelte-aaufrr")},m(f,c){ee(f,e,c),r(e,t),r(t,s),r(t,n),i&&i.m(t,null),r(e,k),r(e,l),r(l,A),r(e,y),r(e,p),r(p,v),r(v,R),r(p,M),r(p,P),r(P,U),r(e,T),r(e,F),r(F,G),g=!0,V||(W=ie(F,"click",a[1]),V=!0)},p(f,[c]){(!g||c&1&&!K(s.src,o=f[0].fotoUrl))&&u(s,"src",o),f[0].st_REELEICAO?i||(i=Z(),i.c(),i.m(t,null)):i&&(i.d(1),i=null),(!g||c&1)&&C!==(C=f[0].nomeUrna.toLowerCase()+"")&&j(A,C),(!g||c&1)&&d!==(d=f[0].partido.sigla+"")&&j(R,d),(!g||c&1)&&S!==(S=f[0].numero+"")&&j(U,S)},i(f){g||(ce(()=>{b||(b=Q(e,Y,{duration:150},!0)),b.run(1)}),g=!0)},o(f){b||(b=Q(e,Y,{duration:150},!1)),b.run(0),g=!1},d(f){f&&h(e),i&&i.d(),f&&b&&b.end(),V=!1,W()}}}function me(a,e,t){let{candidato:s={}}=e;const o=()=>ue(`/candidato/${s.id}`);return a.$$set=n=>{"candidato"in n&&t(0,s=n.candidato)},[s,o]}class Pe extends le{constructor(e){super(),re(this,e,me,he,ne,{candidato:0})}}const te=ae([{label:"Etnia",values:[{label:"BRANCA",checked:!1},{label:"PRETA",checked:!1},{label:"PARDA",checked:!1},{label:"IND\xCDGENA",checked:!1}]},{label:"Partido",values:[{label:"PSB",checked:!1},{label:"REDE",checked:!1},{label:"PSOL",checked:!1},{label:"PMN",checked:!1},{label:"PT",checked:!1},{label:"PC do B",checked:!1},{label:"PV",checked:!1},{label:"UP",checked:!1}]},{label:"G\xEAnero",values:[{label:"MASC.",checked:!1},{label:"FEM.",checked:!1}]}]),Fe=B(te,a=>a.map(e=>e.values.filter(t=>t.checked)).reduce((e,t)=>e.concat(t),[])),_e=[{label:"dep. estadual",value:"Deputado Estadual"},{label:"dep. federal",value:"Deputado Federal"}],ve=ae({type:_e[0].value,text:""}),be=(a,e,t)=>{const s=a[e];a[e]=a[t],a[t]=s},x=de({},a=>{fetch("/dados.json").then(e=>e.json()).then(e=>{Object.values(e).forEach(t=>{t.candidatos.forEach(s=>{const o=s.fotoUrl.split(".").reverse()[0];s.fotoUrl=`/photos/${s.id}.${o}`}),t.candidatos.forEach((s,o)=>{const n=Math.floor(Math.random()*t.candidatos.length);be(t.candidatos,o,n)})}),a(e)}).catch(console.log)});function ge(a){return a?(a=a.toLowerCase(),e=>`${e.numero}`===a||e.nomeColigacao.toLowerCase().includes(a)||e.nomeUrna.toLowerCase().includes(a)):()=>!0}const q=a=>a.values.filter(e=>e.checked).map(e=>e.label);function Ee(a){const e=q(a[0]),t=l=>e.includes(l.descricaoCorRaca),s=q(a[1]),o=l=>s.includes(l.partido.sigla),n=q(a[2]),k=l=>n.includes(l.descricaoSexo);return l=>(e.length===0||t(l))&&(n.length===0||k(l))&&(s.length===0||o(l))}const ye=B([ve,te,x],([a,e,t])=>{const{type:s,text:o}=a;return!t||!t[s]?[]:t[s].candidatos.filter(Ee(e)).filter(ge(o))}),se=a=>Object.values(a).map(e=>e.candidatos).reduce((e,t)=>e.concat(t),[]),ke=B([fe,x],([a,e])=>se(e).find(s=>s.id===+a.params.id)),Se=B([ke,x],([a,e])=>a?se(e).filter(t=>t.partido.sigla===a.partido.sigla&&t.id!==a.id):[]);export{Pe as C,Fe as a,ve as b,ye as c,te as d,Y as e,_e as f,ke as g,Se as r,Ae as s};
