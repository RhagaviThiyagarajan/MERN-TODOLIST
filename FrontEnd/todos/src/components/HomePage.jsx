import AddNewTodoForm from "./AddnewTodoForm";
import TodosList from "./TodoList";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>TodoApp</h1>

      <AddNewTodoForm />
      <TodosList />
    </div>
  );
};
