import './base.css';
import './style.css';
import router from "./routes";

window.addEventListener('DOMContentLoaded', () => {
  router(window.location.pathname);
});

window.addEventListener('popstate', () => {
  router(window.location.pathname);
});
