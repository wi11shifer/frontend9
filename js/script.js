// Оголошення змінних
let userScore = 0;
let computerScore = 0;
let userCards = [];
let computerCards = [];
let cards = [
    {name: '6', value: 6, image: 'images/6.svg'},
    {name: '7', value: 7, image: 'images/7.svg'},
    {name: '8', value: 8, image: 'images/8.png'},
    {name: '9', value: 9, image: 'images/9.png'},
    {name: '10', value: 10, image: 'images/10.png'},
    {name: 'Валет', value: 2, image: 'images/valet.svg'},
    {name: 'Дама', value: 3, image: 'images/dama.svg'},
    {name: 'Король', value: 4, image: 'images/king.jpg'},
    {name: 'Туз', value: 11, image: 'images/tuz.png'}
       ];
// Отримання імені користувача
let userName = prompt("Введіть ваше ім'я");

// Гра
for (let i = 0; i < 3; i++) {
    let userCard = cards[Math.floor(Math.random() * cards.length)];
    let computerCard = cards[Math.floor(Math.random() * cards.length)];

    userScore += userCard.value;
    computerScore += computerCard.value;

    userCards.push(userCard);
    computerCards.push(computerCard);

    document.getElementById('user').innerHTML += `<p>Раунд ${i + 1}: ${userName} отримав карту <img class="card-image" src="${userCard.image}" alt="${userCard.name}">. Загальна кількість очок: ${userScore}</p>`;
    document.getElementById('computer').innerHTML += `<p>Раунд ${i + 1}: Комп'ютер отримав карту <img class="card-image" src="${computerCard.image}" alt="${computerCard.name}">. Загальна кількість очок: ${computerScore}</p>`;
}

// Визначення переможця
if (userScore > computerScore) {
    document.getElementById('results').innerHTML += `<p>${userName} виграв з рахунком ${userScore} проти ${computerScore}</p>`;
} else if (userScore < computerScore) {
    document.getElementById('results').innerHTML += `<p>Комп'ютер виграв з рахунком ${computerScore} проти ${userScore}</p>`;
} else {
    document.getElementById('results').innerHTML += `<p>Гра закінчилася внічию. Рахунок: ${userScore}</p>`;
}
