 import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css';

const ProductList = ({name, city, ListOfProducts}) => {
    // const flag = false;

    const initialState = true

    const [flag, setFlag] = useState(initialState);
    const [count , setcount] = useState(0)
    const [changeStyle, setChangeStyle] = useState(false)
    
    const handleToggle = () => {
        setFlag(!flag);
    }

    function handleConut(){
        setcount(count + 1);
    }

 useEffect(() => {
    setFlag(!flag);
    console.log("run only one at page load");
 }, []);

useEffect(() => {
    if(count === 10) setChangeStyle(true);
}, [count])


return (
    <div>
        <h3 className="title">ECommerce Project</h3>
        <button onClick={handleToggle}>Toggle</button>
       {
        flag ? (
            <h4>
                {name} and {city}
            </h4> 
        ): (
         <h4>Hello</h4>
        )}

        <div>
            <button style={{backgroundColor : changeStyle ? 'red' : 'black'}} onClick={handleConut}>Increase count</button>
            <p>count is {count}</p>
        </div>
    <ul>
        {ListOfProducts.map((item, index) => (
                <ProductItem singleProductItem={item} key={index} />
            ))}
    </ul>
    </div>
)}

export default ProductList;