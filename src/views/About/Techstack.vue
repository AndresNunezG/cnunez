<template>
    <h2 class="section__subtitle text-center">Teckstack</h2>
    <div class="row justify-content-center">
        <div
            v-for="tech in techstack"
            :key="tech.slugName"
            :title="tech.slugName"
            class="tech-badge px-3 py-1 fw-bold d-inline-block mx-2 my-2"
            :style="{'border-color': tech.borderColor}"
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
