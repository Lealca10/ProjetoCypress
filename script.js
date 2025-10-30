
document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    
    if (nome) {
        alert('Formulário enviado com sucesso! Nome: ' + nome);
    } else {
        alert('Por favor, preencha o campo nome.');
    }
});
