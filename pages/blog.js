import { useEffect } from 'react'
import Layout from "../components/Layout"
import BlogList from '../components/BlogList'


const Blog = ( {entries} ) => {   //"entries" comes from the export at the end of this file, not from the outside.

  //React mode to get api data
  /*
  useEffect( () => {
    const queryApi = async () => {
      const url = "http://localhost:1337/blogs"
      const response = await fetch(url)
      const result = await response.json()
      console.log(result)
    }
    queryApi()
  }, [])
  */

  //NextJs mode to get api data. Using getServerSideProps (see at the end of this file)

  return (
    <Layout pageName="Blog">
      <main className="container">
        <BlogList entries={entries}/>
      </main>
  
    </Layout>
  )
}

//The function should be called like this by convention
// The fact that it is being exported (export ...) does not mean that it has to be used from outside this file, in fact,
// here it will be used inside blog.js. The return returns a props with the queried data.
// This is how NextJs handles and implements it
// getServerSideProps build the page on each request
export async function getServerSideProps() {

  //sorting by creation date 
  // const url = `${process.env.STRAPI_API_URL}/blogs`
  const url = `${process.env.STRAPI_API_URL}/blogs?_sort=created_at:desc`
  const response = await fetch(url)
  const entries = await response.json()
  

  // The function is executed on the server (not in the code that is part of the frontned) so the following line will 
  // write to the console where the server is running (npm run dev) and NOT to the browser console  
  return {
    props: {
      //entries:entries
      entries
    }
  }
}


// If the content were static, then it would be convenient to use getStaticProps, in the same way as above. In this way, 
// when the project is built with npm run build, the query is made and the static html is generated, which will 
// then be sent in each request.
/*
export async function getStaticProps() {
  const url = `${process.env.STRAPI_API_URL}/blogs`
  const response = await fetch(url)
  const entries = await response.json()
  return {
    props: {
      entries
    }
  }
}
*/


export default Blog