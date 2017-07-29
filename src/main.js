import 'p2'
import 'pixi'
import Phaser from 'phaser'
import Game from './game'

function init () {
  const config = {
    'width': 1366,
    'height': 768,
    'renderer': Phaser.AUTO,
    'parent': 'content',
    'resolution': 1,
    'state': Game.prototype.states[0][1]
  }
  const game = new Game(config)
}

init()
