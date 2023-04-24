import express from "express";
import cors from 'cors'
import routes from "./routes";
import mongoose, { mongo } from "mongoose";


class App {

    public express


    public constructor() {

        this.express = express()
        this.middlewares()
        this.routes()
        this.database()

    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private async database() {

        try {
            
            mongoose.set("strictQuery", true)

            await mongoose.connect('mongodb://0.0.0.0:27017')
            console.log('Connect database success')

        } catch (error) {
            console.log("Connect database fail, error: ", error)
        }

    }

    private routes (): void {

        this.express.use(routes)

    }


}

export default new App().express