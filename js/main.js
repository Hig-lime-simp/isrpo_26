// import { greet, add, PI } from "./utils.js";
// import * as math from "./math.js"
// // console.log("\n=== Деструктуризация массивов ===");

// const colors = ["red", "green", "blue"];

// const [firstColor, secondColor, thirdColor] = colors;
// // console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// // console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// // console.log(c4); 

// console.log("=== Деструктуризация объектов ===");

// const user = {
//     name: "Анна",
//     age: 25,
//     city: "Москва"
// };

// const {
//     name,
//     age,
//     city
// } = user;

// // console.log(name, age, city);

// const { name: fullName, age: years } = user;
// // console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// // console.log(personName, country);

// console.log("=== Деструктуризация в параметрах ===");

// const user = {
//     name: "Анна",
//     age: 25,
//     city: "Москва"
// };

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "test",
//     price: 0,
//     category: "test",
//     inStock: false
// }
// // const {name,price,category,inStock} = product
// function printProduct({name,price,category,inStock}){
//     console.log("==== Мой продукт ====")
//     console.log(name);
//     console.log(price);
//     console.log(category);
//     console.log(inStock);
//     console.log("==== Конец ====")
// }
// printProduct(product)

// console.log("Spread для массивов");

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const combined = [...arr1, ...arr2]
// console.log(combined)

// const copy = [...arr1]
// console.log(copy);

// const extended = [0, ...arr1, 7,8];
// console.log(extended);

// console.log("=== Spread для объектов ===");

// const person = {
//     name: "Иван",
//     age: 30,
// };
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);

// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("=== Rest оператор ===");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));


// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = [...arr1, ...arr2]

// function findMax(...arr){
//          return arr.reduce((max,num) => {
//             if (max < num){
//             return num
//         }
//         return max
//     });
// }

// console.log(findMax(...arr3))

// console.log(greet("Алексей"));
// console.log("5 + 3 =", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("4 * 7 =", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение:", Utils.multiply(3, 9));

// console.log(math.square(4))
// console.log(math.cube(3))
// console.log(math.E);

// console.log("=== Промисы ===");

// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Операция выполнена успешно!");
//     } else {
//         reject("Произошла ошибка!");
//     }
// });

// // simplePromise
// //     .then((result) => console.log("Результат:", result))
// //     .catch((error) => console.log("Ошибка:", error));

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
// // delay(5000)
// //     .then((message) => console.log(message));

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Иван Иванов",
//                     email: "ivan@example.com",
//                 });
//             } else {
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500);
//     });
// }

// fetchUserData(1)
//     .then((test) => console.log("Пользователь:", test))
//     .catch((error) => console.log("Ошибка:", error));

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Шаг 1 завершён"), 500);
//     });
// }

// function step2(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
//     });
// }

// function step3(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//     });
// }

// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Финальный результат:", finalResult))
//     .catch((error) => console.log("Ошибка в цепочке:", error));

// const inventory = ["mask"];

// const [mask, potion = "potion"] = inventory

// function checkInventory(item){
//     return new Promise((resolve, reject) => {
//         if (inventory.includes(item)){
//             resolve(`${item} есть в вашем портфеле!`);
//         }
//         else{
//             reject("Отсутсвует, стоит добавить")
//         }
//     })
// }

// checkInventory(mask)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))
// checkInventory(potion)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

// console.log("=== Async/Await ===");

// async function greet() {
//     return "Привет!";
// }
// // Функция, имитирующая запрос погоды
// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }

// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }

// showWeather();
// greet().then((message) => console.log(message));

// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800);
//     });
// }

// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);

//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }

// getData();

// async function cookDinner() {
//     console.log("Начинаем готовить...");

//     const pasta = await delay(1000);
//     console.log("Паста готова");

//     const sauce = await delay(500);
//     console.log("Соус готов");

//     const salad = await delay(700);
//     console.log("Салат готов");

//     return "Ужин готов!";
// }

// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//     console.log("Готовим всё одновременно...");

//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(1500).then(() => "Соус готов"),
//         delay(3700).then(() => "Салат готов")
//     ]);

//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// }

// cookDinnerFast().then((result) => console.log(result));

// async function processOrder() {
//     try{
//         const res1 = await Check(false)

//         console.log(res1);

//         const res2 = await Calc()

//         console.log(res2);

//         const res3 = await StatusOrder()
//         console.log(res3);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// async function Check(flag) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (flag) {
//             resolve("Товар в наличии")
//         }
//         else{
//             reject("Товар отсутсвует")
//         }
//         },1000)
//     })
// }

// async function Calc() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Считаем цену");
//         }, 800)
//     })
// }

// async function StatusOrder(params) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Потверждаем заказ")
//         }, 600)
//     })
// }

// processOrder()

// async function getUsers() {
//     try {
//         // Отправляем GET-запрос к API
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         // Проверяем успешность запроса
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         }
        
//         // Преобразуем ответ в JSON
//         const users = await response.json();
        
