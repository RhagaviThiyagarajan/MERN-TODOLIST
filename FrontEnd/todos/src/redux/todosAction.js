import axios from 'axios';
import {GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILURE}  from '../constants/todosConstant';



export const getAllTodos=async(dispatch)=>{
    dispatch({type:GET_TODOS_REQUEST});

    try{
        const res=await axios.get(process.env.BaseURL)
    dispatch({type:GET_TODOS_SUCCESS,payload:res.data})
    
    }catch(error)
    {
dispatch({type:GET_TODOS_FAILURE,payload:error});
    }
}