<template>
    <div class="main-button-layout" @click="click">
        <span>{{name}}</span>
    </div>
</template>

<script>
export default {
    props: {
        "name": name,
    },
    methods: {
        click() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
.main-button-layout{
    border: 3px solid #507aee;
    border-radius: 12px;
    height: 80px;
    width: 240px;
    font-size: 32pt;
    text-align: center;
    vertical-align:middle;
    margin-top: 10px;
    padding-top: 4px
}
</style>