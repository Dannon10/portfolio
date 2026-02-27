
import { useEffect, useState } from 'react'
import StarRating from './StarRating';

export default function LoadMoreData() {

    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setErrorMsg(null);
                const response = await fetch(`https://dummyjson.com/products?limit=50&skip=${count === 0 ? 0 : count * 20}`)
                const results = await response.json()
                setProducts(prevData => [...prevData, ...results.products])
                console.log(results.products)
                setLoading(false)
            } catch (e) {
                setErrorMsg(e.message)
                setLoading(false)
            }
        }
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products.length >= 100) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [products])

    return (
        <div className='load-container'>
            {loading ? <div>Loading data! Please Wait</div> : null}
            {errorMsg ? <div>Error occurred! Check network connecton!</div> : null}
            <div className="product-container">
                {products.map(item => <div key={item.id} className='product'>
                    <img src={item.thumbnail} alt={item.thumbnail} />
                    <p>{item.title}</p>
                    <p>£{item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <StarRating noOfStars={5} />
                </div>)}
                <div className="button-container">
                    <button disabled={disable} onClick={() => setCount(count + 1)}>Load more Products</button>
                    {disable ? <p>All products loaded</p> : null}
                </div>
            </div>
        </div>
    )
}



// import { useEffect, useState } from "react"
// import StarRating from "./StarRating";

// export default function LoadMoreData() {

//     const [loading, setLoading] = useState(true);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [products, setProducts] = useState([]);
//     const [count, setCount] = useState(0)
//     const [disable, setDisable] = useState(false)

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 setLoading(true)
//                 const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
//                 const result = await response.json()
//                 setProducts((prevData => [...prevData, ...result.products]))
//                 setLoading(false)
//             } catch (e) {
//                 setErrorMsg(e.message);
//                 setLoading(false)
//             }
//         }
//         fetchProducts()
//     }, [count])

//     useEffect(() => {
//         if (products.length >= 100) {
//             setDisable(true)
//         } else {
//             setDisable(false)
//         }
//     }, [products])

//     return (
//         <div className="load-container">
//             {loading ? <div>Loading data! Please wait</div> : null}
//             {errorMsg ? <div>Error occurred {errorMsg}</div> : null}
//             <div className="product-container">
//                 {products.map(item =>
//                     <div
//                     className="product"
//                     key={item.id}>
//                         <img
//                             src={item.thumbnail}
//                             alt={item.title} />
//                         <p>{item.title}</p>
//                         <p>{item.availabilityStatus}</p>
//                         <p>${item.price}</p>
//                         <StarRating noOfStars={5}/>
//                     </div>)}
//                 <div className="btn-container">
//                     <button disabled={disable} onClick={() => setCount(count + 1)}>Load more Products</button>
//                     {disable ? <p>All products loaded</p> : null}
//                 </div>
//             </div>
//         </div>
//     )
// }
