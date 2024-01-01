input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("Hi Bye")
    }
})
