import Authors from "../Model/Author.js"

class AuthorController {
    static getAuthor = (err, res) => {
        Authors.find((err, Author) => {
            if(err){
                res.status(500).send(`${err.message} Array not found`)
            }else{
                res.status(200).json(Author)
            }
        })
    }

    static getAuthorById = (req, res) => {
        const id = req.params.id
        Authors.findById(id, (err, Author) =>{
            if(err){
                res.status(400).send(`${err.message} ID not found`)
            }else{
                res.status(200).json(Author)
            }
        })

    }

    static postAuthor = (req, res) => {
        let Author = new Authors(req.body)

        Author.save((err) => {
           if(err){
            res.status(500).send(`${err.message || sql.message} signup failed`)
           }else{
            res.status(201).send(Author.toJSON())
           }

        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id

        Authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err){
                res.status(500).send({ message: "Update failed" })

            }else{
                res.status(200).send({ message: "Update Authors whit success" })
            }

        })
    }

    static deleteAuthorById = (req, res) =>{
        const id = req.params.id

        Authors.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(500).send(`${err.message} ID not found for delete`)
            }else{
                res.status(200).send(`Authors deleted whit success`)
            }
        })
    }
}

export default AuthorController