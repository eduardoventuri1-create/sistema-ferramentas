export class Estoque {
    id: number;
    ferramenta_id: number;
    quantidade: number;
    quantidade_minima: number;
    localizacao: string;

    constructor (
    id: number,
    ferramenta_id: number,
    quantidade: number,
    quantidade_minima: number,
    localizacao: string,

    )
    {
        this.id = id;
        this.ferramenta_id = ferramenta_id;
        this.quantidade = quantidade;
        this.quantidade_minima = quantidade_minima;
        this.localizacao = localizacao;
    
    }
    validar():string|null{
        if(this.quantidade<=0){
            return "Quantidade não pode ser 0 (zero)"
        }
         if(this.quantidade_minima<=0){
            return "Quantidade não pode ser 0 (zero)"
        }
        if(!this.localizacao || this.localizacao.trim().length === 0){
            return "A localização é obrigatória"
        }
        
        return null;

        }

}