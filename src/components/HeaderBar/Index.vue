<script setup>
import HeaderLinks from './HeaderLinks.vue'
</script>

<template>
    <nav class="navbar navbar-expand-lg py-3 px-4">
        <div class="container-fluid">
            <div class="navbar-brand">
                <RouterLink :to="{ name: 'Home' }" class="d-flex">
                    <font-awesome-icon :icon="['fa', 'cube']" :style="{height: '25px'}"></font-awesome-icon>
                    <h1 class="ms-2 mb-0 fs-4 section__subtitle">Andrés Camilo</h1>
                </RouterLink>
            </div>
            <button class="navbar-toggler" @click="toggleMenuIcon = !toggleMenuIcon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon v-if="toggleMenuIcon" :icon="['fa', 'bars']" :style="{height: '25px', color: '#DDD'}"></font-awesome-icon>
                <font-awesome-icon v-else :icon="['fa', 'x']" :style="{height: '25px', color: '#DDD'}"></font-awesome-icon>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <HeaderLinks />
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            toggleMenuIcon: true
        }
    },
}
</script>
