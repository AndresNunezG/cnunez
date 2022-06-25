<template>
  <div v-if="isLoadingBlogs">
    <BlogEntryPH v-for="index in 3" :key="index" />
  </div>
  <div v-if="!isLoadingBlogs && blogEntries">
    <TransitionGroup
      appear
      @before-enter="beforeEnterAnimation"
      @enter="enterAnimation"
      tag="div"
    >
      <BlogEntry
        v-for="(blogEntry, index) in blogEntries"
        :key="blogEntry.id"
        :entry="blogEntry"
        :data-index="index"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import gsap from 'gsap'

import db from '@/firestore/firebaseApp.js'
import { BlogEntry as BlogEntryType } from '@/utils/propsValidation.js'
import { dateOptions } from '@/utils/utils.js'

import { collection, query, getDocs } from "firebase/firestore";

import BlogEntry from './BlogEntry.vue'
import BlogEntryPH from './BlogEntryPH.vue'

export default {
  name: 'BlogsList',
  components: {
    BlogEntry,
    BlogEntryPH,
  },
  data() {
    return {
      isLoadingBlogs: true,
      blogEntries: [],
    }
  },
  methods: {
    async getBlogs() {
      try {
        const q = query(collection(db, "blogs"));
        const querySnapshot = await getDocs(q);
        if (querySnapshot) {
          querySnapshot.forEach((doc) => {
            const {
              title,
              date,
              abstract,
              externalLink,
              tags,
              externalEntry
            } = doc.data()
            const localizedDate = new Date(date.seconds * 1000).toLocaleString('en-US', dateOptions)
            const blogEntryItem = new BlogEntryType(
              doc.id,
              title,
              localizedDate,
              abstract,
              externalLink,
              tags,
              externalEntry,
            )
            this.blogEntries.push(blogEntryItem)
          })
          this.isLoadingBlogs = false
        }
      } catch (e) {
        throw e
      }
    },
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
  },
  mounted() {
    this.getBlogs()
  },
}
</script>
