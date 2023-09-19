<template>
  about
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log(router.currentRoute.value?.fullPath)
    })
  }
})
</script>