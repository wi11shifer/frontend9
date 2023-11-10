// Оголошення змінних
let userScore = 0;
let computerScore = 0;
let userCards = [];
let computerCards = [];
let cards = [
    {name: '6', value: 6},
    {name: '7', value: 7},
    {name: '8', value: 8},
    {name: '9', value: 9},
    {name: '10', value: 10},
    {name: 'Валет', value: 2},
    {name: 'Дама', value: 3},
    {name: 'Король', value: 4},
    {name: 'Туз', value: 11}
       ];
// Отримання імені користувача
let userName = prompt("Введіть ваше ім'я");

// Гра
for(let i = 0; i < 3; i++) {
    let userCard = cards[Math.floor(Math.random() * cards.length)];
    let computerCard = cards[Math.floor(Math.random() * cards.length)];

        userScore += userCard.value;
        computerScore += computerCard.value;

        userCards.push(userCard.name);
        computerCards.push(computerCard.name);

        document.getElementById('user').innerHTML += `<p>Раунд ${i+1}: ${userName} отримав карту ${userCard.name}. Загальна кількість очок: ${userScore}</p>`;
        document.getElementById('computer').innerHTML += `<p>Раунд ${i+1}: Комп'ютер отримав карту ${computerCard.name}. Загальна кількість очок: ${computerScore}</p>`;
    }
// Визначення переможця
if(userScore > computerScore) {
        document.getElementById('results').innerHTML += `<p>${userName} виграв з рахунком ${userScore} проти ${computerScore}</p>`;
} else if(userScore < computerScore) {
        document.getElementById('results').innerHTML += `<p>Комп'ютер виграв з рахунком ${computerScore} проти ${userScore}</p>`;
} else {
        document.getElementById('results').innerHTML += `<p>Гра закінчилася внічию. Рахунок: ${userScore}</p>`;
}