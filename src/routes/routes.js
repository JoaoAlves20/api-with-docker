import { Router } from 'express'

import { userController } from '../controllers/userController.js'

export const router = Router()

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)