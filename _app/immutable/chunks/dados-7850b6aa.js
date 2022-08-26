import{a4 as w,a5 as le,S as oe,i as re,s as ne,k as _,a as D,q,l as m,m as E,c as $,h,r as I,H as K,n as f,b as ee,I as r,X as ie,u as V,_ as ce,$ as Q,a6 as N,a7 as te,a8 as de}from"./singletons-b5dfbf74.js";import{p as ue}from"./stores-4d0435da.js";w.disable_scroll_handling;const fe=w.goto;w.invalidate;w.prefetch;w.prefetch_routes;w.before_navigate;w.after_navigate;function pe(t){const e=t-1;return e*e*e+1}function Y(t,{delay:e=0,duration:a=400,easing:s=le}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:s,css:c=>`opacity: ${c*l}`}}function we(t,{delay:e=0,duration:a=400,easing:s=pe}={}){const l=getComputedStyle(t),c=+l.opacity,k=parseFloat(l.height),o=parseFloat(l.paddingTop),C=parseFloat(l.paddingBottom),A=parseFloat(l.marginTop),y=parseFloat(l.marginBottom),p=parseFloat(l.borderTopWidth),v=parseFloat(l.borderBottomWidth);return{delay:e,duration:a,easing:s,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*c};height: ${d*k}px;padding-top: ${d*o}px;padding-bottom: ${d*C}px;margin-top: ${d*A}px;margin-bottom: ${d*y}px;border-top-width: ${d*p}px;border-bottom-width: ${d*v}px;`}}function Z(t){let e,a;return{c(){e=_("div"),a=q("Reelei\xE7\xE3o"),this.h()},l(s){e=m(s,"DIV",{class:!0});var l=E(e);a=I(l,"Reelei\xE7\xE3o"),l.forEach(h),this.h()},h(){f(e,"class","badge svelte-qr3ulp")},m(s,l){ee(s,e,l),r(e,a)},d(s){s&&h(e)}}}function he(t){let e,a,s,l,c,k,o,C=t[0].nomeUrna.toLowerCase()+"",A,y,p,v,d=t[0].partido.sigla+"",O,B,P,S=t[0].numero+"",R,T,F,G,b,g,M,W,n=t[0].st_REELEICAO&&Z();return{c(){e=_("div"),a=_("div"),s=_("img"),c=D(),n&&n.c(),k=D(),o=_("span"),A=q(C),y=D(),p=_("div"),v=_("span"),O=q(d),B=D(),P=_("span"),R=q(S),T=D(),F=_("button"),G=q("ir para o perfil"),this.h()},l(u){e=m(u,"DIV",{class:!0});var i=E(e);a=m(i,"DIV",{class:!0});var U=E(a);s=m(U,"IMG",{src:!0,alt:!0,class:!0}),c=$(U),n&&n.l(U),U.forEach(h),k=$(i),o=m(i,"SPAN",{class:!0});var H=E(o);A=I(H,C),H.forEach(h),y=$(i),p=m(i,"DIV",{class:!0});var L=E(p);v=m(L,"SPAN",{class:!0});var X=E(v);O=I(X,d),X.forEach(h),B=$(L),P=m(L,"SPAN",{class:!0});var z=E(P);R=I(z,S),z.forEach(h),L.forEach(h),T=$(i),F=m(i,"BUTTON",{});var J=E(F);G=I(J,"ir para o perfil"),J.forEach(h),i.forEach(h),this.h()},h(){K(s.src,l=t[0].fotoUrl)||f(s,"src",l),f(s,"alt","Foto do candidato"),f(s,"class","svelte-qr3ulp"),f(a,"class","image-container svelte-qr3ulp"),f(o,"class","nome svelte-qr3ulp"),f(v,"class","partido"),f(P,"class","numero"),f(p,"class","bloco svelte-qr3ulp"),f(e,"class","container svelte-qr3ulp")},m(u,i){ee(u,e,i),r(e,a),r(a,s),r(a,c),n&&n.m(a,null),r(e,k),r(e,o),r(o,A),r(e,y),r(e,p),r(p,v),r(v,O),r(p,B),r(p,P),r(P,R),r(e,T),r(e,F),r(F,G),g=!0,M||(W=ie(F,"click",t[1]),M=!0)},p(u,[i]){(!g||i&1&&!K(s.src,l=u[0].fotoUrl))&&f(s,"src",l),u[0].st_REELEICAO?n||(n=Z(),n.c(),n.m(a,null)):n&&(n.d(1),n=null),(!g||i&1)&&C!==(C=u[0].nomeUrna.toLowerCase()+"")&&V(A,C),(!g||i&1)&&d!==(d=u[0].partido.sigla+"")&&V(O,d),(!g||i&1)&&S!==(S=u[0].numero+"")&&V(R,S)},i(u){g||(ce(()=>{b||(b=Q(e,Y,{duration:150},!0)),b.run(1)}),g=!0)},o(u){b||(b=Q(e,Y,{duration:150},!1)),b.run(0),g=!1},d(u){u&&h(e),n&&n.d(),u&&b&&b.end(),M=!1,W()}}}function _e(t,e,a){let{candidato:s={}}=e;const l=()=>fe(`/candidato/${s.id}`);return t.$$set=c=>{"candidato"in c&&a(0,s=c.candidato)},[s,l]}class Ae extends oe{constructor(e){super(),re(this,e,_e,he,ne,{candidato:0})}}const ae=te([{label:"Etnia",values:[{label:"BRANCA",checked:!1},{label:"PRETA",checked:!1},{label:"PARDA",checked:!1},{label:"IND\xCDGENA",checked:!1}]},{label:"Partido",values:[{label:"PSB",checked:!1},{label:"REDE",checked:!1},{label:"PSOL",checked:!1},{label:"PMN",checked:!1},{label:"PT",checked:!1},{label:"PC do B",checked:!1},{label:"PV",checked:!1},{label:"UP",checked:!1}]},{label:"G\xEAnero",values:[{label:"MASC.",checked:!1},{label:"FEM.",checked:!1}]}]),Pe=N(ae,t=>t.map(e=>e.values.filter(a=>a.checked)).reduce((e,a)=>e.concat(a),[])),me=[{label:"dep. estadual",value:"Deputado Estadual"},{label:"dep. federal",value:"Deputado Federal"}],ve=te({type:me[0].value,text:""}),x=de({},t=>{fetch("/dados.json").then(e=>e.json()).then(e=>{Object.values(e).forEach(a=>{a.candidatos.forEach(s=>{const l=s.fotoUrl.split(".").reverse()[0];s.fotoUrl=`/photos/${s.id}.${l}`})}),t(e)}).catch(console.log)});function be(t){return t?(t=t.toLowerCase(),e=>`${e.numero}`===t||e.nomeColigacao.toLowerCase().includes(t)||e.nomeUrna.toLowerCase().includes(t)):()=>!0}const j=t=>t.values.filter(e=>e.checked).map(e=>e.label);function ge(t){const e=j(t[0]),a=o=>e.includes(o.descricaoCorRaca),s=j(t[1]),l=o=>s.includes(o.partido.sigla),c=j(t[2]),k=o=>c.includes(o.descricaoSexo);return o=>(e.length===0||a(o))&&(c.length===0||k(o))&&(s.length===0||l(o))}const Fe=N([ve,ae,x],([t,e,a])=>{const{type:s,text:l}=t;return!a||!a[s]?[]:a[s].candidatos.filter(ge(e)).filter(be(l))}),se=t=>Object.values(t).map(e=>e.candidatos).reduce((e,a)=>e.concat(a),[]),Ee=N([ue,x],([t,e])=>se(e).find(s=>s.id===+t.params.id)),ye=N([Ee,x],([t,e])=>t?se(e).filter(a=>a.partido.sigla===t.partido.sigla&&a.id!==t.id):[]);export{Ae as C,ve as a,Pe as b,Fe as c,ae as d,Y as e,me as f,Ee as g,ye as r,we as s};
