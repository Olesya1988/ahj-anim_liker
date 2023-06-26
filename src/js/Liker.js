export default class Liker {
  constructor(container) {
    this.container = container;
    this.properties = [
      'like1',
      'like2',
      'like3',
      'like4',
    ];
  }

  drawUI() {
    const container = document.createElement('div');
    container.classList.add('container');
    this.container.appendChild(container);

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Like';
    this.container.appendChild(button);
  }

  init() {
    this.drawUI();
    this.toAnimate();
  }

  create() {
    const container = document.querySelector('.container');
    const property = this.randomProperty();

    for (let i = 0; i < 10; i++) {
      const like = document.createElement('div');
      like.classList.add('like', property);
      container.appendChild(like);
    }
  }

  delete() {
    const container = document.querySelector('.container');
    container.replaceChildren();
  }

  toAnimate() {
    const button = document.querySelector('.button');

    button.addEventListener('click', (e) => {
      e.preventDefault();
      this.delete();
      this.create();
    });
  }

  randomProperty() {
    const index = Math.floor(Math.random() * this.properties.length);
    return this.properties[index];
  }
}
