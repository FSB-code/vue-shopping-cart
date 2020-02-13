export default {
    state: {
        products: [],
        cart: [],
        count: 0,
    },
    actions: { 
        async fetchProducts(context) {
            const response = await fetch(
            "https://swapi.co/api/starships/" 
            );
            const arrayProducts = await response.json();
            const fetchProducts = arrayProducts.results.filter((item) => item.cost_in_credits >= 0)
            context.commit('updateProducts', fetchProducts)
        },
        addToCart(context, product) { 
            context.commit('mutateCartIncrement', {id: product.length}) 
        }, 
        removeFromCart(context, product) { 
            context.commit('mutateCartDecrement', {id: product.length}) 
        }, 
        removeProduct(context, product) {
            context.commit('mutateProductCart', product)
        },
    },
    mutations: {
        updateProducts(state,products) {
            state.products = products
        },
        mutateCartIncrement(state, {id} ) { 
            const final = state.cart.find(item => item.id === id)
                if (!final) {
                    state.cart.push({
                        id,
                        quantity: 1,
                    })
                    state.count++
                } else {
                    final.quantity++
                    state.count++
                }
        },
        mutateCartDecrement(state, {id} ) { 
            const final = state.cart.find(item => item.id === id);
            if (final) {  
                final.quantity--
                state.count-- 
            } 
        },
        mutateProductCart(state,product) {
             state.cart.splice(product, 1)
        }, 
    },
    getters: { 
        allProducts: state => state.products, 
        getNumberOfProducts: state => (state.products) ? state.products.length : 0,
        cartProducts: state => {
            return state.cart.map(({ id, quantity }) => {
                const product = state.products.find(item => item.length === id)
                return {
                    name: product.name,
                    price: product.cost_in_credits,
                    quantity,
                }
            })
        },
        count: state => state.count,
    }  
}