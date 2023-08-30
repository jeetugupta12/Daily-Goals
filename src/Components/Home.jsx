import React,{useState} from 'react'
import Task from "./Task"

const Home = () => {
  const [tasks, setTasks]=useState([]);
  const [title, setTitle]=useState("");
  const [description, setDescription]=useState("");

  const submitHandler=(e)=>{    // submitHandler function called on form submit
    e.preventDefault();

    setTasks([...tasks, {title,description}]);
    
  };
  const deleteTask=(index)=>{     // deleteTask function which is called in Task component
     const filteredArr=tasks.filter((val,i) => {
      return i!==index;    // filteredArr contain all tasks instead of the that index which is being passed to this function. ex. in Task component index 2 is paased to deleteTask function then filteredArry do not contain index 2 element. but contain all the tasks element 
     });
     
     setTasks(filteredArr); // we pass the filteredArr to setTasks
  };

  return (
    <div className='container'>
        <h1>Daily Goals</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='Title' 
          value={title} onChange={(e)=>setTitle(e.target.value)} 
          />
          <textarea placeholder='Description'
          value={description} 
          onChange={(e)=>setDescription(e.target.value)}>
          </textarea>

          <button type="submit">ADD</button>
        </form>

        {tasks.map((item,index)=>(
         <Task      // we have to send data in Task component  
        key={index} 
        title={item.title} 
        description={item.description}
         deleteTask={deleteTask}
         index={index}
        />

        ))}
      
    </div>
  ); 
}

export default Home;
