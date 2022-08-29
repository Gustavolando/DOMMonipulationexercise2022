console.log("Hello Priscila 😍!")

const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')
const form =document.querySelector('#form')

btn.addEventListener('click', sumaInputValues)
// form.addEventListener('submit', sumaInputValues)

function sumaInputValues(event) {
  // console.log({event})
  // event.preventDefault()
  
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
  pResult.innerText = "Resultado: " + sumaInputs
}