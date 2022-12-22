import {useState} from 'react';

function Todo(props) {
        // const [inputdata,setInputData]= useState("")
           const [state,setState]= useState("No Data in the State")
        //   const getInputData = (event)=>{
        //         setInputData(event.target.value)
        //   } 

          const updateState = ()=>{
            var inputValue = document.getElementById('input').value
                //   setState(inputdata) 
                setState(inputValue) 
          }

    return (
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h2>Todo App</h2>
            <input id="input" type="text" placeholder='Enter Some Content'   />
            <button onClick={updateState}>Submit</button>
            <p>{state}</p>
        </div>
    );
}

export default Todo;