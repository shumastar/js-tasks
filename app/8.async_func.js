// Task 01
// Создайте асинхронную функцию f1, используя FDS (Function Declaration Statement).
// Функция должна принимать два параметра a и b и возвращать сумму a+b.
// Выведите значение, которое вернет функция в консоль.
// Обработаете промис и выведите значение в консоль.
async function f1(a, b) {
  return a + b;
}
const promise = f1(1, 2);
console.log(promise);
promise.then(console.log);

// Task 02
// Создайте асинхронную функцию f2, используя FDE (Function Definition Expression).
// Функция должна возвращать 'Promise Data', используя Promise.resolve()
// Выведите значение, которое вернет функция в консоль.
// Обработаете промис и выведите значение в консоль.
const f2 = async function () {
  return Promise.resolve('Promise Data');
}
const promise1 = f2();
console.log(promise1);
promise1.then(console.log);

// Task 03
// Создайте класс C1. Добавьте асинхронный метод f3,
// Метод должен генерть исключение 'Error occurs in f3 method'
// Создайте экземпляр класса и вызовите метод.
// Обработаете промис.

class C1 {
  async f3() {
    throw new Error('Error occured in f3');
  }
}
(new C1()).f3().catch(console.log.bind(console));
(new C1()).f3().catch(err => console.log(err));

// Task 04
// Cоздайте функцию makeRequest, используя FDS (Function Declaration Statement).
// Функция должна принимать один параметр url и возвращать промис,
// который перейдут в состояние resolved через 2с. и вернет значение параметра.
// Первой строкой в функции выведите сообщение 'makeRequest is called'
// Cоздайте функцию f4, используя FDS (Function Declaration Statement).
// Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.
function makeRequest(url) {
  console.log('makeRequest is called');
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, url);
  });
}

(function f4() {
  console.log(makeRequest(2));
})();
// Task 05
// Внесите изменения в функцию f4 из предыдущего задания так, чтобы в консоле появилось
// значение переданого параметра в функцию makeRequest
function makeRequest2(url) {
  console.log('makeRequest is called');
  return new Promise((resolve) => {
   setTimeout(resolve, 2000, url);
  });
 }
 
 (async function f4() {
   const u = await makeRequest2('url');
   console.log(u);
 })();
// Task 06
// Cоздайте асинхронную функцию f6, используя FDS (Function Declaration Statement).
// Функция должна вызвать два раза функцию makeRequest с разными значениями параметра
// Перед вызовом и после каждого вызова makeRequest функция должна выводить в консоль сообщение.
// Вернуть массив, который должен содержать значения переданые функции makeRequest.
// Обработаете результат работы функции f6
async function f6() {
  console.log('before 1');
  const firstRequest = await makeRequest(1);
  console.log(firstRequest);
  console.log('after 1');
  console.log('before 2');
  const secondRequest = await makeRequest(2);
  console.log(secondRequest);
  console.log('after 2');
  return [firstRequest, secondRequest];
};

console.log(f6());
// Task 07
// Измените асинхронную функцию f6 из предыдущего задания так, чтобы вызовы функии
// makeRequest выполнялись паралельно.

// Task 08
// Cоздайте асинхронную функцию f8, используя FDS (Function Declaration Statement).
// Функция должна вызвать функцию makeRequest и вернуть результат ее работы.
// Обработайте результат работы функции f8

// Task 09
// Создайте масив урлов ['http://a', 'http://b'].
// Напишите функцию makeRequest, которая принимает один параметр - url.
// Функция в первой строке должна выводить в консоль сообщение 'makeRequest is called'
// и возвращать через 2 с для первого урла объект { name: 'Ann' }, а для второго
// урла объект { age: 16 }.
// Создайте асинхронную функцию f9 которая должна вызвать функцию makeRequest для каждого урла
// и вернуть объект {name: 'Ann', age: 16}
// Обработайте результат работы функции f8