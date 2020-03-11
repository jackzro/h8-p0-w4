function fpb(angka1, angka2) {
    // you can only write your code here!
    var temp = 0
    do {
        temp = angka2
        angka2 = angka1 % angka2
        angka1 = temp

    } while (angka1 % angka2 !== 0)
    return angka2
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(1, 3)); // 1