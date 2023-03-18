import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import toursData from '../../../data/toursData'
import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'
import { AiOutlineUsergroupDelete } from 'react-icons/ai'
import avatar from '../../../assets/image/Logo/avatar.png'
import { useNavigate } from 'react-router-dom'

export default function Section() {

    const { id } = useParams()

    const tour = toursData.find(tour => tour.id === id)

    const { photo, title, desc, price, avgRating, city, reviews, distance, maxGroupSize } = tour

    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])


    const [star, setStar] = useState([
        { key: 1, value: '1' },
        { key: 2, value: '2' },
        { key: 3, value: '3' },
    ])
    const checkStar = (key, checked) => {
        setStar(star => star.map((x) => {
            if (key === x.key) {
                x.checked = checked
            }
        }))
        return star
    }
    const submitHandle = (e) => {
        e.preventDefault();
        setList([...list, todo])
        setTodo('')
    }

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        userId: '01',
        fullName: '',
        userEmail: 'example@gmail.com',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/thank-you')
        console.log(inputs)
    }


    const count = 10;
    const totalCout = Number(price) * Number(inputs.guestSize) + Number(count)


    return (
        <div className="flex w-full gap-8 mt-4  flex-col ">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-8'>
                <img src={photo} className='shadow-xl w-full h-[350px] object-cover rounded-md border-2 border-teal-800' />
                <div className='flex w-full flex-col h-fit gap-6 p-4 lg:px-16 lg:py-10 shadow-xl'>
                    <div className='flex py-2 border-b  w-full justify-between items-center'>
                        <span className='text-[20px] font-semibold themeColor'>{price}$ /per person</span>
                        <span className='text-[16px] font-semibold themeColor'>{avgRating}</span>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex w-full flex-col gap-2'>
                            <h1 className='text-[15px] font-semibold themeColor'>Information</h1>
                            <form onSubmit={handleClick} className='flex gap-2 flex-col'>
                                <div className='p-4 border rounded-md flex w-full flex-col gap-3'>
                                    <input onChange={handleChange} type='text' id='fullName' required className='px-1 py-1 inputForm' placeholder='Full Name' />
                                    <input onChange={handleChange} type='number' id='phone' required className='px-1 py-1 inputForm' placeholder='Phone' />
                                    <div className='flex gap-6 w-full'>
                                        <input id='bookAt' onChange={handleChange} type='date' required className='w-[60%]  px-1 py-1 inputForm' />
                                        <input id='guestSize' onChange={handleChange} type='number' required className='w-[40%] px-1 py-1 inputForm' placeholder='Guest' />
                                    </div>
                                </div>
                                <div className='flex w-full flex-col gap-2'>
                                    <div className='justify-between flex items-center'>
                                        <span className='text-[15px] themeColor'>${price} x 1 person</span>
                                        <span className='text-[15px] themeColor'>${price}</span>
                                    </div>
                                    <div className='justify-between flex items-center'>
                                        <span className='text-[15px] themeColor'>Service change</span>
                                        <span className='text-[15px] themeColor'>${count}</span>
                                    </div>
                                    <div className='justify-between flex items-center'>
                                        <span className='text-[15px] themeColor font-semibold'>Total</span>
                                        <span className='text-[15px] themeColor'>${totalCout}</span>
                                    </div>
                                </div>
                                <div className='boxCenter w-full'>
                                    <button className='btnGreenTwo w-[50%] font-sans'>Book Now</button>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col h-fit gap-6 p-4 shadow-xl'>
                    <h1 className='text-[18px] font-semibold  themeColor'>{title}</h1>
                    <div className='items-center flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <AiFillStar size={16} />
                            <span className='text-[14px]'>{avgRating}</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <MdLocationOn size={16} />
                            <span className='text-[14px]'>{title}</span>
                        </div>
                    </div>
                    <div className='items-center flex justify-between'>
                        <div className='flex gap-1 items-center'>
                            <MdLocationOn size={16} />
                            <span className='text-[14px]'>{city}</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <AiFillDollarCircle size={16} />
                            <span className='text-[14px]'>{price} /per person</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <AiOutlineUsergroupDelete size={16} />
                            <span className='text-[14px]'>{maxGroupSize}</span>
                        </div>
                    </div>
                    <div className='flex gap-3 w-full flex-col'>
                        <h1 className='text-[16px] font-semibold themeColor'>Description</h1>
                        <span className='text-[14px] themeColor'>
                            {desc}
                        </span>
                    </div>
                </div>
                <div className='flex w-full  gap-4 flex-col shadow-xl p-4'>
                    <h1 className='text-[16px] font-semibold themeColor'>Reviews</h1>
                    <form className='flex flex-col gap-4'>
                        {/* <div className='flex w-full gap-4'>
                        <div className='gap-[2px] flex items-center'>
                            <span className='text-[16px] font-semibold text-teal-700'>1</span>
                            <AiFillStar size={15} className='text-teal-700' />
                        </div>
                        <div className='gap-[2px] flex items-center'>
                            <span className='text-[16px] font-semibold text-teal-700'>2</span>
                            <AiFillStar size={15} className='text-teal-700' />
                        </div>
                        <div className='gap-[2px] flex items-center'>
                            <span className='text-[16px] font-semibold text-teal-700'>3</span>
                            <AiFillStar size={15} className='text-teal-700' />
                        </div>

                    </div> */
                        }

                        <div className='flex w-full gap-4'>
                            {star.map((x, i) => (
                                <div key={i} className='gap-[2px] flex items-center'>
                                    <span className='text-[16px] font-semibold text-teal-700'>{x.value}</span>
                                    <div className='flex relative'>
                                        <input type='checkbox' onChange={e => checkStar(x.key, e.target.checked)} checked={x.cheked} className='invisible' />
                                        <AiFillStar size={15} className='text-teal-700 absolute' />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-1 p-1 rounded-full w-full h-[45px] border-teal-800 border-2'>
                            <input value={todo} onChange={e => setTodo(e.target.value)} placeholder='share your thoughts' className='border-none w-full rounded-md text-[16px] h-full  py-[2px] px-1 text-gray-500 focus:outline-none' />
                            <button disabled={!todo} onClick={submitHandle} type='submit' className='cursor-pointer text-[14px] font-semibold h-full py-[2px] px-1 flex items-center btnGreenTwo'>Submit</button>
                        </div>
                    </form>
                    <ul className='flex w-full flex-col gap-4 shadow-2xl p-2'>
                        {
                            list.map((x, i) => (
                                <div className='w-full flex gap-3 items-center justify-between'>
                                    <div key={i} className='w-full flex gap-3 items-center'>
                                        <img src={avatar} className='w-10 h-10 object-cover rounded-full' />
                                        <li className='text-[15px] themeColor'>{x}</li>
                                    </div>
                                    <div className='gap-[2px] flex items-center'>
                                        {/* <span className='text-[16px] font-semibold text-teal-700'>{star}</span> */}
                                        <AiFillStar size={15} className='text-teal-700' />
                                    </div>
                                </div>
                            ))
                        }

                    </ul>

                </div>
            </div>
        </div>
    )
}
