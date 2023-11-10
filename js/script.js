// Оголошення змінних
let userScore = 0;
let computerScore = 0;
let userCards = [];
let computerCards = [];
let cards = [
    {name: '6', value: 6, image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Atlas_deck_6_of_spades.svg'},
    {name: '7', value: 7, image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Atlas_deck_7_of_spades.svg'},
    {name: '8', value: 8, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Atlas_deck_8_of_spades.svg/1200px-Atlas_deck_8_of_spades.svg.png'},
    {name: '9', value: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Atlas_deck_9_of_spades.svg/1365px-Atlas_deck_9_of_spades.svg.png'},
    {name: '10', value: 10, image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Atlas_deck_6_of_spades.svg'},
    {name: 'Валет', value: 2, image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Atlas_deck_jack_of_spades.svg'},
    {name: 'Дама', value: 3, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Atlas_deck_queen_of_spades.svg'},
    {name: 'Король', value: 4, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/%D0%90%D1%82%D0%BB%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0_%D1%8D%D0%BA%D1%81%D1%82%D1%80%D0%B0_%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D1%8C_%D0%BF%D0%B8%D0%BA%D0%B8.jpg'},
    {name: 'Туз', value: 11, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Aceofspades.svg/800px-Aceofspades.svg.png'}
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
