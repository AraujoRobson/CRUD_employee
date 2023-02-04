let formDescription, formQuantity, formId, formPrice
const URL = 'http://localhost:8081/api/products/'

window.onload = function(e){
  formId = document.querySelector('#iId')
  formDescription = document.querySelector('#iDescription')
  formQuantity = document.querySelector('#iQuantity')
  formPrice = document.querySelector('#iPrice')
}

async function addProduct(){
  const id = formId.value
  const description = formDescription.value
  const quantity = formQuantity.value
  const price = formPrice.value

  axios.post(URL, {id, description, quantity, price})
    .then(res => {
      res.data.toString()
      alert(res.data.message)
      setTimeout(() => window.location.href = '/front-end', 100);
    })
    .catch(res => console.log(res,response.data))
}
