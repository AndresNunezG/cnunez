<template>
    <h2>Teckstack</h2>
    <ul class="list-unstyled">
        <li v-for="(tech, index) in techstack" :key="index">
            <font-awesome-icon :icon="tech.icon" :style="{'width': '20px', 'height': '20px'}" ></font-awesome-icon>
        </li>
    </ul>
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
