import React from 'react'
import { useCart } from "../hooks/useCart"

const ProductList = ({products}) => {
    const {addToBasket} = useCart()

    return (
        <div className='products md:w-[960px] m-auto flex flex-col justify-between sm:flex-row flex-wrap gap-4 mt-10 mb-10'>
                {products.map((product) => (
                    <div key={product.id} className='flex flex-col sm:basis-[48%] md:basis-[32%] border-[1px] p-2 bg-white border-gray-200 rounded-[6px]'>
                        <img src={product.thumbnail} alt={product.name} className='cart-img' />
                        <h2 className='font-bold mt-4'>{product.title}</h2>
                        <p className='italic text-sm'>{product.description}</p>
                        <p className='font-bold my-4'>Price: ${product.price}</p>
                        <button className='border-2 border-gray-900 w-full p-2 mt-auto rounded-[5px] hover:bg-slate-200' onClick={() => addToBasket(product)}>Add to basket</button>
                    </div>
                ))}
        </div>
    )
}

export default ProductList