//         // Выводим первых 3 пользователей
//         console.log("Первые 3 пользователя:");
//         users.slice(3, 10).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//     } catch (error) {
//         console.log("Ошибка при загрузке пользователей:", error.message);
//     }
// }

// getUsers();

// async function getUserById(id) {
//     try {
//         // Используем шаблонную строку для подстановки ID в URL
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
//         // Проверяем, найден ли пользователь
//         if (!response.ok) {
//             throw new Error(`Пользователь с ID ${id} не найден`);
//         }
        
//         const user = await response.json();
        
//         // Выводим информацию о пользователе
//         console.log(`Пользователь #${id}`);
//         console.log(`Имя: ${user.name}`);
//         console.log(`Город: ${user.address.city}`);
//         console.log(`Компания: ${user.company.name}`);
//     } catch (error) {
//         console.log("Ошибка:", error.message);
//     }
// }

// getUserById(1);

// async function createPost() {
//     try {
//         // Создаём объект с данными новой записи
//         const newPost = {
//             title: "Моя первая запись",
//             body: "Это содержание моей первой записи в блоге",
//             userId: 1,
//         };
        
//         // Отправляем POST-запрос с настройками
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",        // Метод HTTP-запроса
//             headers: {
//                 "Content-Type": "application/json", // Указываем тип данных
//             },
//             body: JSON.stringify(newPost), // Преобразуем объект в JSON-строку
//         });
        
//         // Проверяем успешность запроса
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         }
        
//         // Получаем ответ сервера
//         const createdPost = await response.json();
//         console.log("Создана новая запись:");
//         console.log("ID:", createdPost.id);
//         console.log("Заголовок:", createdPost.title);
//     } catch (error) {
//         console.log("Ошибка при создании записи:", error.message);
//     }
// }

// createPost();

// console.log("=== Optional Chaining ===");

// const user1 = {
//     name: "Андрей",
//     address: {
//         city: "Волжский",
//         street: "Пушкина"
//     }
// };

// const user2 = {
//     name: "Дмитрий",
//     // address - отсутствует
// };

// // Optional Chaining — безопасный доступ к вложенным свойствам
// const city2 = user2.address?.city;
// console.log("Город (новый способ):", city2); // undefined

// const street = user1.address?.street;
// console.log("Улица:", street); // "Пушкина"

// console.log("=== Optional Chaining с методами ===");

// const admin = {
//     name: "Администратор",
//     permissions: {
//         canDelete: () => true,
//     },
// };

// const guest = {
//     name: "Гость",
//     // permissions - отсутствует
// };

// // Optional Chaining для вызова метода
// console.log("Админ может удалять?", admin.permissions?.canDelete?.()); // true
// console.log("Гость может удалять?", guest.permissions?.canDelete?.()); // undefined

// console.log("=== Optional Chaining с массивами ===");

// const company = {
//     name: "Tech Corp",
//     employees: [
//         { name: "Надежда", role: "Developer" },
//         { name: "Анна", role: "Designer" }
//     ]
// };

// const startup = {
//     name: "New Startup",
//     // employees - отсутствует
// };

// // Optional Chaining для безопасного доступа к элементам массива
// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);

// console.log("=== Nullish Coalescing ===");

// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;

// // Оператор || (логическое ИЛИ) — возвращает правое значение для любого falsy
// console.log('value1 || "default":', value1 || "default");
// console.log('value2 || "default":', value2 || "default");
// console.log('value3 || "default":', value3 || "default");

// console.log("---");

// // Оператор ?? (Nullish Coalescing) — возвращает правое значение ТОЛЬКО для null и undefined
// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");

// function displayUserSettings(settings) {
//     const theme = settings?.theme ?? "light";
//     const fontSize = settings?.fontSize ?? 14;
//     const notifications = settings?.notifications ?? true;

//     console.log("Настройки пользователя:");
//     console.log("Тема:", theme);
//     console.log("Размер шрифта:", fontSize);
//     console.log("Уведомления:", notifications);
//     console.log("---");
// }

// // Используются указанные значения
// displayUserSettings({ theme: "dark", fontSize: 16 });

// // notifications = false (не заменяется на true!)
// displayUserSettings({ notifications: false });

// // Все значения по умолчанию
// displayUserSettings({});

// console.log("=== Комбинирование ?. и ?? ===");

// const apiResponse = {
//     data: {
//         user: {
//             profile: {
//                 settings: {
//                     language: "ru",
//                 }
//             }
//         }
//     }
// };

// // Optional Chaining для безопасного доступа, Nullish Coalescing для значения по умолчанию
// const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык:", language); // 'ru'

// const emptyResponse = {};

// const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык по умолчанию:", defaultLanguage); // 'en'

function displayOrder(Order){
    console.log(`Тип оплаты заказа - ${Order?.customer?.shipping?.payment?.type ?? "card"}`)
}

const order1 ={
    customer: {
        shipping: {
            payment: {
                type: "cash"
            }
        }
    }
}

const order2 ={
    customer: {
        shipping: {
            payment: {
                type: undefined
            }
        }
    }
}

displayOrder(order1)
console.log();
displayOrder(order2)