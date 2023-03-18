import logos from '../../data/logos'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import menuLink from '../../data/menuLink';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


export default function Header() {

  const menuRef = useRef();
  const basketRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("menuBoxNone");

  const headerRef=useRef(null)

  const headerBox=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80||document.documentElement.scrollTop>80){
        headerRef.current.classList.add('headerChange')
      }
      else{
        headerRef.current.classList.remove('headerChange')
      }
    })
  }

  useEffect(()=>{
    headerBox()
    return window.removeEventListener('scrool',headerBox)
  })



  return (
    <div ref={headerRef} className="flex  w-full   absolute headerBoxStyle bg-white h-[70px]  ">
      <div className="boxCenter justify-between  w-full p-2 ">
        <div className=" w-full flex items-center  justify-between containerBox">
        <Zoom left>
          <div className='flex gap-3 items-center'>
            <Link to='/'>   <img src={logos} alt={logos} className='object-cover w-16 h-full' /></Link>
            <h1 className='themeColor font-semibold text-[23px]'>TRAVEL</h1>
          </div>
          </Zoom>
          <Flip right>
          <div className="flex invisible md:visible w-0 md:w-fit  items-center justify-center">
            <div className="flex p-2 boxCenter  gap-6">
              {
                menuLink.map((menu, index) => (
                  <NavLink key={index} to={menu.path} className=" text-[20px]">
                    <h1 className='text-[17px] hoverBars '>{menu.display}</h1>
                  </NavLink>
                ))
              }

            </div>
          </div>
          </Flip>
          <div className='flex items-center gap-3'>
          <Zoom right>
            <div className='flex gap-2 items-center sm:w-fit w-0 sm:visible invisible'>
              <Link to='/login' className='text-[17px] font-semibold'>Login</Link>
              <Link to='/register' className='text-[17px]  thmeLightBg px-2 py-1 rounded-2xl text-white'>Register</Link>

            </div>
            </Zoom>
            <div className="flex gap-3 ">

          
              <AiOutlineMenu
                onClick={menuToggle}
                size={21}
                className=" visible md:invisible md:w-0 cursor-pointer "
              />
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex menuBox   w-full fixed" ref={menuRef}>
        <div
          className="w-full p-3 flex h-full   bg-black bg-opacity-25 "
          onClick={menuToggle}
        ></div>
        <div className="w-[50%] p-3   flex-col md:w-[35%] lg:w-[20%] flex h-full  thmeBg text-white ">
          <RxCross2 size={18} className="shadow-lg w-fit ml-2 mt-1 shadow-white rounded-full p-2 cursor-pointer h-fit" onClick={menuToggle} />
          <div className="flex w-full  items-center justify-center m-auto">
            <div className="flex flex-col  p-2 w-full gap-12 items-center">
              
              {
                menuLink.map((menu, index) => (
                  <NavLink key={index} to={menu.path} className=" text-lg text-center"
                    onClick={menuToggle}>
                    <h1 className='text-[17px] hoverMenus'>{menu.display}</h1>
                  </NavLink>
                ))
              }

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}


