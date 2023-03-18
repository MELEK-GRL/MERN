import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const register=async(req,res)=>{

    const salt=bcrypt.genSaltSync(10)
    const hash=bcrypt.hashSync(req.body.password)

    try {
        const number=new User({
            username:req.body.username,
            email:req.body.email,
            password:req.res.password,
            photo:req.body.photo,
            
        })
        await newUser.save()

        res.status(200).json({
            sucsess:true,
            message:'Sucsess Register'
        })
        
    } catch (error) {
        res.status(500).json({
            sucsess:false,
            message:'Faild Register'
        })
    }
}

export const login=async(req,res)=>{
    const email=req.body.email
    try {
        const user=await User.findOne({email})

        if(!user){
            return res.status(404).json({
                sucsess:false,
                message:'User not found'
            })
        }
        const checkPassword=await bcrypt.compare(req.body.password,user.password)

        if(!checkPassword){
            return res.status(401).json({
                sucsess:false,
                message:'email password faild'
            })
        }

        const {password,role,...rest}=user._doc

        const token=jwt.sign({
            id:user,
            role:user.role
        },
        process.env.JWT_SECRET_KEY,{expiresIn:'15d'}
        )

        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({
           token,
            data:{
                ...rest
            },
            role,
        })

    } catch (error) {
        res.status(500).json({
            sucsess:false,
            message:'Faild Login'
        })
    }
}