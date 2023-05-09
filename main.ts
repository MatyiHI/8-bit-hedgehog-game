controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.setLife(3)
controller.moveSprite(sprites.create(assets.image`Hedgehog main character`, SpriteKind.Player), 100, 100)
scene.setBackgroundImage(assets.image`temp background`)
music.play(music.createSong(assets.song`Song`), music.PlaybackMode.UntilDone)
let projectile = sprites.createProjectileFromSprite(assets.image`image`, sprites.create(assets.image`Evil hedgehog`, SpriteKind.Enemy), 10, 50)
if (sprites.create(assets.image`myImage0`, SpriteKind.Player).overlapsWith(sprites.create(assets.image`Evil hedgehog`, SpriteKind.Enemy))) {
    sprites.create(assets.image`myImage0`, SpriteKind.Player).follow(sprites.create(assets.image`Evil hedgehog`, SpriteKind.Enemy))
    sprites.destroy(sprites.create(assets.image`Evil hedgehog`, SpriteKind.Enemy))
}
