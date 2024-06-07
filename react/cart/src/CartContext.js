import { useContext, createContext } from 'react'
import { CartContext } from './CartContext.1';
export const Addcart = createContext();
export const CartHome = () => {
    return useContext(Addcart)
}
export default CartContext