import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
flex: 1;
padding: 20px 32px;
padding-bottom: 48px;
overflow-y: auto;
`;

function TodoList() {
    return <TodoListBlock>
        <TodoItem text="create project" done={true}/>
        <TodoItem text="component styling" done={false}/>
        <TodoItem text="create context" done={true}/>
        <TodoItem text="delete" done={false}/>
    </TodoListBlock>;
}
export default TodoList;