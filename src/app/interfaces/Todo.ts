enum Status{
    PENDENTE, 
    CONCLUIDO
}

interface Todo{
    id: string
    nameTodo:string;
    status: Status
}

export default Todo;