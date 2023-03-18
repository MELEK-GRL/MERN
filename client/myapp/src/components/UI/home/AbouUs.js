import React from 'react'
import aboutData from '../../../data/aboutData'
import aboutTitle from '../../../data/aboutTitle'
import Jump from 'react-reveal/Jump';

export default function AbouUs() {
    return (
        <div className='flex w-full'>

            <div className='flex w-full flex-col gap-3'>

                {
                    aboutTitle.map((titles, i) => (
                        <div key={i} className='flex gap-3 flex-col'>
                            <h1 className='px-2 py-1 w-fit text-[15px] text-white thmeLightBg rounded-2xl'>{titles.heading}</h1>
                            <h1 className='font-semibold text-[24px] themeColor'>{titles.title}</h1>
                        </div>
                    ))
                }

                <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Jump>
                    {aboutData.map((item, index) => (
                        <div key={index} className='flex p-4 shadow-lg flex-col gap-6'>
                            <span className='truncate whitespace-normal themeColor text-[13px] h-[82px]'>{item.text}</span>
                            <div className='flex gap-3 items-center'>
                            <img src={item.img} className='object-cover w-24 h-24 rounded-md shadow-md' />
                            <span className='font-semibold text-[15px] whitespace-nowrap'>{item.user}</span>
                            </div>
                        </div>
                    ))}
                    </Jump>
                </div>
            </div>

        </div>
    )
}
