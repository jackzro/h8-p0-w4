function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var hasil = 0
    var minimum = ''
    var res = []
    var digit = 0
    for (var i = 1; i <= angka; i++) {
        hasil = angka / i
        minimum = '' + hasil + i + ''
        res.push(minimum)
    }
    digit = res[0].length
    for (var j = 0; j < res.length; j++) {
        if (digit > res[j].length) {
            digit = res[j].length
        }
    }
    return digit
}

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2