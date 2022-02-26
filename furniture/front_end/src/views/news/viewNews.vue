<template>
<div>
  <div id="read_news">
      <div class="container">
       <b-row>
          <!-- <div class="sidebar_news col-0 col-lg-4">
          <SidebarNews/>
        </div> -->
        <div class="col-12 col-md-12 col-lg-12">
          <div class="view_news" v-for="(n,i) in news" :key="i">
          <div class="introduce">
          <div class="title_introduce">
            <h2>{{ n.title_introduce }}</h2>
            <p>{{ n.content_introduce }}</p>
          </div>
        </div>
          <ul>
            <li v-for="(desc,i) in n.desciption" :key="i">
              <div class="decs">
            <div class="title">
              <h3> <strong>{{ desc.title }}</strong> </h3>
            </div>
            <div class="img">
              <img :src="require(`@/${desc.img}`)" alt="">
            </div>
            <div class="content">
              <p>{{ desc.content }}</p>
            </div>
          </div>
            </li>
          </ul>
        </div>
        </div>
       </b-row>
      </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Footer from '../../components/footer.vue'
// import SidebarNews from './sidebar_news.vue'
export default {
  components: 
  { 
    // SidebarNews,
    Footer,
  },
  data(){
    return{
      news:[],
    }
  },
  methods:{
    ...mapGetters([
      'viewNews'
    ]),
    getNews(){
      this.news = this.viewNews()
      // console.log(this.news)
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
  created(){
    this.getNews()
    this.scrollToTop()
  }
}
</script>

<style scoped>
#read_news{
  padding: 30px 0;
}
.container{
  max-width: 1140px;
}
.title_introduce h2 {
  font-weight: 700;
}
ul{
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
p{
  font-size: 14px;
}
.title h3{
  color: #B22222;
}
.img img{
  width: 100%;
}
@media only screen and (max-width:768px) {
  .sidebar_news{
    display: none;
  }
  
}
</style>