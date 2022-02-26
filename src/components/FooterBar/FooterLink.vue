<template>
  <a
    :href="link.url"
    :title="link.slugName"
    target="_blank" rel="noopener noreferrer"
    class="text-decoration-none "
    :class="iconsClass"
    >
    <font-awesome-icon :icon="link.icon" :class="iconsClass" :style="{ color: link.color }"></font-awesome-icon>
  </a>
</template>

<script>
export default {
  name: 'FooterLink',
  props: {
    link: {
      required: true,
      type: Object
    },
    size: {
    type: String,
    required: false,
    default: "md",
    validator(value) {
      return ['md', 'lg'].includes(value)
    }
    }
  },
  computed: {
    iconsClass () {
      return `icon-size-${this.size}`
    }
  }
}
</script>


