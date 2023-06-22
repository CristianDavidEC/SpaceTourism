import spaceLogo from '../assets/icons/logo.svg'

const Nav = async () => {
  const newNav = document.createElement('header')

  newNav.innerHTML = `
<nav class="container-nav">
    <div class="nav logo">
        <a href="/"><img src="${spaceLogo}" alt="logo" border="0"></a>
    </div>
    <hr>
    <ul class="contlist-nav nav-text">
        <li><a href="/"><span>00</span> Home</a></li>
        <li><a href="/destination"><span>01</span> Destination</a></li>
        <li><a href="/crew"><span>02</span> Crew</a></li>
        <li><a href="/technology"><span>03</span> Technology</a></li>
    </ul>
</>
`
  return newNav
}

export default Nav
