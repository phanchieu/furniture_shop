<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Trang chủ',
            to:'/'
          },
          {
            text: 'Login',
            to: '/Login'
          },
          {
            text: 'Login',
            active: true
          }
        ]
      }
    }
  }
</script>