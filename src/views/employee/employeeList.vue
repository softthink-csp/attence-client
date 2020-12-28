<template>
    <div id="employee-list">
    <a-table :columns="columns" :data-source="data" bordered>
        <a slot="employeeId" slot-scope="text">{{ text }}</a>
        <template slot="detail" slot-scope="text, record">
          <a-button @click="showDetail(record.key)">明细</a-button>
      </template>
         <template slot="update" slot-scope="text, record">
          <a-button @click="onUpdate(record.key)">更新</a-button>
      </template>
        <template slot="delete" slot-scope="text, record">
          <a-button @click="onDelete(record.key)">删除</a-button>
      </template>
   </a-table>
    </div>
</template>
<script>
const columns = [
  {
    title: '员工ID',
    dataIndex: 'employeeId',
    key: 'employeeId',
    scopedSlots: { customRender: 'employeeId' },
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 80,
  },
  {
    title: '所属部门',
    dataIndex: 'departmentName',
    key: 'departmentName',
    ellipsis: true,
  },
  {
    title: '入职日期',
    dataIndex: 'startDate',
    key: 'startDate',
    ellipsis: true,
  },
  {
    title: '职务',
    dataIndex: 'post',
    key: 'post',
    ellipsis: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
    ellipsis: true,
  },
  {
    title: '明细',
    dataIndex: 'detail',
    key: 'detail',
    ellipsis: true,
    scopedSlots: { customRender: 'detail' },
  },
    {
    title: '更新',
    dataIndex: 'update',
    key: 'update',
    ellipsis: true,
    scopedSlots: { customRender: 'update' },
  },
    {
    title: '删除',
    dataIndex: 'delete',
    key: 'delete',
    ellipsis: true,
    scopedSlots: { customRender: 'delete' },
  },
  ];

import request from "../../utils/request";

export default {
    
  data() {
    return {
      data: [],
      columns,
    };
  },
  mounted() {
      this.getEmployeeData();
  },
  methods: {
        getEmployeeData() {
            request({
                url: "/api/employee/getEmployeeList",
                method: 'POST'
            }).then(res => {
                if (res.data) {
                    res.data.forEach(element => {
                    let employee = element;
                        employee.key = employee.employeeId;
                        this.data.push(employee);
                    });
                }
            });
        },
        showDetail(key){
            this.$router.push({name: "员工明细", params: {employeeId: key}});
        },
        onUpdate() {
            
        },
        onDelete() {
            
        }

  }
};
</script>
