namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Infested_Bamboo = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Infested_Bamboo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Mutated_Whitefly = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Mutated_Whitefly,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b . . . . b b . . . . 
        . . . b 1 1 b . . b 1 1 b . . . 
        . . . b 1 1 1 b b 1 1 1 b . . . 
        . . . . b 1 1 b b 1 1 b . . . . 
        . . . . . b b 1 1 b b . . . . . 
        . . . . b d d 1 1 d d b . . . . 
        . . . . b d 6 1 1 6 d b . . . . 
        . . . . b d d b b d d b . . . . 
        . . . . . b b f f b b . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . . 7 . . 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . b 1 1 b b 1 1 b . . . . 
        . . . . b 1 1 b b 1 1 b . . . . 
        . . . . . b b 1 1 b b . . . . . 
        . . . . b d d 1 1 d d b . . . . 
        . . . . b d 6 1 1 6 d b . . . . 
        . . . . b d d b b d d b . . . . 
        . . . . . b b f f b b . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . . 7 . . 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . b b 1 1 b b . . . . . 
        . . . . b d d 1 1 d d b . . . . 
        . . . . b d 6 1 1 6 d b . . . . 
        . . . . b d d b b d d b . . . . 
        . . . . . b b f f b b . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . . 7 . . 7 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    Mutated_Whitefly.setPosition(Hanyi.x + 75, Hanyi.y - 60)
    Mutated_Whitefly.follow(Hanyi)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acidic water - deadly1`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Finish`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hanyi.vy == 0) {
        Hanyi.vy = -160
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Treasure Chest`, function (sprite, location) {
    info.changeScoreBy(1000000000)
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Hanyi.y < Mutated_Whitefly.y) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
        sprites.destroy(otherSprite)
    }
})
let Mutated_Whitefly: Sprite = null
let Infested_Bamboo2: Sprite = null
let coin: Sprite = null
let Hanyi: Sprite = null
scene.setBackgroundColor(9)
Hanyi = sprites.create(assets.image`Hanyi idle`, SpriteKind.Player)
Hanyi.setPosition(30, 70)
controller.moveSprite(Hanyi, 80, 0)
info.setLife(4)
tiles.setCurrentTilemap(tilemap`Map 1`)
scene.cameraFollowSprite(Hanyi)
Hanyi.ay = 350
for (let value of tiles.getTilesByType(assets.tile`Coin`)) {
    coin = sprites.create(assets.image`Coin Value 1`, SpriteKind.Coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . f f f f f f f f . . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . f f 5 5 5 4 5 5 1 5 5 5 f f . 
        . f 5 4 4 5 5 5 5 5 1 1 1 5 f . 
        f f 5 4 5 5 5 5 4 5 5 1 1 5 f f 
        f 5 5 5 5 5 5 4 4 5 5 5 1 5 5 f 
        f 5 4 5 5 5 4 4 4 5 5 5 5 1 5 f 
        f 5 4 5 5 5 5 4 4 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 4 4 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 4 4 5 5 5 5 5 5 f 
        f 5 5 5 5 5 4 4 4 4 5 5 4 5 5 f 
        f 5 5 4 5 5 5 5 5 5 5 5 4 5 5 f 
        f f 5 5 4 5 5 5 5 5 5 4 5 5 f f 
        . f f 5 5 5 4 5 4 4 5 5 5 f f . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . . . f f f f f f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f 5 5 4 5 5 1 5 5 f f . . 
        . . f 5 4 4 5 5 5 5 1 1 5 f . . 
        . f f 5 4 5 5 5 4 5 1 1 5 f f . 
        . f 5 5 5 5 5 4 4 5 5 1 5 5 f . 
        . f 5 4 5 5 5 4 4 5 5 5 1 5 f . 
        . f 5 4 5 5 5 5 4 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 4 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 4 5 5 5 5 5 f . 
        . f 5 5 5 5 4 4 4 4 5 4 5 5 f . 
        . f 5 5 4 5 5 5 5 5 5 4 5 5 f . 
        . f f 5 5 4 5 5 5 5 4 5 5 f f . 
        . . f f 5 5 4 5 4 4 5 5 f f . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f 5 5 5 5 5 5 f f . . . 
        . . . f 5 4 4 5 5 1 1 5 f . . . 
        . . f f 5 4 5 5 4 1 1 5 f f . . 
        . . f 5 5 5 5 4 4 5 1 5 5 f . . 
        . . f 5 4 5 5 5 4 5 5 1 5 f . . 
        . . f 5 4 5 5 5 4 5 5 5 5 f . . 
        . . f 5 5 5 5 5 4 5 5 5 5 f . . 
        . . f 5 4 5 5 5 4 5 5 5 5 f . . 
        . . f 5 5 5 5 4 4 5 4 5 5 f . . 
        . . f 5 5 4 5 5 5 5 4 5 5 f . . 
        . . f f 5 5 4 5 5 4 5 5 f f . . 
        . . . f f 5 5 5 4 5 5 f f . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 4 4 1 1 5 f . . . . 
        . . . f f 5 4 5 1 1 5 f f . . . 
        . . . f 5 5 5 5 5 1 5 5 f . . . 
        . . . f 5 4 5 5 5 5 1 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 4 5 5 f . . . 
        . . . f 5 5 4 5 5 4 5 5 f . . . 
        . . . f f 5 5 4 4 5 5 f f . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . f 5 4 1 5 f . . . . . 
        . . . . f f 5 4 1 5 f f . . . . 
        . . . . f 5 5 5 1 5 5 f . . . . 
        . . . . f 5 4 5 5 1 5 f . . . . 
        . . . . f 5 4 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 5 f . . . . 
        . . . . f 5 5 5 4 5 5 f . . . . 
        . . . . f 5 5 4 4 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 4 1 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 4 5 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 1 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . . f 5 4 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 1 4 5 f . . . . . 
        . . . . . f 5 5 4 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 4 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . . f 5 5 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . f 5 1 4 5 f . . . . . 
        . . . . f f 5 1 4 5 f f . . . . 
        . . . . f 5 5 1 5 5 5 f . . . . 
        . . . . f 5 1 5 5 4 5 f . . . . 
        . . . . f 5 5 5 5 4 5 f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 4 5 f . . . . 
        . . . . f 5 5 4 5 5 5 f . . . . 
        . . . . f 5 5 4 4 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . f f 5 5 f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 1 1 4 4 5 f . . . . 
        . . . f f 5 1 1 5 4 5 f f . . . 
        . . . f 5 5 1 5 5 5 5 5 f . . . 
        . . . f 5 1 5 5 5 5 4 5 f . . . 
        . . . f 5 5 5 5 5 5 4 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 4 5 f . . . 
        . . . f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 5 4 5 5 4 5 5 f . . . 
        . . . f f 5 5 4 4 5 5 f f . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f 5 5 5 5 5 5 f f . . . 
        . . . f 5 4 4 5 5 1 1 5 f . . . 
        . . f f 5 4 5 5 4 1 1 5 f f . . 
        . . f 5 5 5 5 4 4 5 1 5 5 f . . 
        . . f 5 4 5 5 5 4 5 5 1 5 f . . 
        . . f 5 4 5 5 5 4 5 5 5 5 f . . 
        . . f 5 5 5 5 5 4 5 5 5 5 f . . 
        . . f 5 4 5 5 5 4 5 5 5 5 f . . 
        . . f 5 5 5 5 4 4 5 4 5 5 f . . 
        . . f 5 5 4 5 5 5 5 4 5 5 f . . 
        . . f f 5 5 4 5 5 4 5 5 f f . . 
        . . . f f 5 5 5 4 5 5 f f . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f 5 5 4 5 5 1 5 5 f f . . 
        . . f 5 4 4 5 5 5 5 1 1 5 f . . 
        . f f 5 4 5 5 5 4 5 1 1 5 f f . 
        . f 5 5 5 5 5 4 4 5 5 1 5 5 f . 
        . f 5 4 5 5 5 4 4 5 5 5 1 5 f . 
        . f 5 4 5 5 5 5 4 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 4 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 4 5 5 5 5 5 f . 
        . f 5 5 5 5 4 4 4 4 5 4 5 5 f . 
        . f 5 5 4 5 5 5 5 5 5 4 5 5 f . 
        . f f 5 5 4 5 5 5 5 4 5 5 f f . 
        . . f f 5 5 4 5 4 4 5 5 f f . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    for (let value2 of tiles.getTilesByType(assets.tile`Bamboo`)) {
        Infested_Bamboo2 = sprites.create(assets.image`Infested Bamboo`, SpriteKind.Infested_Bamboo)
        tiles.placeOnTile(Infested_Bamboo2, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
}
game.onUpdate(function () {
    Hanyi.setImage(assets.image`Hanyi idle`)
    if (Hanyi.vx < 0) {
        Hanyi.image.flipX()
    }
    if (Hanyi.vy < 0) {
        Hanyi.setImage(img`
            . . . . . . . c c c c c c c . . 
            . . . . . . c c c c b b b c c . 
            . . . . . . c c b b b c c c c . 
            . . . . . b b b b b b c 1 f d c 
            . . . . . b b b b b b c d d c c 
            . . . . . c c c b b b b c c c c 
            . . . . . c c c c c c b b b c c 
            . . . . . b b b c c c c b b c c 
            . . . . . c b b b b b b b b c c 
            . . . . . c c c c b b b b c c 1 
            . . . . . 1 c c c c c c c c 1 . 
            . . . . . 1 . 1 . 1 . 1 . . 1 . 
            . . . . . 1 . 1 . 1 . 1 . . 1 . 
            . . . . . 1 . 1 . 1 . 1 . . 1 . 
            . . . . . 1 . . . 1 . 1 . . . . 
            . . . . . . . . . 1 . . . . . . 
            `)
        if (Hanyi.vx < 0) {
            Hanyi.image.flipX()
        }
    }
})
