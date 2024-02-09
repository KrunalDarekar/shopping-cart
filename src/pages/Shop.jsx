import { useRecoilValue } from "recoil"
import { useMensClothing, useWomensClothing } from "../DataHooks"
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"
import { productListSelector } from "../state/atoms/atoms"

export default function Shop() {

    const allItems = useRecoilValue(productListSelector)

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