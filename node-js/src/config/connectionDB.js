import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lucasquevedo1d:91274421@node-lucas.sjou9bc.mongodb.net/mongo-db-livros")

let db = mongoose.connection

export default db