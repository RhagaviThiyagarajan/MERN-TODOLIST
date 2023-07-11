import { GET_TODOS_FAILURE,GET_TODOS_SUCCESS,GET_TODOS_REQUEST } from "../todosConstant";


const initialState={
    isLoading:false,
    todos:[],
    error:null,
}


const todosREducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading:false,
            };
            case GET_TODOS_SUCCESS:
                return {
                    isLoading:false,
                    todos:action.payload,
                    error:null
                }
                case GET_TODOS_FAILURE:
                    return{
                        isLoading:false,
                        todos:[],
                        error:action.payload,
                    };
                    default:
                        return state;
    }
}