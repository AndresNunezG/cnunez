<template>
    <div class="miniatures">
        <TransitionGroup
            appear
            @before-enter="beforeEnterAnimation"
            @enter="enterAnimation"
            tag="div"
        >
            <div v-for="(user, index) in usersData" :key="user.id" :data-index="index" class="miniature d-inline-block">
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
        </TransitionGroup>
    </div>
</template>

<script>
import gsap from 'gsap'
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
        },
        beforeEnterAnimation(el) {
            el.style.opacity = 0
            el.style.transform = 'translateX(50px)'
        },
        enterAnimation(el, done) {
            gsap.to(el, {
                x: 0,
                opacity: 1,
                onComplete: done,
                delay: 0.2 * el.dataset.index,
            })
        }
    },
    created () {
        this.getUsers()
    }
}
</script>
