let time = 10;
let promotime = time * 60;

let countdown = document.querySelector(".countdown");

function startTheCountdown() {
  let promoCountDown = setInterval(() => {
    if (promotime < 0) {
      clearInterval(promoCountDown);
      countdown.innerHTML = "The Promo has ended";
    } else {
      promotime--;
      const days = Math.floor(promotime / 3600 / 24);
      const hours = Math.floor(promotime / 3600) % 24;
      const minutes = Math.floor(promotime / 60) % 60;
      const seconds = Math.floor(promotime % 60);

      countdown.innerHTML = `Time: ${hours}hr : ${minutes}min : ${seconds}`;
    }
  }, 1000);
}

startTheCountdown();
