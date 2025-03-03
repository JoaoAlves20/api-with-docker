import { Router } from 'express'

import UserController from '../controllers/userController.js'

export const router = Router()

router.get('/users', UserController.getAllUsers)
router.get('/user/:id', UserController.getUserById)
router.post('/user', UserController.createUser)
router.put('/user/:id', UserController.updateUser)