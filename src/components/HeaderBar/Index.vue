<script setup>
import HeaderLinks from './HeaderLinks.vue'
</script>

<template>
    <div class="container header m-0 py-4">
        <div class="row d-flex align-items-center">
            <div class="col-md-6">
                <font-awesome-icon :icon="['fa', 'cube']"></font-awesome-icon>
            </div>
            <div class="col-md-6">
                <HeaderLinks />
            </div>
        </div>
    </div>
    <hr>
</template>
