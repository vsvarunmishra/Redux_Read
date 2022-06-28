import { productConst } from "../constants/productConst"

export const setProducts = (products) => {
    return{
        type:productConst.SET_PRDUCTS,
        payload: products
    };
};

export const selectedProduct = (product) => {
    return{
        type:productConst.SELECTED_PRODUCTS,
        payload: product
    };
};