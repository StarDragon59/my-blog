// Игра "Угадай число"
const startBtn = document.getElementById('startBtn');

function playGame() {
    let secret = Math.floor(Math.random() * 10) + 1;
    let guess = prompt('Какое число я загадал?');
    
    if (guess == secret) {
        alert('Поздравляю! Ты угадал! 🎉');
    } else {
        alert(`Не угадал! Я загадал ${secret}`);
    }
}

// Привязываем функцию к кнопке
startBtn.onclick = playGame;