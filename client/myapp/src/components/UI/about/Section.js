import Zoom from 'react-reveal/Zoom';

export default function Section() {
  return (
    <Zoom left>
      <div className='boxCenter w-full'>
        <div className='lg:w-[60%]  m-auto gap-4 md:w-[70%] sm:w-[75%] w-[95%]  p-4 h-[500px] flex-col flex shadow-2xl   items-center containerBox'>
          <h1 className='text-2xl mt-4  text-gray-900 font-semibold'><span className='thmeLightText'>ABOUT</span> US</h1>
          <div className='flex w-full p-4 scrollThme scrollHiden overflow-hidden'>
            <span className='text-[16px]  themeColor'>

              We Travel, as travel enthusiasts, are here to provide you with the best travel experiences. As Travel, being a part of the travelers is one of the furthest from what they have in order to provide their time and a lasting travel experience.

              Travel was founded in 2000 and has been working to provide the best service ever since. Our services include domestic and international tours, flight ticket sales, hotel reservations and car rental services. We also offer different travel plans based on their characteristics and interests.

              Travel is believed to play an important role in the lives of people who travel. Travel is an opportunity to see new places, meet different cultures, meet new people and discover yourself. For this reason, we strive to be with them in every experience of their budget travels and to offer the best experience.

              When you travel with us, you can travel not only with a tour company, but also with a travel companion. The safety and happiness of the protector is our most important advantage, and therefore, we always strive to provide the best service.

              As Travel, to continue to do our best to use economical travel experiences. You too can enjoy traveling with you, collecting wonderful memories.
            </span>
          </div>
        </div>
      </div>
    </Zoom>
  )
}
