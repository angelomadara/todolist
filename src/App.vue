<template>
  <div id="app" class="home">
    <img src="@/assets/logo.png" alt="Vue Logo" id="vue-logo">
    <div class="title">
      What do I need to do today?
    </div>
    <input v-model="myTodo" type="text">
    <button @click="addToDo">Add</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: function() {
    return {
      myTodo: ''
    }
  },
  components: {
    // HelloWorld
  },
  mothods:{
    addToDo : function(){
      console.log(this.myTodo)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
