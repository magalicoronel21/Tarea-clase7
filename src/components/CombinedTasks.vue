<template>
    <div>
      <h2>Vista Combinada de Tareas</h2>
      <h3>Tareas desde la API</h3>
      <ul>
        <li v-for="task in apiTasks" :key="task.id">{{ task.todo }}</li>
      </ul>
  
      <h3>Agregar Nueva Tarea</h3>
      <form @submit.prevent="addTask">
        <input type="text" v-model="newTask" placeholder="Ingrese una tarea" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        apiTasks: [],
        newTask: ''
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
          this.apiTasks = data.todos;
        } catch (error) {
          console.error('Error al cargar las tareas desde la API:', error);
        }
      },
      addTask() {
        if (this.newTask.trim()) {
          this.apiTasks.push({ id: Date.now(), todo: this.newTask });
          this.newTask = ''; 
        }
      }
    }
  };
  </script>
  