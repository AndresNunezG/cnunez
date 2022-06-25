<template>
    <div class="project-card p-3 d-flex flex-column justify-content-between">
        <div class="project-card__header d-flex flex-md-row flex-column justify-content-md-between align-items-start align-items-md-center">
            <h3 class="fw-bold">{{ project.title }}</h3>
            <div class="project-card__header-links">
                <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="pe-2"
                >
                    <font-awesome-icon :icon="['fa', 'link']"></font-awesome-icon>
                </a>
                <a
                    v-if="project.repository"
                    :href="project.repository"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                </a>
            </div>
        </div>
        <div class="project-cad__body">
            <p>{{ project.description }}</p>
        </div>
        <div class="project-card__footer border-top pt-2 d-flex flex-wrap">
            <small
                v-for="(tech, index) in project.techs"
                :key="index"
                class="monospace"
            >{{ tech }}&nbsp;</small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            required: true,
            type: Object,
        }
    }
}
</script>

<style scoped>
.project-card {
    min-height: 100% !important;
    background-color: var(--color-background-mute);
    border-radius: 10px;
    transition: 350ms;
}
.project-card:hover {
    transform: translateY(-5%);
}
.project-card:hover .project-card__header-links,
.project-card:hover .project-card__header {
    color: var(--green-1);
}
</style>