import Link from "next/link"
import styles from "../styles/HttpErrorPage.module.css"

// http status code 404
const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <h1 className="heading">Page not found <span>error 404</span></h1>

      <Link href="/">Return to Home Page</Link>
    </div>
  )
}

export default PageNotFound
