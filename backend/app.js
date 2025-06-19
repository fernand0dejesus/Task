// Importaciones
import express from "express";
import taskRoutes from "./src/routes/task.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

// Crear app
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api/tasks", taskRoutes);

// Carga del archivo Swagger con validación
let swaggerDocument;
try {
  const swaggerPath = path.resolve("./docu.json"); // Asegurarse de usar .json
  const raw = fs.readFileSync(swaggerPath, "utf-8");
  swaggerDocument = JSON.parse(raw);
} catch (err) {
  console.error(` Error cargando Swagger: ${err.message}`);
  process.exit(1); // Detener la app si el JSON no carga
}

// Monta la documentación
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Exportar app
export default app;
