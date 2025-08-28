// Increase heart*****

const loveIcon = document.getElementsByClassName('heart');
let count = 0
for (const loves of loveIcon) {
    loves.addEventListener('click', function () {
        count++
        const heartbtn = document.getElementById('increase')
        heartbtn.innerText = count;
    })
}

// call button ***

let points = 100;
const coin = document.getElementById('point-btn');
const callbtn = document.getElementsByClassName('call-btn');
for (let callbutton of callbtn) {
    callbutton.addEventListener('click',function(){
        console.log('clicked');
if(points >=20){
    points -= 20;
    coin.innerText =points;
    alert('20 points')

} else{
    alert('not point')
}
   
    })
    
}
















// callbtn.addEventListener('click', function () {
//     if (points >= 20) {
//         points -= 20;
//         coin.innerText = ;
//         console.log("coinbtn");
//         alert('20 point deduct')

//     } else {
//         alert('not points')
//     }

// })





