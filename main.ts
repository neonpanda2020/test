input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G - D - E - G E ", 120)
})
basic.forever(function () {
	
})
