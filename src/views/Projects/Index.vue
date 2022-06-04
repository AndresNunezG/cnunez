<template>
    <div class="projects-title mb-5">
        <h1 class="home__title mb-md-0 mb-3">Projects</h1>
        <p
            class="monospace text-md-start text-center w-100"
        >Stuff that i have built or been involved in.</p>
    </div>
    <ProjectList />
</template>

<script>
import ProjectList from "@/components/Projects/ProjectList.vue";

export default {
    components: {
        ProjectList,
    }
}
</script>

