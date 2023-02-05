let id, formId, formName, formDependents, formSalary
const URL = 'http://localhost:8081/api/employees/'

window.onload = async function(e){
  const query = window.location.search
  const params = new URLSearchParams(query)
  id = params.get('id')

  formId = document.querySelector('#iId')
  formName = document.querySelector('#iName')
  formDependents = document.querySelector('#iDependents')
  formSalary = document.querySelector('#iSalary')

  const employee = await searchEmployee(id)
  fillInForm(employee)
}

function fillInForm(employee){
  formId.value = employee.id
  formName.value = employee.name
  formDependents.value = employee.dependents
  formSalary.value = employee.salary
}

async function searchEmployee(id) {
  const response = await axios.get(URL + id)
  return response.data
}

async function updateEmployee() {
  const id = formId.value
  const name = formName.value
  const dependents = formDependents.value
  const salary = formSalary.value

  axios.put(URL + id, {id, name, dependents, salary})
    .then(res => {
      res.data.toString = function() {
        return `successfully updated
        \nID: ${this.id}
        \nName: ${this.name}`
      }
      setTimeout(() => window.location.href = '/frontend', 100)
    })
    .catch(res => console.log(res.response.data))
}
