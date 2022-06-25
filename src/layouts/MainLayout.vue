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
                <RouterView v-slot="{ Component }">
                    <Transition name="route" mode="out-in">
                        <component :is="Component" />
                    </Transition>
                </RouterView>
            </div>
        </div>
        <div class="main-layout__footer d-flex align-items-center px-md-4 px-2">
            <FooterBar />    
        </div>
    </div>
</template>

<style>
.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}
.route-enter-active {
    transition: all 0.2s ease-out;
}
.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
.route-leave-active {
    transition: all 0.2s ease-in;
}
</style>
