import axios from 'axios';
export const getProducts = ({commit}) => {
    axios.get("/api/sc_front/product_listings")
        .then(response => {
            commit('SET_PRODUCTS', response.data)
        });
} 

export const getProduct =({commit}, productSlug) => {
    axios.get(`/api/sc_front/single/product/listing/${productSlug}`)
    .then(response => {
        commit('SET_PRODUCT', response.data)
    });
}

export const addProductToCart = ({ commit }, {product, quantity}) => {
    commit('ADD_TO_CART', {product,quantity});
}

export const removeProductFromCart = ({commit}, product) =>{
    commit('REMOVE_PRODUCT_FROM_CART', product);
}