import logo from '../../assets/image/Logo/travel.jpg'
import iconFooterData from '../../data/iconFooter'
import menuLink from '../../data/menuLink'
import { Link } from 'react-router-dom'
import linkFooter from '../../data/linkFooter'
import contantLinks from '../../data/contantLinks'
import Zoom from 'react-reveal/Zoom';

export default function Footer() {
  return (
    <div className='boxCenter shadow-xl shadow-gray-700   flex containerBox text-white p-2 thmeBg w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full'>
        <Zoom left>
          <div className='flex  p-3 gap-3 flex-col'>
            <img src={logo} alt={logo} className='h-[50px] w-[50px] object-cover rounded-full' />
            <span className='text-[14px] truncate whitespace-normal h-[40px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
            <div className='flex gap-3 items-start justify-start'>
              {
                iconFooterData.map((x, i) => (
                  <span key={i}>{x.icon}</span>
                ))
              }
            </div>

          </div>
        </Zoom>
        <Zoom left>

          <div className='flex p-3  gap-3 flex-col items-start justify-start'>
            <h1 className=' text-[17px] font-semibold '>Discover</h1>
            <div className='flex flex-col items-start justify-start gap-3'>
              {
                menuLink.map((x, i) => (
                  <Link className='text-[14px] hoverMenus' key={i} to={x.path}>{x.display}</Link>
                ))
              }
            </div>
          </div>
        </Zoom>
        <Zoom left>

          <div className='flex gap-3 p-3  flex-col items-start justify-start'>
            <h1 className='text-[17px] font-semibold '>Qick Links</h1>
            <div className='flex flex-col items-start justify-start gap-3'>
              {
                linkFooter.map((x, i) => (
                  <Link className='text-[14px] hoverMenus' key={i} to={x.path}>{x.display}</Link>
                ))
              }
            </div>
          </div>
        </Zoom>
        <Zoom left>

          <div className='flex gap-3 p-3  flex-col items-start justify-start'>
            <h1 className='text-[17px] font-semibold '>Contact</h1>
            <div className='flex flex-col items-start justify-start gap-3'>

              {
                contantLinks.map((x, i) => (
                  <div key={i} className='flex gap-2 items-center justify-start'>
                    <span className='text-[14px]'>{x.icons}</span>
                    <span className='text-[14px]' key={i}>{x.display} :</span>
                    <span className='text-[14px]' >{x.title} </span>
                  </div>
                ))
              }

            </div>
          </div>
        </Zoom>
      </div>

    </div>
  )
}
