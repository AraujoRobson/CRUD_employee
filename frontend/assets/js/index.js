const FRONT = 'http://localhost:5500/'
const API = 'http://localhost:8081/api/products/'

window.onload = function(e){
  listProducts()
}

function createTable(products){
  const tableBody = document.querySelector('#iProducts')
  tableBody.innerHTML = ''

  if(products){
    const lines = products.map(product => {
      const tdId = document.createElement('td')
      tdId.innerHTML = product.id

      const tdDescription = document.createElement('td')
      tdDescription.innerHTML = product.description

      const tdQuantity = document.createElement('td')
      tdQuantity.innerHTML = product.quantity

      const tdPrice = document.createElement('td')
      tdPrice.innerHTML = product.price.toLocaleString('pt-BR',
                                                        {
                                                          currency: 'BRL',
                                                          style: 'currency'
                                                        })

      const btnEdit = document.createElement('a')
      btnEdit.innerHTML = 'Edit'
      btnEdit.setAttribute('href', FRONT + 'update_product.html?id=' + product.id)
      btnEdit.classList.add('btn', 'btn-primary', 'me-2')

      const btnDelete = document.createElement('a')
      btnDelete.innerHTML = 'Delete'
      btnDelete.classList.add('btn', 'btn-danger')
      btnDelete.addEventListener('click', function (event){
        if(confirm('Are you sure you want to delete?')){
          axios.delete(API + product.id, {
          }).then(res => {
              //alert(res.data.message)
              listProducts()
            })
        }
      }, false)

      const tdActions = document.createElement('td')
      tdActions.appendChild(btnEdit)
      tdActions.appendChild(btnDelete)

      const tr = document.createElement('tr')
      tr.appendChild(tdId)
      tr.appendChild(tdDescription)
      tr.appendChild(tdQuantity)
      tr.appendChild(tdPrice)
      tr.appendChild(tdActions)

      return tr
    })

    lines.forEach(line => tableBody.appendChild(line))
  }
}

async function listProducts(){
  const res = await axios.get(API, {
  })
  console.log(res)
  createTable(res.data)
}
