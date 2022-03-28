import Image from "next/image"
import styles from '../styles/Course.module.css'

const Course = ( {course} ) => {

  return (
    <section> 
        <div className={`container ${styles.grid}`}>

            <div className={styles.content}>
                
                <h2 className="heading">{course.title}</h2>
                <p className={styles.text}>{course.content}</p>

                <a className={styles.link} href="#">More information</a>
                
            </div>
        </div>

        <style jsx>{`
            section {
                padding: 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${course.image.url});
                background-size: cover;
                background-position: 50%;
            }
        `}</style>
        
    </section>
  )
}

export default Course