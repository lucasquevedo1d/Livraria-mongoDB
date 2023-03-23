import Router from "./Router.js"
import express from "express"


const Routes2 = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de moongose/mongo-DB")
    })

    app.use(express.json(), Router)
}

export default Routes2