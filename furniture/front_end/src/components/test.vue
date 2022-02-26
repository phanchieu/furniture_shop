<template>
   <div>
    <div class="test">
      <div class="store">
        <div class="item" v-for="(item,i) in items" :key="i">
          <ul>
            <li @click="add(item)">{{ item.name }}</li>
          </ul>
        </div>
      </div>
      <div class="get_item" v-for="(item,i) in get_item" :key="i">
        <ul>
          <li @click="add_item(item)">{{ item.name }}</li>
        </ul>
      </div>
      <div class="new_item" v-for="(item,i) in new_item" :key="i">
        <ul>
          <li>{{item.name}}</li>
        </ul>
      </div>
      <div class="delete_item"><button @click="delete_item()">delete all</button></div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'MyComponent',
    components: {  },
    data(){
      return {
        get_item:[],
        new_item:[],
        items:[
          {
            n:1,
            name:'mot',
          },
          {
            n:2,
            name:'hai',
          },
          {
            n:3,
            name:'ba',
          },
          {
            n:4,
            name:'bon',
          },
        ],
      }
    },
    methods:{
      add(item){
        this.get_item.push(item)
      },
      add_item(item){
        this.new_item.push(item)
      },
      delete_item(){
        this.get_item.splice(0)
      }
    }
  }
</script> 

<style scoped>
.get_item {
  padding: 10px;
  border: 1px solid;
  margin: 10px;
}
</style>