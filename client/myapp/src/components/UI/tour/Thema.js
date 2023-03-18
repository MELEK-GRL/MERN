import thema from '../../../assets/image/Logo/tema.jpg'
import Slide from 'react-reveal/Slide';
export default function Thema() {
    return (
        <Slide left>
        <div className='flex w-full relative flex-col h-[200px]'>
            <img src={thema} className='w-full  h-full object-cover' />
            <div className='boxCenter w-full absolute opacity-50 bg-black h-full '>
                <h1 className='text-[26px] font-semibold text-white h-fit relative'>All Tours</h1>
            </div>
           
        </div>
        </Slide>
    )
}
