input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 90) {
        basic.showString("N")
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
    } else if (input.compassHeading() == 271) {
        basic.showString("W")
    } else if (input.compassHeading() == 360) {
        basic.showString("N")
    }
})
