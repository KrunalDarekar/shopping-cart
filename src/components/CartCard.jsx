import { useRecoilState } from "recoil"
import { cartItemsAtom } from "../state/atoms/atoms"

const CartCard = ({item}) => {
    const [cartItems, setCartItems] = useRecoilState(cartItemsAtom)

    const incrementCount = () => {
        const newList = cartItems.map( (cartItem) => {
            if(item.details.id === cartItem.details.id) {
                return { details: item.details, count: cartItem.count + 1}
            } else {
                return cartItem
            }
        })
        setCartItems(newList)
    }

    const decrementCount = () => {
        const newList = cartItems.map( (cartItem) => {
            if(item.details.id === cartItem.details.id) {
                return { details: item.details, count: cartItem.count > 0 ? cartItem.count - 1 : 0}
            } else {
                return cartItem
            }
        })
        setCartItems(newList)
    }

    const removeItem = () => {
        const newList = cartItems.filter( (cartItem) => {
            return item.details.id !== cartItem.details.id
        })
        setCartItems(newList)
    }

    return (
        <div key={item.details.id} className="flex border rounded-xl shadow-sm p-4 mb-2 md: max-w-lg">
            <img src={item.details.image} alt={item.details.title} className="max-h-24 mr-4"/>
            <div className="flex-grow">
                <div className="flex w-full justify-between items-center mb-4">
                    <div className="text-lg mr-4">{item.details.title}</div>
                    <button onClick={removeItem} className="hover:bg-red-700 p-2 rounded-md text-white bg-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center">
                    <div className="flex border border-slate-300 rounded items-center">
                        <button onClick={incrementCount} className="m-1 bg-slate-100 hover:bg-slate-200 px-1 rounded h-6 w-6 flex justify-center" >+</button>
                        <div className="mx-1">{item.count}</div>
                        <button onClick={decrementCount} className="m-1 bg-slate-100 hover:bg-slate-200 px-1 rounded h-6 w-6 flex justify-center">-</button>
                    </div>
                    <div className="underline text-lg font-bold px-2 ml-4">
                        ${item.details.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard