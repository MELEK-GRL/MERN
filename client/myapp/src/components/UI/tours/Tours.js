import ToursItem from "./ToursItem"
import toursData from './../../../data/toursData'
import Zoom from 'react-reveal/Zoom';

export default function Tours() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full'>
      {
        toursData.map((data) => (
          <Zoom left key={data.id}>
            <ToursItem data={data} />
          </Zoom>
        ))
      }
    </div>
  )
}
