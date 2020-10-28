import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase'
// import dotenv from 'dotenv'

Vue.config.productionTip = false

// require('dotenv').config({ path: './../.env' })
console.log(process.env)
const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID
}

firebase.initializeApp(config)

export const db = firebase.firestore()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
