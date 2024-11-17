<template>
    <div>
      <h2>Tareas desde la API</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.todo }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: []
      };
    },
    mounted() {
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await fetch('https://dummyjson.com/todos');
          const data = await response.json();
          this.tasks = data.todos;
        } catch (error) {
          console.error('Error al cargar las tareas:', error);
        }
      }
    }
  };
  </script>
  