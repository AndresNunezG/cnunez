<template>
    <div>
        <div class="projects-title mb-5">
            <h1 class="home__title mb-md-0 mb-3">Projects</h1>
            <p
                class="monospace text-md-start text-center w-100"
            >Stuff that i have built or been involved in.</p>
        </div>
        <ProjectList />
    </div>
</template>

<script>
import ProjectList from "@/components/Projects/ProjectList.vue";

export default {
    components: {
        ProjectList,
    }
}
</script>

<style scoped>
.projects-title {
    animation: 500ms ease-out 0s 1 slideFromLeft;
}
</style>

