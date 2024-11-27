<template>
  <div class="container">
    <div class="row justify-content-center my-2">
      <div class="col-12 col-md-6">
        <div class="card shadow-sm todo-card">
          <div class="card-body d-flex align-items-center justify-content-between">
            <!-- Nombre de la tarea o issue -->
            <p class="mb-0 text-truncate flex-grow-1 me-3">
              {{ todo.type === 'task' ? todo.taskName : todo.issueName }}
            </p>
            <!-- Botón Completado -->
            <button 
              class="btn btn-success btn-sm rounded-circle me-2"
              @click="handleDone"
              title="Mark as Completed"
            >
              <i class="bi bi-check-lg"></i>
            </button>
            <!-- Botón Eliminar -->
            <button 
              class="btn btn-danger btn-sm rounded-circle"
              @click="handleRemove"
              title="Remove Item"
            >
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
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
      this.$emit('mark-completed', this.index);
    },
    handleRemove() {
      this.$emit('remove-item', this.index);
    }
  }
};
</script>

<style scoped>
.todo-card {
  margin: 10px 0;
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

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
