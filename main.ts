input.onButtonPressed(Button.A, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    shot = game.createSprite(ship.get(LedSpriteProperty.X), 4)
    while (!(shot.get(LedSpriteProperty.Y) < 1 && !(shot.isTouching(asteroid)))) {
        shot.change(LedSpriteProperty.Y, -1)
        basic.pause(25)
        if (shot.isTouching(asteroid)) {
            asteroid.delete()
            points += 1
            if (points % 5 == 0) {
                level += 1
                warte = warte * 0.95
            }
            asteroid = game.createSprite(randint(0, 4), 0)
        }
    }
    shot.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let shot: game.LedSprite = null
let warte = 0
let points = 0
let asteroid: game.LedSprite = null
let ship: game.LedSprite = null
let game_end = false
ship = game.createSprite(2, 4)
asteroid = game.createSprite(randint(0, 4), 0)
points = 0
warte = 1000
let level = 0
basic.forever(function () {
    basic.pause(warte)
    while (asteroid.get(LedSpriteProperty.Y) < 4) {
        asteroid.change(LedSpriteProperty.Y, 1)
        basic.pause(warte)
    }
    if (asteroid.isTouching(ship)) {
        asteroid.delete()
        ship.delete()
        basic.showString("Game over - " + "Points: " + ("" + points) + "Level: " + ("" + level))
        level = 0
        points = 0
        warte = 1000
        ship = game.createSprite(2, 4)
        asteroid = game.createSprite(randint(0, 4), 0)
    } else {
        asteroid.delete()
        asteroid = game.createSprite(randint(0, 4), 0)
    }
})
