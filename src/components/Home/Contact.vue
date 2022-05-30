<template>
    <div class="contact d-flex flex-column justify-content-center align-items-center mt-2">
        <span class="about-line"></span>
        <div class="about-sphere rounded-circle d-flex justify-content-center align-items-center">
            <font-awesome-icon :icon="['fas', 'comment']" :style="{ color: '#FFFFFF'}"></font-awesome-icon>
        </div>
    </div>
    <h2 class="section__subtitle text-center mt-2">Contact</h2>
    <div class="row">
        <form id="first_name contact-form" @submit.prevent="validateContactForm">
            <div class="row justify-content-center">
                <div class="form-group mb-3 col-md-8 col-12">
                    <label class="form-label">Email&nbsp;<span class="monospace">*</span></label>
                    <input
                        v-model="contactForm.email"
                        type="email"
                        class="form-control contact-form__input input rounded-pill"
                        :class="{ 'input-error': contactForm.errorEmail }"
                        @click="() => contactForm.errorEmail = null"
                        placeholder="Let me know your email"
                    />
                    <div v-if="contactForm.errorEmail" class="px-2 mt-2">
                        <span>{{ contactForm.errorEmail }}</span>
                    </div>
                </div>
                <div class="form-group mb-4 col-md-8 col-12">
                    <label class="form-label">Message&nbsp;<span class="monospace">*</span></label>
                    <input
                        v-model="contactForm.message"
                        type="text"
                        class="form-control contact-form__input rounded-pill"
                        :class="{ 'input-error': contactForm.errorMessage }"
                        @click="() => contactForm.errorMessage = null"
                        placeholder="Hi! i'd like to connect"
                    />
                    <div v-if="contactForm.errorMessage" class="px-2 mt-2">
                        <span>{{ contactForm.errorMessage }}</span>
                    </div>
                </div>
                <div class="form-group col-md-8 col-12">
                    <button type="submit" class="btn px-4 btn--submit rounded-pill">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactForm: {
                email: "",
                message: "",
                errorEmail: null,
                errorMessage: null,
            }
        }
    },
    methods: {
        validateContactForm () {
            if (!this.contactForm.email) {
                this.contactForm.errorEmail = 'I need a way to answer you, email is mandatory'
            } else {
                this.contactForm.errorEmail = null
            }
            if (!this.contactForm.message) {
                this.contactForm.errorMessage = 'Let me know how we can collaborate'
            } else {
                this.contactForm.errorMessage = null
            }

            if (!this.contactForm.errorEmail && !this.contactForm.errorMessage) {
                this.sendContactEmail()
            }
        },
        sendContactEmail () {
            const { email, message } = this.contactForm
            console.log(`Sending email... ${email} ${message}`)
        }
    },
}
</script>

<style scoped>
.input-error {
    border-color: #DC3444;
    box-shadow: 0 0 0 0.25rem rgb(220 52 68 / 25%);
}
</style>
