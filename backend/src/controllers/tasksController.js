import taskModel from "../models/tasks.js"; // Modelo de tareas

const tasksController = {};

// Obtener todas las tareas
tasksController.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las tareas", error });
  }
};

// Crear una nueva tarea
tasksController.insertTask = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const newTask = new taskModel({
      title,
      description,
      completed: completed || false, // Si no se pasa, por defecto será false
    });

    await newTask.save();
    res.json({ message: "Tarea guardada con éxito", task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar la tarea", error });
  }
};

// Actualizar una tarea
tasksController.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, completed } = req.body;

  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      taskId,
      { title, description, completed },
      { new: true } // Retorna el documento actualizado
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json({ message: "Tarea actualizada", task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la tarea", error });
  }
};

// Eliminar una tarea
tasksController.deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deletedTask = await taskModel.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json({ message: "Tarea eliminada", task: deletedTask });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la tarea", error });
  }
};

export default tasksController;
