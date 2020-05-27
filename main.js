// kata 01 add
function add(x, y) {
    const total = x + y
    return total
}
console.log('kata 01', add(3, 7))
console.log('kata 01', add(-2, -5))
console.log('kata 01', add(9, -5))
console.log('kata 01', add(-9, 7))

// kata 02 multiply
function multiplication(x, b) {
    let y = 0
    for (let i = b; i > 0; i -= 1) {
        y = add(x, y)
    }

    return y
}
console.log('kata 02', multiplication(2, 4))
console.log('kata 02', multiplication(20, 7))
console.log('kata 02', multiplication(0, 7))
console.log('kata 02', multiplication(1, 10))

// kata 03 powers
function power(x, d) {
    let b = 1
    for (let i = d; i > 0; i -= 1) {
        b = multiplication(x, b)
    }


    return b
}
console.log('kata 03', power(3, 2))
console.log('kata 03', power(2, 8))
console.log('kata 03', power(4, 2))
console.log('kata 03', power(2, 3))

// kata o4 factorial
function factorial(a) {
    let x = a

    for (let i = 1; i < a; i += 1) {
        let b = i
        x = multiplication(x, b)
    }
    return x
}
console.log('kata 04', factorial(5))
console.log('kata 04', factorial(7))
console.log('kata 04', factorial(3))
console.log('kata 04', factorial(4))

