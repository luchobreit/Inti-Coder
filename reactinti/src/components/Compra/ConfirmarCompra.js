import "./ConfirmarCompra.css"
import { useCartContext } from "../../Context/CartContext"
import Table from 'react-bootstrap/Table';
import ConfirmarCompraItem from "./ConfirmarCompraItem";
import {useState} from "react"
import { getFirestore } from "../../components/service/getFirebase";
import firebase from "firebase";
import 'firebase/firestore'

function ConfirmarCompra() {
    const {iconCart, product, total, cantidad, setProduct, borrarListado}=useCartContext()
    const [formData, setFormData] = useState(initialState)


    const formChange =e=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
      
    }


    const formSubmit=e=>{
        e.preventDefault()
        if (formData.email===formData.email2) {
            console.log();
        }else{
            alert("no")
        };
        const newOrder={
            buyer: formData,
            items: product,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total(),
            quantity: iconCart()
        };

        const db= getFirestore()
        const orders=db.collection(`orders`)

        orders.add(newOrder)
        .then(r=>alert("enviado con exito"))
        .catch(r=>alert("hubo un error intente mas tarde"))
        .finally(r=>{
             setFormData(initialState)
             borrarListado()
        })

        product.forEach(e => {
            db.collection(`items`).doc(e.item.id)
            .update({
                stock: e.item.stock-e.quantity
            })
        
        })
    }
    


    return (
        <div className="container-conf">
            <div className="table-container">
                <Table striped bordered size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Candtidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>

                    <tbody>
                            {product.map(element => <ConfirmarCompraItem prod={element} key={element.item.id}/>)}
                        <tr>
                            <td>Cantidad total</td>
                            <th>{iconCart()}</th>
                            <td>Precio Total</td>
                            <th>{total()}</th>
                        </tr>
                    </tbody>
                </Table>


            </div>
            <form className="compra-container"
                onChange={formChange}
                onSubmit={formSubmit}  
                 
            >
                <input name="nombre" type="text" placeholder="Nombre" className="input-name"></input> 
                <input name="tel" type="text" placeholder="Tel" className="input-name"></input> 
                <input name="email" type="email" placeholder="Mail" className="input-name"></input> 
                <input name="email2" type="email" placeholder="Confirmar Mail" className="input-name"></input>
                {formData.email===formData.email2 && cantidad && formData.email.length !== 0 && formData.nombre !== 0 && formData.tel !== 0 
                ? 
                <button type="submit" className="btn btn-primary btn-lg but">TERMINAR COMPRA</button>
                :
                <button  className="btn btn-outline-primary btn-lg but" disabled>TERMINAR COMPRA</button>
                }
            </form>
        </div>
    )
}

export default ConfirmarCompra

const initialState={
    nombre:``,
    email:``,
    email2:``,
    tel:``};

