function checkAB(num) {
    // you can only write your code here!
    var char = ''
    var temp = ''
    var jarak = 0
    for (var i = 0; i < num.length; i++) {
        if (num[i] == char) {
            jarak = i - temp - 1
            if (jarak == 3) {
                return true
            } else {
                continue
            }
        } else {
            if (num[i] == 'a') {
                char = 'b'
                temp = i
            } else if (num[i] == 'b') {
                char = 'a'
                temp = i
            }
        }
    }
    return false
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false