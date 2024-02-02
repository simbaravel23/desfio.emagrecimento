function calcular() {


    let peso = document.getElementById("txtn1").value;
    let altura = document.getElementById("txtn2").value;
    let imc = peso / (altura * altura);
        if (imc <= 18.5) {
      resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Abaixo do Peso.`;
    }else if (imc > 18.5 && imc <= 24.9) {
        resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Peso Normal.`;
    
    }else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Sobrepeso.`;
    }else if (imc >= 30 && imc <= 34.9){
        resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Obesidade Grau I.`;
    
    }else if (imc >= 35 && imc <= 39.9){
        resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Obesidade Grau II.`;
    
    }
    else{
        resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Obesidade Grau III.`;
    
    }
    }