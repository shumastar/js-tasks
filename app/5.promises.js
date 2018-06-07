// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const p1 = new Promise(() => {
  console.log('Promise p1 is created')
});

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const p2 = Promise.resolve('Promise p2 Data');
console.log(p2);
p2.then(data => console.log(data));

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const p3 = new Promise((resolved, rejected) => {
  rejected('Promise p3 Error')
});
console.log(p3);
p3.catch(reason => console.log(reason));

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const p4 = new Promise((resolve) => {
  console.log('Promise p4 is creatd...Wait...');
  setTimeout(() => {
    console.log('Promise p4 has sent data');
    resolve('Promise data')
  }, 3000)
});
console.log('any action');
p4.then(data => console.log(data));
console.log('any next action');

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый сосзданный промис,
// свойства resolve и reject получают ссылки на сооветствующие функции
// resolve и reject. Следующий два обработчика запускают методы resolve и reject.
const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess(data) {
    console.log(`Promise p5 is resolved with data: ${data}`);
    return 1; //task6
  },
  onError(err) {
    console.log(`Promise is rejected with error: ${err}`)
  }
};

document.querySelector('#btn-create-promise').addEventListener('click', () => {
  handlePromise.promise = new Promise((resolve, reject) => {
      console.log('Promise p5 is created');
      handlePromise.resolve = resolve;
      handlePromise.reject = reject;
    })
    .then(handlePromise.onSuccess)
    .then(handlePromise.onSuccess) //task06
    .catch(handlePromise.onError);
});

document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
  handlePromise.resolve && handlePromise.resolve('Some data');
});

document.querySelector('#btn-reject-promise').addEventListener('click', () => {
  handlePromise.reject && handlePromise.reject('Some error');
});
// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then

// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p7 My name is');
  }, 1000);
});

function onSuccess(data) {
  return `${data} Andrei`;
};

function print(data) {
  console.log(data);
};

p7.then(onSuccess).then(print);

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.
const p8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p8 My name is');
  }, 1000);
});

function onSuccess2(data) {
  throw 'Error Message'
  return `${data} Andrei`;
};

function print(data) {
  console.log(data);
};

p8.then(onSuccess2).then(print).catch(err => console.log(err)); //print не отработал
console.log(1);

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData
function getPromiseData(p) {
  p.then(data => console.log(data));
};

const o = {
  name: 'Anna'
};

getPromiseData(Promise.resolve(o));

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль
const p10_1 = new Promise(resolve => {
  console.log('Promise p10_1 is created');
  setTimeout(() => {
    resolve({
      name: 'Anna'
    })
  }, 2000);
});

const p10_2 = new Promise((resolve, reject) => {
  console.log('Promise p10_2 is created');
  setTimeout(() => {
    //resolve({
    //  age: 16
    //})
    reject('Promise Error');
  }, 3000);
});

const p10 = Promise.all([p10_1, p10_2])
  .then(values => console.log({ ...values[0],
    ...values[1]
  }))
  .catch(err => console.log(err));


// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.
const p11_1 = new Promise(resolve => {
  console.log('Promise p11_1 is created');
  setTimeout(() => {
    resolve({
      name: 'Anna'
    })
  }, 2000);
});

const p11_2 = new Promise((resolve, reject) => {
  console.log('Promise p11_2 is created');
  setTimeout(() => {
    //resolve({
    //  age: 16
    //})
    reject('Promise Error');
  }, 3000);
});

const p11 = Promise.all([p11_1, p11_2])
  .then(values => console.log({ ...values[0],
    ...values[1]
  }))
  .catch(err => console.log(err));

// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.

const p12_1 = new Promise((resolve) => {
  console.log('Promise p12_1 is created');
  setTimeout(() => {
    resolve('Promise Data p12_1');
  }, 5000);
});

let cancelPromise;
const p12_2 = new Promise((reject) => {
  console.log('Cancel Promise p12_2 is created');
  cancelPromise = reject;
});

document.querySelector('#btn-reject-promise').addEventListener('click', () => {
  cancelPromise && cancelPromise('Cancel');
});

Promise.race([p12_1, p12_2])
  .then(data => console.log(data))
  .catch(err => console.log(err));