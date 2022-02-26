import livingroom_products from "./livingroom_products"
import diningroom_products from "./diningroom_products"
import bedroom_products from "./bedroom_products"
import workroom_products from "./workroom_products"
import kitchen_products from "./kitchen_products"
import decorations_products from "./decorations_products"

export default {
    all_products:[
      ...livingroom_products.products,
      ...diningroom_products.products,
      ...bedroom_products.products,
      ...workroom_products.products,
      ...kitchen_products.products,
      ...decorations_products.products
   ]
}