function generateList(array) {
  let ul = document.createElement('ul')
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      ul.appendChild(generateList(array[i]))
    } else {
      let li = document.createElement('li')
      li.innerText = array[i]
      ul.appendChild(li)
    }
  }
  return ul
}
document.body.appendChild(generateList([1, 2, 3]))
document.body.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]))
