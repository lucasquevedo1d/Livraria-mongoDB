import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type:String},
    title: {type:String, required:true},
    author:{type: String, ref:"authors", required:true},
    publishCompany:{type: String, required:true},
    year: {type:Number, required:true}
})

const Book = mongoose.model("livros", bookSchema)

export default Book