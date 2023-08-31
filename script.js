let displayValue = ''

function appendToDisplay(value) {
    console.log('Value appendToDisplay ---->', value)
    displayValue += value
    document.getElementById('display').value = displayValue
}

function clearToDisplay() {
    displayValue = ''
    document.getElementById('display').value = displayValue
}

function calculate() {
    try {
        let result = eval(displayValue); // Utiliza a função eval para calcular a expressão
        if (!isFinite(result)) {
            displayValue = '';
            document.getElementById('display').value = 'Erro';
        } else {
            displayValue = result.toString();
            document.getElementById('display').value = displayValue;
        }
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Erro';
    }
}

const sinaisOperacao = document.querySelectorAll('.operador');//seleciona todos os elementos que possuem a classe operador e armazena na variável
for (let i = 0; i < sinaisOperacao.length; i++) { //o laço percorre todos os operadores
  const button = sinaisOperacao[i]; //armazena o operador atual em button
  button.addEventListener('click', function () { //quando o botão é clicado, seu valor é armazenado.
    appendToDisplay(button.textContent); //passa o valor armazenado do botão como texto para o display
  });
}
