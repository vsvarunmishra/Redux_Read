import { productConst } from "../constants/productConst";

const initState = {
    products:[]
};

export const ProductReducer = (state = initState,{type,payload}) => {
    switch(type){
        case productConst.SET_PRDUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
};

// export default ProductReducer;