export class SimpleGame {

  game: Phaser.Game;

  constructor() {
    let width: number = 800;
    let height: number = 600;

    this.game = new Phaser.Game(width, height, Phaser.AUTO, 'content', {
        preload: this.preload,
        create: this.create,
        update: this.update,
        render: this.render
    });
  }

  preload() {
    this.game.load.image('logo', 'assets/images/phaser.png');
  }

  create() {
    let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }

  update() {
  }

  render() {
  }

}

// bootstrap
let game = new SimpleGame();
