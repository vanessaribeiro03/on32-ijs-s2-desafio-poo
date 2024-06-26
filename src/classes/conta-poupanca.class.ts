import { Cliente } from "./cliente.class";
import { Conta } from "./conta-bancaria.class";

export class ContaPoupanca extends Conta{
    constructor(saldo: number, cliente: Cliente){
        super('POUPANÇA', saldo, cliente)
        console.log(`Bem-vindo(a) a sua conta poupança, ${this.cliente.nomeCompleto}`);
        
    }
}