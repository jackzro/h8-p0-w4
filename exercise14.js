function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var detail = []
    for (var i = 0; i < arrPenumpang.length; i++) {
    var angkot = {}
    angkot.penumpang = arrPenumpang[i][0]
    angkot.naikDari = arrPenumpang[i][1]
    angkot.tujuan = arrPenumpang[i][2]
    for (var j = 0; j < rute.length; j++) {
        if (arrPenumpang[i][1] == rute[j]) {
            var awal = j
        }
        if (arrPenumpang[i][2] == rute[j]) {
            var akhir = j
        }
    }
    angkot.bayar = (akhir - awal) * 2000
    if (angkot.bayar < 0) {
        angkot.bayar *= -1
    }
    detail.push(angkot)
    }
    return detail
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'F', 'A'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]