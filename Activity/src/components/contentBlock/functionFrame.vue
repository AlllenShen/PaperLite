<template>
    <div class="functionFrame">
        <slot name="content">123</slot>
        <div class="t">
        <slot name="watch">123</slot>
        <slot name="comment">123</slot>
        <slot name="like">123</slot>
        <slot name="team">123</slot>
        </div>
    </div>
</template>

<script>
   
</script>

<style scoped>
    .functionFrame{
        
    }
    .t{
        display: flex;
        justify-content: space-around;
    }
</style>