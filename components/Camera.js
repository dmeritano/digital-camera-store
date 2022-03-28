import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Camera.module.css'

const Camera = ( {camera} ) => {


  const { name, summary, price, image, url} = camera

  return (
    <div className={styles.camera}>
        <Image layout="responsive" width={250} height={250} src={image.url} alt={`Image of ${name}`} />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.price}>${price}</p>
          <Link href={`/cameras/${url}`}>
            <a className={styles.link}>
              View details
            </a>
          </Link>
        </div>
    </div>
  )
}

export default Camera