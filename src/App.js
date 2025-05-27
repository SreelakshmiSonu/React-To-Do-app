import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const handleToggle = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>
      <div style={styles.inputRow}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Add a task"
        />
        <button onClick={handleAdd} style={styles.addButton}>Add</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.item}>
            <span
              onClick={() => handleToggle(index)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "2rem auto", fontFamily: "Arial" },
  inputRow: { display: "flex", gap: "0.5rem" },
  input: { flex: 1, padding: "0.5rem" },
  addButton: { padding: "0.5rem 1rem" },
  list: { listStyle: "none", padding: 0, marginTop: "1rem" },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
    alignItems: "center",
  },
  deleteButton: { background: "none", border: "none", cursor: "pointer" },
};

export default TodoApp;
