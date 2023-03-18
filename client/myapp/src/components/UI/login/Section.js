import { FaUser } from 'react-icons/fa'
import login from '../../../assets/image/Logo/login.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Zoom from 'react-reveal/Zoom';

export default function Section() {

    const[input,SetInput]=useState({
        email:undefined,
        password:undefined,
    })
    const handleChange=(e)=>{
        SetInput(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick=(e)=>{
        e.preventDefault()
    }
    return (
        <Zoom left>
        <div className='boxCenter w-full'>
            <div className='md:flex-row md:gap-0 gap-10 p-4 h-[500px] flex-col flex shadow-2xl   items-center containerBox'>
                <div className='md:w-[60%] w-full bg-white  flex'>
                    <img src={login} alt={login} className='object-cover h-full w-full' />
                </div>
                <div className='md:w-[40%] w-full gap-3 h-full  p-4 boxCenter relative flex-col thmeLightBg'>
                    <div className=' flex border top-[-55px] absolute border-teal-800 p-4 bg-white rounded-full'>
                        <FaUser size={45} className='thmeLightText ' />
                    </div>
                    <h1 className='text-[19px] mt-3 font-semibold text-white'>Login</h1>
                    <form onSubmit={handleClick} className='flex gap-4 mt-3 flex-col w-full'>
                        <input id='email' onChange={handleChange} type='text' required placeholder='email' className='p-1 text-gray-500 text-[15px]' />
                        <input id='password' onChange={handleChange} type='password' required placeholder='password' className='p-1 text-gray-500 text-[15px]' />
                        <div className='boxCenter w-full'>
                            <button className='btnWhite '>Login</button>
                        </div>
                    </form>
                    <div className='boxCenter mt-3 w-full gap-2'>
                        <span className='text-white text-[14px] '>Don't have an account? </span>
                        <Link to='/register' className='themeColor hover:border-b hover:border-white border-teal-800 border-b py-[2px] text-[16px] font-semibold'>Create</Link>
                    </div>
                    <Link to='/' className='themeColor hover:border-b hover:border-white border-teal-800 border-b py-[2px] text-[16px] font-semibold '>go to Home Page</Link>
                </div>
            </div>
        </div>
        </Zoom>
    )
}
