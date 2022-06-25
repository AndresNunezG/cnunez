<template>
  <div class="row">
    <TransitionGroup
      appear
      @before-enter="beforeEnterAnimation"
      @enter="enterAnimation"
      tag="div"
      class="row"
    >
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-md-4 mb-4"
        :data-index="index"  
      >
        <card :project="project" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import gsap from 'gsap'

import ProjectCard from './ProjectCard.vue'
import { projects } from '@/utils/constants.js'

export default {
  data() {
    return {
      projects,
    }
  },
  components: {
    card: ProjectCard,
  },
  methods: {
    beforeEnterAnimation(el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    },
    enterAnimation(el, done) {
      gsap.to(el, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        onComplete: done,
        delay: 0.2 * el.dataset.index,
      })
    }
  }
}
</script>
