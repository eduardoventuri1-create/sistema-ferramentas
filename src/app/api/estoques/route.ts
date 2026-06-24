import { NextRequest, NextResponse } from "next/server";
import { Estoque } from "@/classes/Estoque";
import { listarEstoque,cadastrarEstoque } from "@/data/estoqueData";


export async function GET () {
    const estoque  = await listarEstoque();
    return NextResponse.json(estoque, {status:200});
    
}

export async function POST (request : NextRequest) {
    const body = await request.json();

    const estoque = new Estoque(
        0,
        body.ferramenta_id,
        body.quantidade,
        body.quantidade_minima,
        body.localizacao,
    );
    const erro= estoque.validar();

    if(erro) {
        return NextResponse.json(
            {erro: erro},
            {status: 400}
        );
    }
    const idNovoEstoque = await cadastrarEstoque(estoque);
    return NextResponse.json(
        {
            mensagem : "Estoque cadastrado com sucesso.",
            id: idNovoEstoque
        },
        {status: 201}
    )
}