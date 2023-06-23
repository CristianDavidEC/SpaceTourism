import "./home.css";

const Home = async () => {
  const view = `
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

`;
  return view;
};

export default Home;
