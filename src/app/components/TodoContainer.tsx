import TodoList from "./TodoList";
import useTodos from "../hooks/useTodos";
import useFilteredTodos from "../hooks/useFilteredTodo";
import styled from "styled-components";
import FilterTabs from "./FilterTabs";

const BtnSubmit = styled.input`
  background: #5D8AA8;
    color: #fff;
    font-weight: bold;
    border:none;
    float:right;
    padding: 5px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
`

const InputArea = styled.input`
   display:inline-block;
    outline:0;
    border:0;
    padding: 5px;
    width: 350px;

`
const Box = styled.div`
    width:400px;
    background-color: white;
  border-radius: 5px;
    padding: 5px 5px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

`

const Title =  styled.h1`
  margin-bottom: 40px;
  font-family: sans-serif;
`

const TodoContainer = () => {

  const {handleClick, submitForm, handleUpdate, handleDelete,todo, todos} = useTodos();
  
  const {allTodo, pendTodo,completedTodo, filteredTodos} = useFilteredTodos(todos);
  

  return (
    <>

      <Title>Minhas tarefas</Title>

      <FilterTabs
      allTodo={allTodo}
      pendTodo={pendTodo}
      completedTodo={completedTodo}
      
      />
          
      <form onSubmit={submitForm}>

        <Box>
           <InputArea
            type="text"
            placeholder="Digite a tarefa"
            value={todo}
            onChange={handleClick}
          />
          <BtnSubmit type="submit" value="Adicionar" />

        </Box>
       

      </form>

      <TodoList
        data={filteredTodos}
        onUpdateTodo={handleUpdate}
        onDeleteTodo={handleDelete}
      />
    </>
  );
};

export default TodoContainer;
