export const selectAllProducts = state => state.products

export const selectAllProductsSelected = state => state.products.filter(element => element.checked)

export const selectTotalAllProductsSelected = state => 
    state.products
        .filter(p => p.checked)
        .reduce((a,b) => a + b.price, 0)