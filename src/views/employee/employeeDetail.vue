<template>
    <div id="main">
        {{employeeId}}
    </div>
</template>

<script>
export default {

    data() {
        let employeeId = this.$route.params.employeeId;
        return {
            employeeId
        }
    }
}
</script>