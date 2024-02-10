import { useRecoilValue } from "recoil"
import { cartItemsAtom, currProductAtom } from "../state/atoms/atoms"
import ProductCard from "../components/ProductCard"

const Product = () => {

    const item = useRecoilValue(currProductAtom)
    const [cartItems, setCartItems] = useRecoilState(cartItemsAtom)

    const handleClick = () => {

    }

    return (
        <div className="flex flex-col md:flex-row m-8 gap-4 md:gap-20 md:mt-24 md:mx-36">
            <img src={item.image} alt={item.title} className="max-h-96"/>
            <div>
                <p className="text-2xl md:text-3xl font-semibold whitespace-normal mb-2 mt-2">{item.title}</p>
                <div className="flex items-center text-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-700 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg> 
                    <div>
                        {item.rating.rate} {`  (${item.rating.count})`}
                    </div>
                </div>
                <div className="flex gap-4 text-xl items-center mb-2 ">
                    <p className="font-semibold underline">${item.price}</p>
                    <button onClick={handleClick} className="border rounded-2xl px-4 py-1 bg-purple-700 text-white">Add to cart</button>
                </div>
                <p className="text-lg text-slate-500">{item.description}</p>
            </div>
        </div>
    )
}

export default Product