import Item from "./Item"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { memo } from "react";

AOS.init();
const ItemList =memo(({productos}) => {
    
    return (
        <>
         <div className="container">
            <div className="row">
                {productos.map(element => <Item producto={element} key={element.id}/>)}
            </div>
        </div> 

            
         
        </>      
    )
    }
)

export default ItemList
