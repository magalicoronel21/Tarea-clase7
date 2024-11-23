<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <div class="image-container">
          <img src="@/assets/gestor-tareas.jpeg" alt="Gestor de Tareas" class="img-fluid rounded mb-4" />
        </div>

        <h1 class="card-title">Bienvenido al Gestor de Tareas de Magalí</h1>
        <p class="card-text">Administra tus tareas de manera fácil y eficiente.</p>

        <router-link to="/addtask" class="btn btn-primary">
          <i class="fas fa-plus"></i> Comenzar
        </router-link>

        <div class="social-icons mt-4">
          <a href="https://www.facebook.com" target="_blank" class="social-icon">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" class="social-icon">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: "HomeView"
}
</script>

<style scoped>
.card {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
}

.image-container {
  text-align: center;
}

.img-fluid {
  max-width: 80%; 
  height: auto;
}

.social-icons {
  text-align: center;
}

.social-icon {
  font-size: 2rem;
  margin: 0 10px;
  color: #333;
  text-decoration: none;
}

.social-icon:hover {
  color: #007bff;
}
</style>
