function contador(){ //declara função sem parâmetros
    const tempo = new Date(); //cria váriavel somente leitura, recebendo o objeto Date
    let hora = tempo.getHours(); //cria váriavel temporária recebendo retorno do método getHours
    let minuto = tempo.getMinutes(); //cria váriavel temporária recebendo retorno do método getMinutes
    let segundo = tempo.getSeconds(); //cria váriavel temporária recebendo retorno do método getSeconds
    if (document.getElementById("cbxMarcarTempo").checked == true){ //coloca uma condição se a checkbox for verdadeira executar os códigos abaixo
        document.getElementById("div_horas").innerText = hora +":"; //pega elemento "div_horas" e coloca o texto da váriavel "hora"
        document.getElementById("div_minutos").innerText = minuto +":"; //pega elemento "div_minutos" e coloca o texto da váriavel "minuto"
        document.getElementById("div_segundos").innerText = segundo; //pega elemento "div_segundos" e coloca o texto da váriavel "segundo"
    } // encerra bloco de cógidos do if veradadeiro
    setInterval(contador, 1000); //conta 1 segundo até ser cancelado
    if (document.getElementById("cbxMarcarTempo").checked == false){ //coloca uma condição se a checkbox for falsa executar os códigos
        document.getElementById("div_horas").innerText = ""; //pega elemento "div_horas" e deixa o texto vazio
        document.getElementById("div_minutos").innerText = ""; //pega elemento "div_minutos" e deixa o texto vazio
        document.getElementById("div_segundos").innerText = ""; //pega elemento "div_segundos" e deixa o texto vazio
        clearInterval(); //zera todos os "setInterval"
    } //encerra bloco de códigos do if falso
} //encerra bloco de códigos da função contador

document.getElementById("cbxMarcarTempo").addEventListener('click', () => { // adiciona na lista de eventos do java o evento "click" do objeto "cbxMarcarTempo"
    contador(); //chama a função "contador"
}); //encerra o bloco de códigos do método e da função inominada