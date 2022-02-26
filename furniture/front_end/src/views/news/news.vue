<template>
  <div>
    <div id="news">
      <div class="container">
      <h1>TIN TỨC</h1>
        <b-row>
          <div class="sidebar_news col-4">
            <Sidebar-news/>
          </div>
          <div class="news col-12 col-lg-8">
            <Main/>
          </div>
        </b-row>
      </div>
    </div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/footer.vue'
import Main from './main.vue'
import SidebarNews from './sidebar_news.vue'
export default {
  components: {
    SidebarNews,
    Footer, 
    Main
    },
  data(){
    return{
    }
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
  created(){
    this.scrollToTop();
  }

}
</script>

<style scoped>
#news{
  padding: 30px 0px;
}
h1{
  font-weight: 700;
  font-size: 2rem;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.container{
  max-width: 1140px;
}

@media only screen and (max-width: 800px) {
  .sidebar_news{
    display: none;
  }
  
}
</style>