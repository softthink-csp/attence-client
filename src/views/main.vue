<template>
    <div class="main-layout">
        <div class="baseInfo-layout">
            <div class="time-area-layout">
                <div style="font-size: 16pt; font-weight: bold;">{{currentDate}}（{{weekDate}}）</div>
                <div style="font-size: 40pt; font-weight: bold;">{{currentTime}}</div>
                 <div style="font-size: 16pt; font-weight: bold; margin-left: 80px; margin-top: 10px">{{status}}</div>
            </div>
            <div class="employee-area-layout">
                <div style="font-size: 16pt; font-weight: bold; margin-top: 30px;">
                    <div class="label_layout">员工ID：</div>
                    <div class="input_layout">{{employeeId}}</div>
                </div>
                <div style="font-size: 16pt; font-weight: bold; clear: both; margin-top: 85px">
                    <div class="label_layout">{{nameLabel}}:</div>
                    <div class="input_layout">{{name}}</div>
                </div>            
            </div>
        </div>
        <div class="button-info-layout">
            <a-main-button name="出勤" @click="changeStatus(1)"></a-main-button>
            <a-main-button name="退勤" @click="changeStatus(2)"></a-main-button>
        </div>
    </div>
</template>

<script>

import {preZero, getWeekDate} from "../utils/base"
import mainButton from "../components/form/mainButton"
import request from "../utils/request";
import Qs from "qs";
import {status} from "../utils/constrant"

export default {

    data() {
        return {
            currentTime: this.getNow(),
            status: "出勤中",
            name: "",
            nameLabel: '姓\u00a0\u00a0\u00a0\u00a0\u00a0名'
        }
    },
    components: {
        "a-main-button": mainButton
    },
    mounted() {
        this.timer = setInterval(this.getNow, 1000);
        request({
            url: '/api/employee/getEmployeeName',
            method: 'POST',
            data: Qs.stringify({
                employeeId: this.employeeId
            })
        }).then(res => {
            this.name = res.data;
        });
        request({
            url: '/check/attence/check/getCurrentStatus',
            method: 'POST',
            data: Qs.stringify({
                employeeId: this.employeeId
            })
        }).then(res => {
            this.status = status[res.data];
        });
    },
    computed: {
        currentDate: function() {
            let curDate = new Date();
            let dateStr = curDate.getFullYear() + "年" + (curDate.getMonth() + 1) + "月" + curDate.getDate() + "日";
            return dateStr;
        },
        weekDate: function() {
            return getWeekDate();
        },
        employeeId: function () {
            return this.$store.state.userName;
        },
    },
    methods: {
        getNow() {
            let curDate = new Date();
            this.currentTime = preZero(curDate.getHours(), 1, -2) 
                                + ":" + preZero(curDate.getMinutes() , 1, -2)
                                + ":" + preZero(curDate.getSeconds(), 1, -2);
        },
        changeStatus(status) {
            request({
                url: '/check/attence/check/updateStatus',
                method: 'POST',
                data: {
                    employeeId: this.employeeId,
                    name: this.name,
                    status: status,
                }
            }).then(res => {
                this.status = status[status];
            })
        }
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
}
</script>

<style scoped>
.main-layout{
    width: 64%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
}

.baseInfo-layout{
    height: 180px;
}
.time-area-layout{
    width: 45%;
    float: left;
}
.employee-area-layout{
    width: 50%;
    float: left;
}

.time-area-layout{
    float: left;
}

.label_layout{
    float: left;
    width: 86px;
}

.input_layout{
    float: left;
    border-bottom: 3px solid #000000;
    text-align: center;
    margin-left: 10px;
    width: 240px;
    margin-right: 0px
}
</style>