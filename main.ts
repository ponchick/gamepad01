gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    Вправо = false
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    Влево = false
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    Влево = true
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Up, function () {
    Вниз = false
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    Вправо = true
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    Назад = true
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    Вперед = false
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Up, function () {
    Вверх = false
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    Вперед = true
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    Вверх = true
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    Назад = false
    Изменение = true
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    Вниз = true
    Изменение = true
})
let Вверх = false
let Вперед = false
let Назад = false
let Вниз = false
let Влево = false
let Вправо = false
let Изменение = false
Изменение = false
radio.setGroup(1)
basic.forever(function () {
    if (Изменение) {
        if (Вперед) {
            if (Влево) {
                radio.sendNumber(7)
            } else if (Назад) {
                radio.sendNumber(0)
            } else if (Вправо) {
                radio.sendNumber(9)
            } else {
                radio.sendNumber(8)
            }
        } else if (Назад) {
            if (Влево) {
                radio.sendNumber(1)
            } else if (Вправо) {
                radio.sendNumber(3)
            } else {
                radio.sendNumber(2)
            }
        } else if (Влево) {
            if (Вправо) {
                radio.sendNumber(0)
            } else {
                radio.sendNumber(4)
            }
        } else if (Вправо) {
            radio.sendNumber(6)
        } else {
            radio.sendNumber(0)
        }
        if (Вверх) {
            if (Вниз) {
                radio.sendNumber(10)
            } else {
                radio.sendNumber(18)
            }
        } else if (Вниз) {
            radio.sendNumber(12)
        } else {
            radio.sendNumber(10)
        }
        Изменение = false
    }
    basic.pause(100)
})
