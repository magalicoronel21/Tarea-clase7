<template>
    <div>
      <h2>Tareas Pendientes</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="(task, index) in tasks" :key="index">
          {{ task }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tasks'], 
  };
  </script>
  