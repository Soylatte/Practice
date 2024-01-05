import React,{Component} from 'react';
import TodoListTemplate from "./Component/TodoListTemplate";
import TodoHead from './Component/TodoHead';
import TodoList from './Component/TodoList';
import TodoCreate from './Component/TodoCreate';

class App extends Component{
  render() {
    return(
      <TodoListTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoListTemplate>
    )
  }
}
export default App;
