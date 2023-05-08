controller.A.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.player1.moveSprite(sprites.create(assets.image`Hedgehog main character`, SpriteKind.Player))
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
