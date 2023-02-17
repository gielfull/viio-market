import React, { useState } from 'react'
import { useCart } from '../hooks/useCart.js'

const Cart = () => {
    const { cart, addToBasket, removeFromBasket, clearBasket } = useCart()
    const [cartOpen, setCartOpen] = useState(false)

    const handleCartOpen = () => { setCartOpen(!cartOpen) }

    const basketItemCount = cart.reduce((total, product) => total + product.quantity, 0)

  return (
    <div className=''>
        <button className='basket-button border-2 border-gray-800 py-2 px-4 rounded-[6px] block mx-auto my-5 sm:absolute sm:top-5 sm:right-5 text-sm' onClick={handleCartOpen}>
            Your basket ({basketItemCount} items)
        </button>

        {cartOpen && (
            <aside className='cart flex flex-col text-center w-full h-full sm:w-[300px] fixed top-0 right-0 bg-slate-200 sm:right-0 px-4 border-l-2 border-slate-800 overflow-y-scroll'>
                <div className='flex flex-row justify-center gap-4'>
                    <button className='w-full my-4 py-2 px-4 bg-slate-800 text-white text-sm rounded-[6px]' onClick={handleCartOpen}>Close</button>
                    <button onClick={() => clearBasket()} className='w-full my-4 py-2 px-4 bg-red-700 text-white text-sm rounded-[6px]'>Clear Cart</button>

                </div>
                {cart.map((product) => (
                    <div key={product.id} className='mb-4 border-b-[1px] pb-4 border-slate-300 relative'>
                        <img src={product.thumbnail} alt={product.name} className='cart-img' />
                        <h3 className='my-2'>{product.title} - ${product.price}</h3>
                        <div className='flex flex-row justify-center items-center gap-4'>
                            <p className='font-bold'>Qty: {product.quantity}</p>
                            <button onClick={() => addToBasket(product)} className='bg-green-600 text-white px-3 py-1 rounded-[20px]'>+</button>
                        </div>
                        <p className='remove-btn text-white text-sm font-bold mt-3 bg-red-500 px-2 rounded-[2px] cursor-pointer' onClick={() => removeFromBasket(product)}>REMOVE</p>
                    </div>
                ))}
            </aside>
        )}
        
    </div>
  )
}

export default Cart