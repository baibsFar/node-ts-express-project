import express from 'express'
import { setup } from './core/setup'
import { config } from 'dotenv'
import 'reflect-metadata'

config()

export function main(): void {
    const app = express()

    setup(app)

    app.listen(+process.env.PORT || 8000)
}