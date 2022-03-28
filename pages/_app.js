import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {



  const [cartItems, setCartItems] = useState([]);
  /*
    In NextJs the application starts in this module _app.js, so if we want to have a state
    accessible from the other pages/components of the app, this is the place to create that state.

    The state we create must be passed in the parent component "Component" (see below in return...). 
  */

  useEffect(() => {
    const cartLs = JSON.parse( localStorage.getItem("dcs-cart")) ?? [];
    setCartItems(cartLs)
  },[])  

  useEffect(() => {
    localStorage.setItem("dcs-cart", JSON.stringify(cartItems))
  },[cartItems])


  const addProductToCart = (product) => {
    
    if (cartItems.some(item => item.id === product.id)){
      const updatedCart = cartItems.map( item => {
        if (item.id === product.id){
          item.qtty = product.qtty
        }
        return item
      })
      setCartItems(updatedCart)
    }else{
      setCartItems([...cartItems, product])
    }
  }

  const updateQtty = (product) => {
    
    const updatedCart = cartItems.map( item => {
      if (item.id === product.id){
        item.qtty = product.qtty
      }
      return item
    })
    setCartItems(updatedCart)    
  }

  const deleteProduct = (id) => {
    const updatedCart = cartItems.filter( item => item.id !== id)
    setCartItems(updatedCart)
  }

  return <Component {...pageProps} 
    cartItems={cartItems}
    addProductToCart={addProductToCart}
    updateQtty={updateQtty}
    deleteProduct={deleteProduct}
  />
}

export default MyApp
