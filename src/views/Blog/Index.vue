<template>
    <div class="blog-title mb-5 ps-2">
        <h1 class="home__title mb-md-0 mb-3">Blog</h1>
        <p
            class="monospace text-md-start text-center w-100"
        >Articles, handbooks and stuff that i have wrote.</p>
    </div>
    <BlogsList />
</template>

<script>
import BlogsList from '@/components/Blog/BlogsList.vue'

export default {
    name: "Blog",
    components: {
        BlogsList,
    }
}
</script>

<style scoped>
.blog-title {
    animation: 500ms ease-out 0s 1 slideFromLeft;
}
</style>