var angka=[5,5,5,4]
var arr=[]
for(var i=0;i<angka.length;i++)
{
    var exist=true
    for(var j=0;j<angka.length;j++)
    {
        if(angka[i]!==angka[j])
        {
            exist=false
        }
    }
    if(exist)
    {
        arr.push(angka[i]) 
    }
    console.log(arr)
}
console.log(arr)

function highestScore (students) {
    // Code disini
    var highValue={}
    // var simpan=[]
        var flag=[]
    //     var student={}
        var idx=0
    for(var i=0;i<students.length;i++)
    {
        var simpan=[]
        // var flag=[]
        var student={}
        if(flag[i]==null){
            simpan.push(students[i])
            flag[i]=false
        }
        for(var j=0;j<students.length;j++)
        {
            if(students[i].class==students[j].class&&i!==j&&flag[j]!==false)
            {
                flag[j]=false
                // flag[i]=false
                simpan.push(students[j])
                idx++
                console.log(simpan)
            }
            // else if(students[i].class!==students[j].class&&i!==j)
            // {
            //     simpan.push(students[i])
            //     // console.log(simpan)
            // }
        }
        // if(flag[i]==null){
        //     simpan.push(students[i])
        //     flag[i]=false
        // }
        // console.log(flag)
        // console.log(idx)
        // console.log(simpan)
    // }
    // console.log(simpan)
        for(var k=0;k<simpan.length;k++){
            for(var l=0;l<simpan.length;l++)
            {
                if(simpan[k].score>simpan[l].score&&k!==l)
                {
                    student.name=simpan[k].name
                    student.score=simpan[k].score
                }
                else if(simpan[k].score<simpan[l].score&&k!==l){
                    student.name=simpan[l].name
                    student.score=simpan[l].score
                }
                else if(simpan.length==1)
                {
                    student.name=simpan[k].name
                    student.score=simpan[k].score
                }
            }
            highValue[simpan[k].class]=student
        }
    }
    return highValue
  }

  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}
