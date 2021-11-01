<template>
  <div>
    <div id="Breadcrumbs" :class="{hidden_bredcrums:items[0].name == 'Home'}">
      <div class="container">
        <div class="Breadcrumbs">
          <router-link to="/">Trang chủ</router-link> 
          <div class="item"  v-for="(item,index) in items" :key="index">
          <span class="icon"><i class="fas fa-angle-right"></i><i class="fas fa-angle-right"></i></span>
            <router-link :to="item.path">{{ item.name }}</router-link>
          </div>
        </div>
        {{test()}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:["items"],
  methods:{
    test(){
      console.log(this.items[0].name)
    }
  },
  created(){
    // this.test();
  }
}
</script>

<style scoped>
.container{
  max-width: 1140px;
}
.hidden_bredcrums{
  display: none;
}
a{
  text-decoration: none;
  color: black;
}
#Breadcrumbs{
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.Breadcrumbs{
  padding: 20px 0px;
  display: flex;
}
.Breadcrumbs a:hover{
  color: #459a07;
  transition: all .3s ease-in-out;
}
.item .icon{
  padding: 0 5px;
  font-size: 14px;
}
.item:last-child a{
  font-weight: 600;
  color: black;
  cursor: auto;
}
</style>