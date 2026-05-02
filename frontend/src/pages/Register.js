import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        { name, email, password }
      );

      alert("Registered Successfully");
      window.location.href = "/";
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={register}>Register</button>
    </div>
  );
}