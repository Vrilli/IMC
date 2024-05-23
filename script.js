document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    const resultadoDiv = document.getElementById('resultado');
    
    let mensaje = '';
    let imagen = '';

    if (imc < 18.5) {
        mensaje = 'Bajo de peso';
        imagen = './img/BAJO DE PESO.png';
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensaje = 'Peso normal';
        imagen = './img/pesoNormal.jpg';
    } else if (imc >= 25 && imc <= 29.9) {
        mensaje = 'Sobrepeso';
        imagen = './img/pesoSobre.jpg';
    } else if (imc >= 30 && imc <= 34.9) {
        mensaje = 'Obesidad clase I';
        imagen = './img/clase1.jpg';
    } else if (imc >= 35 && imc <= 39.9) {
        mensaje = 'Obesidad clase II';
        imagen = './img/clase2.jpg';
    } else if (imc >= 40) {
        mensaje = 'Obesidad mórbida (clase III)';
        imagen = './img/clase3.jpg';
    }

    resultadoDiv.innerHTML = `
        <p>Tu IMC es ${imc.toFixed(2)}</p>
        <p>${mensaje}</p>
        <img src="${imagen}" alt="${mensaje}">
    `;
});
