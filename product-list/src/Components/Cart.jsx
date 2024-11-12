import styles from './Cart.module.css'
import { cartContext } from '../App'
import { useContext } from 'react'
function Cart(){
    const {cartitems,setCartitems}  = useContext(cartContext);

    function handleDeleteCartItem(name){
        const updatedcartitems = cartitems.filter(item => item.name !== name);
        setCartitems(updatedcartitems)
    }
    const total_price = cartitems.reduce((acc,item) => {
        return acc += item.price
    },0)
    return(
        <>
        {/* //  <h1 className={styles.cartHeading}>Your Cart (7)</h1> */}
        <div className={styles.cartContainer}>
            <h1 className={styles.cartHeading}>Your Cart ({cartitems.length})</h1>
            <div className={styles.cartinfo}>
            {cartitems?.map((cartitem,index) => (<div key={index} className={styles.cartContent}>       
                <div  className={styles.productContent}>
                    <p className={styles.name}>{cartitem.name}</p>
                    <p className={styles.productdetails}><span className={styles.quantity}>1x</span><span>@${cartitem.price}</span><span>1.50</span></p> 
                </div> 
                <button onClick={() => handleDeleteCartItem(cartitem.name)}>x</button>
            </div>))}
            </div>
            <p className={styles.ordertotal}><span>Order Total</span><span>${total_price}</span></p>
            <p className={styles.deliveryinfo}><img src='/images/icon-carbon-neutral.svg'/>This is a carbon-neutral delivery</p>
            <button className={styles.confirmbutton}>Confirm Order</button>
        </div>
        </>
     
         
   
        
       
    )
}
export default Cart