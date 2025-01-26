const resultadoDiv = document.getElementById('result');

function calculateWeight() {
    const peso = document.getElementById('kg').value;
    const quantidadeAgua = (peso * 35)/1000 // A divisão por 1000 serve para transformar de ml para l
    const resultadoArredondado = quantidadeAgua.toFixed(1);
    
    if (quantidadeAgua === 0) {
        resultadoDiv.textContent = "Insira o valor do peso!";
    } else {
        resultadoDiv.textContent = `${resultadoArredondado}L p/dia`;
    }
}