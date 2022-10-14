import React, { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import ShowTodos from './components/ShowTodos'

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
  //  let a = localStorage.getItem('todos');
  //  a = JSON.parse(a);
  //  setTodos(a); 
  loadTodos();
  },[])

  function persistTodos(newtodos) {
    localStorage.setItem('todos', JSON.stringify(newtodos));
  }

  function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        let newTodos = json.map(todo => {
          return {
            id: todo.id,
            title: todo.title,
            status: todo.completed
          }
        })

        setTodos(newTodos);
      });
  }

  function inputHandler(e,val){
    // App >> ShowTodos >>TodoRow
    setTodos(function(prevState){
      let newtodos = [...prevState, {
        id: prevState.length+1,
        title: val,
        status: false
      }];
      persistTodos(newtodos);
      return newtodos;
    })

  }

  function deleteTodoHandler(id){
    setTodos(function(prevTodos) {
      return prevTodos.filter(function (todo) {
        if(todo.id == id){
          return false;
        }

        return true;

      })
    })
  }

  function finishHandler(id){
    setTodos(function(prevTodos) {
      return prevTodos.map(function(todo) {
        if(todo.id === id){
          todo.status = true;
        }
        return todo;
      })
    })
  }
  function unfinishHandler(id){
    setTodos(function(prevTodos) {
      return prevTodos.map(function(todo) {
        if(todo.id === id){
          todo.status = false;
        }
        return todo;
      })
    })
  }

  return (
    <section className="vh-100" style={{backgroundColor: '#eee'}} >
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
                <div className="card rounded-3">
                <div className="card-body p-4">
        
                    <h4 className="text-center my-3 pb-3">To Do App</h4>
        
                    <AddTodo inputHandler={inputHandler}
                              loadTodos={loadTodos} />
        
                    <ShowTodos todos={todos} 
                                deleteTodoHandler={deleteTodoHandler} 
                                finishHandler={finishHandler}
                                unfinishHandler={unfinishHandler} />
        
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
