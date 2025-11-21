import styled from "styled-components";
import Todo from "../interfaces/Todo";

const List = styled.li`
    list-style: none;
    display: flex;
    gap: 10px;     
    
`

const InputCheckBox = styled.input`
  width: 20px;
  height: 20px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  align-items: center;  
  padding: 10px;
  margin: 20px 0px;
  font-family: Sans-Serif;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`

const TextTodo = styled.p`
  font-family: Sans-Serif;
  font-size: 15px;
`


const IconButton = styled.div`
  width: 20px; 
  height: 20px;
  background-color: #ff0000; 
  
  -webkit-mask: url('/icons/trash.svg') no-repeat center;
  mask: url('/icons/trash.svg') no-repeat center;
  
  cursor: pointer;

  &:hover {
    background-color: #cc0000; 
  }
`

interface TodoItemProps {
  item: Todo;
  onUpdateTodo?: (id: string) => void;
  onDeleteTodo?: (id: string) => void;
}


const TodoItem = ({ item, onUpdateTodo, onDeleteTodo }: TodoItemProps)=>{
      return (
        <Container>
          <List>
            <InputCheckBox type="checkbox" onChange={() => onUpdateTodo?.(item.id)} checked={item.status === 1} />
              <TextTodo>{item.nameTodo}</TextTodo> 
          </List>
          <IconButton onClick={()=>onDeleteTodo?.(item.id)} style={{cursor: "pointer"}}/>

        </Container>
      )        
}


export default TodoItem;