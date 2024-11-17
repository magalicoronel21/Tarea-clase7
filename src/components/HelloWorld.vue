<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Consulta la documentación oficial para configurar o personalizar este proyecto:</p>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vue.js Documentation</a></li>
      <li><a href="https://v3.vuejs.org/guide/introduction.html" target="_blank">Vue 3 Guide</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  max-width: 700px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: 600;
}

p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

li {
  margin: 10px 0;
  font-size: 1.1em;
}

a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
}

a:hover {
  color: #333;
  transform: scale(1.05);
}
</style>
