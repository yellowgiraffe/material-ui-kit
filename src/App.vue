<script setup>
  import LayoutHeader from '@/components/layout/Header.vue'
  import LayoutSidebar from '@/components/layout/Sidebar.vue'
  import { ref } from 'vue'

  const isMenuOpen = ref(false)

  const toggleSidebar = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleSidebar">&#5125;</div>
    <layout-header />
    <layout-sidebar :openSidebar="isMenuOpen" />
    <div :class="['content', {content_full: !isMenuOpen}]">
      <router-view />
    </div>
  </div>
</template>

<style>
/* @import "@/src/assets/styles/global.css"; */

.content {
  max-width: 1240px;
  margin-left: 250px;
  padding: 30px;
  transition: .2s;
}

.content_full {
  margin-left: 0;
}

.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 15px;
  height: 100%;
  top: 62px;
  left: 0;
  z-index: 1;
  background: var(--primary-color);
  cursor: pointer;
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
