import {BrowserRouter as Router, Route} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
//import uuid from 'uuid/dist/v4'

class App extends Component {

  state = {
    todos: [
        // all the data come from ###API 
        // thats why we commented out ...

        // {
        //     id: Math.floor(Math.random() * 10000000),
        //     title: 'Read Quran',
        //     completed: false
        // },
        // {
        //     id: Math.floor(Math.random() * 10000000),
        //     title: 'Help Mom',
        //     completed: false
        // },
        // {
        //     id: Math.floor(Math.random() * 10000000),
        //     title: 'Prayer in time',
        //     completed: false
        // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})

  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id != id )]}))
    
  }

  // Add Todo
  addTodo = (title) => {
      
    // const newTodo = {
    //   id: Math.floor(Math.random() * 10000000),
    //   title,
    //   completed: false
    // }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    // Copy the exixting 'todos' and add 'newTodo'
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}/>
                </React.Fragment>
              )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
