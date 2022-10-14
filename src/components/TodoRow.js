import React from 'react'

export default function TodoRow(props) {

  return (
    <tr className={props.status?'finished':null}>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>
            {props.status?<span className="complete">Complete</span>:<span className="in-progress">In Progress</span>}
            
            
        </td>
        <td>
            <button onClick={(e) => (props.deleteTodoHandler(props.id))} type="button" className="btn btn-danger">Delete</button>
            <button onClick={(e) => (props.finishHandler(props.id))} type="button" className="btn btn-success ms-1">Finished</button>
            <button onClick={(e) => (props.unfinishHandler(props.id))} type="button" className="btn btn-warning ms-1">Unfinish</button>
        </td>
    </tr>
  )
}
