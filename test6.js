var angka=[5,5,5,4]
var arr=[]
for(var i=0;i<angka.length;i++)
{
    var exist=true
    for(var j=0;j<angka.length;j++)
    {
        if(angka[i]==angka[j])
        {
            exist=false
        }
        else {
            exist=true
            break
        }
    }
    if(exist)
    {
        arr.push(angka[i],angka[j]) 
        break
    }
}
console.log(arr)

