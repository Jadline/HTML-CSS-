import Desserts from "./Components/Desserts"
import {useEffect,useState} from 'react'
import Cart from './Components/Cart'



function App() {
  const URL = 'http://localhost:5500/products';
  const[productsdata,setProductsData] = useState([]);
  
  useEffect(() => {
    async function fetchProducts(){
      const res = await fetch(URL);
      const data = await res.json()
      setProductsData(data)
    }
    fetchProducts()
  },[])
  return (
    <div className='app'>
    <Desserts products={productsdata}/>
    <Cart/>
   </div>
  )
}

export default App
