<template>
  <div class="wrapper">
    <div class="left-nav">
      <slot name="leftNav"></slot>
      <slot name="leftConter"></slot>
    </div>
    <div class="conter-left">
      <slot name="conter"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'Left'
}
</script>