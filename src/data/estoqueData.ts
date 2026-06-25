import { conexao } from "@/lib/conexao";
import { Estoque } from "@/classes/Estoque";
import { Quando } from "next/font/google";

export async function listarEstoque() {
     const [resultado] = await conexao.query(
        "SELECT * FROM estoques"
    );
    return resultado;

}
export async function buscarEstoquePorid(id:number) {
    const[resultado]: any = await conexao.query(
        "SELECT * FROM estoque WHERE id = ?",
        [id]
    );
    return resultado[0];

}

export async function cadastrarEstoque(estoque:Estoque) {
    const[resultado]: any = await conexao.query(
        "INSERT INTO estoque (ferramenta.id,quantidade,quantidade_minima,localizacao)",
    [
    estoque.ferramenta_id,
    estoque.quantidade,
    estoque.quantidade_minima,
    estoque.localizacao
    ]
  );

  return resultado.insertId;
}

export async function editarEstoque(id:number, estoque:Estoque) {
    const [resultado]: any = await conexao.query(
        "UPDATE estoque SET quantidade = ?,quantidade_minima = ?,localizacao = ? WHERE ferramenta_id = ?",
    
    [
    estoque.quantidade,
    estoque.quantidade_minima,
    estoque.localizacao,
    id
    ]
    );
    return resultado.affectedRows > 0;
}

export async function excluirEstoque(id:number) {
    const [resultado]: any = await conexao.query(
        "DELETE FROM estoque WHERE ferramenta_id = ?",
        [id]
    );
    return resultado.affectedRows > 0;
    
}
