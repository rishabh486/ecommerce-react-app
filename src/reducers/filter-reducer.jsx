import { initialState } from "./initial-state"

export const reducerFn=(state,action)=>{
    const {filter}=state
    const{categoryName}=filter
    console.log(state)
    switch (action.type){
        
        case "RATING_FILTER":
        return {
            ...state,filter:{...filter,ratings:action.payload}
        }
        case "SORTING":
        return {
            ...state,filter:{...state.filter,sortBy:action.payload}
        }
        case "FILTER_BY_CATEGORY":
            return{
                ...state,filter:{...filter,categoryName:{...categoryName,[action.payload]:!categoryName[action.payload]}}
            }
        case "CLEAR":
            return{
                ...state,filter:initialState.filter
            }
        default:
            return state
    }
}