import "./Loading.css"
import Lottie from 'react-lottie';
import * as pandaAnimation from "./Panda.json"
import * as pandaAnimation2 from './Panda2.json'
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: pandaAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: pandaAnimation2.default,
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
