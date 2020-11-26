import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'
}))
app.use(helmet())
app.use(morgan('dev'))

app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => res.json({ foo: 'bar' }))

export default app
