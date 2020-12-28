<template>
    <div id="home">
        <a-layout class="layout-home">
            <a-layout-header class="layout-header">
                <main-header />
            </a-layout-header>
            <a-layout-content><router-view /></a-layout-content>
        </a-layout>
    </div>
</template>

<script>

import mainHeader from '../components/main/mainHeader.vue'

export default {
  components: { "main-header": mainHeader},
    data() {
        return {
        }     
    },
    created() {
        if (this.$store.state.userName == "") {
            this.$router.replace("/login");
        }
    }
}
</script>

<style scoped>

#home {
    height: 100%;
}

.layout-home {
    height: 100%;
    background: #FFFFFF;
}

.layout-header {
    height: 70px;
    padding: 0px;
    line-height: 30px;
}
</style>