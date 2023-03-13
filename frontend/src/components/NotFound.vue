<template>
  <div>
    Ooops!!! the page you are looking for doesn't exist.
    <p>Allow me to take you Home
      <router-link to="/">Go to Home</router-link>
    </p>
    <button>
      <router-link to="/about">About us</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NotFound'

}
</script>

<style>

</style>
