import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteTodo,getAllTodos} from '../redux/actions/todosAction.js';


const TodoList=()=>{
    const dispatch=useDispatch();
    const { isLoading, todos, error, isLoadingPost, isLoadingDelete } = useSelector((state) => state.todos);

useDispatch(()=>{
    dispatch(getAllTodos);
},[dispatch,isLoadingPost,isLoadingDelete]);



{/* Todos List */}
{todos.length === 0 ? (
    <h2 className="text-black text-2xl font-bold my-2">Sorry! No Todos Found.</h2>
  ) : (
    todos.todos.map((todo, index) => (
      <div key={index} className="bg-gray-100 w-full rounded-sm shadow-md p-5 my-2 transition-all duration-100 hover:shadow-lg">
        <h2 className="text-black text-2xl font-bold my-2">
          <span className="text-blue-500 font-bold">Title: </span>
          <span className={todo.completed ? "line-through decoration-green-500" : "none"}>{todo.title}</span>
        </h2>

        <p className="text-black text-lg font-normal text-justify my-2">
          <span className="text-blue-500 font-bold">Description: </span>
          {todo.description}
        </p>

</div>
    ))
)}


   
    
}
   