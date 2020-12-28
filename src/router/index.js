
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 解决vue-rouer3.0以上版本重复点击报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const RouteView = {
  name: "RouteView",
  render: (h) => h('router-view')
}

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
});

export default router;
