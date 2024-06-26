import { Cliente } from "./cliente.class";

export class Conta  {
    tipo: 'CORRENTE' | 'POUPANÇA';
    numeroConta: string;
    saldo: number;
    cliente: Cliente;

    constructor(tipo: 'CORRENTE' | 'POUPANÇA', saldo: number, cliente: Cliente) {
        this.tipo = tipo;
        this.numeroConta = gerarNumeracaoAleatoria()
        this.saldo = saldo;
        this.cliente = cliente
    }

    depositar(valor: number): void {
        if(valor <= 0){
            console.log('Valor inválido para deposito.');
        }else{
            this.saldo += valor;
            console.log(`Deposito do(a) ${this.cliente.nomeCompleto} feito no valor de R$${valor}`);
        }
    }

    sacar(valor: number): void {
        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`Saque do(a) ${this.cliente.nomeCompleto} feito no valor de R$${valor}`);
        }else{
            console.log('saldo insuficiente para o saque.');
        }
    }

    tranferir(valor: number, contaDestino: Conta): void {
        if(valor <= this.saldo){
            this.saldo -= valor
            contaDestino.saldo += valor
            console.log(`Transferência feita do(a) ${this.cliente.nomeCompleto} para ${contaDestino.cliente.nomeCompleto} no valor de ${valor}` );
            
        }else{
            console.log('saldo insuficiente para a transferência');
        }
    }

    verificarSaldo(): string{
        return `Seu saldo atual ${this.cliente.nomeCompleto}: R$${this.saldo}`;
    }

    exibirDadosBancarios(): string{
        return`
        Tipo: ${this.tipo}
        Número da Conta: ${this.numeroConta}
        Saldo: ${this.saldo}
        Cliente: ${this.cliente.nomeCompleto}
        ` 
    }
}

function gerarNumeracaoAleatoria(): string {
    return Math.floor(Math.random() * 1000000000).toString();
}
