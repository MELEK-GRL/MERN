import express from 'express'
import {getAllUser,getSingleUser,deleteUser,updateUser } from '../controllers/UserControllers.js'

import {verifyUser,verifyAdmin} from '../utils/verifyToken.js'


const router=express.Router()



//update user
router.put('/:id',verifyUser,updateUser)

//delete user
router.delete('/:id',verifyUser,deleteUser)

//getSingleUser
router.get('/:id',verifyUser,getSingleUser)

router.get('/',verifyUser,getAllUser)


export default router