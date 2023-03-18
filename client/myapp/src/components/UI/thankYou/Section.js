import { useNavigate } from "react-router-dom"
import ticks from '../../../assets/image/Logo/ticks.jpg'

export default function Section() {

      const navigate = useNavigate()

  const backHandle = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    
        <div className="flex flex-col gap-3 items-center">
          <img src={ticks} className="w-36 h-36 object-contain" />
          <h1 className=" text-[30px] font-semibold themeColor ">Thank You</h1>
          <span className="text-[16px] font-semibold thmeLightText ">your tour is boked.</span>
          <button onClick={backHandle} className="btnGreenTwo w-[200px] text-md ">Back to Home</button>
        </div>
      
  )
}
