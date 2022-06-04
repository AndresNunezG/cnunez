<template>
    <div class="jobslist row">
        <div class="jobslist-header col-12 d-flex justify-content-center my-3">
            <span
                v-for="(job, index) in jobs"
                :key="`${job.companyName}-${index}`"
                @click="() => jobSelectedIndex = index"
                v-pointer
                class="px-2 joblist-header__item"
                :class="{ 'joblist-header__item--selected' : index === jobSelectedIndex }"
            >{{ job.companyName }}</span>
        </div>
        <div class="joblist-body col-12">
            <div class="row">
                <div class="col-4 order-1">
                    <!-- Role -->
                    <div class="joblist-body__item fw-bold mb-1 d-flex justify-content-end align-items-center">
                        <span>{{ jobSelected.roleTitle }}</span>
                        <font-awesome-icon
                            :icon="['fas', 'bolt']"
                            :style="{ color: 'var(--green-1)'}"
                            class="ps-2"
                        ></font-awesome-icon>
                    </div>
                    <!-- Span -->
                    <div class="joblist-body__item fw-bold mb-1 d-flex justify-content-end align-items-center">
                        <p class="m-0">
                            <span>{{ jobSelected.startDate }}</span>
                            <span>&nbsp;-&nbsp;</span>
                            <span>{{ jobSelected.finishData }}</span>
                        </p>
                        <font-awesome-icon
                            :icon="['fas', 'calendar']"
                            :style="{ color: 'var(--green-1)'}"
                            class="ps-2"
                        ></font-awesome-icon>
                    </div>
                    <!-- Website -->
                    <div class="joblist-body__item fw-bold mb-1 d-flex justify-content-end align-items-center">
                        <a :href="jobSelected.websiteLink" target="_blank" rel="noopener noreferrer">Website</a>
                        <font-awesome-icon
                            :icon="['fas', 'globe']"
                            :style="{ color: 'var(--green-1)'}"
                            class="ps-2"
                        ></font-awesome-icon>
                    </div>
                </div>
                <!-- Role Description -->
                <div class="col-6 order-2 border-start">
                    <p
                        v-for="(roleDescriptionItem, index) in jobSelected.roleDescription"
                        :key="index"
                    >
                    <span>{{ roleDescriptionItem }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { jobs } from '@/utils/constants.js'

export default {
    data() {
        return {
            jobs,
            jobSelectedIndex: jobs.length - 1,
        }
    },
    computed: {
        jobSelected() {
            return jobs[this.jobSelectedIndex]
        }
    },
    methods: {
        jobSelectedHeader(index) {
            return jobs[this.jobSelectedIndex] === index
        }
    }
}
</script>
