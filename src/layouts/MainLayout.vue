<script setup>
import HeaderBar from '@/components/HeaderBar/Index.vue'
import FooterBar from '@/components/FooterBar/Index.vue'
</script>

<template>
    <div class="main-layout">
        <div class="main-layout__header">
            <HeaderBar />
        </div>
        <div class="container">
            <div class="main-layout__content px-3 py-md-3 pt-4 pb-md-4 pb-5">
                <RouterView />
            </div>
        </div>
        <div class="main-layout__footer d-flex align-items-center px-md-4 px-2">
            <FooterBar />    
        </div>
    </div>
</template>
