'use client'

import Todo from "../interfaces/Todo";
import TodoItem from "./TodoItem";

interface Prop{
    data: Todo[];
    onUpdateTodo?: (index:string)=>void;
    onDeleteTodo ?: (index:string)=>void;

}


const TodoList = ({data, onUpdateTodo, onDeleteTodo}: Prop)=>{

    return(
        <>
            <ul>
                {data.map((item)=>
                   
                   <TodoItem key={item.id} item={item} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />

                )}
            </ul>
        </>
    );
}

export default TodoList;