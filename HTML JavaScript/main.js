let titulo = document.getElementById('titulo')

let inputnom = document.getElementById ('inputnom')
let inputlib = document.getElementById ('inputlib')
let inputpizza = document.getElementById ('inputpizza')

let datos =  document.getElementById ('datos')
let datos2 =  document.getElementById ('datos2')
let datos3 =  document.getElementById ('datos3')

let button1 = document.getElementById ('button1')



// titulo.innerHTML = "Titulo cambiado"
// parrafo.innerHTML = " perrito "

// const cambio = () => {
//     parrafo.innerHTML = " perrito "

// }
// button.addEventListener ('click', cambio)

// button.addEventListener ('click', ()=>{
//     console.log("si funciona")


// })

// const mostrarnom = ()=>{
//     let textonombre = inputnom.value
//     datos.innerHTML= textonombre

// }

// button1.addEventListener ('click', mostrarnom)

const mostrarall = ()=>{
    let textonombre = inputnom.value
    let textolibro = inputlib.value
    let textopizza = inputpizza.value

    datos.innerHTML=textonombre
    datos2.innerHTML=textolibro
    datos3.innerHTML=textopizza

}
button1.addEventListener ('click', mostrarall)
