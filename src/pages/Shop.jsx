import { useRecoilValue, useSetRecoilState } from "recoil"
import { useMensClothing, useWomensClothing } from "../DataHooks"
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"
import { currProductAtom, productListSelector } from "../state/atoms/atoms"
import { useNavigate } from "react-router-dom"

export default function Shop() {

    const allItems = useRecoilValue(productListSelector)
    const setCurrProduct = useSetRecoilState(currProductAtom)
    const navigate = useNavigate()

    return (
        <>
            <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allItems.map( (item) => {
                        return <ProductCard onClick={() => { 
                            setCurrProduct(item)
                            navigate("/product")
                        }} item={item}/>
                    })
                }
            </div>
        </>
    )
}