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
                <div class="col-md-4 col-12 order-1">
                    <!-- Role -->
                    <div class="row mx-0 px-0">
                        <div class="joblist-body__item fw-bold mx-0 px-0 mb-1 d-flex justify-content-md-end justify-content-start align-items-center">
                            <span class="order-md-1 order-2">{{ jobSelected.roleTitle }}</span>
                            <font-awesome-icon
                                :icon="['fas', 'bolt']"
                                :style="{ color: 'var(--green-1)'}"
                                class="order-md-2 order-1 ps-md-2 pe-md-0 pe-2"
                            ></font-awesome-icon>
                        </div>
                    </div>
                    <!-- Span -->
                    <div class="row mx-0 px-0">
                        <div class="joblist-body__item fw-bold mx-0 px-0 mb-1 d-flex justify-content-md-end justify-content-start align-items-center">
                            <p class="order-md-1 order-2 m-0">
                                <span>{{ jobSelected.startDate }}</span>
                                <span>&nbsp;-&nbsp;</span>
                                <span>{{ jobSelected.finishData }}</span>
                            </p>
                            <font-awesome-icon
                                :icon="['fas', 'calendar']"
                                :style="{ color: 'var(--green-1)'}"
                                class="order-md-2 order-1 ps-md-2 pe-md-0 pe-2"
                            ></font-awesome-icon>
                        </div>
                    </div>
                    <!-- Website -->
                    <div class="row mx-0 px-0">
                        <div class="joblist-body__item fw-bold mx-0 px-0 mb-1 d-flex justify-content-md-end justify-content-start align-items-center">
                            <a class="order-md-1 order-2" :href="jobSelected.websiteLink" target="_blank" rel="noopener noreferrer">Website</a>
                            <font-awesome-icon
                                :icon="['fas', 'globe']"
                                :style="{ color: 'var(--green-1)'}"
                                class="order-md-2 order-1 ps-md-2 pe-md-0 pe-2"
                            ></font-awesome-icon>
                        </div>
                    </div>
                </div>
                <!-- Role Description -->
                <div class="col-md-6 col-12 order-2 text-left">
                    <p
                        v-for="(roleDescriptionItem, index) in jobSelected.roleDescription"
                        :key="index"
                    >
                    <span>{{ index + 1 }}.&nbsp;{{ roleDescriptionItem }}</span>
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
