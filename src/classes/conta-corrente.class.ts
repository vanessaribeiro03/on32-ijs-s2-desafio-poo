import { Cliente } from "./cliente.class";
import { Conta } from "./conta-bancaria.class";

export class ContaCorrente extends Conta{
    private limiteChequeEspecial: number = 100;

    constructor(saldo: number, cliente: Cliente){
        super("CORRENTE", saldo, cliente);

        if(cliente.rendaSalarial < 500){
            console.log(`${this.cliente.nomeCompleto}, você não possui os requisitos para criar uma conta corrente.`);
            return
        }else{
            console.log(`Bem-vindo(a) a sua conta corrente, ${this.cliente.nomeCompleto}` );
        }
    }

    sacar(valor: number): void {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor
            console.log(`Saque do(a) ${this.cliente.nomeCompleto} feito no valor de R$${valor}`)
        }else{
            console.log('saldo insuficiente para saque, atingiu o limite do cheque especial');
        }
    }
}