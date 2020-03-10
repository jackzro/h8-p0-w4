function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    var detail=[]
    var nama=[]
    var profit={}
    var amount=0
    for (var i = 0; i < shoppers.length; i++) {
      profit.product=listBarang[0][0]
      if(shoppers[i].product==listBarang[0][0])
      {
        
        nama.push(shoppers[i].name)
        amount+=shoppers[i].amount
      } 
      
      
    } 
    if(amount>listBarang[0][2])
    {
      nama=[]
      profit.nama=nama
      profit.leftOver=listBarang[0][2]
      profit.totalProfit=0
    }
    else 
    {
    profit.shoppers=nama
    profit.leftOver=listBarang[0][2]-amount
    profit.totalProfit=amount*listBarang[0][1]
    }
    detail.push(profit)
    amount=0
    nama=[]
    profit={}
    for(var i=0;i<shoppers.length;i++){
    profit.product=listBarang[1][0]
    
      if(shoppers[i].product==listBarang[1][0])
      {
        nama.push(shoppers[i].name)
        amount+=shoppers[i].amount
      }
      
    }
    if(amount>listBarang[1][2])
    {
      nama=[]
      profit.nama=nama
      profit.leftOver=listBarang[1][2]
      profit.totalProfit=0
    }
    else 
    {
    profit.shoppers=nama
    profit.leftOver=listBarang[1][2]-amount
    profit.totalProfit=amount*listBarang[1][1]
    }
    detail.push(profit)
    amount=0
    nama=[]
    profit={}
    for(var i=0;i<shoppers.length;i++){
    profit.product=listBarang[2][0]
    
      if(shoppers[i].product==listBarang[2][0])
      {
        nama.push(shoppers[i].name)
        amount+=shoppers[i].amount
      }
      
    }
    if(amount>listBarang[2][2])
    {
      nama=[]
      profit.nama=nama
      profit.leftOver=listBarang[2][2]
      profit.totalProfit=0
    }
    else 
    {
    profit.shoppers=nama
    profit.leftOver=listBarang[2][2]-amount
    profit.totalProfit=amount*listBarang[2][1]
    }
    
    
    detail.push(profit)
    
    return detail
  
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
 console.log(countProfit([])); //[]