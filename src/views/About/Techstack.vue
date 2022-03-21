<template>
    <div class="d-flex flex-column justify-content-center align-items-center mt-2">
        <span class="about-line"></span>
        <div class="about-sphere rounded-circle d-flex justify-content-center align-items-center">
            <font-awesome-icon :icon="['fa', 'code']" :style="{ color: '#FFFFFF'}"></font-awesome-icon>
        </div>
    </div>
    <h2 class="section__subtitle text-center mt-2">&nbsp;Teckstack</h2>
    <div class="row justify-content-center">
        <div
            v-for="tech in techstack"
            :key="tech.slugName"
            :title="tech.slugName"
            class="tech-badge px-3 py-1 fw-bold d-inline-block mx-2 my-2"
            :style="{'border-color': tech.borderColor}"
            v-pointer
        >
            {{ tech.name }}
        </div>
    </div>
</template>

<script>
import { techstack } from '@/utils/constants.js'
export default {
    data () {
        return  {
            techstack: techstack
        }
    }
}
</script>
