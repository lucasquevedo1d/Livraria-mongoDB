import Express from "express";
import db from './config/connectionDB.js'
import Routes2 from "./Routes/Index.js";

db.on("Error", console.log.bind(console, "Connection error"))
db.once("open", () => {
    console.log("Connection successful")
})

const app = Express()

app.use(Express.json())

Routes2(app)


export default app