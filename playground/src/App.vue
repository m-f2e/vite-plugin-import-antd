<script setup lang="ts">
import { Button } from 'ant-design-vue';

</script>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    [Button.name]: Button,
  }
})
</script>

<template>
  <div>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>