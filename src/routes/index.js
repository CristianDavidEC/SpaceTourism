import Nav from '../components/nav'
import Home from '../pages/home'
import Destination from '../pages/destination'
import CrewPage from '../pages/crew'
import TechnologyPage from '../pages/technology'


const routes = {
  '/': Home,
  '/destination': Destination,
  '/crew': CrewPage,
  '/technology': TechnologyPage,
}

const root = document.querySelector('#app')
const body = document.querySelector('body')

export default async function router(pathname) {
  addNavElements()
  root.innerHTML = await routes[pathname]()
  body.classList = ''
  body.classList.add(getPath(pathname))
}

const getPath = (pathname) => {
  let namePath = pathname.split('/')[1]
  return namePath ? namePath : 'home'
}

const addNavElements = async () => {
  const nav = await Nav()
  const firstElement = root.parentElement
  firstElement.insertBefore(nav, root)
}
