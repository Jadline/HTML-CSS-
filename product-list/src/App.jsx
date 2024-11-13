import Desserts from "./Components/Desserts"
import {useEffect,useState,createContext} from 'react'
import Cart from './Components/Cart'

export const cartContext = createContext()


function App() {
  const URL = 'http://localhost:5502/products';
  const[productsdata,setProductsData] = useState([]);
  const[cartitems,setCartitems] = useState([])
  const [showmodal,setshowmodal] = useState(false)
  

  
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
    setCartitems,
    showmodal,
    setshowmodal,
    
  }}>
    <div className='app'>
        <Desserts />
        <Cart/>
        {showmodal && <div className='background-overlay'></div>}
      </div>
     
     
   </cartContext.Provider>
  )
}

export default App
