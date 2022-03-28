import Layout from "../components/Layout"
import CamerasList from "../components/CamerasList"


const Store = ( {cameras} ) => {

  return (
    <Layout pageName="Virtual Store">

      <main className="container">
        <h1 className="heading">Our Camera Store</h1>


        <CamerasList cameras={cameras} />

      </main>
      
    </Layout>
  )
}

export async function getServerSideProps() {

  //sorting by camera name
  //const url = `${process.env.STRAPI_API_URL}/cameras`
  const url = `${process.env.STRAPI_API_URL}/cameras?_sort=name`
  const response = await fetch(url)
  const cameras = await response.json()
  
  return {
    props: {
      cameras
    }
  }
}


export default Store