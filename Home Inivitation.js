function sayThankYou() {
    let message = `💖 Thank you so much! 😊
I'm really happy you accepted my invitation 🏠🎉
Can't wait to see you! 😍✨`;

    document.getElementById("output").innerText = message;
}

function moveNo() {
    let btn = document.getElementById("noBtn");

    let x = Math.random() * 300;
    let y = Math.random() * 300;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}