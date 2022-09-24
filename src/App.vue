<script setup>
  import LayoutHeader from '@/components/layout/Header.vue'
  import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<template>
  <div class="container">
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
    margin: 0 auto;
  }
</style>
