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

// leftTrack on/off on a button press.
input.onButtonPressed(Button.A, function() {
    if (leftTrack == 0) {
        leftTrack = 1
        radio.sendNumber(leftTrack = 1)
        basic.clearScreen()
        basic.showString('L on')
        basic.showIcon(IconNames.Happy)
    } else {
        leftTrack = 0
        basic.clearScreen()
        radio.sendNumber(leftTrack = 0)
        basic.showString('L off')
        basic.showIcon(IconNames.Happy)
    }
})

// rightTrack on/off on a button press.
input.onButtonPressed(Button.B, function () {
    if (rightTrack == 0) {
        rightTrack = 1
        radio.sendNumber(rightTrack = 1)
        basic.clearScreen()
        basic.showString('R on')
        basic.showIcon(IconNames.Happy)
    } else {
        rightTrack = 0
        basic.clearScreen()
        radio.sendNumber(rightTrack = 0)
        basic.showString('R off')
        basic.showIcon(IconNames.Happy)
    }
})

// Left motor loop.
radio.onReceivedNumber(function(leftTrack: number) {
    while (true) {
        robotbit.StepperDegree(robotbit.Steppers.M1, 10)
        if (input.buttonIsPressed(Button.A) == true || leftTrack == 0) {
            robotbit.MotorStop(robotbit.Motors.M1A)
            break
        }
    }
})

// Right motor loop.
radio.onReceivedNumber(function (rightTrack: number) {
    while (true) {
        robotbit.StepperDegree(robotbit.Steppers.M2, 10)
        if (input.buttonIsPressed(Button.A) == true || rightTrack == 0) {
            robotbit.MotorStop(robotbit.Motors.M2A)
            break
        }
    }
})
