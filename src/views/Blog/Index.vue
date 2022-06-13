<template>
    <div class="blog-title mb-5 ps-2">
        <h1 class="home__title mb-md-0 mb-3">Blog</h1>
        <p
            class="monospace text-md-start text-center w-100"
        >Articles, handbooks and stuff that i have wrote.</p>
    </div>
    <button class="btn btn-primary" @click="testFirestore">TestFirestore</button>
    <button class="btn btn-primary ms-3" @click="getBlogs">getBlogs</button>
    <BlogsList />
</template>

<script>
import db from '@/firestore/firebaseApp.js'
import BlogsList from '@/components/Blog/BlogsList.vue'
import { collection, addDoc, query, getDocs } from "firebase/firestore";

export default {
    name: "Blog",
    components: {
        BlogsList,
    },
    methods: {
        testFirestore: async () => {
            try {
                console.log("Entra acá")
                const docRef = await addDoc(collection(db, "users"), {
                    first: "Ada",
                    last: "Lovelace",
                    born: 1815
                });
                console.log("pasa acá")
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }
        },
        getBlogs: async () => {
            try {
                console.log("getBlogs")
                const q = query(collection(db, "users"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                })
            } catch (e) {
                console.error("Error reading collections: ", e);
            }
        }
    }
}
</script>

<style scoped>
.blog-title {
    animation: 500ms ease-out 0s 1 slideFromLeft;
}
</style>