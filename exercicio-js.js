const form = document.getElementById('valida-form');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        mensagem.textContent = `Formulário válido! O número B é maior que o número A.`;
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = `Formulário inválido! O número B deve ser maior que o número A.`;
        mensagem.style.color = "red"
    }
});
