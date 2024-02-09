import { useMensClothing, useWomensClothing } from "../DataHooks"
import { Carousel } from "flowbite-react"
import Loader from "../components/Loader"

export default function Home() {

    const { womensData, wError, wLoading} = useWomensClothing()
    if(wLoading) {
        return (<div>
            <Loader/>
        </div>)
    } 
    if (wError) {
        return (<div>
            error
        </div>)
    }

    return (
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-8">
            <Carousel>
                <div className="flex h-full justify-left bg-slate-700">
                    <img src={womensData[0].image} alt="" className="max-h-full"/>
                </div>
                <div className="flex h-full justify-end bg-slate-700">
                    <img src={womensData[1].image} alt="" className="max-h-full"/>
                </div>
                <div className="flex h-full justify-left bg-slate-700">
                    <img src={womensData[2].image} alt="" className="max-h-full"/>
                </div>
                <div className="flex h-full justify-end bg-slate-700">
                    <img src={womensData[3].image} alt=""className="max-h-full"/>
                </div>
            </Carousel>
        </div>
        </>
    )
}