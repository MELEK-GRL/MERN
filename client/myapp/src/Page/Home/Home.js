import { Helmet } from "react-helmet";
import Section from "../../components/UI/home/Section";

function Home() {
  return (
    <div className="flex w-full flex-col mt-[6em] mb-[2em] ">
      <div className="flex w-full containerBox">
        <Section />
      </div>
    </div>
  )
}
export default Home