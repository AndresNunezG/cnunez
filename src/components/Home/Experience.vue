<template>
    <div class="experience d-flex flex-column justify-content-center align-items-center mt-2">
        <span class="about-line"></span>
        <div class="about-sphere rounded-circle d-flex justify-content-center align-items-center">
            <font-awesome-icon :icon="['fas', 'rocket']" :style="{ color: '#FFFFFF'}"></font-awesome-icon>
        </div>
    </div>
    <h2 class="section__subtitle text-center mt-2">My Experience</h2>
    <div class="row mb-5">
        <JobsList />
    </div>
</template>

<script>
import JobsList from './JobsList.vue'

export default {
    components: {
        JobsList,
    }
}
</script>

