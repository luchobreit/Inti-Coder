import ItemList from "../components/Items/ItemList";
import { useEffect,useState } from "react";
import Item from "../components/Items/Item";


function ItemListContainer({greeting="Lorem ipsum dolor sit amet, consectetur adipiscing elit"}) {
    const [products, setProducts] = useState([])
    const productosLista=[
        {id:1, name:"sweater", description: "beige",stock:3},
        {id:2, name:"camisa", description: "a cuadros",stock:4},
        {id:3, name:"jeans", description: "jean",stock:2},
        {id:4, name:"taza", description: "lunas",stock:1},
        {id:5, name:"campera", description: "verde",stock:5},
        {id:6, name:"cuaderno", description: "cataratas",stock:3},     
    ];
    let tarea = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productosLista);
            reject("no se encontro/no hay stock");
        });
      },2000)
    useEffect(() => {
        tarea
        .then((resp)=>{setProducts(resp)});
    },[])
    
    

    return (
        <div>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer
