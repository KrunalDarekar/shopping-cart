import { useMensClothing, useWomensClothing } from "../DataHooks"

export default function Home() {

    const { mensData, error, loading} = useMensClothing()
    const { womensData, werror, wloading } = useWomensClothing()
    console.log(mensData)
    console.log(womensData)

    return (
        <>
            <img src={mensData[0].image} alt=""/>
        </>
    )
}