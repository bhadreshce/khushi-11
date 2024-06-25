const intial = {
    cart: 0
}

const AddToCart = (state = intial, action) => {
    switch (action.type) {
        case 'ADDCART':
            return { cart: state.cart + 1 }
            break;
        case 'RESET':
            return { cart: 0 }
            break;

        default:
            return { cart: state.cart }
            break;
    }
}


export default AddToCart;
