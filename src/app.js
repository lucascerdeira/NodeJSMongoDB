import express from "express";

const app = express();

// para ententer que iremos usar dados json 
app.use(express.json());

const books = [
    {id: 1, "Titulo": "Senhor dos Aneis"},
    {id: 2, "Titulo": "O poder do Habito"}
]

app.get('/', (req, res) => { 
    res.status(200).send('Curso de NodeJS');
});


app.get('/books', (req, res) => {
    res.status(200).json(books);
    
});

app.post('/books', (req, res) => {
    // metodo para add livros no corpo da requisição 
    books.push(req.body); 

    res.status(201).send('Livro cadastrado com sucesso')
});

export default app;
