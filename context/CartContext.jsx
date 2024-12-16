import React, {useContext,createContext,useState} from "react"

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addToCart = (product) => {
        setCart((prevItems) => [...prevItems,product])
    }

    const removeFromCart = (product) => {
        setCart(prevItems => prevItems.filter(item => item.id!==product.id))
    }

    return (
    <CartContext.Provider value={{cart,setCart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)
    if (!context) {
      throw new Error('useCartContext must be used within a CartContextProvider')
    }
    return context
}
