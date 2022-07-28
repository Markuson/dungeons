import Phaser from 'phaser'

var controls: any;
let canvas
export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('helloworld')
  }

  preload() {
    canvas = this.sys.game.canvas;
    this.load.image('groundTiles', 'assets/groundTileset.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemap.json');
  }

  create() {
    let { width, height } = this.sys.game.canvas;
    console.log('CANVAS SIZE: ',  { width, height })
    var map = this.add.tilemap('map');

    console.log(map);

    console.log(this.scene)
    var tileset1 = map.addTilesetImage('groundTileset', 'groundTiles');
    var groundLayer: any = map.createLayer('Tile Layer 1', [tileset1])
      .setPosition((width-128)/2, ((height-(65*20))/2)-63);
    // var cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setZoom(1)
   
    // var controlConfig = {
      // camera: this.cameras.main,
      // left: cursors.left,
      // right: cursors.right,
      // up: cursors.up,
      // down: cursors.down,
      // acceleration: 0.04,
      // drag: 0.0005,
      // maxSpeed: 0.7
    // };

    // controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    this.input.on(Phaser.Input.Events.POINTER_DOWN, (pointer: Phaser.Input.Pointer) => {
      console.log('CLICK')
      const { worldX, worldY } = pointer
  
      // const startVec = groundLayer.worldToTileXY(this.faune.x, this.faune.y)
      const target = groundLayer.worldToTileXY(worldX, worldY)
      console.log(target)
      console.log('Clicked on tile: ', {x: Math.floor(target.x)-1, y:  Math.floor(target.y)})
    })

    this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.input.off(Phaser.Input.Events.POINTER_UP)
    })
  }

  update(time: any, delta: any) {
    // controls.update(delta);
  }
}
