<template>
  <div class="container w-100">
    <div class="row">
      <div class="col-md order-md-1 order-2 col-12 d-flex justify-content-center justify-content-md-start mb-md-2 mb-3" title="this site is built with">
        <!-- tools -->
        <div v-for="tool in tools" :key="tool.SlugName" class="d-inline px-2">
          <FooterLink :link="tool" size="lg"/>
        </div>
      </div>
      <div class="col-md order-md-2 order-1 col-12 d-flex justify-content-center justify-content-md-end mb-md-2 mb-3" title="media">
        <!-- links -->
        <div v-for="link in links" :key="link.SlugName" class="d-inline px-2">
          <FooterLink :link="link" size="lg"/>
        </div>
      </div>
    </div>
    <div class="row">
      <span class="text-muted text-md-end text-center px-4">@_camsky</span>
    </div>
  </div>
</template>

<script>
import FooterLink from './FooterLink.vue'

const links = [
  {slugName: "bootstrap", icon: ['fab', 'github'], url: "https://github.com/AndresNunezG", color: '#F4F4F4'},
  {slugName: "linkedin", icon: ['fab', 'linkedin'], url: "www.linkedin.com/in/andresnunezg", color: '#F4F4F4'},
  {slugName: "twitter", icon: ['fab', 'twitter'], url: "https://twitter.com/_camsky", color: '#F4F4F4'},
]

const tools = [
  {slugName: "vuejs", icon: ['fab', 'vuejs'], url: "https://vuejs.org/", color: '#42B883'},
  {slugName: "bootstrap", icon: ['fab', 'bootstrap'], url: "https://getbootstrap.com/", color: '#aa66cc'},
  {slugName: "fontawesome", icon: ['fab', 'font-awesome'], url: "https://fontawesome.com/", color: '#136DBE'},
]

export default {
  name: 'FooterLinks',
  components: { FooterLink },
  data () {
    return {
      links: links,
      tools: tools
    }
  }
}
</script>
