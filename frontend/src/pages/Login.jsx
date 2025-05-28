import React, { useState } from "react";
// Eliminamos la importación de Login.css
// import "./Login.css"; 
import { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // importamos el contexto de autenticación
  const { Login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    } else if (Login(email, password)) {
      // utilizamos la función Login del contexto de autenticación
      toast.success("Inicio de sesión exitoso.");
      navigate("/dashboard");
    } else {
      toast.error("Credenciales incorrectas. Por favor, intenta de nuevo.");
      return;
    }
  };

  return (
    // Contenedor principal: ocupa toda la altura, centra el contenido y tiene un fondo claro
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Formulario de login: con fondo blanco, sombra, esquinas redondeadas y tamaño limitado */}
      <form
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Iniciar Sesión
        </h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ejemplo@correo.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          />
        </div>
        
        {/* Botón de envío con estilo moderno */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Entrar
        </button>
      </form>

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Login;