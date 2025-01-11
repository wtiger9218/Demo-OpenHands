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
      const newTask = {
        text: taskInput.trim(),
        dueDate: dueDate || null
      };
      setTasks([...tasks, newTask]);
      setTasks([...tasks, taskInput.trim()]);
      setDueDate('');
      setTaskInput('');
    }
  };
    setTasks(tasks.filter((_, i) => i !== index));
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
            <span data-testid="task-text">{task.text}</span>
            {task.dueDate && (
              <span style={{ marginLeft: '10px', color: '#666' }}>
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
            <button onClick={() => removeTask(index)}>Remove</button>
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      
        
      
    </div>
  );
}

export default App;
