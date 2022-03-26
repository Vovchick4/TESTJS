function getNumbers(numb) {
    return String(numb).length
}
console.log(getNumbers(3834))

function perfectNumbers(numb) {
    const arrNumb = []
    let suma = 0

    for (let i = 1; i < numb; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                suma += j;
            }
        }
        if (suma == i) {
            arrNumb.push(i)
        }
        suma = 0
    }

    return arrNumb
}
console.log(perfectNumbers(83))
module.exports = { getNumbers, perfectNumbers }