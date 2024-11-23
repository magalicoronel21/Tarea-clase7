<template>
  <div class="about container text-center">
    <h1 class="my-4">
      <span class="text-primary">Hola, soy Maga</span> y este es mi <strong>Gestor de Tareas</strong>
    </h1>
    
    <img src="@/assets/gestor-tareas.jpeg" alt="Gestor de Tareas" class="img-fluid rounded mb-4" width="400">
    
    <p class="lead">
      En esta aplicación, podrás organizar tus actividades de estudio de manera eficiente.
      <br>
      ¡Haz que cada tarea se convierta en un paso hacia tu éxito!
    </p>
    
    <div class="social-icons mt-4">
      <a href="https://twitter.com" target="_blank" class="me-3">
        <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" width="30" />
      </a>
      <a href="https://linkedin.com" target="_blank" class="me-3">
        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" width="30" />
      </a>
      <a href="https://github.com" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" width="30" />
      </a>
    </div>

  </div>
</template>

<style scoped>
.about {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #343a40;
}

img.img-fluid {
  max-width: 100%;
  height: auto;
}

.social-icons a {
  text-decoration: none;
}

footer {
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
