let table = document.createElement('table')
let tableHead = document.createElement('thead')
let tableBody = document.createElement('tbody')

table.classList.add('table')
table.classList.add('table-striped')
table.classList.add('table-bordered')
document.body.appendChild(table)
table.appendChild(tableHead)


for (let j = 1; j <= 10; j++) {
  let th = document.createElement('th')
  tableHead.appendChild(th)
  th.classList.add('scope="col')
  th.textContent += j
}
for (let i = 1; i <= 10; i++) {
  let tr = document.createElement('tr')
  for (let x = 1; x <= 10; x++) {
    let td = document.createElement('td')
    td.classList.add('table-primary')
    td.textContent += (i + '*' + x + '=' + (i * x))
    tr.appendChild(td)
  }
  table.appendChild(tableBody)
  tableBody.appendChild(tr)
}

