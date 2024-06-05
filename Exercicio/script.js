// //let numeroMaximo = prompt('Digite um numero para contagem');
// //let contador = 0
// //while(contador <= numeroMaximo){
//   //  console.log(contador);
//     //contador++
// //}

// console.log("boas vindas");

// let nome = "Leonardo";
// console.log(`Boas vindas ${nome}`);
// alert(`Olá ${nome}`)
// let linguagemProgramacao = prompt("Qual sua linguagem de programação preferida");
// console.log(`A linguagem de programação preferida é ${linguagemProgramacao}`
// )
// let valor1 = 1
// let valor2 = 3
// let resultado = valor1 + valor2
// console.log(resultado);

// let idade = prompt ("Qual sua idade?");
// if(idade >= 18){
//     alert(`Você é maior de idade, você tem ${idade} anos`);
// }else{
//     alert(`Você é menor de idade, você tem ${idade} anos `)
// }

// let numero = parseFloat(prompt("digite um numero"));
// if(numero > 0){
//     alert("O número é positivo");
// }else if(numero < 0) {
//     alert("O número é negativo");
// } else{
//     alert("O numero é zero");
// }

// let numeroLoop = 1
// while (numeroLoop <=10 ) {
//     console.log(numeroLoop);
//     numeroLoop++   
// }

// let nota  = prompt("Digite sua nota"); 
// if(nota >=7 ){
//     alert("Você está aprovado");
// }else{
//     alert("você esta reprovado");
// }


// let numeroAleatorio = Math.random()
// console.log(numeroAleatorio)

// let numeroInteiroAleatorio = parseInt(Math.random() * 10 ) +1;
// console.log(numeroInteiroAleatorio)

// let numeroGrande = parseInt(Math.random()*1000)+1;
// console.log(numeroGrande)

// function calculaIMC(altura, peso){

//     let imc = peso / (alturaMetros * alturaMetros);
// }

// function calcularFatorial(numero){
//     if(numero === 0 || numero === 1){
//         return 1;
//     }
//     let fatorial = 1;
//     for (let i = 2 ; i <= numero; i++){
//         fatorial *= i;
//     }
//     return fatorial;
// }
// //exemplo de uso
// let numero = 5 ;
// let resultado =  calcularFatorial(numero);
// console.log(`O fatorial de ${numero} é ${resultado}`);

// function converterDolarParaReal (valorEmDolar){
//     let cotacaoDolar = 4.80;
//     let valorReal = valorEmDolar * cotacaoDolar
//     return valorReal.toFixed(2);
// };
// //exemplo de uso

// let valorEmDolar = 50;
// let valorReal = converterDolarParaReal(valorEmDolar);
// console.log(`${valorEmDolar} doláres equivalem a R$ ${valorReal}`);

// function calcularAreaPerimetroSalaRetangular (altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//     console.log(`Area da sala :${area} metros quadrados`);
//     console.log(`Perimetro da sala ${perimetro} metros quadrado`);
// }

// //exemplo de uso
// let altura = 3;// em metros;
// let largura = 5; //em metros
// calcularAreaPerimetroSalaRetangular(altura, largura)


// function calcularAreaPerimetroSalaCircular (raio){
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;

//     console.log(`Area a sala circular${area.toFixed(2)}metros quadrados`);
//     console.log(`Perimetro da sala ${perimetro.toFixed(2)}metros quadrado`);
// }

// //exemplo de uso
// raio = 4 //em metros
// calcularAreaPerimetroSalaCircular(raio);

function mostrarTabuada(numero){
    for(let i = 1; i <=10 ; i++){
        let resultado = numero *i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
//exemplo de uso

let numero = 7
mostrarTabuada(numero);

