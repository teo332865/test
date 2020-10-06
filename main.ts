scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    music.pewPew.play()
    info.changeScoreBy(1)
    tiles.setTileAt(location, myTiles.transparency16)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.powerUp.play()
    info.changeScoreBy(50)
    tiles.setTileAt(location, myTiles.transparency16)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    music.baDing.play()
    game.over(true)
})
info.startCountdown(20)
effects.clouds.startScreenEffect()
let mySprite = sprites.create(img`
    . 5 5 5 5 5 . . 
    . 4 7 4 7 4 . 8 
    . 1 4 2 4 1 . 8 
    . 4 1 1 1 4 . 8 
    e e . 8 . . . 8 
    e e 8 8 8 4 4 f 
    e e f f f . . . 
    . . f . f . . . 
    `, SpriteKind.Player)
let myEnemy = sprites.create(img`
    . f . f . . . f . . . f . f . . 
    . f f f f f f f f f f f f f . . 
    . . f 2 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 1 f 2 2 2 f 1 2 f . . . 
    . . f 2 2 2 2 f 2 2 2 2 f . . . 
    . . f 2 3 3 3 3 3 3 3 2 f . . . 
    . . f 2 2 2 2 2 2 3 3 2 f . . . 
    . . . e 8 e e e e 3 3 e . . . . 
    . e . e 8 e e e e e 8 e 1 6 1 . 
    e e e e 8 3 e e e 3 8 e 6 1 6 . 
    e e e e 8 e e e e e 8 e 1 6 1 . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 . 8 8 8 . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(3)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101030101010101010101020006000101050000000000060101010101010001010101010101010001010101010100010101010101010100010101010101000006000000010101000101010101010101010101000006000001010101010101010101010001010101010101010101010101010100010101010101010101010100000000000101010101010101010101060101010101010101010101010100000000010101010101010101010103000101000000000000010101010101010001010101010101000101010101010106010101010101010000000600010100000101010101010101010101000401030101010101010101010101010101`, img`
    2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
    . . . . 2 2 . . . . . . . 2 2 2 
    2 2 2 . 2 . 2 2 2 2 2 2 . 2 2 2 
    2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
    2 2 2 . . . . . . 2 2 2 . 2 2 2 
    2 2 2 2 2 2 2 2 . . . . . 2 2 2 
    2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
    2 2 2 2 . . . . . 2 2 2 2 2 2 2 
    2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
    2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
    2 . . 2 2 . . . . . . 2 2 2 2 2 
    2 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 
    2 2 . 2 2 2 2 2 2 2 . . . . . 2 
    2 . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,myTiles.tile1,sprites.dungeon.chestClosed,sprites.dungeon.stairLarge,sprites.dungeon.stairLadder,myTiles.tile3], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, myTiles.tile1)
scene.cameraFollowSprite(mySprite)
myEnemy.follow(mySprite, 150)
tiles.placeOnRandomTile(myEnemy, sprites.dungeon.stairLadder)
