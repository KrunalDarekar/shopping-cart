import { useMensClothing, useWomensClothing } from "../DataHooks"
import AppBar from "../components/AppBar"

export default function Home() {

    const { womensData, wError, wLoading} = useWomensClothing()

    if(wLoading) {
        return (<div>
            loading...
        </div>)
    } 
    if (wLoading) {
        return (<div>
            error
        </div>)
    }

    return (
        <>
            <img src={womensData[0].image} alt=""/>
        </>
    )
}