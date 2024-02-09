import { useMensClothing, useWomensClothing } from "../DataHooks"
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"

export default function Shop() {

    const { womensData, wError, wLoading} = useWomensClothing()
    const { mensData, mError, mLoading} = useMensClothing()

    if( wLoading || mLoading) {
        return (
            <div>
                <Loader/>
            </div>
        )
    }

    if( wError ) {
        return (
            <div>
                {wError}
            </div>
        )
    }

    if( mError ) {
        return (
            <div>
                {mError}
            </div>
        )
    }

    const allItems = mensData.concat(womensData)

    return (
        <>
            <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allItems.map( (item) => {
                        return <ProductCard item={item}/>
                    })
                }
            </div>
        </>
    )
}