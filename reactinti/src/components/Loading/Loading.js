import "./Loading.css"
import Lottie from 'react-lottie';
import * as animationData from './Rocket.json'
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Loading() {
    return (
        <div>
            <Lottie options={defaultOptions} height={400} width={400}/>            
            <h2>Cargando...</h2>
        </div>
    )
}

export default Loading
