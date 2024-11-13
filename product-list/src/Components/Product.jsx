
import styles from './Product.module.css'
import { useContext,useState} from 'react'
import { cartContext } from '../App'

function Product({product}){
    const {cartitems,setCartitems} = useContext(cartContext);

   
   
 
    function handleAddtoCart(product){
        setCartitems(curcartitems => [...curcartitems,{...product,quantity:1}]) 
       
    }
    function handleIncreaseQuantity(id) {
        setCartitems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
            )
        );
    }

    function handleDecrementQuantity(id) {
        setCartitems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 } 
                    : item
            )
        );
    }
    const currentProduct = cartitems.find((item) => item.id === product.id);
    const quantity = currentProduct ? currentProduct.quantity : 0; 
    const isAdded  = !!currentProduct 

    


    return(
    
        <li className={styles.productContainer} >
            <img src={product.image.desktop} alt={product.name} className={`${styles.productImage} ${isAdded && styles.addborder}`}/>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            {!isAdded ? <button className={styles.addtocartBtn} onClick={() => handleAddtoCart(product)} >
                <img src='/images/icon-add-to-cart.svg' alt='add-to-cart'/>
                <span>Add to Cart</span>
            </button> : <p className={`${styles.addtocartBtn} ${styles.computebutton}`}>
                <button className={styles.quantitybutton} onClick={() => handleIncreaseQuantity(product.id)}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg></button>
                <span>{quantity}</span>
                <button className={styles.quantitybutton} onClick={() => handleDecrementQuantity(product.id)}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg></button>
            </p>}

        </li>
    )
}
export default Product