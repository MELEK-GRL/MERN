import { Helmet } from "react-helmet";
import Section from "../../components/UI/tourDetail/Section";


export default function index() {
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
      <Helmet>
        <title>TourDetail</title>
        <meta name="description" content="blog description" />
      </Helmet>

      <div className="flex w-full containerBox">
        <Section/>
      </div>
    </div>
  )
}
