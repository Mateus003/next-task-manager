import Todo from "../interfaces/Todo";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const useTodos= ()=>{
    let [todos, setTodos] = useState<Todo[]>([]);
    let [todo, setTodo] = useState("");
    
      const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
      };
    
      const handleUpdate = (idToUpdate: string) => {
        setTodos(prev =>
          prev.map((todo) =>
            todo.id === idToUpdate ? { ...todo, status: todo.status === 1 ? 0 : 1 } : todo
          )
        );
      };

      const handleDelete = (idToDelete:string)=>{
         setTodos(todos.filter(todo => todo.id !== idToDelete));
      }
    
      const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        setTodos([...todos, {id: uuidv4() ,nameTodo: todo, status: 0 }]);
        setTodo("");
      };

      console.log(todos);

      return {submitForm, handleClick, handleUpdate, handleDelete, todo, todos}
}

export default useTodos;