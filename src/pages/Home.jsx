import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Cart from '../components/Cart'
import Error from '../components/Error'
import Filters from '../components/Filters'
import Loading from '../components/Loading'
import { CartProvider } from '../context/cart'
import ProductList from './ProductList'

const LIMIT = 10;

const getProducts = async (limit) => {
    const { data } = await axios.get(`https://dummyjson.com/products?limit=${parseInt(limit)}`)
    return data
}

const Home = () => {
    const {filter} = useParams('')

    const {data, status, error} = useQuery({
        queryKey: ['products', LIMIT],
        queryFn: () => getProducts(LIMIT),
    })
    
    const filteredProducts = data?.products.filter((product) => filter ? product.category === filter : product)

    const categories = Array.from(new Set(data?.products.map((product) => product.category)))

    if(status === 'loading') return (<Loading />)
    if(error) return (<Error />)

    return (
        <CartProvider>
            <h1 className='text-center text-4xl font-bold mt-10'>Viio Market</h1>
            <Filters categories={categories} />
            <Cart />
            <ProductList products={filteredProducts} status={status} />
        </CartProvider>
    )
}

export default Home