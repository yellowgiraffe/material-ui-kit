<script setup>
import { ref } from 'vue'

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true
  }
})

const links = ref([
  { name: 'Typography', to: '/typography' },
  { name: 'Button', to: '/button' },
])
</script>

<template>
  <div :class="['sidebar', {sidebar_isopen: openSidebar}]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.to"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 62px;
    height: 100%;
    width: 250px;
    padding: 20px;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
    transition: 0.2s;
    transform: translateX(-250px);
  }

  .sidebar_isopen {
    transform: translateX(0px);
  }

  .sidebar__link {
    display: block;
    border-radius: 12px;
    padding: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .sidebar:hover {
    border-color: var(--primary-color);
  }
</style>