<script setup>
import FooterBar from "@/components/FooterBar/Index.vue"
import HeaderBar from "@/components/HeaderBar/Index.vue"
</script>

<template>
  <HeaderBar />
  <header>
    <div class="wrapper">
      <h1 class="fw-bolder font-m">Andrés <br> Camilo.</h1>
      <p>Hi! i'm a <span>software developer enginner</span> from Bogotá</p>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
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
