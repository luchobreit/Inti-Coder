import {createContext,useState, useContext} from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)



function CartContextProvider({children}) {
    const [product, setProduct] = useState([])
   
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
   
   
    console.log(product)
    return (
        <CartContext.Provider value={{
            product,
            agregarAlCarrito,
            borrarListado,
            borrarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider
