controller.A.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.player1.moveSprite(sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..........fffffffff...........
    .........ff.f.f.f.ff..........
    ........ff.........f..........
    ...................f..........
    ...................f..........
    ...................f..........
    ...................fff........
    .....................f........
    .....................f........
    ..............ffffffff........
    ..............f.f.f...........
    .................ffff.........
    .................fddf.........
    .................fddf.........
    .................fddf.........
    .................ffff.........
    ..............f.f.f...........
    ...............f..f...........
    ..........f..ff..ff...........
    ..........f..ff..f............
    ..........f..ff..f............
    ..........f..ff..f............
    ..........ffffffff............
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player))
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
