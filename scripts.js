const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    secondHand.innerText = secondsDegrees;
    // console.log(secondsDegrees);

    const mins = now.getMinutes();
    const minsDegrees =((mins/60)*360) +90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    minHand.innerText = minsDegrees;

    const hours = now.getMinutes();
    const hrsDegrees =((mins/12)*360) +90;
    hourHand.style.transform = `rotate(${hrsDegrees}deg)`;
    hourHand.innerText = hrsDegrees;

}

setInterval(setDate, 1000);