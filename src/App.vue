<script setup>
import FooterBar from "@/components/FooterBar/Index.vue"
import HeaderBar from "@/components/HeaderBar/Index.vue"
</script>

<template>
  <header>
    <HeaderBar />
  </header>
  <RouterView />
  <FooterBar />
</template>

<style>
@import "@/assets/base.css";

* {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

</style>
