<template>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 list-unstyled d-flex align-items-center">
        <li class="navbar-items__item ms-0 ms-auto nav-item">
            <RouterLink :to="{ name: 'Home' }"><span :class="classCurrentView('Home')">Home</span></RouterLink>
        </li>
        <li class="navbar-items__item ms-0 ms-auto nav-item">
            <RouterLink :to="{ name: 'About' }"><span :class="classCurrentView('About')">About</span></RouterLink>
        </li>
        <li class="navbar-items__item ms-0 ms-auto nav-item">
            <RouterLink :to="{ name: 'Contact' }"><span :class="classCurrentView('Contact')">Contact</span></RouterLink>
        </li>
        <li class="navbar-items__item ms-0 ms-auto nav-item px-lg-3 px-0">
            <button class="btn-custom px-3 py-1 btn-custom--border-green">
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
