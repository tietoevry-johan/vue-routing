import { createRouter, createWebHistory } from 'vue-router'
import PageSelector from '@/components/PageSelector.vue'
import { ref } from 'vue';

export const currentPage = ref('HomeView')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "PageSelector",
      path: "/:catchAll(.*)",
      component: PageSelector
    }
  ]
});

router.beforeEach(async (to, _, next) => {
  currentPage.value = await getComponentByPath(to.path)
  next()
})

async function getComponentByPath(path: string) {
  return path === '/' ? 'HomeView' : 'AboutView'
}

export default router
