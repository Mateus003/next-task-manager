import { useState } from "react";
import styled from "styled-components";

interface TabItemProps {
  $isActive?: boolean;
  allTodo?: ()=>void;
  pendTodo?: ()=>void;
  completedTodo?:()=>void;

}

const ContainerList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 400px;
  margin-bottom: 30px;
  justify-content: center;
  gap: 30px;
  padding: 0;
  border-bottom: 2px solid #ccc;
`;

const TabItem = styled.li<TabItemProps>`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: Sans-Serif;
  padding-bottom: 5px;
  transition: color 0.2s;
  margin-bottom: -1.5px;
  color: ${(props) => (props.$isActive ? "#5D8AA8" : "#ccc")};
  border-bottom: 2px solid ${(props) => (props.$isActive ? "#5D8AA8" : "transparent")};
  
  &:hover {
    color: ${(props) => (props.$isActive ? "black" : "#555")};
  }
`;

const FilterTabs = ({allTodo, pendTodo, completedTodo}:TabItemProps) => {
  const [filtertab, setFilterTab] = useState<'todas' | 'pendentes' | 'concluidas'>('todas');

  return (
    <ContainerList>
      <TabItem
        $isActive={filtertab === 'todas'}
        onClick={() => {
            setFilterTab('todas')
            allTodo?.();
            
        }}
      >
        Todas
      </TabItem>

      <TabItem
        $isActive={filtertab === 'pendentes'}
        onClick={() => {
            setFilterTab('pendentes')
            pendTodo?.();
        }}
      >
        Pendentes
      </TabItem>

      <TabItem
        $isActive={filtertab === 'concluidas'}
        onClick={() => {
            setFilterTab('concluidas')
            completedTodo?.();
        }}
      >
        Concluídas
      </TabItem>
    </ContainerList>
  );
};

export default FilterTabs;