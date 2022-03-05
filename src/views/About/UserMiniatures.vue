<template>
    <div class="miniatures">
        <div v-for="user in usersData" :key="user.id" class="miniature d-inline-block">
            <div class="miniature-image rounded-circle">
                <img
                    :src="user.avatar_url"
                    class="rounded-circle miniature-avatar"
                    :alt="`${user.login}-avatar`"
                    :title="`${user.login}`"
                    data-bs-toggle="tooltip" data-bs-placement="top"
                >
            </div>
        </div>
    </div>
</template>

<script>
import { get } from 'axios'

export default {
    name: 'UserMiniatures',
    props: {
        usersUrl: {
            required: true,
            type: String
        },
        type: {
            required: false,
            type: String,
            validator(value) {
                return ['followers', 'following'].includes(value)
            }
        }
    },
    data () {
        return {
            usersData: undefined,
        }
    },
    methods: {
        getUsers () {
            get(this.usersUrl)
                .then((response) => {
                    if (this.type === "following") {
                        this.usersData = response.data.slice(0,6)
                    } else {
                        this.usersData = response.data.reverse().slice(0, 6)
                    }
                })
        }
    },
    created () {
        this.getUsers()
    }
}
</script>
