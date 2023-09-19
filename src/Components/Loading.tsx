
import LoadingImg from  "../assets/sand-clock.png"

export default function Loading() {
  return (
    <div className='d-flex justify-content-center' style={{ position:"relative", top:"30px", height:"70vh", zIndex:"5" }} >
       <img src={LoadingImg}  alt="Loading" />
    </div>
  )
}
