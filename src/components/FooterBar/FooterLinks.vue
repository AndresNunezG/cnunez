<template>
  <div class="row">
    <div 
      class="col-md order-md-1 order-2 col-12 d-flex justify-content-center justify-content-md-start" title="this site is built with">
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
    <span class="text-muted text-md-end text-center px-4 pb-sm-0 pb-2">@_camsky</span>
  </div>
</template>

<script>
import FooterLink from './FooterLink.vue'
import { tools, links } from '@/utils/constants'

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
