import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";
import { getFirestore } from "../../components/service/getFirebase";


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const {category} = useParams()
    const {sex}=useParams()
    const db = getFirestore()
    const itemDB= db.collection(`items`)    

      
    useEffect(() => {
        if (setLoading){
            setLoading(true)
        };
        if(category===undefined){
            itemDB.get()
            .then(data =>{
                setProducts(data.docs.map(r =>({id:r.id,...r.data()})))
                setLoading(false)
            }).catch(err=>console.log(err));
        }else{
            itemDB.where(`categoria`, "==",category).get()
            .then(data =>{
                setProducts(data.docs.map(r =>({id:r.id,...r.data()})))
                setLoading(false)
            })
            
        }if (sex !== undefined) {
            itemDB.where(`sexo`, "==",sex).get()
            .then(data =>{
                setProducts(data.docs.map(r =>({id:r.id,...r.data()})))
                setLoading(false)
            })
        }
        
        
    },[category,sex])
    

    return (
        <div>
            {loading ? <Loading/>
            :
            <ItemList productos={products}/>
        }
        </div>
    )
}

export default ItemListContainer
