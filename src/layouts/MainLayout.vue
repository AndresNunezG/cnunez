<script setup>
import HeaderBar from '@/components/HeaderBar/Index.vue'
import FooterBar from '@/components/FooterBar/Index.vue'
</script>

<template>
    <div class="main-layout">
        <div class="main-layout__header">
            <HeaderBar />
        </div>
        <div class="main-layout__content px-3 py-5">
            <RouterView />
        </div>
        <div class="main-layout__footer d-flex align-items-center">
            <FooterBar />    
        </div>
    </div>
</template>
