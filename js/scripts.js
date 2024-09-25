// Atividade 1

function validarDados() {

    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let fone = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let produt = frmRegistro.inProd.value;
    let quant = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;

    if(data.trim() == '' ) {
    frmRegistro.inData.focus();
    mensagemerro.style.display = 'block';
    mensagemerro.innerText = 'Erro: O campo Data está vazio';
        return false;
        
    }
    
    if(nome.trim() == '' || nome.trim().length < 5) {
        frmRegistro.inCli.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Nome está vazio e Não pode ter menos de 5 carácteres';
       return false;
    }

    if(fone.trim() == '' || fone.trim().length < 5) {
        frmRegistro.inFone.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Telefone está vazio e  Não pode ter menos de 5 carácteres';
        return false;
    }


    if(mail.trim() == '' || mail.trim().length < 5) {
        frmRegistro.inMail.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo E-mail está vazio e  Não pode ter menos de 5 carácteres';
        return false;
    }

    if(produt.trim() == '' || produt.trim().length < 5) {
        frmRegistro.inProd.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Produto está vazio e  Não pode ter menos de 5 carácteres';
        return false;
    }

    if(quant.trim() == '' && quant.trim() < 0) {
        frmRegistro.inQtd.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Quantidade está vazio e Não pode ter campo negativo';
        return false;
    }

    if(valor.trim() == '' && valor.trim() < 0) {
        frmRegistro.inVal.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo Valor está vazio e Não pode ter campo negativo';
        return false;
    }

    else {
        mensagemerro.style.display = 'none';
        mensagemerro.innerText;
    }
}
// Atividade 2 










// Atividade 3
function Acender() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);
    let botao = document.getElementById('btnEnviar')

    if(arquivo == 'acesa.jpg' || arquivo == '') {
        imagem.src = 'img/apagada.jpg';
        botao.textContent = "Acender"
    }
    else {
        imagem.src = 'img/acesa.jpg';
        botao.textContent = "Apagar"
        
    }
}




    


