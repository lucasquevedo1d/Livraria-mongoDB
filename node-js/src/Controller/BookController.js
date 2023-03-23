import Book from "../Model/Book.js"

class BookController {
    static getBook = (err, res) => {
        Book.find()
            .populate("author")
            .exec((err, books) => {
                if (err) {
                    res.status(500).send(`${err.message} Array not found`)
                } else {
                    res.status(200).json(books)
                }
            })
    }

    static getBookById = (req, res) => {
        const id = req.params.id
        Book.findById(id)
            .populate('author')
            .exec((err, book) => {
            if (err) {
                res.status(400).send(`${err.message} ID not found`)
            } else {
                res.status(200).json(book)
            }
        })

    }

    static postBook = (req, res) => {
        let book = new Book(req.body)

        book.save((err) => {
            if (err) {
                res.status(500).send(`${err.message || sql.message} signup failed`)
            } else {
                res.status(201).send(book.toJSON())
            }

        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id

        Book.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: "Update failed" })

            } else {
                res.status(200).send({ message: "Update book whit success" })
            }

        })
    }

    static deleteBookById = (req, res) => {
        const id = req.params.id

        Book.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send(`${err.message} ID not found for delete`)
            } else {
                res.status(200).send(`Book deleted whit success`)
            }
        })
    }
}

export default BookController