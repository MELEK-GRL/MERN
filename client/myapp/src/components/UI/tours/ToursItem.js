import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

export default function ToursItem({ data }) {
    const{price,photo,location,star,title,id,reviews,featured}=data

    // const totalRating=reviews?.reduce((acc,item)=>acc+item.rating,0)
    // const avgRating=totalRating===0
    // ?""
    // :totalRating===1
    // ? totalRating
    // :totalRating/reviews?.lenght
    return (
        <div className='flex flex-col gap-1 shadow-lg p-3'>
            <div className='flex flex-col w-full'>
                <img src={data.photo} className='w-full h-[180px] object-cover' />
              {featured&&
                <div className='flex relative'>
                <span className='absolute thmeLightBg p-2 right-0 bottom-0 text-white'>Feature</span>
            </div> 
              }
            </div>
            <div className='flex justify-between items-center'>
                <div className='gap-1 flex items-center'>
                    <MdLocationOn size={16}/>
                    <span className='text-[14px]'>Location</span>
                </div>
                <div className='flex gap-1 items-center'>
                   <AiFillStar size={16}/>
                    {/* <span className='text-[14px]'>{avgRating===0?null:avgRating}</span> */}
                    <span className='text-[14px]'>{data.avgRating}</span>
                    {/* {
                        totalRating===0?'NOT REATED':  <span>( {reviews.lenght})</span>
                    } */}
                  
                </div>
            </div>
            <h1 className='text-[14px] font-semibold truncate whitespace-nowrap'>{data.title}</h1>
            <div className='flex items-center justify-between'>
                <span className='text-[15px]'><span className='thmeLightText font-semibold'>{data.price}$ </span>/per person</span>
                <Link to={`/tour/${id}`} className='linkHover text-[13px] font-semibold'>Book Now</Link>
            </div>
        </div>
    )
}
