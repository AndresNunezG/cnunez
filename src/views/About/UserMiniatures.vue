<template>
    <div v-for="user in users" :key="user.id">
        <img :src="user.avatar_url" class="rounded-circle" :alt="`${user.login}-avatar`">
    </div>
</template>

<script>
export default {
    name: 'UserMiniatures',
    props: {
        users: {
            required: true,
            type: Object
        }
    }
}
</script>

