<template>
  <div>
    <div class="news">
      <div class="container">
      <h1>TIN TỨC</h1>
        <b-row>
          <div class="sidebar_news col-4">
            <Sidebar-news/>
          </div>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarNews from './sidebar_news.vue'
export default {
  components: { SidebarNews },

}
</script>

<style>

</style>