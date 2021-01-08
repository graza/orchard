input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.East)
    basic.showString("you lose")
    basic.showArrow(ArrowNames.West)
    music.playMelody("C C D C F E C C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("you win")
    basic.clearScreen()
})
basic.showIcon(IconNames.TShirt)
basic.pause(1000)
control.inBackground(function () {
    while (true) {
        music.playMelody("C5 B E A C5 B F C5 ", 120)
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
