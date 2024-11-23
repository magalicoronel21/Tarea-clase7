<template>
  <div>
    <h2>Tareas desde la API</h2>
    <!-- Lista dinámica con datos obtenidos de la API -->
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Array para almacenar las tareas desde la API
      tasks: []
    };
  },
  // El hook mounted se ejecuta después de que el componente se monta en el DOM
  mounted() {
    this.fetchTasks(); // Llama a la función para cargar los datos
  },
  methods: {
    async fetchTasks() {
      try {
        // Realiza una solicitud a la API
        const response = await fetch('https://dummyjson.com/todos');
        // Convierte la respuesta en un objeto JSON
        const data = await response.json();
        // Asigna las tareas al array tasks
        this.tasks = data.todos;
      } catch (error) {
        // Manejo de errores
        console.error('Error al cargar las tareas:', error);
      }
    }
  }
};
</script>