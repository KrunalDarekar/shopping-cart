import { Link } from "react-router-dom"

const AppBar = () => {

    return (
        <header className="flex mx-8 my-4 justify-between">
            <div className="font-bold text-2xl">
                My Cart
            </div>
            <div className="flex">
                <div className="mr-4 inline-block relative group">
                    <Link to="/" className="hover-div">
                        Home
                        <div className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-bottom group-hover:scale-x-100"></div>
                    </Link>
                </div>
                <div className="mr-4 inline-block relative group">
                    <Link to="/shop" className="hover-div">
                        Shop
                        <div className="absolute bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform origin-bottom group-hover:scale-x-100"></div>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default AppBar