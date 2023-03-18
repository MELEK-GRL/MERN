import Title from "./Title"
import Videos from "./Videos"
import Search from "./Search"
import Service from "./Service"
import Tours from "../tours/Tours"
import Galery from "./Galery"
import AbouUs from "./AbouUs"
import Email from "./Email"

export default function Section() {
  return (
    <div className="flex w-full gap-8 mt-4  flex-col ">
      <div className="flex w-full  gap-8  md:flex-row flex-col ">
      <Title/>
      <Videos/>
      </div>
      <Search/>
      <Service/>
      <Tours/>
      <Galery/>
      <AbouUs/>
      <Email/>
    </div>
  )
}
