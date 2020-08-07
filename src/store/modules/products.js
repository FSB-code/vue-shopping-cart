export default {
    state: {
        products: [],
        cart: [],
    },
    actions: { 
        async fetchProducts({commit}) {
            const response = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
            const products = await response.json();
            products.members.forEach(item => item.count = 0)
            commit('UPD_PRODUCTS', products)
        },
        addToCart({commit}, product) { 
            commit('ADD_PRODUCT', {name: product.name}) 
        }, 
        removeFromCart({commit}, product) { 
            commit('REMOVE_PRODUCT', {name: product.name}) 
        }, 
        deleteProduct({commit}, product) {
            commit('DELETE_PRODUCT', product)
        },
    },
    mutations: {
        UPD_PRODUCTS: (state,products) => {
            state.products = products.members
        },
        ADD_PRODUCT: (state, {name}) => { 
            const productCount = state.products.find(item => item.name == name)
            const productInCart = state.cart.find(item => item.name == name)
            productCount.count++
            if (!productInCart) {
                state.cart.push({name, quantity: 1})
            } else {
                productInCart.quantity++
            }
        },
        REMOVE_PRODUCT:(state, {name}) => { 
            const productCount = state.products.find(item => item.name == name)
            const productInCart = state.cart.find(item => item.name == name)
            productCount.count--
            if (productInCart.quantity) {  
                productInCart.quantity--;
            } 
        },
        DELETE_PRODUCT: (state,product) => {
             state.cart.splice(product, 1)
        }, 
    },
    getters: { 
        products: state => state.products.map(product => {
            return {
                name: product.name,
                price: product.age,
                count: product.count,
            }
        }), 
        numberProducts: state => (state.products) ? state.products.length : 0,
        cartProducts: state => {
            return state.cart.map(({ name, quantity }) => {
                const product = state.products.find(item => item.name == name)
                return {
                    name: product.name,
                    price: product.age,
                    quantity,
                }
            })
        },
    }  
}