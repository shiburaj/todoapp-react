import React, { useRef } from 'react'

export default function AddTodo(props) {
    //const [todoTitle, setTodoTitle] = useState('');
    const titleRef = useRef();

    // function changeHandler(e){
    //     setTodoTitle(e.target.value);
    // }

    function submitTodo(e){
        e.preventDefault();
        let todoTitle = titleRef.current.value;
        if(todoTitle===''){
            alert('Title cannot be empty');
            return;
        }
        props.inputHandler(e,todoTitle);
        titleRef.current.value = '';
        //setTodoTitle('');
    }
  return (
    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
        
        <div className="col-12">
            <div className="form-outline">
            <input type="text" ref={titleRef}  placeholder="Enter task here" id="form1" className="form-control" />
            </div>
        </div>

        <div className="col-12">
            <button type="submit" onClick={(e) => submitTodo(e) } className="btn btn-primary">Save</button>
        </div>

        <div className="col-12">
            <button type="button" onClick={props.loadTodos} className="btn btn-warning">Load Data</button>
        </div>
    </form>
  )
}
