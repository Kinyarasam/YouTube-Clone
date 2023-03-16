<template>
  <div class="bg-black min-h-screen">
    <HeaderView />
    <router-view />
  </div>
</template>

<script>
import HeaderView from './components/Header'

export default {
  name: 'App',
  components: {HeaderView}
}
</script>

<style>
</style>
