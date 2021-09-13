import { useCartContext } from "../../Context/CartContext"

const {product, setProduct} = useCartContext()

function CartItemCount() {
   const handlerAdd = ()=> {
        setCount(count + 1);
        if(stock === count){
            setCount(count)
            alert (`el stock maximo permitido es ${stock}`)
        }  
    }
    const handlerRm=()=>{
        setCount(count - 1);
        if (count === 0){
            setCount(count)
        }
    }
    return (
        <div>
            
        </div>
    )
}

export default CartItemCount
