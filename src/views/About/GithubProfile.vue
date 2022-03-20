<template>
    <div class="github-profile py-3 px-2 monospace mt-3 mb-5" v-if="!loadingProfile">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-12">
                <div class="row align-items-center">
                    <div class="github-profile__avatar d-flex justify-content-center rounded-circle col-lg col-md-6">
                        <img
                            :src="profileData.avatar_url"
                            alt="github-avatar"
                            class="github-profile__image p-1 rounded-circle"
                            @click="goToProfile"
                            v-pointer
                        >
                    </div>
                    <div class="col-lg d-lg-block text-lg-start col-md-6 text-center">
                        <p @click="goToProfile" class="fw-bold mb-lg-3 mt-md-0 mt-2" v-pointer>@{{ profileData.login }}</p>
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
                    </div>
                </div>
            </div>
            <div class="col-lg d-lg-block mt-lg-0 col-md-6 mt-md-4 mb-md-0 col-12 mb-3 d-flex flex-column align-items-center">
                <p>
                    <span class="mb-2">following&nbsp;</span>
                    <span class="badge bg-success">{{ profileData.following }}</span>
                </p>
                <UserMiniatures type="following" :usersUrl="followingUrl" key="following" />
            </div>
            <div class="col-lg d-lg-block mt-lg-0 col-md-6 mt-md-4 col-12 d-flex flex-column align-items-center">
                <p>
                    <span class="mb-2">followers&nbsp;</span>
                    <span class="badge bg-success">{{ profileData.followers }}</span>
                </p>
                <UserMiniatures type="followers" :usersUrl="profileData.followers_url" key="followers" />
            </div>
        </div>
    </div>
    <GithubProfilePH v-else />
</template>

<script>
import { get } from 'axios'
import GithubProfilePH from './GithubProfilePH.vue'
import UserMiniatures from './UserMiniatures.vue'

export default {
    name: 'GithubProfile',
    components: {
        UserMiniatures,
        GithubProfilePH,
    },
    data () {
        return {
            profileData: undefined,
            loadingProfile: true,
            error: null
        }
    },
    computed: {
        repositoriesUrl () {
            if (this.profileData) {
                return `${this.profileData.html_url}?tab=repositories`
            }
            return '#'
        },
        followingUrl () {
            if (this.profileData) {
                return this.profileData.following_url.split('{')[0]
            }
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
        },
        goToProfile () {
            window.open(this.profileData.html_url, '_blank').focus();
        }
    },
    created () {
        setTimeout(() => this.getProfile(), 1000)
        setTimeout(() => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
        }, 1000)
    }
}
</script>
