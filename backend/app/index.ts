import express from 'express'
import userRouter from '../route/user'

const app = express()

app.get('/', (request, response) => {
	response.end('Hello, World!')
})

app.use('/user', userRouter)

export default app
