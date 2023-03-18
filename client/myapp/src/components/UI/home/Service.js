import servicesData from '../../../data/servicesData'
import Flash from 'react-reveal/Flash';


export default function Service() {
    return (
        <div className='flex w-full md:flex-row flex-col items-center shadow-md gap-8 md:gap-4 p-2'>
            <div className='flex w-full md:w-[20%] gap-2 items-center flex-col'>
                <h3 className='thmeLightText whitespace-normal truncate font-semibold text-[16px] text-center'>What we serve</h3>
                <h1 className='themeColor  whitespace-normal truncate font-semibold text-[24px] text-center'>We offer our best services</h1>
            </div>
            <div className='flex gap-4 w-full md:w-[80%]  sm:flex-row flex-col'>
            <Flash>
                {
                    servicesData.map((item,index) => (
                        <div key={index} className='flex  border-r-2 border-b-2 rounded-md border-teal-800 p-4  gap-2 items-start  flex-col'>
                            <img src={item.images} alt={item.images} className='rounded-full w-16 h-16 object-cover border border-gray-200' />
                            <span className='themeColor font-semibold truncate text-[15px]'>{item.title}</span>
                            <span className='themeColor text-[12px] truncate whitespace-normal'>{item.text}</span>
                        </div>

                    ))
                }
                </Flash>
            </div>
        </div>
    )
}
