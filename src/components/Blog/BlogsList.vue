<template>
    <button class="btn btn-primary ms-3" @click="getBlogs">getBlogs</button>
    <p id="test"></p>
    <div v-if="isLoadingBlogs">
        <BlogEntryPH v-for="index in 3" :key="index" />
    </div>
    <div v-if="!isLoadingBlogs && blogEntries">
        <BlogEntry
            v-for="blogEntry in blogEntries"
            :key="blogEntry.id"
            :entry="blogEntry"
        />
    </div>
</template>

<script>
import db from '@/firestore/firebaseApp.js'

import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { marked } from 'marked'
import DOMPurify from 'dompurify'

import BlogEntry from './BlogEntry.vue'
import BlogEntryPH from './BlogEntryPH.vue'

export default {
    name: 'BlogsList',
    components: {
        BlogEntry,
        BlogEntryPH,
    },
    data() {
        return {
            isLoadingBlogs: true,
            blogEntries: [],
        }
    },
    methods: {
        getBlogs: async () => {
            try {
                const q = query(collection(db, "blogs"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                })
            } catch (e) {
                throw error
            }
        }
    },
    mounted() {
        const p = document.querySelector('p#test')
        p.innerHTML = DOMPurify.sanitize(marked.parse('# Marked in Node.js\n\nRendered by **marked**.'))
    },
}
</script>
