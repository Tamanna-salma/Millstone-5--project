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
const history = document.getElementById('all-history');
const historyremove = document.getElementById('parent-div');
for (let callbutton of callbtn) {
    callbutton.addEventListener('click', function () {

        const heading = callbutton.parentNode.parentNode.children[1].children[0].innerText;
        // const subheading =callbutton.parentNode.parentNode.children[1].children[1].innerText
        const Number = callbutton.parentNode.parentNode.children[1].children[2].innerText;
        const gettime = new Date();
        const date = gettime.toLocaleDateString();
        const somoy = gettime.toLocaleTimeString();
        const historyCard = document.createElement("div");

        historyCard.innerHTML = `
<div class="card bg-[#dfdddd] mt-4 p-4">
    <h4 class="text-lg font-bold">${heading}</h4>
    <h2 class="text-lg font-bold">${Number}</h2>
  <p>Time : ${somoy}</p>
  <p>Date : ${date}</p>
</div>
        `;

        history.append(historyCard); 
        if (points >= 20) {
            points -= 20;
            coin.innerText = points;
            alert(`
                ${heading}
                 ${Number} 
                Time :${somoy} 
                Date :${date}`)

        } else {
            alert('not points')
        }
    })
}

// clear-button***
 
const clearbutton =document.getElementById('clear-button');
clearbutton.addEventListener('click',function(){
const historyremove = document.getElementById('all-history');
  historyremove.innerHTML =''    
})

// copy button***

const allcopy = document.getElementsByClassName('copy-btn');
const phonecall =document.getElementsByClassName('imergency-number')
let copynumber = 0;
for (const copybuttons of allcopy) {
    copybuttons.addEventListener('click', function () {
        copynumber ++
        const duplicate = document.getElementById('counting')
        duplicate.innerText = copynumber;
         const copyNumber = copybuttons.parentNode.parentNode.children[1].children[2].innerText;
         navigator.clipboard.writeText(copyNumber)
         .then(()=>{
            alert(`Copied : ${copyNumber}`);

         }).catch("Not copied numer")        
    })
}




 











