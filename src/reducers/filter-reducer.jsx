export const reducerFn=(state,action)=>{
    const {filter}=state
    console.log(state)
    switch (action.type){
        
        case "RATING_FILTER":
        return {
            ...state,filter:{...filter,ratings:action.payload}
        }
        case "PRICING_FILTER":
        return {
            ...state,filter:{...filter,ratings:action.payload}
        }
        default:
            return state
    }
}