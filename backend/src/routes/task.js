import express from "express";
import tasksController from "../controllers/tasksController.js"; // Asegúrate de tener la ruta correcta del controlador

const router = express.Router();

// Rutas para el CRUD de tareas
router.route("/")
  .get(tasksController.getAllTasks) // Obtener todas las tareas
  .post(tasksController.insertTask); // Crear una nueva tarea

router.route("/:id")
  .put(tasksController.updateTask) // Actualizar una tarea específica
  .delete(tasksController.deleteTask); // Eliminar una tarea específica

export default router;
