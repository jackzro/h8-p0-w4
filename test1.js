var myBiodata={
    name:"yourname",
    age:23,
    batch:42
}
console.log(myBiodata)
myBiodata['name']='jackson'
console.log(myBiodata)
myBiodata.hobby='basket'
console.log(myBiodata)
for(var key in myBiodata)
{
    console.log(key, myBiodata[key])
}
delete myBiodata['age']
console.log(myBiodata)
myBiodata.scores=[[100,100,100],[100,90,99],[90,100,99]]
console.log(myBiodata.scores)
var total=0
var average=[]
for(var i=0;i<myBiodata.scores.length;i++){
    for(var j=0;j<myBiodata.scores[i].length;j++)
    {
    total+=myBiodata.scores[i][j]
    }

    total=total/myBiodata.scores[i].length
    average.push(total)
    total=0
}
console.log(average)
myBiodata.average=average
console.log(myBiodata)
var semua=0
for(var i=0;i<myBiodata.average.length;i++)
{
    semua+=myBiodata.average[i]
    
}
semua=semua/myBiodata.average.length
console.log(semua)
myBiodata.semuaAverage=semua
console.log(myBiodata)
// var percentage=total/myBiodata.scores.length
// console.log(percentage)
// myBiodata.percentage=percentage
// console.log(myBiodata)