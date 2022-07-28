import Phaser from 'phaser'

// import HelloWorldScene from './scenes/HelloWorldScene'
// import ExampleGameScene from './scenes/ExampleGameScene'
import TileExampleScene from './scenes/TileExampleScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#282c34',
  // width:800,
  // height: 600,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.ScaleModes.FIT,
    width: window.innerWidth,
    height: window.innerHeight,
    // mode: Phaser.Scale.FIT,
    // width: 800,
    // height: 600,
  },
  // physics: {
  //   default: 'arcade',
  //   arcade: {
  //     gravity: { y: 200 },
  //     debug: false,
  //   },
  // },
  scene: [TileExampleScene],
}

export default new Phaser.Game(config)
