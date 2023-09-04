import express, { Express } from 'express'
import cors from 'cors'
import { Router } from './router'
import { config } from 'dotenv'

config()

export function setup(app: Express) {
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cors())

    // Add you controllers here in array
    const controllers = []
    controllers.forEach(controller => controller())

    app.use(Router.activate())
}