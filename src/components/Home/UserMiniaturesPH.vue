<template>
    <!-- User Miniatures PlaceHolder -->
    <div class="miniatures">
        <div v-for="index in 5" :key="index" class="miniature d-inline-block">
            <div class="placeholder-glow miniature-image rounded-circle">
                <div class="placeholder rounded-circle miniature-avatar"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserMiniaturesPH',
}
</script>
