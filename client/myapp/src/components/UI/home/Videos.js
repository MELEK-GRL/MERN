
import videoData from '../../../data/videoData';
import Wobble from 'react-reveal/Wobble';
import Slide from 'react-reveal/Slide';

export default function Videos() {
  return (
    <Slide right>
    <div className='flex w-full  justify-between gap-4 md:w-[50%]  scrollThme scrollHiden'>
     {videoData.map((item,i)=>(
             <Wobble key={i}>
         <video key={item.id} autoPlay loop muted className={`object-cover w-[200px] h-[300px] rounded-md ${item.temp}`}>
         <source src={item.videos} className='shadow-2xl' />
       </video>
       </Wobble>
     ))}
    </div>
    </Slide>
  )
}
