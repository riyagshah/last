import React from "react";
import styles from "./tasks.module.css";
import image from "../../assets/empty.svg"
import Task from "../Task/Task"
const Tasks = ({data,setunCompletedTask,unCompletedTask,onDelete}) => {
  // console.log(data1)
  // NOTE: do not delete `data-cy` key value pair

  
  if(data.length<1)
  {
  return (
    
    <>
 

       <div data-cy="tasks-empty" className={styles.empty}>
       <img src={image} alt="No Items in the TodoList" />
       <h3 class="h3tag">Empty List</h3>
<p className="ptag">Add a new task above</p>
      </div>  
      </>
  );
  }
else
{ 
  return (
  
      <ul data-cy="tasks" className={styles.tasks}>
      { data.map((item)=>(
    
      <Task key={item.id} onDelete={onDelete} item={item} data={data}  setunCompletedTask={setunCompletedTask} unCompletedTask={unCompletedTask}/>
       ))}
    
     </ul>
);
}
  
  
};

export default Tasks;
