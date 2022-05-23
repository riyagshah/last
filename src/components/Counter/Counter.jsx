import React from "react";
import styles from "./counter.module.css";
import {useState} from "react"
import AddTask from "../AddTask/AddTask";
// import data1 from "../data/tasks.json"
const Counter = (props) => {
  // sample value to be replaced
  // let count = 0;
  console.log(props.item.count,"jdjd")
  const [count, setCount] = useState(props.item.count);

  const Countminus = () => {
    setCount(count - 1);
  };
  const Countplus = () => {
    setCount(count + 1);
  };
  // console.log(value,"value")
  // const handlecart = () => {
  //   setCount(count + 1);
  // };
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className={styles.plus} onClick={() =>setCount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count} </span>
      <button data-cy="task-counter-decrement-button"  className={styles.minus} onClick={() =>count<=1?setCount(1):setCount(count-1)}>-</button>
   
    </div>
    
  );
};

export default Counter;