<template>
  <div>
    <div id="featured_category">
      <div class="container">
        <div class="title">
          <h5>
            <a href="" class="tp_title">
              Danh mục nổi bật
            </a>
          </h5>
          <div class="group_tab">
            <ul class="tabs">
              <li
                class="tab"
                @click="active = 1"
                :class="{ active: active == 1 }"
              >
                <router-link to="/">Phòng khách</router-link>
              </li>
              <span>|</span>
              <li
                class="tab"
                @click="active = 2"
                :class="{ active: active == 2 }"
              >
                <router-link to="/">Phòng ăn</router-link>
              </li>
              <span>|</span>
              <li
                class="tab"
                @click="active = 3"
                :class="{ active: active == 3 }"
              >
                <router-link to="/">Phòng ngủ</router-link>
              </li>
              <span>|</span>
              <li
                class="tab"
                @click="active = 4"
                :class="{ active: active == 4 }"
              >
                <router-link to="/">Phòng làm việc</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    
   <LivingRoom :active="active"></LivingRoom>
   <DiningRoom :active="active"></DiningRoom>
   <BebRoom :active="active"></BebRoom>
   <WorkRoom :active="active"></WorkRoom>
  </div>
</template>

<script>

// import carousel from 'vue-owl-carousel';
import LivingRoom from './living_room.vue';
import DiningRoom from './dining_room.vue';
import BebRoom from './bedroom.vue';
import WorkRoom from './work_room.vue';

export default {
    components: { 
      // carousel , 
      LivingRoom,
      DiningRoom,
      BebRoom,
      WorkRoom,
     },
  data() {
    return {
      active: 1,
      imgs_banner: [
        { img: "banner_index_bottom_left.jpg" },
        { img: "banner_index_bottom_right.jpg" },
      ],
      products: [
        {
          img: "1.jpg",
          name: "Tủ TV FreeStyle",
          price: "6990000",
        },
        {
          img: "2.jpg",
          name: "Bộ bàn ăn Stefano",
          price: "14950000",
        },

        {
          img: "3.jpg",
          name: "Bộ bàn ăn Edward",
          price: "3990000",
        },
        {
          img: "4.jpg",
          name: "Bàn cafe Cabaret",
          price: "1390000",
        },
        {
          img: "5.jpg",
          name: "Bàn cafe Cabaret",
          price: "1390000",
        },
        {
          img: "6.jpg",
          name: "Ghế bành Bogart",
          price: "5490000",
        },
        {
          img: "7.jpg",
          name: "Ghế bành Connemara",
          price: "7490000",
        },
      ],
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto;
}
a {
  text-decoration: none !important;
}
ul{
  padding: 0;
  margin: 0;
}
h5{
  margin: 0;
}
li {
  list-style: none;
}
#featured_category {
  padding-top: 30px;
}
.title {
  border-bottom: 3px solid #ebebeb;
  display: flex;
  justify-content: space-between;
}
h5::before {
  position: absolute;
  content: "";
  bottom: -5px;
  left: 0;
  right: 0;
}
.tp_title {
  position: relative !important;
  color: #000;
  transition: all ease 0.3s;
  font-weight: 600;
  font-size: 1.2rem;
}
.tp_title:hover {
  color: #459a07;
}
.tp_title::after {
  content: "";
  position: absolute;
  border-bottom: 3px solid #459a07;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 3px;
}
.group_tab {
  display: flex;
}
.tabs {
  display: flex;
}
.tabs::before {
  position: absolute;
  content: "";
  bottom: -5px;
  left: 50%;
  right: 0;
}
.tabs span {
  margin: 0px 10px;
}
.tab {
  position: relative !important;
  color: #000;
  transition: all ease 0.3s;
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}
.tab a {
  text-align: center;
  color: #000;
}
.tab:hover a {
  transition: all 0.3s ease-in-out;
}
.tab::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 3px;
}
.active a {
  color: #ff9f00;
}
.active::after {
  border-bottom: 3px solid #ff9f00;
  transition: all 0.2s ease-in-out;
}


@media only screen and (max-width: 425px) {
  .title {
    display: inline-block;
  }
  .group_tab {
  display: flex;
  margin-top: 10px;
}
}
</style>
