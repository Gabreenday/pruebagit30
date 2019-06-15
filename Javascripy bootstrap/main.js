let inputnom = document.getElementById ('inputnom')
let inputlib = document.getElementById ('inputlib')
let inputpizza = document.getElementById ('inputpizza')

let datos =  document.getElementById ('datos')
let datos2 =  document.getElementById ('datos2')
let datos3 =  document.getElementById ('datos3')

let button1 = document.getElementById ('button1')


const mostrarall = ()=>{
    let textonombre = inputnom.value
    let textolibro = inputlib.value
    let textopizza = inputpizza.value

    datos.innerHTML=textonombre
    datos2.innerHTML=textolibro 

    if(textopizza==="si") {
        datos3.innerHTML=":D"
    }else if(textopizza==="no"){
        datos3.innerHTML="D:"
    }else{
        datos3.innerHTML="No entendi"

    }   
    
}
button1.addEventListener ('click', mostrarall)

    
