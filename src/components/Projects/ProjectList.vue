<template>
    <div class="row">
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="col-md-4 mb-4"
        >
            <card :project="project" />
        </div>
    </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/utils/constants.js'

export default {
    data () {
        return {
            projects,
        }
    },
    components: {
        card: ProjectCard,
    }
}
</script>
