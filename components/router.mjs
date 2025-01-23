export default class Router {
  static $instance = null;

  constructor() {
    window.addEventListener("popstate", this.onHistoryChange, false);
  }

  pushHistory(link) {
    history.pushState({}, null, link);
  }
  // event pe browser cand schimbam url-ul
  onHistoryChange(event) {
    console.log(event);
  }

  static get instance() {
    if (Router.$instance === null) {
      Router.$instance = new Router();
    }

    return Router.$instance;
  }
}
