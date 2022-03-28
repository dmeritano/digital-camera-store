import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Cart.module.css'


const Cart = ( {cartItems, updateQtty, deleteProduct} ) => {

  const [total, setTotal] = useState(0)
  
  useEffect(()=> {
      const calcTotal = cartItems.reduce( (total, actualItem) => total + (actualItem.qtty * actualItem.price),0) //0=>initial value for "total"
      setTotal(calcTotal)
  },[cartItems])

  return (
        <Layout pageName={"Shopping Cart"}>
            <h1 className="heading">Shopping Cart</h1>
            <main className={`container ${styles.content}`}>
            
                <div className={styles.cart}>
                  {cartItems.length > 0 ? (
                    <h2>Selected Products</h2>
                  ):null}                                    
                  {cartItems.length === 0 ? null : (                    
                    cartItems.map( item => (
                      <div key={item._id} className={styles.item}>
                        <div>
                          <Image layout="fixed" width={180} height={180} src={item.image} alt={`Image of ${item.name}`} />
                        </div>
                        <div> 
                          <p className={styles.name}>{item.name}</p>                          
                          <div className={styles.qtty}>
                            <p>Qtty:</p>
                            <select
                              value={item.qtty}                              
                              className={styles.select}
                              onChange={ (evt) => updateQtty({
                                qtty:evt.target.value,
                                id:item._id
                              })}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>                            
                          </div>
                                                                              
                          <p className={styles.price}>$<span>{item.price}</span></p>
                          <p className={styles.subtotal}>Subtotal: $<span>{item.price * item.qtty}</span></p>
                        </div>
                        <button type="button" className={styles.deletebtn} onClick={() => deleteProduct(item._id)}>X</button>
                      </div>                      
                    ))
                  )}
                </div>
                <div className={styles.summary}>
                  {total > 0 ? (
                    <>
                      <h3>Order summary</h3>
                      <p>Total to pay: ${total}</p>
                    </>
                  ):(
                    <p>There is not items in cart</p>
                  )}   
                </div>
            </main>
        </Layout>
  )
}

export default Cart