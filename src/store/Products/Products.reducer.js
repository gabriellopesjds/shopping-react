import productsMock from '../../mocks/products.json'

export default function(state = productsMock.products, action){
    switch (action.type) {
        case 'TOGGLE_PRODUCT':
            return state.map((element) => 
                element.id === action.payload 
                ? { ...element, checked: !element.checked} 
                : element
            )
         
        default:
            return state
    }
}