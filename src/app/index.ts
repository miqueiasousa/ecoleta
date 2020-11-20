import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

app.use(helmet())
app.use(morgan('dev'))

app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => res.json({ foo: 'bar' }))

export default app
