import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyCj3K4nwf4qA8T4Dn_cyK2aCpZzWmiAr-k",
  authDomain: "personal-270815.firebaseapp.com",
  databaseURL: "https://personal-270815.firebaseio.com",
  projectId: "personal-270815",
  storageBucket: "personal-270815.appspot.com",
  messagingSenderId: "882705809342",
  appId: "1:882705809342:web:a4b03595b4991efee383ef"
}

firebase.initializeApp(config)

export const db = firebase.firestore()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
