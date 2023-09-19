<template>
  <component :is="currentPage" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AboutView from "@/views/AboutView.vue"
import HomeView from "@/views/HomeView.vue"
import { currentPage } from "@/router"

export default defineComponent({
  // eslint-disable-next-line vue/no-unused-components
  components: { HomeView, AboutView },
  setup() {
    return {
      currentPage
    }
  }
})
</script>
