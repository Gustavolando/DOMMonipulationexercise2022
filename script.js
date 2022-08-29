console.log("Hello Priscila 😍!")

const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const parrafito = document.getElementsByClassName('parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

// console.log(h1);
console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
})

h1.innerHTML = "Patito <br> feo"
h1.innerText = "Patito <br> feo"
h1.setAttribute('class', "rojo")

h1.classList.add('grande')
h1.classList.remove('rojo')
h1.classList.toggle('verde')
console.log(h1.classList.contains('grande'))

console.log(h1.getAttribute("pantalla"))
console.log(h1.getAttribute("class"))

input.value = "456"

// console.log(document.createElement('img'))
// console.log(document.createElement('span'))

const img = document.createElement('img')
img.setAttribute('src', 'https://img.freepik.com/foto-gratis/profesor-curso-negocios_1098-16027.jpg?w=740&t=st=1661489837~exp=1661490437~hmac=f13db8fd0adec859ff796e8ad7b9fb8d544524cab66e316e8e73033eb2d0656c')

console.log(img);

pid.append(img)

pid.innerHTML = ""
pid.appendChild(img)