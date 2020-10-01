import React, {Component} from 'react';
import Todos from  './Todos.js'
import AddTodo from './AddTodo.js'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "play"  },
      { id: 2, content: "have fun"  },
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo=> {
      return todo.id !== id;
    });
    this.setState({
      todos: todos 
    });
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
