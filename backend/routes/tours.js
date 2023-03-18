import express from 'express'
import { createTour,getCount,getFatured,getSearch,updateTour,deleteTour,getAllTour,getSingleTour} from '../controllers/tourControllers.js'


import { verifyAdmin } from '../utils/verifyToken.js'

const router=express.Router()

//new tour create
router.post('/',verifyAdmin,createTour)

//update
router.put('/:id',verifyAdmin,updateTour)

//delete
router.delete('/:id',verifyAdmin,deleteTour)

//getAllTour
router.get('/',getAllTour)

//getSingleTour
router.get('/:id',getSingleTour)

//getSearch
router.get('/search/getSearch',getSearch)

//getFatured
router.get('/search/getFatured',getFatured)

//getCount
router.get('/search/getCount',getCount)



export default router