import { Router } from 'express'

import UserController from '../controllers/userController.js'

export const router = Router()

router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getUserById)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deletedUser)