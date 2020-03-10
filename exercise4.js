function cariModus(arr) {
    // you can only write your code here!
    var modus=[]
    var beda=[]
    var sama=0
    var high=0
    var count =0
    for(var i=0;i<arr.length;i++){
        beda.push(arr[i])
        for(var j=0;j<arr.length;j++){
            if(arr[i]==arr[j])
            {
                count++
                sama++
            }
        }
        if(high<count)
        {
            high=count
            modus=arr[i]
        }
        count=0
    }
    //console.log(high)
    //console.log(modus)
    if(high==beda.length)
    {
        return -1
    }
    if(high==1)
    {
        return -1
    }
    
    return modus
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1