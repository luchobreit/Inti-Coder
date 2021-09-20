import {createContext,useState, useContext} from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)



function CartContextProvider({children}) {
    const [product, setProduct] = useState([])
    const [cantidad, setCantidad] = useState(false)

   const contador =()=>{
        if (product.length>0) {
            setCantidad(true)
        }else{
            setCantidad(false)
        }
    }
   
    function agregarAlCarrito(prod, count){
        if (isInCart(prod.id)) {
            alert("este producto ya está en tu carrito")
        }else{
            setProduct([...product, {item: prod, quantity: count}])
        }
       
    }
        const borrarItem = (itemId) => {
            const cartFilter = product.filter(element => element.item.id !== itemId)
            return setProduct(cartFilter)
        }

    const borrarListado=()=>{
        setProduct([])
    }

    const isInCart=(id)=>{
        return product.find(e=>e.item.id===id)
    }

    const iconCart = ()=>{
        return(product.reduce((acum,valor)=>acum+valor.quantity,0));
    }
   
    const total =()=>{

        return(product.reduce((acum,valor)=>acum+valor.quantity*valor.item.price,0));
    }
   
    iconCart()
    return (
        <CartContext.Provider value={{
            product,
            cantidad,
            total,
            setCantidad,
            agregarAlCarrito,
            borrarListado,
            borrarItem,
            iconCart,
            contador
        }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider
