import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Header.module.css'

const Header = ( {cameraHeader} ) => {

  return (
    <header className={styles.header}>
        <div className="container">

            <div className={styles.topbar}>
              
              <Link href="/">
                <a>  {/* to solve error in browser console 'ref...' when Image is surrounded with Link*/}
                  <Image src="/img/logo.png" width={512} height={200} alt="DC Store Logo" />
                </a>
              </Link>

              <nav className={styles.navigation}>
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/store">Store</Link>
                  <Link href="/cart">
                      <a>
                        <Image 
                          layout="fixed" 
                          width={30} 
                          height={25} 
                          src="/img/cart.png"
                          alt="Img shopping cart"                        
                        />
                      </a>
                  </Link>
              </nav>

              {cameraHeader && (
                <div className={styles.headercamera}>
                  <h1>{cameraHeader.name}</h1>
                  <p>{cameraHeader.summary}</p>
                  <p>${cameraHeader.price}</p>
                  <Link href={`/cameras/${cameraHeader.url}`}>
                    <a className={styles.link}>
                      View Product
                    </a>
                  </Link>
                </div>
              )}


            </div>
        </div>
    </header>
  )
}

export default Header