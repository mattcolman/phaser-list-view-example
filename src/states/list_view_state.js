import Phaser from 'phaser'
import { ListView } from 'phaser-list-view'
import GameState from './game_state'

class ListViewState extends GameState {
  preload () {
    this.game.load.crossOrigin = 'anonymous'
  }

  create () {
    var maskW = 600
    var boxW = maskW
    var boxH = 50

    var listView = new ListView(this.game, this.world, new Phaser.Rectangle(this.world.centerX - maskW / 2, 120, maskW, 400), {
      searchForClicks: true
    })

    for (var i = 0; i < 500; i++) {
      let color = Phaser.Color.getRandomColor()
      let group = this.game.make.group(null)
      let g = this.game.add.graphics(0, 0, group)
      let h = boxH + Math.floor(Math.random() * 100)
      g.beginFill(color)
       .drawRect(0, 0, boxW, h)

      let txt = this.game.add.text(boxW / 2, h / 2, i, {font: '40px Arial', fill: '#000'}, group)
      txt.anchor.set(0.5)
      let img = this.game.add.image(0, 0, group.generateTexture())
      img.inputEnabled = true
      img.events.onInputUp.add(() => {
        console.log('up')
        img.alpha = img.alpha === 0.5 ? 1 : 0.5
      })
      listView.add(img)
    }

    super.create()
  }
}

export default ListViewState
