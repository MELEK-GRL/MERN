import emailImg from '../../../assets/image/Logo/email.jpg'
import Slide from 'react-reveal/Slide';

export default function Email() {
    return (
        <div className='w-full flex gap-6 lg:24 md:gap-16 p-6  items-center md:flex-row  flex-col shadow-lg bg-teal-100'>
            <Slide left>
            <div className='flex flex-col w-full md:w-[50%] gap-2'>
                <h1 className='text-[21px] themeColor font-semibold truncate whitespace-normal'>Subscrible now to get useful traveling information</h1>
                <div className='flex border rounded justify-between'>
                    <input type='text' placeholder='Enter your email' className='text-[14px] w-full focus-visible:outline-none text-gray-400 px-2 py-1 border-white border' />
                    <button className='px-2 py-1 w-fit bg-teal-800 text-white hover:bg-white hover:text-teal-800 hover:font-semibold border-white border hover:border hover:border-teal-800'>Subscrible</button>
                </div>
                <span className='truncate whitespace-normal h-24 tetx-[13px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </span>
            </div>
            </Slide>
            <Slide right>
            <div className='flex flex-col w-full md:w-[50%]  gap-2'>
                <img src={emailImg} alt={emailImg} className='w-full h-[280px] object-cover'/>
            </div>
            </Slide>
        </div>
    )
}
