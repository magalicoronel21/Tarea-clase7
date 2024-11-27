<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">Vista Combinada de Tareas</h2>

    <!-- Tareas desde la API -->
    <div class="mb-4">
      <h3 class="mb-3">Tareas desde la API</h3>
      <ul class="list-group">
        <template v-if="apiTasks.length === 0">
          <li class="list-group-item text-muted text-center">
            No hay tareas disponibles.
          </li>
        </template>

        <!-- Mostrar tareas -->
        <template v-else>
          <li
            v-for="task in apiTasks"
            :key="task.id"
            class="list-group-item d-flex justify-content-between align-items-center"
            :class="{ 'bg-success text-white': task.completed }"
          >
            <div>
              <input 
                type="checkbox" 
                v-model="task.completed" 
                @change="toggleCompletion(task)" 
                :checked="task.completed"
              />
              {{ task.todo }}
            </div>
            <button class="btn btn-danger btn-sm" @click="removeTask(task)">Eliminar</button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiTasks: [],   // Tareas de la API
    };
  },
  mounted() {
    this.fetchTasks();  // Cargar tareas de la API al iniciar
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await fetch('https://dummyjson.com/todos');  // Llamada a la API
        const data = await response.json();
        this.apiTasks = data.todos;  // Asignar las tareas de la API
      } catch (error) {
        console.error('Error al cargar las tareas desde la API:', error);
      }
    },
    toggleCompletion(task) {
      // Cambiar el estado de completado
      task.completed = !task.completed;
    },
    removeTask(task) {
      // Eliminar la tarea de la lista
      this.apiTasks = this.apiTasks.filter(t => t.id !== task.id);
    }
  },
};
</script>

<style scoped>
/* Estilo para tareas completadas */
.bg-success {
  background-color: #28a745 !important;
}
.text-white {
  color: white !important;
}
</style>
