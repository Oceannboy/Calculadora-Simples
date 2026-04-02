function inserirNoDisplay(data) {
    document.querySelector('#display').value += data;
}

function limparDisplay() {
    document.querySelector('#display').value = '';
}

function apagarUltimo() {
    let display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    let display = document.querySelector('#display');
    try {
        const resultado = eval(display.value);
        if (resultado === Infinity || resultado === -Infinity) {
            alert("Erro: Não é possível dividir por zero!");
            display.value = " ";
        } else if (Number.isNaN(resultado)) {
            display.value = "Erro";
        } else {
            display.value = resultado;
        }
    } catch (error) {
        display.value = 'Erro';
    }
}

function handleKeyPress(event) {
    const key = event.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        inserirNoDisplay(key);
    } else if (key === 'Enter') {
        calcular();
    } else if (key === 'Backspace') {
        apagarUltimo();
    } else if (key === 'Escape') {
        limparDisplay();
    }
}

document.addEventListener('keydown', handleKeyPress);




