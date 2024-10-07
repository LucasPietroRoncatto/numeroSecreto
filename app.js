alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 10000; //alterar o número máximo do numeroSecreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // gera a váriavel aleatória, 'parseInt' para remover a casa decimal, * 100 para ser maior que 0
let tentativa;
let quantTentativas = 1;//n° de tentativas


// laço de repetição
while (tentativa != numeroSecreto){
    tentativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

        if (tentativa == numeroSecreto) { // realizar comparação
        break; //caso acerte o número na primeira tentativa, o jogo para
        } else{
            if(numeroSecreto > tentativa){
                alert(`o número secreto é maior que ${tentativa}`);
            }else{
                alert(`o número secreto é menor que ${tentativa}`)  
            }
            quantTentativas++;
        }
}
/*ajeitar o tentativas e tentativa gramaticalmente

if(quantTentativas > 1){
    alert(`Você descobriu o número secreto (${numeroSecreto} com ${quantTentativas} tentativa.)`);
}else{
    alert(`Você descobriu o número secreto (${numeroSecreto} com ${quantTentativas} tentativaS.)`);
}*/
// outra forma:

//declaração para a palavra tentativa gramaticalmente
let palavraTentativa = quantTentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto (${numeroSecreto}) com ${quantTentativas} ${palavraTentativa}.`);

