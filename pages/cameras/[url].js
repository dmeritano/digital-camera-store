//Dinamyc routes
import { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Camera.module.css'

const CameraFullDetails = ( {camera, addProductToCart} ) => {
    
    
    const [qtty, setQtty] = useState(1)


    const { name, summary, image, price, id  } = camera

    

    const handleSubmit = (evt) => {
        evt.preventDefault()

        
        if (qtty < 1){
            return;
        }

        //Add to cart
        const product = {
            id,
            image:image.url,
            name,
            price,
            qtty
        }
        addProductToCart(product)
    }
    

    return(
        <Layout pageName={name}>
            <div className={styles.camera}>
                <Image layout="responsive" width={250} height={250} src={image.url} alt={`Image of ${name}`} />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.textContent}>{summary}</p>
                    <p className={styles.price}>${price}</p>

                    <form className={styles.formc} onSubmit={handleSubmit}>
                        <label>Cantidad</label>
                        <select
                            value={qtty}
                            onChange={ evt => setQtty(parseInt(evt.target.value))}
                        >
                            <option value="">-- Select --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <input 
                            type="submit"
                            value="Add al carrito"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({query:{url}}){  // "url" comes from the name of this file 
    
    const endPoint = `${process.env.STRAPI_API_URL}/cameras?url=${url}`
    const response = await fetch(endPoint)
    const cameras = await response.json()  //returns an array, because endpoint contains a filter ( ?url= ...)

    return{
        props:{
            camera:cameras[0] //url field is unique in strapi cameras collection
        }
    }
}



export default CameraFullDetails
