import { Cliente } from "./classes/cliente.class";
import { ContaCorrente } from "./classes/conta-corrente.class";
import { ContaPoupanca } from "./classes/conta-poupanca.class";

console.log('         *****Clientes*****');

const clienteMaria = new Cliente('1', 'Maria', 'rua teste', '81940028922', 800)
console.log( clienteMaria.exibirDados());

const clienteJoao = new Cliente('2','João', 'rua teste dois', '81940028922', 700)
console.log(clienteJoao.exibirDados());

const clienteJose = new Cliente('3', 'José', 'rua teste tres', '400298922', 400)
console.log(clienteJose.exibirDados());


console.log('         *****Contas*****\n');

const contaMaria = new ContaCorrente(0, clienteMaria)
console.log(contaMaria);

const contaJoao = new ContaCorrente(0, clienteJoao)
console.log(contaJoao);

const contaJose = new ContaPoupanca(0, clienteJose)
console.log(contaJose);

console.log('         *****Transações*****\n');

contaMaria.depositar(100);
console.log(contaMaria.verificarSaldo());

console.log();

contaJoao.depositar(100);
console.log(contaJoao.verificarSaldo());

console.log();

contaJoao.tranferir(50, contaMaria)

console.log();

console.log(contaMaria.verificarSaldo());
console.log(contaJoao.verificarSaldo());





