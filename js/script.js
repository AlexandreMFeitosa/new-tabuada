
// testando JavaScript

let calcular = document.querySelector("#calcular");

calcular.addEventListener("click" , (e) => {

    let multiplicador = document.querySelector("#multiplicador").value;
    let numeroDeVezes = document.querySelector("#n-de-vezes").value;
    let resultado = document.querySelector("#resultado");
    let resposta = `` ;
    let titleResultado = document.querySelector("#title-resultado");

    if (multiplicador === "" || numeroDeVezes === "") {
        alert("Valores invalidos, favor preencher corretamente os campos !")
    } else {
        for(i = 1; i <= numeroDeVezes; i++) {

            resposta += `${multiplicador} x ${i} = ${multiplicador * i} <br> <br>`;
    
        }
        titleResultado.innerHTML = `O resultado final é :`
        resultado.innerHTML = resposta ;

    }
    
});