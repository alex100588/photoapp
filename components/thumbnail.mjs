import Router from "./router.mjs";

export default class Thumbnail {
  constructor(props) {
    this.props = props;

    document.addEventListener(
      "click",
      (e) =>
        e.target &&
        e.target.classList.contains("link-button") &&
        this.onLinkClicked(e)
    );
  }

  onLinkClicked(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    Router.instance.pushHistory(e.target.dataset.link);
  }

  //componenta care trimite o singura imagine pentru container de la care se multiplica celelalte

  render() {
    return `
        <div class="thumbnail">
          <img src="${this.props.srcThumbnail}" alt="lamai">
          <div class="caption">
            <h3>${this.props.title}</h3>
            <p>${this.props.shortDesc}</p>
            <button data-link="/single-photo?id=${this.props.id}" 
        " class="btn btn-primary link-button" role="button">See more</button>
        </div>
      </div>
  `;
  }
}
