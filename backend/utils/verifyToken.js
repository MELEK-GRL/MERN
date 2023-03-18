import jwt  from 'jsonwebtoken'

const verifyToken=(req,res)=>{
    const token =req.cookie.accessToken

    if(!token){
        return res.status(401).json({
            sucsess:false,
            messagge:'You are not authorize'
        })
    }

    jwt.verify(token,process.env.JWT_SECRET_KEY,(error,user)=>{
      if(error){
        return res.status(401).json({
            sucsess:false,
            messagge:'token is invalid'
        })
      } 
      
      req.user=user
      next()
    })
}


export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id||req.user.role==='admin'){
            next()
        }
        else{
           return res.status(401).json({
                sucsess:false,
                messagge:'You are not authenticated'
            })
        }
    })

}


export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.role==='admin'){
            next()
        }
        else{
            return res.status(401).json({
                sucsess:false,
                messagge:'You are not authorize'
            })
        }
    })

}

