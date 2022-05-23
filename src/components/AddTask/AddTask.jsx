import React from "react";
import styles from "./addTask.module.css";
import {useState} from "react"
const AddTask = ({data,setData,value,setValue}) => {
  // NOTE: do not delete `data-cy` key value pair
function check(value){
data.filter((item)=>{
  if(item.text==value) 
 return true
  else
  { return false}
})
}
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" className={styles.input1} value={value}type="text" placeholder="Add task..." onChange={(e)=>{setValue(e.target.value)}} />
      <button data-cy="add-task-button"  disabled={!value}  className={styles.addbtn}onClick={()=>{check(value) ? setValue("") :   setData([...data,{id:Date.now(),text:value,done:false,count:1}], setValue(""))}} 
    
     >+</button>
    </div>
  );
};

export default AddTask;