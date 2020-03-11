function nominasi(votes){
    var res=[]
    for (let i = 0; i < votes.length; i++) {
        var exist=true
        for (let j = 0; j < res.length; j++) {
            console.log(res.length)
            if(res[j]===votes[i])
            {
                exist=false
            }    
        }
        if (exist)
        {
            res.push(votes[i])
        }
    }
return res

}
var femaleArtist=[
    'Billie Eilish',
    'Billie Eilish',
    'Selena Gomez',
    'taylor swift',
    'taylor swift',
    'lady gaga',
    'taylor swift',
    'Selena Gomez',
    'taylor swift',
    'Selena Gomez',
]

console.log(nominasi(femaleArtist))