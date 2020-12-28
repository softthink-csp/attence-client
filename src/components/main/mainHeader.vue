<template>
    <div id="main-header" class="main-header">
        <div class="system-info">
                <div class="system-name">员工打卡信息管理系统</div> 
                <div class="login-info">
                    <span class="company-info">XXXX公司</span>
                    <span>{{userName}}</span>
                </div>
        </div >
        <div class="navi">
            <a-menu mode="horizontal" 
                    class="menu"
                    :selectedKeys="selectedKeys"
                    :openKeys.sync="openKeys">
                <template v-for="item in menuData">
                    <a-menu-item v-if="!item.children" :key="item.path" @click="menuClick(item.path)"> {{item.name}} </a-menu-item>
                    <a-sub-menu v-else-if="item.children" :key="item.path">
                        <span slot="title">{{item.name}}<a-icon class="menu-icon" type="down" /></span>
                        <template v-for="child in item.children">
                            <a-menu-item :key="child.name" @click="menuClick(child.path)">{{child.name}}</a-menu-item>
                        </template>
                    </a-sub-menu>
                </template>
            </a-menu>
        </div>
    </div>
</template>
<script>

import {initMenu} from '../../utils/route';

export default {
    data(){
        this.selectedKeysMap = {};
        this.openKeysMap = {};
        const menuData = [];
        this.getMenuData(this.$store.state.routes).forEach((item) => {
            item.forEach(child => {
                menuData.push(child);
            })
        })
        return {
            userName: this.$store.state.userName,
            menuData,
            selectedKeys: [],
            openKeys: []
        }
    },
    mounted() {
        this.$router.push("/attence/main");
    },
    watch: {
        '$router.path': function(val) {
            this.selectedKeys = this.selectedKeysMap[val];
            this.openKeys = this.openKeysMap[val];
        }
    },
    methods: {
        menuClick(path) {
            this.$router.push(path);
        },
        getMenuData(data, parentKeys = []) {
            let routes = [];
            data.forEach(item => {
                if (item.showInNavi) {
                    this.openKeysMap[item.path] = parentKeys;
                    this.selectedKeysMap[item.path] = item.path;
                    const newItem = {};
                    newItem.name = item.name;
                    newItem.path = item.path;
                    if (item.children && item.children.length > 0) {
                        newItem.children = this.getMenuData(item.children, [...parentKeys, item.path])
                    }
                    routes.push(newItem);
                } else if (item.children && item.children.length > 0){
                    item.children.forEach(child => {
                        let childItem = this.getMenuData([child], [...parentKeys, child.path]);
                        if (childItem) {
                            routes.push(childItem);
                        }
                    });
                }
            });
            return routes;
        }
    }
}
</script>
<style scoped>
.system-info{
    color: #ffffff;
    height: 40px;
    line-height: 35px;
    display: flex;
}

.system-name{
    margin-left: 20px;
    width: 80%;
}

.login-info{
    line-height: 35px;
    font-size: 12px;
}

.company-info{
    margin-right: 35px;
    
}

.navi {
    background: #ffffff;
    height: 30px;
}

.menu{
    height: 30px;
    line-height: 30px;
    font-size: 12px;
}

.menu-icon{
    margin-left: 2px;
    font-size: 10px;
}

</style>