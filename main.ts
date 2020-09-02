gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendNumber(3)
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendNumber(4)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    radio.sendNumber(2)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendNumber(1)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    radio.sendNumber(5)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    radio.sendNumber(6)
})
radio.setGroup(1)
