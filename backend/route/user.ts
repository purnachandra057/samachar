import express from 'express'
import UserService from '../service/UserService'

const router = express.Router()

router.get('/', async (_, response) => {
	const users = await UserService.find()

	response.json(users)
})

export default router
