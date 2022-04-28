// Методы у примитивов. Тут нельзя (!) использовать методы массива. Это практика по циклам.

// Написать функцию isSymbolPresentInString(str,symbol) - возвращает true если символ найден в строке и false если нет.
// isSymbolPresentInString("abc","a") // true
// isSymbolPresentInString("abc","e") // false
function isSymbolPresentInString(str, symbol) {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === symbol) {
      return true
    }
  }
  return false
}
// console.log(isSymbolPresentInString('abc', 'a'))
// console.log(isSymbolPresentInString("abc", "e"))
// console.log(isSymbolPresentInString("abc", "c"))


// Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого найденного символа в строке, или -1 если символ не найден
// getSymbolIndex("hello lol","h") // 0
// getSymbolIndex("hello lol","l") // 2
// getSymbolIndex("hello lol","v") // -1

function getSymbolIndex(str, symbol) {
  return str.indexOf(symbol)
}
// console.log(getSymbolIndex("hello lol", "h")) // 0
// console.log(getSymbolIndex("hello lol", "l")) // 2
// console.log(getSymbolIndex("hello lol", "v")) // -1

// Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе
// getNumberOfEven(223344) // 4
// getNumberOfEven(111) // 0

function getNumberOfEven(n) {
  n = n.toString()
  let count = 0
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
      count++
    }
  }
  return count
}

// console.log(getNumberOfEven(223344)) // 4
// console.log(getNumberOfEven(111)) // 0

// Массивы.
// Написать собственную реализацию функций forEach, map, filter, some, every. Каждая функция должна принимать два аргумента - массив и callback. Все функции, кроме forEach, должны вернуть результат. 

//forEach

let sumResult = 0
function sum(num) {
  sumResult += num
}

function forEach(array, sum) {
  for (let i = 0; i < array.length; i++) {
    sum(array[i])
  }
}
forEach([1, 2, 3, 4, 5], sum)
console.log(sumResult)

//map

function func(element) {
  return element.toFixed()
}

function map(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
    arr[i] = func(arr[i])
  }
  return arr
}

const integerNumber = map([12.5, 71.3, 5.2, 98.4], func)
console.log(integerNumber)

// filter
function isEven(element) {
  if (element % 2 == 0) {
    return true
  }
}

function filter(array, isEven) {
  let filterArray = []
  for (let i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
      filterArray.push(array[i])
    }
  }
  return filterArray
}

const newArray = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven)
console.log(newArray)


// some
function upperCase(element) {
  return element === element.toUpperCase()
}

function some(array, upperCase) {
  let isSomeUpCase = false
  for (let i = 0; i < array.length; i++) {
    if (upperCase(array[i])) {
      isSomeUpCase = true
      break
    }
  }
  return isSomeUpCase
}

const searchSymbol = some(['BANANA', 'orange', 'APPLE'], upperCase)
console.log(searchSymbol)

// every 

function isUpperCase(element) {
  return element === element.toUpperCase();
}

function every(array, upperCase) {
  let isSomeUpCase = !!array.length;
  for (let i = 0; i < array.length; i++) {
    if (!upperCase(array[i])) {
      isSomeUpCase = false;
      break;
    }
  }
  return isSomeUpCase;
}
let everySymbol = every(['apple', 'orange', 'APPLE'], isUpperCase);
console.log(everySymbol);
everySymbol = every(['APPLE', 'ORANGE', 'APPLE'], isUpperCase);
console.log(everySymbol);
everySymbol = every([], isUpperCase);
console.log(everySymbol);