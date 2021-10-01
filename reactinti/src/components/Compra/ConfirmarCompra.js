import "./ConfirmarCompra.css"
import { useCartContext } from "../../Context/CartContext"
import Table from 'react-bootstrap/Table';
import ConfirmarCompraItem from "./ConfirmarCompraItem";
import {useEffect, useState} from "react"
import { getFirestore } from "../../components/service/getFirebase";
import firebase from "firebase";
import 'firebase/firestore'

function ConfirmarCompra() {
    const {iconCart, product, total, cantidad, usuario, borrarListado}=useCartContext()
    const [formData, setFormData] = useState(initialState)
    const [checked, setChecked] = useState()
    

    formData.email=usuario.email
    const formChange =e=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        console.log(formData);
    }

    
    
    const formSubmit=e=>{
        e.preventDefault()
        let n =0
        product.forEach(e => {
           if (e.item.stock===0) {
               alert(`sin stock del producto ${e.item.name}` );
           }else{
               n=n+1
               console.log(n, product.length);
           }
        });
        if (n===product.length) {
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
            .then(
                r=>{
                    alert(`orden n°${r.id} enviada con exito`);
                    setFormData(initialState)
                }
            )
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
        }else(alert("falta de stock en algun producto"))
    }
    console.log(usuario.email);


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
                <input name="email" type="email" placeholder="Mail" className="input-name" value={usuario.email}></input>
                {cantidad && formData.nombre.length !== 0 && formData.tel !== 0 
                ? 
                <button type="submit" className="btn btn-primary btn-lg but">TERMINAR COMPRA</button>
                :
                <>
                <button className="btn btn-outline-primary btn-lg but" disabled>TERMINAR COMPRA</button>
                </>
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

