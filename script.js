// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

// let hello ='hello';
// let owu ='owu';
// let com ='com';
// let ua = 'ua';
// let l1 = 1;
// let l2 = 10;
// let l3 = -999;
// let l4 = 123;
// let l5 = 3.14;
// let l6 = 2.7;
// let l7 = 16;
// let tr = true;
// let fs = false;
// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(l1);
// console.log(l2);
// console.log(l3);
// console.log(l4);
// console.log(l5);
// console.log(l6);
// console.log(l7);
// console.log(tr);
// console.log(fs);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let fistName = 'Anastasiia';
// let middleName = 'Andriivna';
// let lastName = 'Pavliv';
// let person= `${fistName} ${middleName}  ${lastName}`;
// console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100;
//    let b = '100';
//    let c = true;
//    console.log((typeof a),a);
//    console.log((typeof b),b);
//    console.log((typeof c),c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName = prompt('First Name')
let middleName = prompt('Middle Name')
let age = +prompt('Age');

console.log(firstName )
console.log(middleName)
console.log(age)