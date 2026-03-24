def on_button_pressed_a():
    ship.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global shot, points, warte, asteroid
    shot = game.create_sprite(ship.get(LedSpriteProperty.X), 4)
    while not (shot.get(LedSpriteProperty.Y) == 0 and not (shot.is_touching(asteroid))):
        shot.change(LedSpriteProperty.Y, -1)
        basic.pause(25)
        if shot.is_touching(asteroid):
            asteroid.delete()
            points += 1
            if points % 5 == 0:
                warte = warte - 100
            asteroid = game.create_sprite(randint(0, 4), 4)
    shot.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    ship.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

level = 0
shot: game.LedSprite = None
warte = 0
points = 0
asteroid: game.LedSprite = None
ship: game.LedSprite = None
game_end = False
ship = game.create_sprite(2, 4)
asteroid = game.create_sprite(randint(0, 4), 0)
points = 0
warte = 1000

def on_forever():
    global level, points, warte, ship, asteroid
    basic.pause(warte)
    while asteroid.get(LedSpriteProperty.Y) < 4:
        asteroid.change(LedSpriteProperty.Y, 1)
        basic.pause(warte)
    if asteroid.is_touching(ship):
        asteroid.delete()
        ship.delete()
        basic.show_string("Game over - " + "Points: " + ("" + str(points)) + "Level: " + ("" + str(level)))
        level = 0
        points = 0
        warte = 1000
        ship = game.create_sprite(2, 4)
        asteroid = game.create_sprite(randint(0, 4), 0)
    else:
        asteroid.delete()
        asteroid = game.create_sprite(randint(0, 4), 0)
basic.forever(on_forever)
