import express from "express";

const app = express();

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

export default app;
