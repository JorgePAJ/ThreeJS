import{S as y,P as L,W as b,T as x,M as d,a as l,b as S,A as P,c as v,G as M,O as A,d as f,e as w,f as O}from"./vendor.a1048b20.js";const T=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};T();const n=new y,a=new L(75,window.innerWidth/window.innerHeight,.1,1e3),r=new b({canvas:document.querySelector("#bg")});r.setPixelRatio(window.devicePixelRatio);r.setSize(window.innerWidth,window.innerHeight);a.position.setZ(30);r.render(n,a);const G=new x(10,3,16,100),j=new d({color:16737095}),u=new l(G,j),m=new S(16777215);m.position.set(20,20,20);const H=new P;n.add(m,H);new v(m);new M(200,50);const W=new A(a,r.domElement);function q(){const p=new w(.25,24,24),o=new d({color:16777215}),i=new l(p,o),[s,e,t]=Array(3).fill().map(()=>O.randFloatSpread(100));i.position.set(s,e,t),n.add(i)}Array(200).fill().forEach(q);const z=new f().load("space.jpeg");n.background=z;function g(){requestAnimationFrame(g),h.rotation.y+=.005,u.rotation.x+=.01,u.rotation.y+=.005,u.rotation.z+=.01,W.update(),r.render(n,a)}const E=new f().load("moon.jpeg"),F=new f().load("normal.jpeg"),h=new l(new w(3,32,32),new d({map:E,normalMap:F}));n.add(h);g();