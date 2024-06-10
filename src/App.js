import React, { useState } from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = taskId => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
      <div className="filters">
        <button className="filter" onClick={() => setFilter('all')}>
          All
        </button>
        <button className="filter" onClick={() => setFilter('completed')}>
          Completed
        </button>
        <button className="filter" onClick={() => setFilter('incomplete')}>
          Incomplete
        </button>
      </div>
    </div>
  );
}

export default App;
