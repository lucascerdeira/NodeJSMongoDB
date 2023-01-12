import mongoose from "mongoose";

// modelo de schema
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, require: true},
        autor: {type: String, require: true},
        editora: {type: String, require: true},
        numeroPaginas: {type: Number}
    }

);

const livros = mongoose.model('livros', livroSchema);

export default livros;


