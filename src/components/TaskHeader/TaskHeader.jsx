
import styles from "./taskHeader.module.css";

const TaskHeader = ({totalTask,unCompletedTask}) => {
  // sample values to be replaced

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
    <div className={styles.header1}>
    <b data-cy="header-remaining-task">You have {unCompletedTask} of </b>
      <b data-cy="header-total-task">{totalTask} tasks remaining </b>
    </div>

    </div>
  );
};

export default TaskHeader;
