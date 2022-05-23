import React from "react";
import TaskHeader from './TaskHeader/TaskHeader'
import styles from "./taskApp.module.css";
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import {useState} from "react";
import data1 from "../data/tasks.json"
import Task from "./Task/Task";
const TaskApp = () => {
  
  // NOTE: do not delete `data-cy` key value pair
  const onDelete=(id)=>{
    let newTodos=data.filter((todo)=>todo.id!==id);
    setData(newTodos)
}
// const [countt,setcountt]=useState(0)
//   data1.filter((item)=>{
//     if(item.done==false)
//     { 
// setcountt(countt)
//     }

//   })
  const [data,setData]=useState(data1)
  const [value,setValue]=useState("")
  const [unCompletedTask,setunCompletedTask]=useState(data.length);
// const [unCompletedTask,setunCompletedTask]=usestate(0)
// const [totalTask, settotalTask] =usestate(0)
// {data.map((item)=>
//   (
//    
//   ))}


const  totalTask=0;
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader unCompletedTask={unCompletedTask} totalTask={data.length}/>
      <AddTask data={data} setData={setData} value={value}  setValue={setValue}/>
      <Tasks data={data} unCompletedTask={unCompletedTask} setunCompletedTask={setunCompletedTask} onDelete={onDelete}/>

    </div>
  );
};

export default TaskApp;