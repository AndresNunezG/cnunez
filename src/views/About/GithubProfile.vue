<template>
    <div class="github-profile monospace mt-5" v-if="!loadingProfile">
        <h3>{{ profileData.name }}</h3>
        <p>@{{ profileData.login }}</p>
        <p>
            <font-awesome-icon :icon="['fa', 'location-dot']"></font-awesome-icon>
            <span>&nbsp;{{ profileData.location }}</span>
        </p>
        <p>
            <font-awesome-icon :icon="['fa', 'building']"></font-awesome-icon>
            <span>&nbsp;@{{ profileData.company }}</span>
        </p>
        <p>
            <font-awesome-icon :icon="['fa', 'book']"></font-awesome-icon>
            <span>&nbsp;</span>
            <span class="text-decoration-underline">
                <a :href="repositoriesUrl" target="_blank" rel="noopener noreferrer">Repos</a>
            </span>
        </p>
        <p>
            <span>followers</span>
            <span>&nbsp;{{ profileData.followers }}</span>
        </p>
        <p>
            <span>following</span>
            <span>&nbsp;{{ profileData.following }}</span>
        </p>
        <div class="github-profile__avatar rounded-circle p-1">
            <img
                :src="profileData.avatar_url"
                alt="github-avatar"
                class="github-profile__image rounded-circle"
            >
        </div>
        <!-- <UserMiniatures :users="profileData.followers_url" /> -->
    </div>
</template>

<script>
import { get } from 'axios'
import UserMiniatures from './UserMiniatures.vue'

export default {
    name: 'GithubProfile',
    components: {
        UserMiniatures
    },
    data () {
        return {
            profileData: undefined,
            loadingProfile: false,
            error: null
        }
    },
    computed: {
        repositoriesUrl () {
            if (this.profileData) {
                return `${this.profileData.html_url}?tab=repositories`
            }
            return '#'
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
