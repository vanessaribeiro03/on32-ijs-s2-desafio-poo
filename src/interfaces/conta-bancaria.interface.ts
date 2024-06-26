export interface ContaBancaria {
    tipo: 'CORRENTE' | 'POUPANÇA';
    numeroConta: string;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): void;
    tranferir(valor: number, contaDestino: ContaBancaria): void;
}