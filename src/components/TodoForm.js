import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    addTask({ id: Date.now(), text: taskText, completed: false });
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          id="taskInput"
          placeholder="Add a new task"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TodoForm;
