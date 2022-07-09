// делать форму логина. Она состоит из поля для ввода почты, поля для ввода пароля и кнопки “отправить”. 
// Кнопка “отправить” показывает введенные данные в формате JSON и очищает поля для ввода. Кнопка заблокирована (disabled) если введены невалидные данные.
// Почта считается валидной если в ней есть символ @ и точка
// задание со “звездочкой” - использовать регулярное выражение для валидации почты
// Пароль считается валидным если в нем:
// минимум 8 символов
// есть хотя бы одна цифра
// есть хотя бы один из перечисленных символов: @$#!?&
// Если пользователь ввел невалидные данные, поле для ввода должно выделиться красным цветом.
const form = document.querySelector('form')
const emailInput = document.querySelector('form input[type=text]')
const passwordInput = document.querySelector('form input[type=password]')
const button = document.querySelector('form .button')
button.disabled = true

function buttonToggle() {
  button.disabled = !isValidPassword || !isValidEmail
}
function isValidEmail(email) {
  let checkEmail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/;
  return checkEmail.test(email)
}

function isValidPassword(password) {
  let checkPassword = /(?=.*\d)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
  return checkPassword.test(password)
}


emailInput.addEventListener('blur', event => {
  const { value } = event.target;
  if (!isValidEmail(value)) {
    event.target.classList.add('err')
  }
})

passwordInput.addEventListener('blur', event => {
  const { value } = event.target;
  if (!isValidPassword(value)) {
    event.target.classList.add('err')
  }
})
emailInput.addEventListener('focus', event => {
  event.target.classList.remove('err')
})

passwordInput.addEventListener('focus', event => {
  event.target.classList.remove('err')
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const email = emailInput.value
  const password = passwordInput.value
  console.log({
    email: form.elements['email'].value,
    password: form.elements['password'].value
  })

})

emailInput.addEventListener('input', event => {
  validEmail = isValidEmail(event.target.value)
  buttonToggle()
})
passwordInput.addEventListener('input', event => {
  validPassword = isValidPassword(event.target.value)
  buttonToggle()
})