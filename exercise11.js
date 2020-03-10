function shoppingTime(memberId, money) {
    // you can only write your code here!
    var member={
        memberId: memberId,
        money: money,
    }
    var listPurchased={
        'Sepatu Stacattu': 1500000,
        'Baju Zoro': 500000,
        'Baju H&N' :250000,
        'Sweater Uniklooh': 175000,
        'Casing Handphone': 50000
    }
    var barang=[]
    // var data =member.listPurchased=listPurchased

    // data.moneyChange=1000
    // console.log(member)
    // for (var key in listPurchased)
    // {
    //     console.log(listPurchased[key])
    // }


    if((memberId==''&&money<=50000)||(memberId==''&&money>=50000)||(memberId==undefined&&money==undefined))
    {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if (memberId==memberId&&money<50000)
    {
        return 'Mohon maaf, uang tidak cukup'
    }
    else if (memberId==memberId&&money>=50000)
    {
        for(var key in listPurchased)
        {
            if(money>=listPurchased[key])
            {
                money-=listPurchased[key]
                barang.push(key)
            }
        }
        member.listPurchased=barang
        member.changeMoney=money
        return member
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja