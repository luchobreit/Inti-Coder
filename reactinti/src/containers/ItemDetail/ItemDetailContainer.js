import ItemDetail from "./ItemDetail";
import { useState,useEffect } from "react";
import "./ItemDetailContainer.css"
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";
import { getFirestore } from "../../components/service/getFirebase";
 


function ItemDetailContainer() {
    const db = getFirestore()
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id}=useParams()
    const itemDB= db.collection(`items`).doc(id).get()
    useEffect(() => {
        itemDB
        .then(prod=>{
            console.log(prod.data())
            setProduct(prod.data())
            setLoading(false)
        })  
      })
    

   console.log(product);
    return (
        <div className="ItemDetail">       
        {loading ? <Loading route={"/"}/>
        :
        <ItemDetail producto={product}/>
        }
        </div>
    )
}

export default ItemDetailContainer
