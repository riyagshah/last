import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import image from "../../assets/remove.svg"
import {useState} from "react"
const Task = (props) => {
  
  const checking=()=>{
    
  props.data.filter((item)=>{
if(item.done=="false")
{
  
}
  })
  }
  const [isCompleted,setIsCompleted]=useState(props.item.done);
// const [Findit,setFindit]=useState()

  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
     <input type="checkbox" data-cy="task-checkbox"  checked={isCompleted}
            onChange={(e)=>{
checking()
              console.log(isCompleted,"is")
                setIsCompleted(e.target.checked);
            }}
            //  onClick={()=>checking()}
            />
    <div className={styles.text1}>
    <span style={{textDecoration:isCompleted ? 'line-through':'none'}}>  {props.item.text}</span>
    
     </div>
      
      <div data-cy="task-text"></div>
      {/* Counter here */}
      <Counter item={props.item}  />
      <button data-cy="task-remove-button"  onClick={()=>  props.onDelete(props.item.id)}> <img src={image} alt="" /></button> 
     
    </li>
  );
};

export default Task;
