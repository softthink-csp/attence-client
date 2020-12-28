<template>
  <div id="login">
    <a-layout id="content">
      <a-layout-header class="header-layout">员工打卡信息管理系统</a-layout-header>
      <a-layout-content class="body-layout">
        <a-form ref="form" :form="form" :label-col="{ span: 7 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
          <a-form-item label="用户ID" >
            <a-input v-model="form.username"/>
          </a-form-item>
          <a-form-item label="密码">
            <a-input-password v-model="form.password"
              placeholder="请输入密码" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 10, offset: 7 }">
            <a-button type="primary" html-type="submit">
              登陆
            </a-button>
            <a class="forget-password">忘记密码？</a>
          </a-form-item>
        </a-form>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped>
</style>

<script>

import request from "../utils/request";
import Qs from "qs";
import {initMenu, initRoute} from "../utils/route";

export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: {
        username: "",
        password: ""
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      request({
        url: '/api/main',
        method: 'POST',
        data: Qs.stringify(this.form)
      }).then(res => {
        if (res) {
            this.$store.commit('saveUserInfo', this.form.username);
            initMenu(this.$store).then(res => {
            let routes = initRoute(res.data);
            this.$router.addRoutes(routes);
            this.$store.commit('initRoutes', routes);
            this.$router.push("/attence");
          });
        }
      });
    },
  },
};
</script>

<style scoped>
#login {
  height: 100%;
  margin-top: 50px;
}

.header-layout{
  background: #D2691E;
  height: 30px;
  padding: 0px 10px;
  line-height: 30px;
  font-weight:500;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.body-layout{
  text-align: center;
  padding-top: 45px;
}
#content {
  height: 300px;
  width: 600px;
  
  margin: 0 auto;
  border-radius: 5px;
}

.forget-password{
  margin-left: 20px;
  font-size: 2pt;
}
</style>