<template>
  <hr>
  <div class="container footer">
    <FooterLinks />
  </div>
</template>

<script>
import FooterLinks from "./FooterLinks.vue";

export default {
  name: "FooterBar",
  components: { FooterLinks }
};
</script>
