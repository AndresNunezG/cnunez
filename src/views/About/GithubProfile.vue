<template>
    <div v-if="!loadingProfile">
        <h3>{{ profileData.name }}</h3>
        <p>{{ profileData.login }}</p>
        <p>{{ profileData.location }}</p>
        <div class="github-profile__avatar rounded-circle p-1">
            <img
                :src="profileData.avatar_url"
                alt="github-avatar"
                class="github-profile__image rounded-circle"
            >
        </div>
    </div>
</template>

<script>
import { get } from 'axios'

export default {
    name: 'GithubProfile',
    data () {
        return {
            profileData: undefined,
            loadingProfile: false,
            error: null
        }
    },
    methods: {
        getProfile () {
            const apiUrl = 'https://api.github.com/users/'
            const user = 'andresnunezg'
            const url = `${apiUrl}${user}`
            this.loadingProfile = true
            get(url)
                .then((response) => {
                    this.loadingProfile = false
                    this.profileData = response.data
                })
                .catch((err) => {
                    this.loadingProfile = true
                    this.error = err
                })
                .finally(() => {
                    this.loadingProfile = false
                })
        }
    },
    created () {
        this.getProfile()
    }
}
</script>
