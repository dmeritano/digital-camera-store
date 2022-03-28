import Camera from './Camera'
import styles from '../styles/CamerasList.module.css'

const CamerasList = ( {cameras} ) => {
  return (
    <div className={styles.list}>
      {cameras.map( camera => (
        <Camera 
          key={camera.id}
          camera={camera}
        />
      ))}
    </div>
  )
}

export default CamerasList