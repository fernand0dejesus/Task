// Importo la librería de Express
import express from "express";
import taskRoutes from "./src/routes/task.js"; // Ruta de tareas
import cookieParser from "cookie-parser";

// Creo una constante que es igual a la librería que importé
const app = express();

// Que acepte datos en JSON
app.use(express.json());

// Que Postman acepte guardar cookies
app.use(cookieParser());

// Definir las rutas para las tareas
app.use("/api/tasks", taskRoutes); // Solo la ruta para las tareas


// Exporto la constante para poder usar express en otros archivos
export default app;
