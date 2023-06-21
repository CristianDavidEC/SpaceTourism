(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const d=async()=>`
<main class="home container">
  <div class="home text">
    <h5>SO, YOU WANT TO TRAVEL TO</h5>
    <h1>SPACE</h1>
    <p class="body-text">Let’s face it; if you want to go to space, you might as well
      genuinely go to outer space and not hover kind of on the
      edge of it. Well sit back, and relax because we’ll give you a
      truly out of this world experience!</p>
  </div>


  <div class="home container-circle">
    <a class="home-button sub-h1" href="page">Explore</a>
    <div class="circle-animate"></div>
  </div>
</main>

`,u=async()=>`<main><h3>Hola de nuevo vamos a probar si se carga el css como quiero</h3></main>
    `,f="./assets/logo-43040818.svg",p=async()=>{const t=document.createElement("header");return t.innerHTML=`
<nav class="container-nav">
    <div class="nav logo">
        <a href="/"><img src="${f}" alt="logo" border="0"></a>
    </div>
    <hr>
    <ul class="contlist-nav nav-text">
        <li><a href="/"><span>00</span> Home</a></li>
        <li><a href="/destination"><span>01</span> Destination</a></li>
        <li><a href="/crew"><span>02</span> Crew</a></li>
        <li><a href="/technology"><span>03</span> Technology</a></li>
    </ul>
</>
`,t},m={"/":d,"/page":u},a=document.querySelector("#app"),i=document.querySelector("body");async function c(t){v(),a.innerHTML=await m[t](),i.classList="",i.classList.add(h(t))}const h=t=>{let n=t.split("/")[1];return n||"home"},v=async()=>{const t=await p();a.parentElement.insertBefore(t,a)};window.addEventListener("DOMContentLoaded",()=>{c(window.location.pathname)});window.addEventListener("popstate",()=>{c(window.location.pathname)});
