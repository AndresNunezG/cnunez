<template>
    <div v-if="blogPost">
        <h1>{{ blogPost.title }}</h1>
        <p>{{ blogPost.date }}</p>
    </div>
    <div id="entrytext"></div>
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