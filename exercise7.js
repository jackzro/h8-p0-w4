function urutkanAbjad(str) {
    // you can only write your code here!
    var abjad = []
    var res = ''
    for (var i = 0; i < str.length; i++) {
        abjad.push(str[i])
    }
    for (var i = 0; i < abjad.length; i++) {
        for (var j = 0; i < abjad.length; i++) {
            if (abjad[i] < abjad[j]) {
                var temp = abjad[i]
                abjad[i] = abjad[j]
                abjad[j] = temp
            }
        }
    }
    for (var i = 0; i < abjad.length; i++) {
        res += abjad[i]
    }
    return res
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'