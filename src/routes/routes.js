import { Router } from 'express'

import userController from '../controllers/userController.js'

export const router = Router()

router.get('/users', userController.getAllUsers)
router.get('/user/:id', userController.getUserById)
router.post('/user', userController.createUser)