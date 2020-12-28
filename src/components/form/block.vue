<template>
    <div class="block-layout" >
        <div id="header" class="block-header-layout">
            <span style="margin-left: 18px; line-height: 10px;">{{title}}</span>
        </div>
        <slot/>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props: [
        'title'
    ]
}
</script>

<style scoped>
.block-layout{
    border: 1px solid #e8e8e8;
}

.block-header-layout {
    height: 25px;
    background: #8d8a8ad5;
    line-height: 20px;
    font-size: 13px;
}

</style>