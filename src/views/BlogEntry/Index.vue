<template>
    <div>
        <div v-if="blogPost" class="py-5">
            <h1 class="fw-bold">{{ blogPost.title }}</h1>
            <p class="monospace fg-green mb-2 pb-3 border-bottom">{{ blogPost.date }}</p>
        </div>
        <div id="entrytext"></div>
    </div>
</template>

<script>
import db from '@/firestore/firebaseApp.js'
import { dateOptions } from '@/utils/utils.js'

import { doc, getDoc } from "firebase/firestore"
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default {
    name: "BlogPost",
    data() {
        return {
            blogPostId: "",
            blogPost: null,
        }
    },
    methods: {
        async getBlogPost() {
            try {
                const docRef = doc(db, "blogs", this.blogPostId)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    this.blogPost = {...docSnap.data(), id: this.blogPostId}
                    this.blogPost.date = new Date(docSnap.data().date.seconds * 1000).toLocaleString('en-US', dateOptions)
                    this.setMarkedEntry()
                } else {
                    console.log("No such document")
                }
            } catch (e) {
                console.log(e)
            }
        },
        setMarkedEntry () {
            const markedEntryEl = document.querySelector('div#entrytext')
            if (this.blogPost.entryText && markedEntryEl) {
                const markedText = this.blogPost.entryText.replaceAll("\\n", "\n")
                markedEntryEl.innerHTML = DOMPurify.sanitize(marked.parse(markedText))
            }
        }
    },
    mounted () {
        this.blogPostId = this.$route.params.blogEntryId
        this.getBlogPost()
    }
}
</script>

<style>
#entrytext h4,
#entrytext h3,
#entrytext h2,
#entrytext h1  {
    font-weight: bolder;
    padding: 1.2rem 0 0.6rem 0;
}
#entrytext > pre code {
    background-color: var(--color-background-soft);
    color: var(--color-heading);
    border: 1px solid #999;
    display: block;
    padding: 0px 20px 20px 20px;
}
</style>