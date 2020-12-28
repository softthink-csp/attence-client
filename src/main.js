import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Button
       ,Layout
       ,Form
       ,Input
       ,Checkbox
       ,Menu
       ,Icon
       ,Table
       ,Select
       ,DatePicker} from "ant-design-vue";

Vue.use(Button);
Vue.use(Layout);
Vue.use(Form);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Table);
Vue.use(Select);
Vue.use(DatePicker);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
      next();
  } else {
      if (store.state.userName) {
          next();
      } else {
          next('/login');
      }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
