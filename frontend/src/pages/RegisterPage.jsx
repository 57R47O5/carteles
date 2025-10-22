import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(form);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Error al registrar el usuario. Verifica los datos.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Crear cuenta</h2>
      <form onSubmit={onSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={form.username}
          onChange={onChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={onChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={onChange}
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Registrarse</button>
      </form>

      <p style={styles.text}>
        ¿Ya tienes una cuenta?{" "}
        <span style={styles.link} onClick={() => navigate("/login")}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
};

// 🎨 Estilos simples (inline para mantenerlo todo en un solo archivo)
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "2rem",
    background: "#1e1e1e",
    borderRadius: "10px",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #444",
    background: "#2a2a2a",
    color: "#fff",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "#ff5252",
    fontSize: "0.9rem",
  },
  text: {
    marginTop: "1rem",
  },
  link: {
    color: "#4CAF50",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Register;
