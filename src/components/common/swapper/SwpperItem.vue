<template>
  <div class="swpper-item">
    <div class="recomm-swpper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SwpperItem",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>
<style scoped>
.recomm-swpper {
  display: flex;
}

.swpper-item {
  position: relative;
}


</style>