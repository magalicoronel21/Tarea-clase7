<template>
    <div>
      <h2>Agregar Tarea</h2>
      <form @submit.prevent="addTask">
        <div class="mb-3">
          <label for="task" class="form-label">Nueva Tarea</label>
          <input type="text" class="form-control" v-model="taskName" id="task" placeholder="Escribe tu tarea aquí" required />
        </div>
        <button type="submit" class="btn btn-primary">Agregar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        taskName: '', 
      };
    },
    methods: {
      addTask() {
        
        this.$emit('add-task', this.taskName);
        this.taskName = ''; 
      },
    },
  };
  </script>
  