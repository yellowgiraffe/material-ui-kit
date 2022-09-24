<template>
  <h1>Welcome</h1>
  <div>
    <button v-for="comp in components" :key="comp.id">
      {{ comp.name }}
    </button>
  </div>
</template>

<script setup>
  const components = [
    { name: 'Button', path: '/', id: '1' },
    { name: 'List', path: '/', id: '2' },
    { name: 'Table', path: '/', id: '3' },
  ]
</script>