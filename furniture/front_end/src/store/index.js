import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// import state from './state/index.js';
// import getters from './getters/index.js';
// import mutations from './mutations/index.js';
// import actions from './actions/index.js';
// import modules from './modules/index.js';

//sate
import viewProduct from './state/viewProduct'
import news from './state/news'
import viewNews from './state/viewNews'
import all_product from './state/all_product'
import ProductsLivingRoom from './state/livingroom_products'
import ProductsDiningRoom from './state/diningroom_products';
import ProductsBedRoom from './state/bedroom_products';
import ProductsWorkroom from './state/workroom_products';
import ProductsKitchen from './state/kitchen_products';
import productsDecoration from './state/decorations_products';
export default new Vuex.Store({
  state:{
    viewProduct,
    cart:[],
    news,
    viewNews,
    all_product,
    user_login:false,
    keyword_search:'',
    fil_color:[],
    fil_size:[],
    fil_material:[],
    info_prd_order:[],
    ProductsLivingRoom,
    ProductsDiningRoom,
    ProductsBedRoom,
    ProductsWorkroom,
    ProductsKitchen,
    productsDecoration,
    category_fil:'Phòng khách',
    related_products:[],
    add_product:'',
    test:1,
  },
  // state,
  // getters,
  getters:{
    test_getter(state){
      return state.test
    },
    dataNews(state){
      return state.news
    },
    viewNews(state){
      return state.viewNews
    },
    product(state){
      return state.viewProduct
    },
    cart(state){
      return state.cart
    },
    getter_check_login(state){
      return state.user_login
    },
    all_prd(state){
      return state.all_product
    },
    search_product(state){
      return state.keyword_search
    },
    fil_color(state){
      return state.fil_color
    },
    fil_size(state){
      return state.fil_size
    },
    fil_material(state){
      return state.fil_material
    },
    ProductsLivingRoom(state){
      return state.ProductsLivingRoom
    },
    ProductsDiningRoom(state){
      return state.ProductsDiningRoom
    },
    ProductsBedRoom(state){
      return state.ProductsBedRoom
    },
    ProductsWorkroom(state){
      return  state.ProductsWorkroom
    },
    ProductsKitchen(state){
      return state.ProductsKitchen
    },
    productsDecoration(state){
      return state.productsDecoration
    },
    info_prd_order(state){
      return state.info_prd_order
    },
    viewProduct_getter(state){
      return state.viewProduct
    },
    related_products_getter(state){
      return state.related_products
    },
    add_product(state){
      return state.add_product
    }
  },
  mutations:{
    test_mutation(state){
      state.test ++
    },
    to_viewNews(state,view){
      state.viewNews = view
    },
    viewProduct(state,view){
      state.viewProduct = view
      // console.log(state.viewProduct)
    },
    updateCart(state,data){
      let check = state.cart.find(product=> product.name === data.name && product.size === data.size && product.color === data.color)
      if(check){
        check.quantity_in_cart += data.quantity
      }
      else{
        state.cart.push(data)
      }
    },
    delete_product_cart(state,product){
      var remove = state.cart
      state.cart.slice(remove,product)
    },
    order_success(state){
      var products = state.cart
      products.splice(0);
    //  console.log(state.cart)
    },
    check_login(state){
      var check =localStorage.getItem('login')
      if(check == null){
        state.user_login = false
        // console.log(state.user_login)
      }else if( JSON.parse(check) == true ){
        state.user_login = true
        // console.log(state.user_login)
      }
    },
    search_prd(state,keyword){
      state.keyword_search = keyword
      // console.log(state.keyword_search)
    },
    filter_colors(state,color){
      state.fil_color = color
    },
    filter_sizes(state,size){
      state.fil_size = size
    },
    filter_materials(state,material){
      state.fil_material = material
    },
    push_info_prd_order(state,data_prd){
      state.info_prd_order.push(data_prd)
    },
    relatedProducts_mutations(state){
      if(state.viewProduct[0].length != 0){
        state.category_fil = state.viewProduct[0].category
        switch(state.category_fil){
          case 'Phòng khách':
            state.related_products = [...state.ProductsLivingRoom.products]
            break;
          case 'Phòng ăn':
            state.related_products = [...state.ProductsDiningRoom.products]
            break;
          case 'Phòng làm việc':
            state.related_products = [...state.ProductsWorkroom.products]
            break;
          case 'Phòng ngủ':
            state.related_products = [...state.ProductsBedRoom.products]
            break;
          case 'Phòng bếp':
            state.related_products = [...state.ProductsKitchen.products]
            break;
          case 'Đồ trang trí':
            state.related_products = [...state.productsDecoration.products]
            break;
        }
      }
    },
  },
  actions:{

  },
  // modules,
});
