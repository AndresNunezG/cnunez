<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <span class="about-line"></span>
        <div class="about-sphere rounded-circle d-flex justify-content-center align-items-center">
            <font-awesome-icon :icon="['fa', 'user']" :style="{ color: '#FFFFFF'}"></font-awesome-icon>
        </div>
    </div>
    <h2 class="section__subtitle text-center mt-2">Bio</h2>
    <p class="m-0">
        Hi! i'm Andrés Núñez, based in Bogotá Colombia, where i was born {{ age() }} years ago.
        In 2016 I started to learn the Python programming language at university, since then
        I try to apply software solutions in a lot of problem situations to be able to solve
        them just once, I have always liked to solve technical problems, that's why in 2021 I
        graduated in electronic engineering at Colombian School of Engineering. A year before
        was the beginning of my self-taught way through software engineering, specially full stack
        web development. I did my internship in a telecommunications company supporting RPA
        development area, i'm currently working remotely as a web developer doing mighty things
        for Colombian and American clients. 
    </p>
</template>

<script>
export default {
    methods: {
        age () {
            const birthday = new Date(1998, 11, 17)
            const currentDate = new Date()
            const monthDelta = currentDate.getMonth() - birthday.getMonth()
            const dayDelta = currentDate.getDate() - birthday.getDate()
            let age = (currentDate.getFullYear() - birthday.getFullYear()) - 1
            if (monthDelta >= 0 && dayDelta >= 0) {
                age++
            }
            return age
        }
    }
}
</script>

