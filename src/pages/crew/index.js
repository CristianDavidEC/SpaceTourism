import './crew.css'
import crewPeople from '../../assets/images/image-douglas-hurley.webp'

const CrewPage = async () => {
const view = `
<main class="crew container">
  <h5 class="crew subtitle"> <span>02</span> meet your crew</h5>
  <article class="crew article">
    <section class="crew section">
      <h4 class="crew charge">Comamnder</h4>
      <h3>Douglas Hurley</h3>
      <br>
      <p class="crew body-text">
        Douglas Gerald Hurley is an American engineer,
        former Marine Corps pilot and former NASA astronaut.
        He launched into space for the third time as commander of
        Crew Dragon Demo-2.
      </p>

      <div class="crew slice">
        <div><a class="circle active" href=""></a></div>
        <div><a class="circle" href=""></a></div>
        <div><a class="circle" href=""></a></div>
        <div><a class="circle" href=""></a></div>

    </section>
    <img class="crew img" src="${crewPeople}" alt="crew moon">
  </article>
</main>
`
return view
}

export default CrewPage