var snacks=[
    {name:"Coklat",price:15000},
    {name:"Permen Gusus",price:4000},
    {name:"Pringloss",price:16000}
]
console.log(snacks[0])
console.log(snacks[2])


var name="Tasya"
var total =0
for(var i=0;i<snacks.length;i++)
{
    console.log(`${name} membeli ${snacks[i].name} dengan harga ${snacks[i].price}`)
    total+=snacks[i].price
}
console.log(`${name} menghabiskan uang sebesar ${total} untuk:`)
for(var i=0;i<snacks.length;i++)
{
    console.log(`${i+1}. ${snacks[i].name}`)
}
var uangTasya=50000
var pajak=0.01
var date ='30-01-2020'
var struk={}
var arr=[]
var simpan={}

struk.pembayaran=uangTasya
for(var i=0;i<snacks.length;i++)
{
    simpan[snacks[i].name]=snacks[i].price
}
console.log(simpan)
struk.rincianBarang=simpan

struk.hargaBarang=total
struk.pajakPembelian=total*pajak
struk.date=date
struk.uangKembalian=uangTasya-total-struk.pajakPembelian


console.log(struk)
var snacksInFebruary=[]

for(var i=0;i<snacks.length;i++)
{
    snacksInFebruary.push({
        name : snacks[i].name,
        price : snacks[i].price-2000
    })
}
console.log("\n ----January-----")
console.log(snacks)
console.log("\n ----February-----")
console.log(snacksInFebruary)

var num=11
struk[num]="hello"
struk[2]='coba'
console.log(struk)


