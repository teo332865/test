// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`1000100001010101010101000101010101010101020000000101000000000000000101010101010001010101010101010001010101010100010101010101010100010101010101000000000000010101000101010101010101010101000000000001010101010101010101010001010101010101010101010101010100010101010101010101010100000000000101010101010101010101000101010101010101010101010100000000010101010101010101010100000101000000000000010101010101010001010101010101000101010101010100010101010101010000000000010100000101010101010101010101000301000101010101010101010101010101`, img`
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
. . . . 2 2 . . . . . . . 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
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
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
