import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import errorHandler from './middlewares/errorHandler'

dotenv.config()

const app = express()
const origin = process.env.NODE_ENV === 'production' ? process.env.ALLOW_ORIGIN : '*'

app.use(express.json())
app.use(cors({ origin }))
app.use(helmet())
app.use(morgan('dev'))

app.use('/uploads', express.static('uploads'))

app.use(errorHandler)

export default app
