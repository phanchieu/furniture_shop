<template>
  <div id="app">
    {{check_login()}}
    <Header/>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import Header from './components/header.vue'
export default {
  name:'app',
  components: {
    Header,
    },
    methods:{
      ...mapMutations([
        'check_login'
      ]),
      checkLogin(){
        if(localStorage.getItem('login') == null){
          var user_login = false
          localStorage.setItem('login', JSON.stringify(user_login));
        }
      }
    },
    created(){
      this.checkLogin()
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
