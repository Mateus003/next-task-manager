import { useState } from 'react';
import Todo from "../interfaces/Todo";


const useFilteredTodos = (todos: Todo[])=>{

  let [flagFilter, setFlagFilter] = useState(0);

  const allTodo = ()=>{
      setFlagFilter(0);
    }
    const completedTodo = ()=>{
      setFlagFilter(1);
    }

    const pendTodo = ()=>{
     setFlagFilter(2);
    }

  
    console.log(flagFilter);



    let filteredTodos = flagFilter === 0 ? todos : flagFilter === 1 ? todos.filter(todo => todo.status === 1): todos.filter(todo => todo.status === 0)

    return {filteredTodos, pendTodo, completedTodo, allTodo}
}

export default useFilteredTodos;