import './style/loading.css'
import loadingImg from '../../assets/loading-img.png'

const FullScreenLoading = () => {
  return (
    <div className='fs-container'>
        <div className="fs_image">
            <img src={loadingImg} alt="" srcset="" />
        </div>
    </div>
  )
}

export default FullScreenLoading