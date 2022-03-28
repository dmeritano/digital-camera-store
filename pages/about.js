import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'


const About = () => {
  return (
    <Layout pageName="About us">
      
       <main className="container">

          <h2 className="heading">About us</h2>

          <div className={styles.content}>   
              <div>
                <Image layout="responsive" width={600} height={450} src="/img/about.jpg" alt="About us logo" />              
              </div>           
              

              <div>
                <p>Aute esse cillum culpa sit id. Sunt consequat eiusmod sit ut duis exercitation ut non labore. Sunt in qui cupidatat irure voluptate aliquip tempor id enim velit ex fugiat aliquip. Occaecat amet anim exercitation cillum laboris ipsum labore. Enim aute laboris proident enim id ut voluptate amet officia exercitation minim ex. Officia irure sint sit velit tempor dolore amet fugiat ex esse commodo consequat ut.</p>
                <p>In commodo sunt dolore eiusmod dolor exercitation. Adipisicing cillum do minim exercitation et pariatur eiusmod ad consequat voluptate aliquip non pariatur duis. Veniam eu et enim sit exercitation pariatur deserunt sint reprehenderit. Enim id culpa aliqua incididunt sunt laborum laboris ad velit culpa. Tempor magna sint occaecat nisi sunt esse velit quis ut excepteur aute est. Officia est occaecat excepteur exercitation cillum sint dolor occaecat. Dolor ad nulla aliqua velit cillum.</p>
            </div>
          </div>

       </main>

    </Layout>
  )
}

export default About