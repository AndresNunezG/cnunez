<template>
    <div class="entry-blog py-4 px-2 border-bottom">
        <div class="d-flex justify-content-between align-items-center mb-0">
            <h3 v-pointer class="entry-blog-title fw-bold pb-1 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div>
                <small class="entry-date monospace fg-green">December 17, 2019</small>
            </div>
        </div>
        <div class="mb-2">
            <span class="entry-tag monospace px-2">Swapps</span>
            <span class="entry-tag__separator">·</span>
            <span class="entry-tag monospace px-2">Web performance</span>
            <span class="entry-tag__separator">·</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et
            incidunt quia quo quisquam nam, error qui perferendis corrupti,
            exercitationem corporis magni distinctio consequatur quidem.
        </p>
    </div>
</template>

<script>
export default {
    name: 'BlogEntry',
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
.entry-tag:first-child {
    padding-left: 0 !important;
}
.entry-tag:last-child {
    padding-right: 0 !important;
}
.entry-tag__separator:last-child {
    display: none;
}
</style>
