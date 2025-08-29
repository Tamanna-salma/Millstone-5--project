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
    <h2>${Number}</h2>
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




















