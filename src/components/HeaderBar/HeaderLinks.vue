<template>
    <ul class="navbar-items m-0 list-unstyled d-flex justify-content-evenly align-items-center">
        <li class="navbar-items__item">
            <RouterLink :to="{ name: 'Home' }"><span :class="classCurrentView('Home')">Home</span></RouterLink>
        </li>
        <li class="navbar-items__item">
            <RouterLink :to="{ name: 'About' }"><span :class="classCurrentView('About')">About</span></RouterLink>
        </li>
        <li class="navbar-items__item">
            <RouterLink :to="{ name: 'Contact' }"><span :class="classCurrentView('Contact')">Contact</span></RouterLink>
        </li>
        <li class="navbar-items__item">
            <button class="btn-custom btn-custom--border-green">
                <RouterLink :to="{ name: 'Projects' }">
                    Projects
                </RouterLink>
            </button>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({currentView: state => state.view})
    },
    methods: {
        classCurrentView (currentView) {
            return this.currentView === currentView ? 'navbar-items__item-selected' : null
        }
    }
}
</script>
