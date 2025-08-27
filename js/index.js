const loveIcon =document.getElementsByClassName('heart');
// console.log(loveIcon);
let number =0
for (const loves of loveIcon) {
    loves.addEventListener('click',function(){
        number++
        const heartbtn =document.getElementById('increase')
        heartbtn.innerText =number
    })  
}