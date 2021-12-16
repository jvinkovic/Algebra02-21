import React, { useState } from 'react';

import Input from './Input';
import TaskList from './TaskList';

// task
// { id: 2, title: 'neki task', completed: false }

let lastId = 0;

const ALL = 'ALL';
const ACTIVE = 'ACTIVE';
const COMPLETED = 'COMPLETED';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(ALL);

  const showAll = () => {
    setFilter(ALL);
  }

  const showActive = () => {
    setFilter(ACTIVE);
  }

  const showCompleted = () => {
    setFilter(COMPLETED);
  }

  const handleTaskAdd = (taskText) => {
    lastId++;
    const newTask = { id: lastId, title: taskText, completed: false };
    setTasks([...tasks, newTask]);
  }

  const clearCompleted = () => {
    const newTasksList = tasks.filter(t => t.completed === false);
    setTasks(newTasksList);
  }

  const deleteTask = (taskId) => {
    const newTasksList = tasks.filter(t => t.id !== taskId);
    setTasks(newTasksList);
  }

  const toggleCompleteTask = (taskId) => {
    const tasksCopy = [...tasks];
    const task = tasksCopy.find(t => t.id === taskId);
    if(task.completed) {
        task.completed = false;
    }else {
      task.completed = true;
    }
    // druga 2 načina za toggle
    // task.completed = (task.completed ? false : true);
    // task.completed = !task.completed;

    setTasks(tasksCopy);
  }

  const getFiltered = () => {
    if(filter === ALL) {
      return tasks;
    }

    if (filter === ACTIVE) {
      return tasks.filter(t => t.completed === false);
    }

    if (filter === COMPLETED) {
      return tasks.filter(t => t.completed);
    }
  }

  const shouldShowCompleted = () => { 
    return tasks.find(t => t.completed);
  }

  return (
    <div>
      <h1>T O D O</h1>
      <section>
        <button onClick={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompleted}>Completed</button>
      </section>
      <Input onNewTask={handleTaskAdd} />
      <TaskList taskovi={getFiltered()} onDelete={deleteTask} onCompleteToggle={toggleCompleteTask} />
      {shouldShowCompleted() && (<div onClick={clearCompleted}>Clear completed</div>)}
    </div>
  );
}

export default App;
