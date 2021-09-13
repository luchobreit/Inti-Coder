import "./Loading.css"
import Lottie from 'react-lottie';
import * as pandaAnimation from "./Panda.json"
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: pandaAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Loading({route}) {   
    return (
        <div>
             <Lottie options={defaultOptions} height={400} width={400}/> 
            <h2>Cargando...</h2>
        </div>
    )
}

export default Loading
