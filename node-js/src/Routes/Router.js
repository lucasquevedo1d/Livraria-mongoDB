import express from "express";
import BookController from "../Controller/BookController.js";
import AuthorController from "../Controller/AuthorController.js";


const Router = express.Router()

Router
//Endpoints de livros

    .get("/book", BookController.getBook)
    .get("/book/:id", BookController.getBookById)
    .post("/book", BookController.postBook)
    .put("/book/:id", BookController.updateBook)
    .delete("/book/:id", BookController.deleteBookById)

//Endpoints de autores

.get("/author", AuthorController.getAuthor)
.get("/author/:id", AuthorController.getAuthorById)
.post("/author", AuthorController.postAuthor)
.put("/author/:id", AuthorController.updateAuthor)
.delete("/author/:id", AuthorController.deleteAuthorById)


export default Router