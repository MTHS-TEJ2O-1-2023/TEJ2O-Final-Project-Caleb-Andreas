/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Jan 2025
 * This program rotates stepper motors to do different tasks.
*/

// Cleanup, set radio group, then happy face.
basic.clearScreen()
radio.setGroup(149)
basic.showIcon(IconNames.Happy)

// Send signal to go forward on AB button press.
input.onButtonPressed(Button.AB, function() {
    basic.clearScreen()
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.North)
    basic.pause(75)
    basic.showIcon(IconNames.Happy)
})

// Send signal to turn left on A button press.
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.West)
    basic.pause(75)
    basic.showIcon(IconNames.Happy)
})

// Send signal to turn right on B button press.
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.East)
    basic.pause(75)
    basic.showIcon(IconNames.Happy)
})

// Send signal to go backward on shake.
input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    radio.sendNumber(4)
    basic.showArrow(ArrowNames.East)
    basic.pause(75)
    basic.showIcon(IconNames.Happy)
})

// Rotate stepper motors based off signal
radio.onReceivedNumber(function(receivedNumber: number) {
    // Go forward if 1.
    if (receivedNumber == 1) {
        robotbit.StpCarMove(30, 26)
    }

    // Turn left if 2.
    if (receivedNumber == 2) {
    robotbit.StpCarTurn(-45, 26, 300)
    }

    // Turn right if 3.
    if (receivedNumber == 3) {
        robotbit.StpCarTurn(45, 26, 300)
    }
    
    // Go backward if 4.
    if (receivedNumber == 4) {
        robotbit.StpCarMove(-30, 26)
    }
})
