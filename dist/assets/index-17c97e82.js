(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();const d="/assets/logo-43040818.svg",u=async()=>{const t=document.createElement("header");return t.innerHTML=`
<nav class="container-nav">
    <div class="nav logo">
        <a href="/"><img src="${d}" alt="logo" border="0"></a>
    </div>
    <hr>
    <ul class="contlist-nav nav-text">
        <li><a href="/"><span>00</span> Home</a></li>
        <li><a href="/destination"><span>01</span> Destination</a></li>
        <li><a href="/crew"><span>02</span> Crew</a></li>
        <li><a href="/technology"><span>03</span> Technology</a></li>
    </ul>
</>
`,t};const p=async()=>`
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

`;const h="/assets/image-moon-85007328.webp",f=async()=>`
<main class="destination container">
  <h5 class="destination subtitle"> <span>01</span> pick your destination</h5>
  <article class="destination article">
    <img class="destination img" src="${h}" alt="destination moon">

    <section class="destination section">
      <ul class="destination nav nav-text">
        <li><a href="/destination/moon">Moon</a></li>
        <li><a href="/destination/mars">Mars</a></li>
        <li><a href="/destination/europa">Europa</a></li>
        <li><a href="/destination/titan">Titan</a></li>
      </ul>

      <h2>Moon</h2>
      <p class="destination body-text">See our planet as you’ve never seen it before. A perfect
        relaxing trip away to help regain perspective and come
        back refreshed. While you’re there, take in some history
        by visiting the Luna 2 and Apollo 11 landing sites.
      </p>

      <hr class="destination div">
      <div class="destination information">
        <div class="destination info-avg">
          <p class="sub-h2">AVG. DISTANCE</p>
          <p class="sub-h1">384,400 KM</p>
        </div>
        <div class="destination info-trav">
          <p class="sub-h2">EST. TRAVEL TIME</p>
          <p class="sub-h1">3 DAYS</p>
        </div>
      </div>
    </section>
  </article>
</main>
`,m={"/":p,"/destination":f},o=document.querySelector("#app"),r=document.querySelector("body");async function c(t){y(),o.innerHTML=await m[t](),r.classList="",r.classList.add(v(t))}const v=t=>{let s=t.split("/")[1];return s||"home"},y=async()=>{const t=await u();o.parentElement.insertBefore(t,o)};window.addEventListener("DOMContentLoaded",()=>{c(window.location.pathname)});window.addEventListener("popstate",()=>{c(window.location.pathname)});
