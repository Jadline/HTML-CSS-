import styles from "./Desserts.module.css"
import Product from "./Product"

function Desserts({products}){
    // console.log({...products})
    return(
        <>
        <h1 className={styles.dessertsHeading}>Desserts</h1>
        <div className={styles.dessertsContainer}>         
            {products.map((product,index) => <Product product={product} key={index} />)}
        </div>
        </>
    )
}
export default Desserts