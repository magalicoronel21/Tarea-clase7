<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Gestor de Tareas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/apitasks" class="nav-link" active-class="active">Cargar Tareas (API)</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/combinedtasks" class="nav-link" active-class="active">Vista Combinada</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container my-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>

#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f4f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navbar {
  border-bottom: 3px solid #007bff;
  transition: all 0.3s ease-in-out;
}


.navbar-nav .nav-link {
  font-size: 1.1rem;
  transition: color 0.3s ease, font-weight 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #f8f9fa;
  font-weight: 600;
}

.navbar-nav .nav-link.active {
  font-weight: bold;
  color: #ff5722;
  text-decoration: underline;
}

.container {
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 15px 0;
  font-size: 0.9rem;
  font-weight: 600;
}

.navbar, .container, footer {
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
  }

  .navbar-toggler {
    border-color: #fff;
  }
}

</style>
