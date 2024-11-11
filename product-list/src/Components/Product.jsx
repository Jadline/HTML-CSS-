
import styles from './Product.module.css'
function Product({product}){
    // console.log(product)
   
    return(
        <li className={styles.productContainer}>
            <img src={product.image.desktop} alt={product.name} className={styles.productImage}/>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
            <button className={styles.addtocartBtn}>
                <img src='/images/icon-add-to-cart.svg' alt='add-to-cart'/>
                <span>Add to Cart</span>
            </button>

        </li>
    )
}
export default Product