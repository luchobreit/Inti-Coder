import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";
import { getFirestore } from "../../components/service/getFirebase";


function ItemListContainer({greeting="Lorem ipsum dolor sit amet, consectetur adipiscing elit"}) {
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
            }).catch(err=>console.log(err))
            console.log("hola soy products",products);
            console.log(category);
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



    // useEffect(() => {
    //     if (setLoading){
    //         setLoading(true)
    //     }
    //     if (category===undefined) {
    //         itemDB
    //         .then((resp)=>{
    //             setProducts(resp)
    //             setLoading(false)
                
    //         }
    //         )}else{
    //             itemDB
    //             .then((resp)=>{
    //                 setProducts(resp.filter( r => category === r.categoria))
    //                 setLoading(false)
    //             })
    //         }
    //         if (sex !== undefined){
    //             itemDB
    //             .then((resp)=>{
    //                 setProducts(resp.filter( r => sex === r.sexo))
    //                 setLoading(false)
    //             })
    //         }
    // },[category, sex])
    
    

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
