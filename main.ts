input.onButtonPressed(Button.A, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    shot = game.createSprite(ship.get(LedSpriteProperty.X), 4)
    while (!(shot.get(LedSpriteProperty.Y) == 0 && !(shot.isTouching(asteroid)))) {
        shot.change(LedSpriteProperty.Y, -1)
        basic.pause(25)
        if (shot.isTouching(asteroid)) {
            asteroid.delete()
            points += 1
            if (points % 5 == 0) {
                pause2 = 0.95 * pause2
            }
            asteroid = game.createSprite(randint(0, 4), 4)
        }
    }
    shot.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let level = 0
let shot: game.LedSprite = null
let pause2 = 0
let points = 0
let asteroid: game.LedSprite = null
let ship: game.LedSprite = null
let game2 = false
ship = game.createSprite(2, 4)
asteroid = game.createSprite(randint(0, 4), 0)
points = 0
pause2 = 1000
basic.forever(function () {
    basic.pause(pause2)
    while (asteroid.get(LedSpriteProperty.Y) < 4) {
        asteroid.change(LedSpriteProperty.Y, 1)
        basic.pause(pause2)
    }
    if (asteroid.isTouching(ship)) {
        asteroid.delete()
        ship.delete()
        basic.showString("Game over - " + "Points: " + ("" + points) + "Level: " + ("" + level))
        level = 0
        points = 0
        pause2 = 1000
        ship = game.createSprite(2, 4)
        asteroid = game.createSprite(randint(0, 4), 0)
    } else {
        asteroid.delete()
        asteroid = game.createSprite(randint(0, 4), 0)
    }
})
