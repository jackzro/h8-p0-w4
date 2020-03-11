function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var tukar = []
    var res = ''
    for (var i = 0; i < kalimat.length; i++) {
        tukar.push(kalimat[i])
    }
    for (var i = 0; i < tukar.length; i++) {
        if (tukar[i] == tukar[i].toUpperCase()) {
            tukar[i] = tukar[i].toLowerCase()
        } else if (tukar[i] == tukar[i].toLowerCase()) {
            tukar[i] = tukar[i].toUpperCase()
        }
    }
    for (var i = 0; i < tukar.length; i++) {
        res += tukar[i]
    }
    return res
    //console.log(tukar[5]==tukar[5].toLowerCase())
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"