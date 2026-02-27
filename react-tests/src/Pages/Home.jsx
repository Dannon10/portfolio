import { useState, useEffect } from 'react'
import { ClipLoader, DotLoader } from 'react-spinners';
import Products from '../components/Products'

export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchListOfProducts() {
        try {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products`)
            if (!res.ok) throw new Error('Something went wrong')
            const data = await res.json()
            setProducts(data)
            console.log(data)
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchListOfProducts()
    }, [])

    return (
        <div>
            {error ? <h1 className='text-center text-2xl font-bold'>{error}</h1> : null}
            {loading ? (
                <div className='min-h-screen w-full flex justify-center items-center'>
                    <DotLoader
                        size={60}
                        color="rgb(127, 29,29)"
                        loading={true}
                    />
                </div> )  : (
                <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg: grid-cols-4 max-w-6xl mx-auto p-3'>
                    {
                        products.map((productsItem) => (
                            <Products product={productsItem} key={productsItem.id} />)
                        )
                    }
                </div>
                ) 
                }
        </div>
    )
}
