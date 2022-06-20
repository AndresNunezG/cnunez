<template>
    <div class="entry-blog py-4 px-2 border-bottom">
        <div class="d-flex justify-content-between align-items-center mb-0">
            <h3 v-pointer class="entry-blog-title pb-1 mb-0">
                <a  
                    v-if="entry.externalLink"
                    class="fw-bold"
                    :href="entry.externalLink"
                    target="_blank" rel="noopener noreferrer"
                >{{ entry.title }}</a>
                <a
                    v-else
                    class="fw-bold"
                    href="#"
                    @click.prevent="goToBlogEntry()"
                >{{ entry.title }}</a>
            </h3>
            <div>
                <small class="entry-date monospace fg-green">{{ entry.date }}</small>
            </div>
        </div>
        <div class="entry-tags mb-2 d-flex">
            <div
                class="entry-tag__container"
                v-for="(tag, index) in entry.tags"
                :key="`${index}-${tag}`"
            >
                <span
                    class="entry-tag monospace px-2"
                    :class="{ 'ps-0': index === 0 }"
                >{{ tag }}</span>
                <span
                    class="entry-tag__separator"
                    v-if="index < entry.tags.length - 1"
                >·</span>
            </div>
        </div>
        <p>{{ entry.abstract }}</p>
    </div>
</template>

<script>
import { BlogEntry as BlogEntryType } from '@/utils/propsValidation.js'
import { slugify } from '@/utils/utils.js'

export default {
    name: 'BlogEntry',
    props: {
        entry: {
            type: BlogEntryType,
            required: true,
        }
    },
    methods: {
        goToBlogEntry () {
            console.log("entra")
            const slugifyTitle = slugify(this.entry.title)
            this.$router.push(
                {
                    name: 'BlogEntry',
                    params: {
                        blogEntryTitle: slugifyTitle,
                        blogEntryId: this.entry.id,
                    } 
                }
            )
        },
    },
}
</script>


<style scoped>
.entry-blog:hover {
    background-color: var(--color-background-soft);
}
.entry-blog:hover .entry-blog-title {
    color: var(--green-1);
}
.entry-date {
    opacity: 0.8;
}
</style>
