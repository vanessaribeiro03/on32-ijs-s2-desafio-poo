export class Cliente{
    public id: string;
    public nomeCompleto: string;
    public endereco: string;
    public numeroTelefone: string;
    public rendaSalarial: number;

    constructor(id: string, nomeCompleto: string, endereco: string, numeroTelefone: string, rendaSalarial: number){
        this.nomeCompleto = nomeCompleto;
        this.id = id
        this.endereco = endereco; 
        this.numeroTelefone = numeroTelefone; 
        this.rendaSalarial = rendaSalarial;
    }

    public exibirDados(): string {
        return `
        Dados do Cliente:

        Nome Completo: ${this.nomeCompleto}
        Id: ${this.id}
        Endereço: ${this.endereco}
        Número de Telefone: ${this.endereco}
        Renda Salarial: R$ ${this.rendaSalarial}
        `
    }
}