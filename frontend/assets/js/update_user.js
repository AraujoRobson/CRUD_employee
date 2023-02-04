let id, formId, formDescription, formQuantity, formPrice
const URL = 'http://localhost:8081/api/products/'

window.onload = async function(e){
  const query = window.location.search
  const params = new URLSearchParams(query)
  id = params.get('id')

  formId = document.querySelector('#iId')
  formDescription = document.querySelector('#iDescription')
  formQuantity = document.querySelector('#iQuantity')
  formPrice = document.querySelector('#iPrice')

  const product = await searchProduct(id)
  fillOutForm(product)
}

function fillOutForm(product){
  formId.value = product.id
  formDescription.value = product.description
  formQuantity.value = product.quantity
  formPrice.value = product.price
}

async function searchProduct(id) {
  const response = await axios.get(URL + id)
  return response.data
}

async function updateProduct() {
  const id = formId.value
  const description = formDescription.value
  const quantity = formQuantity.value
  const price = formPrice.value


  axios.put(URL + id, {id, description, quantity, price})
    .then(res => {

      setTimeout(() => window.location.href = '/front-end', 100)
    })
    .catch(res => console.log(res.response.data))
}
