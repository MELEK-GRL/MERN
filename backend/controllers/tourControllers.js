import { query } from 'express'
import Tour from '../models/Tour.js'

export const createTour=async(req,res)=>{
    const newTour=new  Tour(req.body)
    try {
        
        const saveTour=await newTour.save()
        res.status(200).json({
            sucsess:true,
            message:'Sucsess message',
            data:saveTour
        })
    } catch (error) {
        res.status(500).json({
            sucsess:false,
            message:'Faild message',
        })
    }
}

//update

export const updateTour=async(req,res)=>{
    const id=req.params.id
    try {
        const updateTour=await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
            sucsess:true,
            message:"Sucsess Update",
            data:updateTour,

        })
    } catch (error) {
        res.status(500).json({
            sucsess:false,
            message:"Faild Update",
        })
    }
}

//delete

export const deleteTour=async(req,res)=>{
    const id=req.params.id
    try {
        const deleteTour=await Tour.findByIdAndDelete(id)

        res.status(200).json({
            sucsess:true,
            message:"Sucsess Delete",
        })
    } catch (error) {
        res.status(500).json({
            sucsess:false,
            message:"Faild Delete",
        })
    }
}

//getSingle

export const getSingleTour=async(req,res)=>{
    const id=req.params.id
    try {
        const tour=await Tour.findById(id).populate('reviews')

        res.status(200).json({
            sucsess:true,
            message:"Sucsess getSingle",
            data:tour
        })
    } catch (error) {
        res.status(404).json({
            sucsess:false,
            message:"Faild getSingle",
        })
    }
}

//getAll 

export const getAllTour=async(req,res)=>{
    const page=parseInt(req.query.page)
   
    try {
        const tours=await Tour.find({})
        .populate('reviews')
        .skip(page*8).limit(8)

        res.status(200).json({
            sucsess:true,
            message:"Sucsess gelAllTour",
            count:tours.length,
            data:tours
        })
        
    } catch (error) {
        req.status(404).json({
            SubmitEvent:false,
            message:"Faild gelAll"
        })
    }
}

//get tourby search

export const getSearch=async(req,res)=>{
    const city=new RegExp(req.query.city,'i')
    const distance=parseInt(req.query.distance)
    const maxGroupSize=parseInt(req.query.maxGroupSize)

    try {
        const tours=await Tour.find({
            city,
            distance:{$gte:distance},
            maxGroupSize:{$gte:maxGroupSize}
        }) .populate('reviews')
        res.status(200).json({
            sucsess:true,
            message:"Sucsess Search",
            data:tours
        })
        
    } catch (error) {
        res.status(404).json({
            sucsess:false,
            message:"Faild search"
        })
    }
}

//getFatured

export const getFatured=async(req,res)=>{
  
    try {
        const tours=await Tour.find({
            fatured:true
        }).populate('reviews').limit(8)

        res.status(200).json({
            sucsess:true,
            message:"Sucsess gelAll",
            count:tours.length,
            data:tours
        })
        
    } catch (error) {
        req.status(404).json({
            SubmitEvent:false,
            message:"Faild gelAll"
        })
    }
}


export const getCount =async(req,res)=>{
    try {
        const tourCount=await Tour.estimatedDocumentCount()
        res.status(200).json({
            sucsess:true,
            data:tourCount
        })
        
    } catch (error) {
        res.status(500).json({
            sucsess:false,
            message:"Faild Count "
        })
    }
}