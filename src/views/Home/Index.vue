<template>
    <div>
        <Home />
        <GithubProfile />
        <About />
        <Techstack />
        <Experience />
        <Contact />
    </div>
</template>

<script>
import Home from '@/components/Home/Home.vue'
import About from '@/components/Home/About.vue'
import GithubProfile from '@/components/Home/GithubProfile.vue'
import Techstack from '@/components/Home/Techstack.vue'
import Experience from '@/components/Home/Experience.vue'
import Contact from '@/components/Home/Contact.vue'

export default {
    components: {
        Home,
        GithubProfile,
        About,
        Techstack,
        Experience,
        Contact,
    }
}
</script>

