import Header from "../header/Header"
import Footer from "../footer/Footer"
import Routers from "../../routes/Routers"

export default function Layout() {
    return (
        <div className="flex max-h-full min-h-screen items-center  gap-2  justify-between flex-col">
            <Header />
            <div className="flex w-full p-2 container">
                <Routers />
            </div>
            <Footer />
        </div>
    )
}
