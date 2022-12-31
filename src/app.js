import express from "express";

const app = express();

// para ententer que iremos usar dados json 
app.use(express.json());

// array lista de livros
const books = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O poder do Habito"}
]

app.get('/', (req, res) => { 
    res.status(200).send('Curso de NodeJS');
});

// 
app.get('/books', (req, res) => {
    res.status(200).json(books);
    
});

// campo onde será add novos livros 
app.post('/books', (req, res) => {
    // metodo para add livros no corpo da requisição 
    books.push(req.body); 

    res.status(201).send('Livro cadastrado com sucesso');
});

// para atualizar o livro, vou usar o ID para poder identificalo 
app.put('/books/:id', (req, res) => {
    let index = buscaLivro(req, params.id);
    books[index].titulo = req.body.titulo;
    res.json(books);

});

// function para retornar o ID
function buscaLivro(id){
    // o findindex era retornar a posição correta no nosso array 
    return  books.findIndex(book => book.id == id);
}
export default app;