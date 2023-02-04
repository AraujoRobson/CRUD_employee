let formName, formDependents, formId, formSalary
const URL = 'http://localhost:8081/api/employees/'

window.onload = function(e){
  formId = document.querySelector('#iId')
  formName = document.querySelector('#iName')
  formDependents = document.querySelector('#iDependents')
  formSalary = document.querySelector('#iSalary')
}

async function addEmployee(){
  const id = formId.value
  const name = formName.value
  const dependents = formDependents.value
  const salary = formSalary.value

  axios.post(URL, {id, name, dependents, salary})
    .then(res => {
      res.data.toString = function() {
        return `successfully added
        \nID: ${this.id}
        \nName: ${this.name}`
      }
      alert(res.data)
      setTimeout(() => window.location.href = '/frontend', 100);
    })
    .catch(res => console.log(res,response.data))
}
