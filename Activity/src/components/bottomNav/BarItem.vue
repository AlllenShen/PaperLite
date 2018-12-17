<template>
    <div class="BarItem">
        <slot name="Icon"></slot>
        <slot name="Img"></slot>  
        <br/>         
        <slot name="Label"></slot>
    </div>
</template>
<script>

export default {
    name: 'BarItem'
}
</script>
<style scoped>

</style>


