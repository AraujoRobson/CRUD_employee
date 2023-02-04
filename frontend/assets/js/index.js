const FRONT = 'http://localhost:5500/frontend/'
const API = 'http://localhost:8081/api/employees/'

window.onload = function(e){
  listEmployees()
}

function createTable(employees){
  const tableBody = document.querySelector('#iEmployees')
  tableBody.innerHTML = ''

  if(employees){
    const lines = employees.map(employee => {
      const tdId = document.createElement('td')
      tdId.innerHTML = employee.id

      const tdName = document.createElement('td')
      tdName.innerHTML = employee.name

      const tdDependents = document.createElement('td')
      tdDependents.innerHTML = employee.dependents

      const tdSalary = document.createElement('td')
      tdSalary.innerHTML = employee.salary.toLocaleString('pt-BR',
                                                        {
                                                          currency: 'BRL',
                                                          style: 'currency'
                                                        })

      const btnEdit = document.createElement('a')
      btnEdit.innerHTML = 'Edit'
      btnEdit.setAttribute('href', FRONT + 'update_employee.html?id=' + employee.id)
      btnEdit.classList.add('btn', 'btn-primary', 'me-2')

      const btnDelete = document.createElement('a')
      btnDelete.innerHTML = 'Delete'
      btnDelete.classList.add('btn', 'btn-danger')
      btnDelete.addEventListener('click', function (event){
        if(confirm('Are you sure you want to delete?')){
          axios.delete(API + employee.id, {
          }).then(res => {
              //alert(res.data.message)
              listEmployees()
            })
        }
      }, false)

      const tdActions = document.createElement('td')
      tdActions.appendChild(btnEdit)
      tdActions.appendChild(btnDelete)

      const tr = document.createElement('tr')
      tr.appendChild(tdId)
      tr.appendChild(tdName)
      tr.appendChild(tdDependents)
      tr.appendChild(tdSalary)
      tr.appendChild(tdActions)

      return tr
    })

    lines.forEach(line => tableBody.appendChild(line))
  }
}

async function listEmployees(){
  const res = await axios.get(API, {
  })
  createTable(res.data)
}
