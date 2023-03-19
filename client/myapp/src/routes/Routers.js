import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Page/Home/Home'
import About from '../Page/About'
import Tours from '../Page/Tours'
import TourDeatil from '../Page/TourDetails'
import Thankyou from '../Page/Thankyou'
import Login from '../Page/Login'
import Register from '../Page/Register'



export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/MERN'/>}/>
    <Route path='/MERN' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/tours' element={<Tours/>}/>
    <Route path='/tour/:id' element={<TourDeatil/>}/>
    <Route path='/thank-you' element={<Thankyou/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
  )
}
