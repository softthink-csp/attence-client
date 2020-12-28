<template>
<a-form class="ant-advanced-search-form" ref="form" :form="form" @submit="onSubmit">
    <a-block title="基本信息" class="baseinfo-layout">
        <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>姓名</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="name" v-model="form.name" />
                </div>
            </div>
        </attence-row>
        <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>出生年月</span>
                </div>
                <a-date-picker valueFormat="YYYY-MM-DD" style="height:20px; margin-top 5px;" placeholder="" name="birthday" v-model="form.birthday"/>
            </div>
        </attence-row>
        <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>性别</span>
                </div>
                <a-select default-value=" " name="sex" v-model="form.sex" style="width: 120px; height: 26px; font-size: 12px; line-height: 20px; margin-top: 3px">
                    <a-select-option value="1">
                        男
                    </a-select-option>
                
                    <a-select-option value="0">
                        女
                    </a-select-option>
                </a-select>
            </div>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>年龄</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="age" v-model="form.age" />
                </div>           
            </div>
        </attence-row>
        <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>常用邮箱</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="mail1" v-model="form.mail1" />
                </div>
            </div>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>备用邮箱</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="mail2" v-model="form.mail2" />
                </div>
            </div>
        </attence-row>
        <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>移动电话</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="phone1" v-model="form.phone1" />
                </div>
            </div>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>固定电话</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="phone2" v-model="form.phone2" />
                </div>
            </div>
        </attence-row>
         <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>职位</span>
                </div>
                <a-select default-value=" " name="post" v-model="form.post" style="width: 120px; height: 26px; font-size: 12px; line-height: 20px; margin-top: 3px">
                    <a-select-option v-for="(item, index) in postData" :key="index">
                        {{item}}
                    </a-select-option>
                </a-select>
            </div>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>部门</span>
                </div>
                <a-select default-value=" " name="department" v-model="form.department" style="width: 120px; height: 26px; font-size: 12px; line-height: 20px; margin-top: 3px">
                    <a-select-option v-for="(item, index) in departmentData" :key="index">
                        {{item}}
                    </a-select-option>
                </a-select>
            </div>
        </attence-row>
         <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>入职日期</span>
                </div>
               <a-date-picker valueFormat="YYYY-MM-DD" name="startDate" v-model="form.startDate" style="height:20px; margin-top 5px;" placeholder=""/>
            </div>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>离职日期</span>
                </div>
               <a-date-picker valueFormat="YYYY-MM-DD" name="endDate" v-model="form.endDate" style="height:20px; margin-top 5px;" placeholder=""/>
            </div>
        </attence-row>
         <attence-row>
            <div class="attence-row-layout" style="width: 100%">
                <div class="attence-label-layout" style="width: 15%">
                    <span>备注</span>
                </div>
                <div class="attence-input-layout" style="width: 84%">
                    <input v-model="form.content" style="height: 22px; border: 1px solid #d9d9d9;  width: 100%" type="input" name="content"/>
                </div>
            </div>
        </attence-row>
  </a-block>
  <a-block title="密码" class="passwordinfo-layout">
        <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>密码</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="password1" v-model="form.password1" />
                </div>
            </div>
        </attence-row>
        <attence-row>
            <div class="attence-row-layout">
                <div class="attence-label-layout">
                    <span>密码(确认)</span>
                </div>
                <div class="attence-input-layout">
                    <input class="attence-text-layout" type="input" name="password2" v-model="form.employeeId2" />
                </div>
            </div>
        </attence-row>
  </a-block>
  <div style="margin-top: 10px; margin-left: auto; margin-right: auto; width: 94%">
    <a-button :style="{ marginLeft: '8px' }" @click="handleReset" style="float: right; height: 24px">
        取消
    </a-button>
   <a-button type="primary" html-type="submit" style="float: right; height: 24px">
        保存
    </a-button>
 </div>
</a-form>
</template>
<script>

import block from "../../components/form/block";
import attenceRow from "../../components/form/attenceRow";
import request from "../../utils/request";

export default {
  data() {
    return {
      postData: {},
      departmentData: {},
      form: {
        name: "",
        birthday: "",
        sex: "",
        age: "",
        mail1: "",
        mail2: "",
        phone1: "",
        phone2: "",
        post: "",
        department: "",
        startDate: "",
        endDate: "",
        content: ""
      },
    };
  },
  components: {"a-block": block, "attence-row": attenceRow},
  mounted() {
      this.initSelectData();
  },
  methods: {
    onSubmit(e) {
        e.preventDefault();
        request({
            url: "/api/employee/createEmployee",
            method: "POST",
            data: this.form
        });
    },
    handleReset() {

    },
    initSelectData() {
        request({
            url: "/api/getPostData",
            method: "GET",
        }).then(res => {
            this.postData = res.data;
        });
        request({
            url: "/api/getDepartmentData",
            method: "GET",
        }).then(res => {
            this.departmentData = res.data;
        });    
    }
  },
};
</script>

<style>
.baseinfo-layout{
    width: 94%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
}

.passwordinfo-layout{
    width: 94%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
}

.attence-row-layout {
    width: 50%;
    float: left;
    border-top: 0px;
}

.attence-label-layout {
    width: 30%;
    float: left;
    height: 27.5px;
    padding-left: 20px;
    background: #d4d3d3;
    font-size: 12px;
    padding-top: 2px;
    line-height: 20px;
}

.attence-input-layout {
    float: left;
    width: 65%;
    margin-left:5px;
    line-height: 26px;
}

.ant-select-selection{
    height: 22px;
    font-size: 12px;
    margin-left: 5px;
    border-radius: 0;
}

.ant-select-selection__rendered{
    line-height: 22px;
}

.ant-calendar-picker-input{
    height: 22px;
    margin-left: 5px;
    border-radius: 0;
    margin-top: 3px;
}

.ant-calendar-picker-icon{
    margin-top: -3px;
}

.attence-text-layout{
    height: 22px;
    border: 1px solid #d9d9d9;
    width: 60%
}
</style>
