import {sub} from './lib/math'
import soma from './lib/sum'
// // Nullish coalescing Operator ??

// const year = 0

// // 0, '', [], false, undefined, null => falsy in || not falsy in ??

// //document.body.innerText = (`Sua idade é: ${idade ?? 'Não informado'}`)

// // Objetos

// const user = {
//   name: 'Diego',
//   idade: 21,
//   address: {
//     street: 'Rua Julie Verne',
//     number: 123,
//   },
// };

// // keys, values, entries
// // JSON.stringify
// //document.body.innerText = JSON.stringify(Object.values(user))


// // Desestruturação: Remover parte de um objeto para uma variável a parte
// // Desestruturação pode ser usada para renomear dados dentro de objetos, assim como criar,
// // dados e setar valores padrão caso não exista, como o nickname

// function mostraIdade({ idade }) {
//   return idade
// }

// //const { address, name, idade: age, nickname = 'Anonimy' } = user

// //document.body.innerText = mostraIdade(user)

// //document.body.innerText = JSON.stringify({ address, age, nickname })

// // Rest Operator tem como função obter as propriedades de um objeto menos a propriedade escrita antes de...rest

// //const { name, ...rest } = user;

// const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [first, second, ...rest] = arrays

// document.body.innerText = JSON.stringify({ first, second, rest } )

// Short Syntax é a redução de identificador e valor para somente valor exem: name: name in Short Syntax name,

// const name = 'Diego';
// const age = 12;

// const user = {
//   name,
//   age,
  
// };

// document.body.innerText = JSON.stringify(user)

//Optional Chaining

// const user = {
//   name: 'Diego',
//   idade: 21,
//   address: {
//     street: 'Rua Julie Verne',
//     number: 123,
//     zip: {
//       code: '89160000111',
//       city: 'Rio do Sul'
//     },
//     showFullAddress() {
//       return 'ok';
//     }
//   },
// };

//const key = 'state';

// Usando um Optional Chaining endereço = end se não = ?? end.end?.end?.end?dado ?? 'Não informado'; 

//document.body.innerText = user.address?.[key]; // <== Também é possivel usar chaining com cochetes


// document.body.innerText = user.address?.showFullAddress?.(); // <== Verifica se está address e se a função existe

// document.body.innerText = user.address?.zip?.code ?? 'Não informadoa';


// Usando um operador condicional ternário
// document.body.innerText = user.address 
//   ?  user.address.zip 
//     ? user.address.zip.code
//     : 'Não informado'
//   : 'Não informado'

// map() map consegue fazer um retorno de array e o for each não. map faz um retorno de dentro dele
// Usado para mudar valores de um array e adicionar em outro, como uma verificação colocando condições
// Propriedades importantes  map, filter, every, some, find, findIndex, reduce

//const array = [1, 2, 3, 5, 6, 7, 10]

// const newArray = array.map(item => {
//   if (item % 2 === 0) {
//     return item * 10;
//   }
//   return item
// })

// FILTER
//const newArray = array.filter(item => item % 2 === 0) // Só vai me passar dados que forem de acordo com a condição

// const newArray = array.filter(item => item % 2 !== 0).map(item => item * 10);

// EVERY

// const todosItensSaoNumero = array.every(item => typeof item === 'number')

// SOME Pelo menos 1 item é diferente da condição

// const peloMenosUmItemNaoEUmNumero = array.some(item => {
//     return typeof item !== 'number'
// })

// FIND é uma propriedade que vai procurar até achar a condição estabelecida
// FindIndex é exatamente igual porém ele retorna o index do valor procurado
// const ateAcharEPara = array.find(item => item % 2 === 0);

// Reduce Muito usado quando queremos pegar um array e criar uma nova estrutura de dados com esse array
// sem tanta regra

// const somaDoArray = array.reduce((acc, item) => { // <== Arrow Function sendo criada recebendo 2 parâmetros que é o objeto que estamos criandoe  o array
//     // document.body.innerText += acc + ',' + item + ''//

//     return acc + item // Retornando o acumulador que acumulou a soma do item que são os valores do array
// }, 0) // <== Iniciamos a soma com esse zero

// document.body.innerText =  JSON.stringify(somaDoArray)
//document.body.innerText = JSON.stringify(ateAcharEPara)

// for (const i of array) {
//   document.body.innerText += i;
// }

// array.forEach(item => {
//   document.body.innerText += item
// })

// Templates Literals

// const name = 'Diego'
// const message = `Bem-Vindo ${name ? 'Existe' : 'Visitante'}`; // <== Utilizando ` ${}` podemos usar outras varavéis e o Null Operator assim como Chaining Optional

// document.body.innerText = message

// Promises 
// Nem tudo na programação é sincrono, ou seja nem tuna na progrmaação executa exatamente quando mandamos executar
// Ou seja tem coisas que demoram de retorna e não podemos esperar aquilo que desejamos para continuar o código
// LATÊNCIA
// Algumas coisas na nossa aplicação devem ser assincrona, fazendo uma promessa/promise de que algo pode acontecer
// resolve é usada para quando a promise funciona e reject é para quando ela não funcionar

// fetch('https://api.github.com/users/BRichardev')
//     .then(response => {
//         return response.json();
    
// }).then(body => {
//     console.log(body)
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log('finally')
// })
// console.log(response.json().then(body => {
// console.log(body)
// }))

// async function buscaDadosGitHub () {
//   try {
//     const response = await fetch('https://api.github.com/users/BRichardev');
//     const body = await response.json();

//     return body.name
//   } catch (err) {
//     console.log(err)
//   } finally {
//     console.log('deu')
//   }
// }

// buscaDadosGitHub().then(name => { //<== Usei .then para monstrar 1 valor dentro do response.json() que pego do link github
//   console.log(name)
// });


// const somaDoisNumeros = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(a + b);
//         }, 2000);
//     });
// }

// somaDoisNumeros(5, 1).then(soma => {
//     document.body.innerText = soma
// }).catch(err => {
//     console.log(err)
// })

console.log(sub(5,2))