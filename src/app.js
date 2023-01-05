import express from "express";

const app = express();

// para ententer que iremos usar dados json 
app.use(express.json());

// array lista de books
const books = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O poder do Habito"},
    {id: 3, "titulo": "O lobo de Wallstreet"}
]

app.get('/', (req, res) => { 
    res.status(200).send('Curso de Node.JS');
});

// 
app.get('/books', (req, res) => {
    res.status(200).json(books);
    
});

app.get('/books/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(books[index]);

});

// campo onde será add novos books 
app.post('/books', (req, res) => {
    // metodo para add books no corpo da requisição 
    books.push(req.body); 
    res.status(201).send('Livro cadastrado com sucesso');

   
});

//para atualizar o livro, vou usar o ID para poder identificalo 
app.put('/books/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    books[index].titulo = req.body.titulo;
    res.json(books);
});



  app.delete('/books/:id', (req, res) => {
    let {id} =  req.params;
    let index = buscaLivro(id);
    books.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);

  })

// function para retornar o ID
function buscaLivro(id) {
    // findIndez é uma função lambda
    // o metodo findindex era retornar a posição correta do nosso array 
    return  books.findIndex(book => book.id == id);
}

export default app;