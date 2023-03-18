import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import images from "../../../data/galeryData"
import { useState } from "react"
import { GiCrossMark } from 'react-icons/gi'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import Zoom from 'react-reveal/Zoom';


export default function Galery() {
    const [data, setData] = useState({ img: '', index: 0 })

    const viewImage = (img, index) => {
        setData({ img, index })
        console.log(img, index)
    }

    const imgAction=(action)=>{
        let index=data.index
        if(action==='nextImg'){
            setData({img:images[index+1],index:index+1})
        }
        if(action==='preImg'){
            setData({img:images[index-1],index:index})
        }
        if(!action){
            setData({img:'',index:0})
        }
    }
    return (
        <div className="flex w-full flex-col">

            {
                data.img &&
                
                <div className="flex relative w-full z-20">

                    <div className="w-full  flex-col gap-2 overflow-hidden shadow-2xl thmeBg justify-center items-center  absolute    h-[820px] flex">
                        <div className=" w-full flex items-end justify-end">
                            <button onClick={()=>imgAction()} className=" shadow-lg text-white cursor-pointer hover:bg-white hover:text-gray-900 shadow-white mb-5 mr-6 rounded-full p-2">
                                <GiCrossMark size={19}  />
                            </button>
                        </div>
                        <Zoom left>
                        <img src={data.img} className="object-contain  hover:cursor-pointer w-[80%] h-[80%] max-w-[90%] min-h-[80%]" />
                        </Zoom>
                        <div className="flex mt-3 px-4 md:px-20 w-full justify-between absolute">
                            <button onClick={()=>imgAction('preImg')} className="rounded-md  text-white "><BsFillArrowLeftCircleFill size={25}/></button>
                            <button onClick={()=>imgAction('nextImg')} className="rounded-md  text-white"><BsFillArrowRightCircleFill size={25}/></button>
                        </div>
                       
                    </div>
                </div>
         



            }

            <div className="shadow-lg p-2 w-full items-center justify-center flex">
                <div className="h-[800px] scrollThme scrollHiden w-[90%] ">
                
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                        <Masonry gutter="1rem">
                            {images.map((image, index) => (
                                <Zoom left key={index}>
                                <img src={image}  className="w-full block rounded-md" onClick={() => viewImage(image, index)} />
                                </Zoom>
                            ))}
                           
                        </Masonry>
                    </ResponsiveMasonry>
                    
                </div>
            </div>
        </div>
    )
}
