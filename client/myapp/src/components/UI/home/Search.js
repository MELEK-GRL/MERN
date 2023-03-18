import searchData from '../../../data/searchData'
import { BiSearch } from 'react-icons/bi'


export default function Search() {
    return (
        <div className='flex gap-8  items-center lg:flex-row flex-col  lg:w-fit  w-full rounded-xl p-3 shadow-xl'>
            <div className='flex lg:flex-row flex-col w-full lg:w-fit gap-6 items-center'>
                {
                    searchData.map((item) => (
                        <div className={`flex gap-3 justify-center w-full lg:w-fit px-2 items-center  ${item.border} border-r-0`} key={item.id}>
                            <span>{item.icon}</span>
                            <div className='flex gap-1 flex-col w-[80%] lg:w-fit'>
                                <span className='text-[14px] font-semibold'>{item.title}</span>
                                <input type={item.types} placeholder={item.placeholders} className='border rounded-md text-[13px] h-[25px] py-[2px] px-1 text-gray-500 ' />
                            </div>
                        </div>
                    ))
                }

            </div>
            <button className='flex'>
                <BiSearch size={40} className='btnGreen' />
            </button>
        </div>
    )
}
