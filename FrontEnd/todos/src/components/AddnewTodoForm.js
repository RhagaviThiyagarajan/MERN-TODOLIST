import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/actions/todosAction";

const AddTodosForm = () => {
  const dispatch = useDispatch();
  const { isLoadingPost, successPost, errorPost } = useSelector(
    (state) => state.todos
  );
  const [todoTitle, settodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [validateError, setValidateError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.length === 0) {
      setValidateError("title field is required");
    } else if (todoDescription.length === 0) {
      setValidateError("description field is required");
    }

    //if its ok add to-do
    if (todoTitle && todoDescription) {
      settodoTitle("");
      setTodoDescription("");
      setValidateError("");

      //add new to-do list
      dispatch(createTodo({ todoTitle, todoDescription }));
    }
  };

  useEffect(() => {
    if (successPost) {
      setSuccessMessage(successPost.message);
    } else if (errorPost) {
      setValidateError("Error:" + errorPost.message);
    }
  }, [successPost, errorPost]);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
      setValidateError("");
    }, 3000);
  }, [successMessage, validateError]);

  return (
    <div classNmae="validation">
      {/* 
            //form validation message */}

      {validateError && (
        <div className="w-full">
          <p className="text-white">{validateError}</p>
        </div>
      )}

      {/* //form success message */}

      {successMessage && <p className="text-white text-md">{successMessage}</p>}

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {/* 
        //todos title input field */}

        <input
          type="text"
          value={todoTitle}
          onChange={(e) => settodoTitle(e.target.value)}
        />
         <button type="submit" className="text-white ">
          {isLoadingPost ? "Adding ... !!!" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};
