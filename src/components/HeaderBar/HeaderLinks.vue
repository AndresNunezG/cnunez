<template>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 list-unstyled d-flex align-items-center">
        <li class="navbar-items__item ms-0 ms-auto nav-item">
            <RouterLink :to="{ name: 'Home' }"><span :class="classCurrentView('Home')">Home</span></RouterLink>
        </li>
        <li class="navbar-items__item ms-0 ms-auto nav-item px-lg-3 px-0">
            <RouterLink :to="{ name: 'Projects' }">
                <span :class="classCurrentView('Projects')">Projects</span>
            </RouterLink>
        </li>
        <li class="navbar-items__item ms-0 ms-auto nav-item">
            <div v-if="darkTheme" @click="toggleThemes()" class="btn-theme btn-theme--light rounded d-flex align-items-center justify-content-center p-1" v-pointer>
                <font-awesome-icon :icon="['fa', 'lightbulb']" :style="{height: '20px', color: 'var(--color-background)'}"></font-awesome-icon>
            </div>
            <div v-else @click="toggleThemes()" class="btn-theme btn-theme--dark rounded d-flex align-items-center justify-content-center p-1" v-pointer>
                <font-awesome-icon :icon="['fa', 'moon']" :style="{height: '20px', color: 'var(--color-background)'}"></font-awesome-icon>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            darkTheme: true,
        }
    },
    computed: {
        ...mapState({currentView: state => state.view})
    },
    methods: {
        classCurrentView (currentView) {
            return this.currentView === currentView ? 'navbar-items__item-selected' : null
        },
        toggleThemes () {
            if (document.documentElement.classList.contains("light")) {
                document.documentElement.classList.remove("light")
                document.documentElement.classList.add("dark")
                this.darkTheme = true
            } else if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark")
                document.documentElement.classList.add("light")
                this.darkTheme = false
            } else {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add("light")
                    this.darkTheme = false
                } else {
                    document.documentElement.classList.add("dark")
                    this.darkTheme = true
                }
            }
        }
    },
    created () {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.darkTheme = true
        } else {
            this.darkTheme = false
        }
    }
}
</script>
