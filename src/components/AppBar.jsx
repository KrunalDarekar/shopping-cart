import { useState } from "react"
import { Link } from "react-router-dom"

const AppBar = () => {

    const [focused, setfocused] = useState("home")
    let homeClasses = ["text-purple-700 font-semibold", "scale-x-100"]
    let shopClasses = ["", ""]
    let cartClasses = ["", ""]
    if (focused === "shop") {
        shopClasses = homeClasses
        homeClasses = ["", ""]
        cartClasses = ["", ""]
    }
    if (focused === "cart") {
        cartClasses = homeClasses
        homeClasses = ["", ""]
        shopClasses = ["", ""]
    }

    return (
        <header className="flex px-8 py-4 justify-between shadow mb-4">
            <div className="font-bold text-xl md:text-2xl text-purple-700">
                My Cart
            </div>
            <div className="flex items-center">
                <div onClick={() => {setfocused("home")}} className={`mr-4 inline-block relative group md:text-lg md:mr-8 ${homeClasses[0]}`} >
                    <Link to="/" className="hover-div">
                        Home
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transform scale-x-0 transition-transform origin-bottom group-hover:scale-x-100 ${homeClasses[1]}`}></div>
                    </Link>
                </div>
                <div onClick={() => {setfocused("shop")}} className={`mr-4 inline-block relative group md:text-lg md:mr-8 ${shopClasses[0]}`}>
                    <Link to="/shop" className="hover-div">
                        Shop
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transform scale-x-0 transition-transform origin-bottom group-hover:scale-x-100 ${shopClasses[1]}`}></div>
                    </Link>
                </div>
                <div onClick={() => {setfocused("cart")}} className="inline-block relative group md:text-lg">
                    <Link to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${cartClasses[0]}`}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transform scale-x-0 transition-transform origin-bottom group-hover:scale-x-100 ${cartClasses[1]}`}></div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default AppBar