// -Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація)

const text1 = prompt("Enter text 1");
const text2 = prompt("Enter text 2");
const text3 = prompt("Enter text 3");

alert(text3 + ' ' + text1 + ' ' + text2);


// -Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пропуск

const number = 34567;
let stringNumber = number.toString();
let resultString = '';
for (let i = 0; i < stringNumber.length; i += 1) {
    if (i === stringNumber.length - 1) {
        resultString += parseInt(stringNumber[i]);
    } else {
        resultString += parseInt(stringNumber[i]) + ' ';
    }
}

alert(resultString);