import { useMensClothing, useWomensClothing } from "../DataHooks"
import { Carousel } from "flowbite-react"
import Loader from "../components/Loader"
import { useSetRecoilState } from "recoil"
import { mensDataAtom, womensDataAtom } from "../state/atoms/atoms"

export default function Home() {

    const { womensData, wError, wLoading} = useWomensClothing()
    const { mensData, mError, mLoading} = useMensClothing()
    const setWomensDataState = useSetRecoilState(womensDataAtom)
    const setMensDataState = useSetRecoilState(mensDataAtom)

    if(wLoading || mLoading) {
        return (<div>
            <Loader/>
        </div>)
    } 
    if (wError || mError) {
        return (<div>
            {wError ? wError : mError}
        </div>)
    }

    setWomensDataState(womensData)
    setMensDataState(mensData)

    return (
        <>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-8">
            <Carousel>
                <div className="flex h-full justify-left bg-slate-700">
                    <img src={womensData[0].image} alt="" className="max-h-full"/>
                </div>
                <div className="flex h-full justify-end bg-slate-700">
                    <img src={mensData[0].image} alt="" className="max-h-full"/>
                </div>
                <div className="flex h-full justify-left bg-slate-700">
                    <img src={womensData[2].image} alt="" className="max-h-full"/>
                </div>
                <div className="flex h-full justify-end bg-slate-700">
                    <img src={mensData[2].image} alt=""className="max-h-full"/>
                </div>
            </Carousel>
        </div>
        </>
    )
}