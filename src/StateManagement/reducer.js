export const initialState = {
    filters: [0,0,0],     //[buyerName,sortBy,productName]
    products: []
}
const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_FILTERS':
            return {
                ...state,
                filters: action.filters
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}
export default reducer;