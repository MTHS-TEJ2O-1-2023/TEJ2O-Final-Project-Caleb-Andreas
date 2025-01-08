/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Jan 2025
 * This program rotates a specific stepper motor depending on the signal it receives.
*/

// Variables.
let leftTrack = 0
let rightTrack = 0

// Set group, cleanup then happy face at start.
radio.setGroup(149)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    if (leftTrack == 0) {
        leftTrack = leftTrack + 1
        radio.sendNumber(leftTrack = leftTrack + 1)
        basic.clearScreen()
        basic.showString('L on')
        basic.showIcon(IconNames.Happy)
    } else {
        leftTrack = leftTrack - 1
        basic.clearScreen()
        radio.sendNumber(leftTrack = leftTrack - 1)
        basic.showString('L off')
        basic.showIcon(IconNames.Happy)
    }
})
