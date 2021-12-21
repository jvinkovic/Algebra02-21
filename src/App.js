import React, { useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Input from './Input';
import TaskList from './TaskList';

import './App.css';

// task
// { id: 2, title: 'neki task', completed: false }

let lastId = 0;

function App() {
  const [tasks, setTasks] = useState([]);

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

  const shouldShowCompleted = () => { 
    return tasks.find(t => t.completed);
  }

  return (
    <div>
      <h1>T O D O</h1>
      <section>
        <NavLink to='/all' className={isActive => isActive ? "selected" : ""}>All</NavLink>
        <NavLink to='/active' className={isActive => isActive ? "selected" : ""}>Active</NavLink>
        <NavLink to='/completed' className={isActive => isActive ? "selected" : ""}>Completed</NavLink>
      </section>
      <Input onNewTask={handleTaskAdd} />

      <Switch>
        <Route path='/active'>
          <TaskList taskovi={tasks.filter(t => !t.completed)} onDelete={deleteTask} onCompleteToggle={toggleCompleteTask} />
        </Route>

        <Route path='/completed'>
          <TaskList taskovi={tasks.filter(t => t.completed)} onDelete={deleteTask} onCompleteToggle={toggleCompleteTask} />
        </Route>
        
        <Route path='/'>
          <TaskList taskovi={tasks} onDelete={deleteTask} onCompleteToggle={toggleCompleteTask} />
        </Route>
      </Switch>

      {shouldShowCompleted() && (<div onClick={clearCompleted}>Clear completed</div>)}
    </div>
  );
}

export default App;
