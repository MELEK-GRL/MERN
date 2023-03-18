import earths from '../../../assets/image/Logo/earths.png'
import Slide from 'react-reveal/Slide';
export default function Title() {
    return (
        <Slide left>
        <div className='flex w-full flex-col gap-4 md:w-[50%]'>
            <div className="flex items-center gap-3">
                <span className="thmeLightBg text-[13px] text-white px-2 py-1 rounded-2xl">Know Before Yo Go</span>
                <img src={earths} alt={earths} className='object-cover w-7 h-7 rounded-full'/>
            </div>
            <div className='w-full flex flex-col truncate whitespace-normal max-h-[100px]'>
                <h1 className="titleText">Traveling opens the door </h1>
                <h1 className="titleText">to creating <span className="thmeLightText font-semibold">memories</span></h1>
            </div>
            <div className="flex w-full">
                <span className="text-[15px]   truncate whitespace-normal max-h-[68px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
        </div>
        </Slide>
    )
}
