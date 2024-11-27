<template>
  <div class="add-task-container">
    <h1 class="title">Añadir Tarea</h1>
    <div class="input-group">
      <input 
        v-model="newTask" 
        @keyup.enter="addTask" 
        placeholder="Añadir nueva tarea" 
        class="task-input"
      />
      <button @click="addTask" class="add-button">Añadir</button>
    </div>

    <div v-if="tasks.length > 0" class="task-list">
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <span :class="{ completed: task.completed }">{{ task.todo }}</span>
        <div class="action-buttons">
          <button 
            @click="toggleTaskCompletion(task)" 
            class="complete-button"
          >
            {{ task.completed ? 'Desmarcar' : 'Completar' }}
          </button>
          <button 
            @click="deleteTask(task)" 
            class="delete-button"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      newTask: "", // Campo de entrada para la nueva tarea
      tasks: [],   // Lista de tareas locales
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;

      const newTask = {
        todo: this.newTask,
        completed: false,
        id: Date.now(), 
      };

      // Añadir la nueva tarea al inicio de la lista
      this.tasks.unshift(newTask);
      this.newTask = ""; // Limpiar el campo de entrada después de agregar
    },

    // Elimina una tarea específica de la lista
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },

    // Cambia el estado de la tarea entre completada y no completada
    toggleTaskCompletion(task) {
      task.completed = !task.completed;
    },
  },
};
</script>

<style scoped>
.add-task-container {
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #343a40;
  margin-bottom: 15px;
  font-size: 1.8em;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.task-input {
  flex-grow: 1;
  padding: 10px;
  border: 2px solid #6c757d;
  border-radius: 4px;
  font-size: 1em;
}

.add-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #218838;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.completed {
  text-decoration: line-through;
  color: #6c757d;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.complete-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.complete-button:hover {
  background-color: #0056b3;
}

.delete-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>
