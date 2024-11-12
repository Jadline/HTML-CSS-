import Desserts from "./Components/Desserts"
import {useEffect,useState,createContext} from 'react'
import Cart from './Components/Cart'

export const cartContext = createContext()


function App() {
  const URL = 'http://localhost:5500/products';
  const[productsdata,setProductsData] = useState([]);
  const[cartitems,setCartitems] = useState([])
  
  useEffect(() => {
    async function fetchProducts(){
      const res = await fetch(URL);
      const data = await res.json()
      setProductsData(data)
    }
    fetchProducts()
  },[])
  // useEffect(()=> {
  //   console.log(cartitems)
  // },[cartitems])
  return (
  <cartContext.Provider value={{
    products:productsdata,
    cartitems,
    setCartitems
  }}>
        <div className='app'>
        <Desserts />
        <Cart/>
      </div>
   </cartContext.Provider>
  )
}

export default App
