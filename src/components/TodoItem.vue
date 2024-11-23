<template>
    <div>
      <el-col :span="12">
        <el-card class="todo-card" shadow="hover">
          <el-row :gutter="12">
            <el-col :span="21">
              <p>{{ todo.type === 'task' ? todo.taskName : todo.issueName }}</p>
            </el-col>
            <el-col :span="3" class="action-col">
              <el-button @click="handleDone" type="success" icon="el-icon-check" circle></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      todo: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      handleDone() {
        const eventName = this.todo.type === 'task' ? 'remove-todo' : 'close-issue';
        this.$emit(eventName, this.index);
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-card {
    margin: 10px 0;
    padding: 10px;
    transition: box-shadow 0.3s;
  }
  
  .todo-card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  p {
    font-size: 1.1em;
    color: #2c3e50;
    margin: 0;
  }
  
  .action-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  