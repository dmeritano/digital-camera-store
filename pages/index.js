import Layout from "../components/Layout"
import CamerasList from "../components/CamerasList"
import Course from "../components/Course"
import BlogList from '../components/BlogList'


export default function Home( {cameras, course, blogEntries} ) {

  return (
    <Layout pageName="Home" cameraHeader={cameras[3]}>
      <main className="container">
        <h1 className="heading">Our cameras</h1>
        <CamerasList cameras={cameras} />
      </main>

      <Course course={course} />

      <section className="container">
        <BlogList entries={blogEntries} />
      </section>      
    </Layout>
  )
}


export async function getServerSideProps() {


  const urlCameras = `${process.env.STRAPI_API_URL}/cameras?_sort=name`
  const urlCourse = `${process.env.STRAPI_API_URL}/course`
  const urlBlog = `${process.env.STRAPI_API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [responseCameras, responseCourse, responseBlogEntries] = await Promise.all([
    fetch(urlCameras),
    fetch(urlCourse),
    fetch(urlBlog)
  ])

  const [cameras, course, blogEntries] = await Promise.all([
    responseCameras.json(),
    responseCourse.json(),
    responseBlogEntries.json()
  ])

  return {
    props: {
      cameras,
      course,
      blogEntries
    }
  }
}