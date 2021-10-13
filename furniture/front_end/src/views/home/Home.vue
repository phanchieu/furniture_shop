<template>
 <div id="home">
   <div>
   <Slider/>
   <Introduce/>
   <NewProduct/>
   <FavoriteProduct/>
   <BannerCategory/>
   <NotableProducts/>
   <FeaturedCategory/>
   <CarouselReviews/>
    <News/>
    <Marketer/>
    </div>
 </div>
</template>

<script>
  import Slider from './slider.vue'
  import Introduce from './introduce.vue'
  import NewProduct from './new_product.vue'
  import FavoriteProduct from './favorite_product.vue'
  import BannerCategory from './banner_category.vue'
  import NotableProducts from './notable_products/notable_products.vue'
  import FeaturedCategory from './featured_category/featured_category.vue'
  import CarouselReviews from './carousel_reviews.vue'
  import News from './news.vue'
  import Marketer from './marketer.vue'

  export default {
    name: 'Home',
    components: {
      Slider,
      Introduce,
      NewProduct,
      FavoriteProduct,
      BannerCategory,
      NotableProducts,
      FeaturedCategory,
      CarouselReviews,
      News,
      Marketer,
    },
    // props:['active_category'],
  }
</script>
