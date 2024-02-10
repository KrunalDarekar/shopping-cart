const ProductCard = ({item, onClick}) => {

    return (
        <div key={item.id} onClick={onClick} className="flex flex-col justify-center items-center p-2 border rounded-md shadow-xl cursor-pointer">
            <img src={item.image} alt={item.title} className=" inset-0 h-60 object-cover mb-2"/>
            <div className="text-lg whitespace-normal mx-2 mb-1">{item.title}</div>
            <div className="flex justify-center gap-x-4 w-full">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg> 
                    <div>
                    {item.rating.rate} {`  (${item.rating.count})`}
                    </div>
                </div>
                <div className="border rounded-md px-2 bg-purple-700 text-white">${item.price}</div>
            </div>
        </div>
    )
}

export default ProductCard