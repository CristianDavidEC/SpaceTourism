import './destination.css'
import moonDestination from '../../assets/images/image-moon.webp'

const Destination = async () => {
  const view = `
<main class="destination container">
  <h5 class="destination subtitle"> <span>01</span> pick your destination</h5>
  <article class="destination article">
    <img class="destination img" src="${moonDestination}" alt="destination moon">

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
`
  return view
}

export default Destination
