import './technology.css'
import vehicle from '../../assets/images/image-launch-vehicle-portrait.jpg'

const TechnologyPage = async () => {
const view = `
<main class="technology container">
  <h5 class="technology subtitle"> <span>03</span> Sopace lunch 101</h5>
  <article class="technology article">
    <div class="technology points">
      <div class="point active">
        <h4>1</h4>
      </div>
      <div class="point">
        <h4>2</h4>
      </div>
      <div class="point">
        <h4>3</h4>
      </div>
    </div>
    <section class="technology section">
      <p class="sub-h2">The terminology</p>
      <h3>LAUNCH VEHICLE</h3>
      <p class="technology body-text">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used 
        to carry a payload from Earth's surface to space, usually to Earth 
        orbit or beyond. Our WEB-X carrier rocket is the most powerful in 
        operation. Standing 150 metres tall, it's quite an awe-inspiring 
        sight on the launch pad!
      </p>
    </section>
    <img class="technology img" src="${vehicle}" alt="technology moon">
  </article>
</main>
`
return view
}

export default TechnologyPage