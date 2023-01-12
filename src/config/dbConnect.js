import mongoose from "mongoose"; 

// string de conecção
mongoose.connect("mongodb+srv://devcerdeira:456@cluster0.5qs6rn7.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

