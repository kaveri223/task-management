import React, { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [task, setTask] = useState({ title: '', description: '', status: 'pending' });

  const addOrUpdateTask = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { ...task, updatedAt: new Date() };
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { ...task, createdAt: new Date(), updatedAt: new Date() }]);
    }
    setTask({ title: '', description: '', status: 'pending' });
    setShowForm(false);
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = updatedTasks[index].status === 'pending' ? 'completed' : 'pending';
    updatedTasks[index].updatedAt = new Date();
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', borderBottom: '2px solid #ccc' }}>
        <h2 style={{ margin: 0, textAlign: 'center', flex: 1 }}>Task Management</h2>
        <button onClick={() => { setShowForm(true); setEditIndex(null); }} style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' }}>
          New Task
        </button>
      </header>

      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addOrUpdateTask();
          }}
          style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            margin: '20px 0',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h3>{editIndex !== null ? 'Edit Task' : 'Add New Task'}</h3>
          <input
            type="text"
            placeholder="Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }}
          />
          <textarea
            placeholder="Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }}
          />
          <select
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>
            {editIndex !== null ? 'Update Task' : 'Add Task'}
          </button>
        </form>
      )}

      {!showForm && tasks.length > 0 && (
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Title</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Description</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Status</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Created At</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Updated At</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{t.title}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{t.description}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{t.status}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{t.createdAt.toLocaleString()}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>{t.updatedAt.toLocaleString()}</td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  <button onClick={() => toggleStatus(index)} style={{ marginRight: '5px' }}>Toggle Status</button>
                  <button onClick={() => editTask(index)} style={{ marginRight: '5px' }}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tasks;
