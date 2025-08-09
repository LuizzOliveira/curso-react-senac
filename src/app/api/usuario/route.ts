import db from  "@/app/api/database";

export async function GET() {

    try{
        const [row] = await db.query<any>('SELECT * FROM usuario')
        if(row.length > 0){
            return new Response(JSON.stringify(row))
        }else{
            return new Response(JSON.stringify({erro: "usuarios não encontrado"}))
        }
        

    } catch (error) {
        return new Response(JSON.stringify({erro:error}))
    }
}

export async function POST(request: Request) {
    const { nome, email } = await request.json();

    try {
        const [resultado] = await db.query<any>(
            "INSERT INTO usuario (nome, email) VALUES (?,?)",
            [nome, email]
        );
        return new Response(JSON.stringify({ id: resultado.insertId, nome, email }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Erro ao inserir usuário:", error);
        return new Response(
            JSON.stringify({ erro: "Erro ao cadastrar usuário" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        );
    }
}


export async function PUT(request: Request){
    const {id,nome, email} = await request.json();

    await db.query("UPDATE usuario SET nome = ? , email = ? WHERE id = ?", [nome,email,id])

    return Response.json({sucesso: true})
}

export async function DELETE(request: Request){
    const {id} = await request.json();

    await db.query("DELETE FROM usuario WHERE id = ?", [id])

    return Response.json({sucesso: true})
}