function cariMedian(arr) {
    //you can only write your code here!
    var median = 0
    var index = 0
    var temp
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    if (arr.length % 2 == 0) {
        index = arr.length / 2
        median = (arr[index - 1] + arr[index]) / 2
        return median
    } else if (arr.length % 2 !== 0) {
        index = Math.floor(arr.length / 2)
        median = arr[index]
        return median
    }
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5