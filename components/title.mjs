export default class Title {
  constructor() {
    this.heading = "My foto gallery !";
    this.subHeading = "This is my foto gallery";
  }

  render() {
    return `
          <section class="text-center jumbotron">
            <h1>${this.heading}</h1>
            <p>${this.subHeading}</p>
          </section>
       `;
  }
}
