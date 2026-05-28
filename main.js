let score = 1;

function update() {
    document.getElementById("score").innerText = score;
    score = score * 2;
};

setInterval(update(), 50);