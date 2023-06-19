import Home from "../pages/home";

const routes = {
  "/": Home,
};

const root = document.getElementById("app");

export default async function router(pathname) {
  console.log(pathname);
  console.log(root);
  //root.appendChild(routes[pathname]());
}
