<template>
    <ul class="navbar-items py-4 list-unstyled d-flex justify-content-evenly align-items-center">
        <li class="navbar-items__item">
            <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        </li>
        <li class="navbar-items__item">
            <RouterLink :to="{ name: 'About' }">About</RouterLink>
        </li>
        <li class="navbar-items__item">
            <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
        </li>
        <li class="navbar-items__item">
            <button class="navbar-items__item-btn">
                <RouterLink :to="{ name: 'Projects' }">
                    Projects
                </RouterLink>
            </button>
        </li>
    </ul>
</template>
