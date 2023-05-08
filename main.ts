info.onLifeZero(function () {
    game.setGameOverMessage(true, "GAME OVER!")
})
info.setLife(3)
scene.setBackgroundImage(assets.image`temp background`)
controller.moveSprite(sprites.create(assets.image`Hedgehog main character`, SpriteKind.Player))
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
sprites.create(assets.image`Hedgehog main character`, SpriteKind.Player).setStayInScreen(true)
