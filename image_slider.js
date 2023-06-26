const imgArray=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg']
const arrayLength=imgArray.length
let i=0
let set=setInterval(slider,1000)

function slider(){
    i++
    i=i%arrayLength
    // 0%5=0
    // 1%5=1
    // 2%5=2
    // 4%5=4
    // 5%5=0
    document.querySelector('img').src=`images/${imgArray[i]}`
}
function next(){
    i++
    i=i%arrayLength
    document.querySelector('img').src=`images/${imgArray[i]}`
}

function prev(){
    i--
    if(i<0){
    i=arrayLength-1
    }
    document.querySelector('img').src=`images/${imgArray[i]}`
}

function stops(){
    clearInterval(set)
}

function starts(){
    set=setInterval(slider,1000)
}
