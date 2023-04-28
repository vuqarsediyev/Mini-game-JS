// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
import Card from './card.js'



function createNumbersArray(container, count) {
//sozdanie massiva elementov

    let cardsNumberArray = [],
        cardsArray = [],
        firstCard = null,
        secondCard = null;

    for(let i = 1; i <= count / 2 ; i++) {
        cardsNumberArray.push(i)
        cardsNumberArray.push(i)
    }
// peremeshivanie elementov massiva
    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

    for (const cardNumber of cardsNumberArray) {
        cardsArray.push(new Card(container, cardNumber, flip))
    }
//loqika iqri
    function flip(card) {
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number != secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
        }
   
        if(firstCard == null) {
            firstCard = card
        } else { if(secondCard == null) {
            secondCard = card
        }
        }
        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number == secondCard.number) {
                firstCard.success = true
                secondCard.success = true
                firstCard = null
                secondCard = null
            }
        }

        if (document.querySelectorAll('.card.success').length == cardsNumberArray.length) {

            //sbrasivanie iqri posle zakoncivaniya
            alert('Congratulations! You Win!')
            container.innerHTML = ''
            cardsNumberArray = []
            cardsArray = []
            firstCard = null
            secondCard = null

            createNumbersArray(container, count)
        }

    }

}

createNumbersArray(document.getElementById('game'), 12)

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {

}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame(count) {

}