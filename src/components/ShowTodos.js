import React from 'react'
import EmptyRow from './EmptyRow'
import TodoRow from './TodoRow'

export default function ShowTodos(props) {
    
  return (
    <table className="table mb-4">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            
            {props.todos.map(function(todo){
               return <TodoRow key={todo.id} 
                                id={todo.id} 
                                deleteTodoHandler={props.deleteTodoHandler} 
                                finishHandler={props.finishHandler} 
                                title={todo.title} 
                                status={todo.status}
                                unfinishHandler={props.unfinishHandler} />
                
            })}
            { props.todos.length <=0?<EmptyRow />:null}
        </tbody>
    </table>
  )
}
