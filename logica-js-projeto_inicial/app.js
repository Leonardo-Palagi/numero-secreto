alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao n.s 
while (chute != numeroSecreto) {
    chute =  prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
        if (chute == numeroSecreto) {
            break
        } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que o ${chute}`);
        } else { 
            alert(` O número secreto é maior do que ${chute}`);
        
        }
        tentativas++
    }
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


//    if(tentativas > 1){
//        alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//    }else{
//        alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//   }


