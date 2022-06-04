<template>
    <div class="home mt-3 mb-5 d-flex flex-column align-items-center">
        <span class="home__greeting d-sm-block d-flex justify-content-center">Hi there, i'm</span>
        <h1 class="home__title">Andrés Camilo</h1>
        <div class="home__subtitle">
            <span class="home__subtitle-text">I'm a&nbsp;</span>
            <span class="fw-bold font-monospace home__subtitle-text">software developer and engineer</span>
            <span class="home__subtitle-text">,&nbsp;currently building mighty things with top practices that improve human/tech relationship All this from Colombia remotely based.</span>
        </div>
        <div class="home__button mt-4">
            <button @click="scrollToContact" :class="'btn-custom-app'">Get in touch</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        scrollToContact() {
            const contactSection = document.querySelector('div.contact')
            if (contactSection) {
                contactSection.scrollIntoView()
            }
        }
    }
}
</script>

<style scoped>
.home {
    animation: 1000ms ease-out 0s 1 slideFromBottom;
}
</style>
