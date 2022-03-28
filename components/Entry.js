import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Entry.module.css'

import { dateFormat } from "./helpers"

const Entry = ( { entry }) => {

  const { title, summary, image, published_at, url} = entry

  return (
    <article>

      <Image layout="responsive" width={800} height={550} src={image.url} alt={`Image of ${title}`}  />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{dateFormat(published_at)}</p>
        <p className={styles.summary}>{summary}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.link}>
            Read entry
          </a>          
        </Link>
      </div>
    </article>
  )
}

export default Entry