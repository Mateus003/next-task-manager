"use client"

import styled from "styled-components";
import TodoContainer from "./components/TodoContainer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #F0F8FF;

`

export default function Home() {
  
  return (
    <Container>
          <TodoContainer/>
    </Container>
  );
}
