

document.addEventListener('DOMContentLoaded', () => {
    const hoursHand = document.querySelector('.hour');
    const minsHand = document.querySelector('.minute');
    const secondsHand = document.querySelector('.second');

    function setDate() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const seconds = now.getSeconds();

        const secondsDegree = ((seconds/60)*360);
        const minuteDegree = ((minute/60)*360);
        const hourDegree = (((hour+(minute/60))/12)*360);;

        secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
        minsHand.style.transform = `rotate(${minuteDegree}deg)`;
        hoursHand.style.transform = `rotate(${hourDegree}deg)`;
    }

    setInterval(setDate, 10);
});
