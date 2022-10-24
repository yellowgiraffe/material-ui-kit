<script setup>
  import LayoutHeader from '@/components/layout/Header.vue'
  import Sidebar from '@/components/layout/Sidebar.vue'
  import { ref } from 'vue'

  const isMenuOpen = ref(false)

  const toggleSidebar = () => {
    //
  }
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle">&#5125;</div>
    <layout-header />
    <sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .content {
    max-width: 1240px;
    margin-left: 250px;
  }

  .content_full {
    margin-left: 0;
  }

  .sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary-color);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
