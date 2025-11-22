import Todo from "../interfaces/Todo";
import { v4 as uuidv4 } from 'uuid';


type AddAction = {
    type: 'add',
    payload:{
        text:string
    }
}

type RemoveAction  ={
    type:'remove',
    payload:{
        id:string
    }
}

type UpdateAction = {
    type:'update',
    payload:{
        id:string
    }
}

type TodoActions = AddAction | UpdateAction | RemoveAction;

export const todoReducer = (todos: Todo[], action: TodoActions): Todo[]=>{
    action.type
    action.payload

    switch(action.type){
        case 'add':
            return [...todos, {id: uuidv4() , nameTodo: action.payload.text, status: 0 }];
        case 'remove':
            return todos.filter(todo => todo.id !== action.payload.id)
        case 'update':
            return todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, status: todo.status === 1 ? 0 : 1 } : todo
          )
          
        default:
            return todos
    }


}