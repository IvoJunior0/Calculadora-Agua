const resultadoDiv = document.getElementById('result');

function changeResult(input) {
    if (input === 0) {
        return 'Valores nulos são inválidos (peso <= 0)';
    }
    return `${input.toFixed(1)} litros por dia`; // Arredondando para 1 casa decimal 
}

function calculateWeight() {
    const peso = document.getElementById('kg').value;
    const quantidadeAgua = (peso * 35)/1000 // Transformar de ml para l
    
    resultadoDiv.textContent = changeResult(quantidadeAgua);
}