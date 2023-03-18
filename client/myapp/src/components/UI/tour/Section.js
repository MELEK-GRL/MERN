import Thema from "./Thema"
import Search from '../home/Search'
import ToursItem from '../tours/ToursItem'
import toursData from "../../../data/toursData"
import Zoom from 'react-reveal/Zoom';
export default function Section() {
  return (
    <div className="flex w-full gap-8 mt-4  flex-col containerBox">
      <Thema />
      <Search />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full'>
      <Zoom left>
        {
          toursData.map((data) => (
            <ToursItem data={data} key={data.id} />
          ))
        }
         </Zoom>
      </div>
    </div>
  )
}
