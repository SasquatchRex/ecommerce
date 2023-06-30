import { createRouter, createWebHistory } from 'vue-router'
import ProductCartPageView from '../views/cartpage.vue'
import ProductDetailView from '../views/productdetailpage.vue'
import ProductsPageView from '../views/productspage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path:'/' || '/products',
    name:'Products',
    component:ProductsPageView
  },
  {
    path:'/products/:id',
    name:'ProductDetail',
    component:ProductDetailView
  },
  {
    path:'/cart',
    name:'Cart',
    component:ProductCartPageView
  },
 
  // {
  //   path:'/',
  //   redirect:'/products',
  // },
  {
    path:'/:notFound',
    name:'PageNotFound',
    component:NotFoundPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
