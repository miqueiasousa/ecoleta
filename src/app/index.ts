import express from 'express'
import helmet from 'helmet'

const app = express()

app.use(helmet())

app.get('/', (req, res) => res.json({ foo: 'bar' }))

export default app
