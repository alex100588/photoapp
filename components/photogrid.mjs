import Thumbnail from "./thumbnail.mjs";

export default class PhotoGrid {
  constructor(data) {
    this.data = data;
    this.thumbnails = [];
  }

  get thumbnailMarkup() {
    let thumbnailsHTML = "";
    this.thumbnails.forEach((thumbnail) => {
      thumbnailsHTML += `<div class="col-md-4 col-xs-6">${thumbnail.render()} </div>`;
    });

    return thumbnailsHTML;
  }

  //gridud unde se pun toate imaginile
  componentsWillRender() {
    if (this.thumbnails.length > 0) {
      return;
    }
    this.data.forEach((thumbnail) =>
      this.thumbnails.push(new Thumbnail(thumbnail))
    );
  }

  render() {
    this.componentsWillRender();

    return `
      <div class="container">    
        ${this.thumbnailMarkup}
      </div>
    `;
  }
}
