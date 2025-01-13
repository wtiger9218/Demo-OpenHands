import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        text: taskInput.trim(),
        dueDate: dueDate || null
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
      setDueDate('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <h1>TODO List</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="date"
          data-testid="date-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            {task.dueDate && (
              <span style={{ marginLeft: '10px', color: '#666' }}>
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
            <button onClick={() => removeTask(index)} data-testid={`remove-${index}`}>Remove</button>
          </li>
        ))}
      </ul>
      
        
      
    </div>
  );
}

export default App;
