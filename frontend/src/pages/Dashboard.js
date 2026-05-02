import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/tasks",
      {
        headers: { Authorization: token }
      }
    );
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      {
        headers: { Authorization: token }
      }
    );
    setTitle("");
    fetchTasks();
  };

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:5000/api/tasks/${id}`,
      { status },
      {
        headers: { Authorization: token }
      }
    );
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add</button>

      <div>
        {tasks.map((t) => (
          <div key={t._id} style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px"
          }}>
            <h4>{t.title}</h4>
            <p>Status: {t.status}</p>

            <button onClick={() => updateStatus(t._id, "pending")}>
              Pending
            </button>
            <button onClick={() => updateStatus(t._id, "in-progress")}>
              In Progress
            </button>
            <button onClick={() => updateStatus(t._id, "done")}>
              Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}