import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function HomeLayout() {
  return (
    <div className="w-full flex flex-col max-h-[4000px] min-h-[720px] justify-between items-center">
    <Header />
    <Outlet />
    <Footer />
  </div>
  )
}


export default HomeLayout
