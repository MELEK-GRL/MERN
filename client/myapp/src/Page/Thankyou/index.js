import { Helmet } from "react-helmet";
import Section from "../../components/UI/thankYou/Section";


export default function index() {



  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
      <Helmet>
        <title>Thank You</title>
        <meta name="description" content="blog description" />
      </Helmet>
      <div className="boxCenter w-full h-full containerBox">
      <Section/>
      </div>

     
    </div>
  )
}
