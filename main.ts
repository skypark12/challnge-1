input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let brick: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let ball = game.createSprite(2, 2)
for (let index = 0; index <= 30; index++) {
    brick = game.createSprite(randint(0, 4), randint(0, 1))
}
basic.forever(function () {
    basic.pause(100)
    ball.change(LedSpriteProperty.Y, 1)
    if (player.isTouching(ball)) {
        for (let index = 0; index < 3; index++) {
            ball.change(LedSpriteProperty.Y, -1)
        }
    }
    if (ball.isTouching(brick)) {
        game.addScore(1)
    }
    if (ball.isTouching(brick)) {
        brick.delete()
    }
})
