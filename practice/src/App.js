import React,{Component} from 'react';
import TodoListTemplate from "./Component/TodoListTemplate";
import TodoHead from './Component/TodoHead';

class App extends Component{
  render() {
    return(
      <TodoListTemplate>
        <TodoHead />
      </TodoListTemplate>
    )
  }
}
export default App;
