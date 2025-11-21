const express = require("express");
const app = express();
app.use(express.json());

let produtos = [
  { id: 1, nome: "Odorizador para carro", preco: 15.0, descricao: "Perfume para ambiente veicular com aroma de lavanda.", categoria: "Acessórios" },
  { id: 2, nome: "Suporte para celular veicular", preco: 35.0, descricao: "Suporte magnético com rotação 360 graus para painel.", categoria: "Eletrônicos" },
  { id: 3, nome: "Capa para volante", preco: 45.0, descricao: "Capa em couro sintético preto, tamanho universal.", categoria: "Acessórios" },
  { id: 4, nome: "Kit de limpeza automotiva", preco: 60.0, descricao: "Inclui cera, shampoo, e flanela de microfibra.", categoria: "Cuidados" },
  { id: 5, nome: "Câmera de ré", preco: 120.0, descricao: "Câmera de visão noturna com display de 4 polegadas.", categoria: "Eletrônicos" }
];

// GET - Listar todos os produtos
app.get("/produtos", (req, res) => res.json(produtos));

// GET - Buscar produto por ID
app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
    res.json(produto);
});

// POST - Novo produto
app.post("/produtos", (req, res) => {
    const { nome, preco, descricao, categoria } = req.body;
    
    if (!nome || !preco) return res.status(400).json({ erro: "Nome e preço são obrigatórios." });

    const id = produtos.length ? produtos[produtos.length - 1].id + 1 : 1;
    const novo = { id, nome, preco, descricao, categoria };
    produtos.push(novo);
    res.status(201).json(novo);
});

// PUT - Atualizar um produto existente
app.put("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ erro: "Produto não encontrado" });

    const { nome, preco, descricao, categoria } = req.body;
    
    produtos[index] = {
        id: id,
        nome: nome || produtos[index].nome,
        preco: preco || produtos[index].preco,
        descricao: descricao || produtos[index].descricao,
        categoria: categoria || produtos[index].categoria
    };

    res.json(produtos[index]);
});

// DELETE - Excluir produto
app.delete("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ erro: "Produto não encontrado" }); 
    const removido = produtos.splice(index, 1);

    res.json(removido[0]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));