import styles from "./Desserts.module.css"
import Product from "./Product"
import { useState,useContext} from "react";
import { cartContext } from "../App";


function Desserts(){
    const {products,cartitems,setCartitems} = useContext(cartContext);
    
    return(
        <>
        <h1 className={styles.dessertsHeading}>Desserts</h1>
        <div className={styles.dessertsContainer}>         
            {products.map((product,index) => <Product product={product} key={index}/>)}
        </div>
        </>
    )
}
export default Desserts