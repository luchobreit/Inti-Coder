import { useCartContext } from "../../Context/CartContext"
import CartItem from "./CartItem"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button"
import {AiFillEye} from "react-icons/ai";
import { Link } from "react-router-dom"
import { useState } from "react";
import { auth } from "../service/getFirebase";
import "./cart.css"







function Cart() {
    const [email, setEmail] = useState({})
    const [pass, setPassword] = useState({})
    const [check, setCheck] = useState(true)
    const [log, setLog] = useState(true)
    const [emailConfirmation, setEmailConfirmation] = useState({
        email:"",
        email2:""
    })

   
   
    const {borrarListado, product,cantidad,contador,total,usuario,setUsuario}=useCartContext()
    contador ()


    
    const formChange =e=>{
        setEmailConfirmation({
            ...emailConfirmation,
            [e.target.name]: e.target.value
        })
    }

    const registrarUsuario=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
        .then (res=>setUsuario(auth.currentUser))
        .then(res=>console.log(usuario))
        .catch(
            error=>{
                if (error.code==="auth/weak-password") {
                    alert("la contraseña debe tener al menos 6 caracteres")
                }
            }
        )
    }

    const logInUsuario=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, pass)
        .then (res=>setUsuario(auth.currentUser))
        .catch(
            error=>{
                if (error.code==="auth/wrong-password") {
                    alert("usuario o contraseña incorrecto")
                }else if (error.code==="auth/user-not-found"){alert("usuario no encontrado")}
            }
        )
    }

    const passwordActive =()=>{
        setCheck(!check)
    }


    if (usuario) {
        console.log(usuario.email);
    }


    return (
        <>
        {cantidad  && usuario!==null ?
        <div className="contenedorCart">
            {product.map(element => <CartItem item={element} key={element.item.id}/>)}
            <Row>
                <Col className="total">Total</Col>
                <Col className="total">{total()}</Col>
            </Row>
            <button className="btn-outline-danger borrarcompra" onClick={borrarListado}>Borrar Compra</button>
            <Link to={`/confcompra`}><button className="confcomp">Confirmar Compra</button></Link>
        </div>
        : cantidad ?


        <>
            <div className="box">
                { log ?
                <>
                <h1 className="h1">Registrate para continuar</h1>
                <form onSubmit={registrarUsuario}>
                    <input className="logger" name="email" onChange={formChange} type="email" placeholder="email"></input>
                    <input className="logger" name="email2" onChange={formChange} type="email" placeholder="Confirmar Email"></input>
                    <input className="logger" onChange={(e=>{setPassword(e.target.value)})} type={check ? "password": "text"} placeholder="pasword"></input>
                    { emailConfirmation.email===emailConfirmation.email2 ?
                        <button className="logger boton btn btn-outline-secondary" type="submit" >Registrarse</button>
                        : 
                        <div className="alert alert-danger" role="alert">
                                los mails son distintos
                        </div>
                    }
                    <AiFillEye className="password" onClick={passwordActive}><button ></button></AiFillEye>
                </form>
                <label className="label1" onClick={()=>setLog(!log)}>ya tenes un usuario? ingresa <label className="aqui">aqui</label></label>

                


                </>

                :
                <>
                <h1 className="h1">Ingresa</h1>
                <form>
                    <input className="logger" onChange={(e=>{setEmail(e.target.value)})} type="email" placeholder="email"></input>
                    <input className="logger" onChange={(e=>{setPassword(e.target.value)})} type={check ? "password": "text"} placeholder="pasword"></input>
                    <AiFillEye className="password" onClick={passwordActive}><button ></button></AiFillEye>
                    <button className="logger boton btn btn-outline-secondary" onClick={logInUsuario}>Ingresar</button>
                    <label className="label1" onClick={()=>setLog(!log)}>no tenes un usuario? ingresa <a className="aqui">aqui</a></label>
                </form>
                </>
                }
                
            </div>
            <div className="blur">{product.map(element => <CartItem item={element} key={element.item.id}/>)}</div>
        </>



        :

        <div className="vacio">
            <img className="imagenPanda" alt="panda" src="https://images.vexels.com/media/users/3/182089/isolated/preview/620a2bb2ec1234392f93719d2f6113a3-panda-triste-con-estilo.png"></img>
            <h1 className="texto-vacio">Todavia no agregaste nada al carrito queres agregar?</h1>
            <Link className="link-vacio" to={`/`}>
                <Button variant="outline-primary" size="sm" className="irgregar">Seguir comprando</Button>
            </Link>
        </div>
        }   
        </>
    )
}

export default Cart

