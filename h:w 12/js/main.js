// Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0. При клике на любой квадрат цифра в нем увеличивается на один.
// * сделать чтоб внутри квадратов были кнопки +/-
// Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)
// Сделать список. По клику на любой из элементов он выделяется красным цветом. 
// Если один уже выделен,а кликнули по другому, то выделение с прошлого снимается, и ставится на тот, по которому кликнули.

let buttonPlus = document.querySelectorAll('.buttonPlus')
let buttonMinus = document.querySelectorAll('.buttonMinus')
let box = document.querySelectorAll('.box')
let listItem = document.querySelectorAll('.item')

buttonPlus.forEach(function (item) {
  item.onclick = function () {
    let span = parseInt(this.closest('.text').querySelector('span').innerText)
    span++
    this.closest('.text').querySelector('span').innerText = span
  }
})
buttonMinus.forEach(function (item) {
  item.onclick = function () {
    let span = parseInt(this.closest('.text').querySelector('span').innerText)
    span--
    this.closest('.text').querySelector('span').innerText = span
  }
})

box.forEach(function (element) {
  element.style.backgroundColor = 'orange'
  element.onclick = function () {
    if (this.style.backgroundColor === 'orange') {
      this.style.backgroundColor = 'blue'
    }
    else if (this.style.backgroundColor === 'blue') {
      this.style.backgroundColor = 'green'
    }
    else if (this.style.backgroundColor === 'green') {
      this.style.backgroundColor = 'yellow'
    } else {
      this.style.backgroundColor = 'orange'
    }
  }
})


for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', function () {
    for (let a = 0; a < listItem.length; a++) {
      listItem[a].classList.remove('active')
    }
    this.classList.add('active')
  })
}
