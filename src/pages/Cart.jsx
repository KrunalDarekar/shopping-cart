import { useRecoilValue } from "recoil"
import CartCard from "../components/CartCard"
import { cartItemsAtom } from "../state/atoms/atoms"

const Cart = () => {
    const cartItems = useRecoilValue(cartItemsAtom) 

    return (
        cartItems.length ? 
        <div className="flex mx-8 items-center flex-col">
            <div className="flex mb-2 text-xl font-semibold underline">
                <div>total - ${cartItems.reduce( (total, item) => total + item.details.price * item.count, 0)}</div>
            </div>
            {
                cartItems.map( (cartItem) => {
                    return <CartCard item={cartItem}/>
                })
            }
        </div> :
        <div className="flex h-screen justify-center items-center text-4xl ">
            Your cart is empty!
        </div>
    )
}

export default Cart