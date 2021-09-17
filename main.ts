input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
input.onButtonPressed(Button.B, function () {
    count = 0
    for (let index = 0; index < 30; index++) {
        count += 1
        basic.showNumber(count)
    }
})
let count = 0
count = 0
