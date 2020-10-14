<template>
  <div id="app" class="home">
    <div class="title">
      What do I need to do today?
    </div>
    <input v-model="myTodo" type="text">
    <button @click="addToDo()">Add</button>
    <div v-if="errors !== ''" id="errors">{{ errors }}</div>

    <ul v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
      <li v-for="item in this.$store.getters.getItems" :key="item.id">
        {{ item.title }}
        <button @click="removeTodo(item.id)" data-id=''>x </button>
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { db } from "@/main";

export default {
  beforeCreate(){
    this.items = this.$store.dispatch('setItems')
  },
  name: 'App',
  data(){
    return {
      myTodo: '',
      errors: '',
      items : null,
    }
  },
  created(){
    console.log(this.items)
  },
  methods:{
    addToDo(){
      this.errors = ''
      if(this.myTodo !== ''){
        db.collection('items').add({
          title: this.myTodo,
          created_at: Date.now()
        }).then(response => {
          if(response){
            this.myTodo = ''
          }
        }).catch(error =>{
          this.error = error
        })
      }else{
        this.errors = "Write what you want to do"
      }
    },
    removeTodo(id){
      if(id){
        db.collection('items').doc(id).delete().then(response =>{
          if(response) alert('item is deleted')
        }).catch(error => {
          this.errors = error
        })
      }
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
