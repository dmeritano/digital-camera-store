//Dinamyc routes
import Image from 'next/image'
import Layout from '../../components/Layout'
import { dateFormat } from '../../components/helpers'
import styles from '../../styles/Entry.module.css'


const BlogEntryFullDetails = ( {entry} ) => {
    
     const { content, image, published_at, title } = entry

    return(
        <Layout pageName={`Blog:${title}`}>
            <main className="container">
                <h1 className="heading">{title}</h1>
                <article className={styles.blogEntry}>
                    <Image layout="responsive" width={800} height={550} src={image.url} alt={`Image of ${title}`}  />
                    <div className={styles.content}>
                        <p className={styles.date}>{dateFormat(published_at)}</p>
                        <p className={styles.textContent}>{content}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}


//Run with every request, using getServerSideProps
/*
export async function getServerSideProps( {query}){
    
    const { id } = query
    //The above could have been solved by doing the destructuring in the function header itself, like so:
    //  export async function getServerSideProps( {query: { id } } ) ..

    const url = `${process.env.STRAPI_API_URL}/blogs/${id}`
    const response = await fetch(url)
    const entry = await response.json()

    return{
        props:{
            entry
        }
    }
}
*/

//Creating routes dinamically in app build process, using getStaticPaths and getStaticProps
export async function getStaticPaths(){

    const url = `${process.env.STRAPI_API_URL}/blogs`
    const response = await fetch(url)
    const entries = await response.json()

    const paths = entries.map (entry => ({
        //params: {id: entry._id }
        params: {url: entry.url }
    }))

    return {
        paths,
        fallback:false
    }
}
export async function getStaticProps( { params: {url} } ){
    
    const endpoint = `${process.env.STRAPI_API_URL}/blogs?url=${url}`
    const response = await fetch(endpoint)
    const entry = await response.json()

    return{
        props:{
            //entry
            entry:entry[0]
        }
    }
}



export default BlogEntryFullDetails
