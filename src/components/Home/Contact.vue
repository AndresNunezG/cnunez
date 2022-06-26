<template>
    <!-- toast messages -->
    <Transition name="toast-error-message">
        <Toast
            v-if="contactForm.errorEmail || contactForm.errorMessage"
            :messages="[contactForm.errorEmail, contactForm.errorMessage]"
            type="error"
        />
    </Transition>
    <Transition name="toast-error-message">
        <Toast
            v-if="emailSended && emailError && emailResponse"
            :messages="['Ops! something went wrong, try again later']"
            type="error"
        />
    </Transition>
    <Transition name="toast-success-message">
        <Toast
            v-if="emailSended && !emailError"
            :messages="['Thanks you for your message. We will be in touch soon']"
            type="success"
        />
    </Transition>

    <div class="contact d-flex flex-column justify-content-center align-items-center mt-2">
        <span class="about-line"></span>
        <div class="about-sphere rounded-circle d-flex justify-content-center align-items-center">
            <font-awesome-icon :icon="['fas', 'comment']" :style="{ color: '#FFFFFF'}"></font-awesome-icon>
        </div>
    </div>
    <h2 class="section__subtitle text-center mt-2">Get In Touch</h2>
    <div class="row mb-5">
        <form ref="contactForm" id="contact-form" @submit.prevent="validateContactForm">
            <div class="row justify-content-center">
                <div class="form-group mb-3 col-md-8 col-12">
                    <label class="form-label">Email&nbsp;<span class="monospace">*</span></label>
                    <input
                        v-model="contactForm.email"
                        name="user_email"
                        type="email"
                        class="form-control contact-form__input input rounded-pill"
                        placeholder="Let me know your email"
                    />
                </div>
                <div class="form-group mb-4 col-md-8 col-12">
                    <label class="form-label">Message&nbsp;<span class="monospace">*</span></label>
                    <input
                        v-model="contactForm.message"
                        type="text"
                        name="user_message"
                        class="form-control contact-form__input rounded-pill"
                        placeholder="Hi! i'd like to connect"
                    />
                </div>
                <div class="form-group col-md-8 col-12">
                    <input type="submit" class="btn px-5 btn--submit rounded-pill" value="Send" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

import Toast from '@/components/Toast.vue'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default {
    components: {
        Toast,
    },
    data() {
        return {
            contactForm: {
                email: "",
                message: "",
                errorEmail: null,
                errorMessage: null,
            },
            emailResponse: "",
            emailError: null,
            emailSended: false,
        }
    },
    methods: {
        validateContactForm () {
            if (!this.contactForm.email) {
                this.contactForm.errorEmail = 'Email is mandatory'
                setTimeout(() => this.contactForm.errorEmail = null, 5000)
            } else {
                this.contactForm.errorEmail = null
            }
            if (!this.contactForm.message) {
                this.contactForm.errorMessage = 'Let me know how we can collaborate'
                setTimeout(() => this.contactForm.errorMessage = null, 5000)
            } else {
                this.contactForm.errorMessage = null
            }

            if (!this.contactForm.errorEmail && !this.contactForm.errorMessage) {
                this.sendContactEmail()
            }
        },
        sendContactEmail () {
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this.$refs.contactForm, EMAILJS_PUBLIC_KEY)
                .then((response) => {this.emailResponse = response.text; this.emailError = false})
                .catch((error) => {this.emailResponse = error.text; this.emailError = true})
                .finally(() => {
                        this.emailSended = true
                        setTimeout(() => {
                            this.emailResponse = ""
                            this.emailError = null
                            this.emailSended = false
                            this.contactForm.email = ""
                            this.contactForm.message = ""
                            this.contactForm.errorEmail = null
                            this.contactForm.errorMessage = null
                        }, 8000)
                    })
        }
    },
}
</script>

<style scoped>
/* TOAST SUCCESS */
.toast-success-message-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-success-message-enter-to {
    opacity: 1;
    transform: translateY(0px);
}
.toast-success-message-enter-active {
    transition: all 0.3s ease;
}
.toast-success-message-leave-from {
    opacity: 1;
    transform: translateY(0px);
}
.toast-success-message-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-success-message-leave-active {
    transition: all 0.3s ease;
}

/* TOAST ERROR */
.toast-error-message-enter-active {
    animation: wobble 0.8s ease;
}
.toast-error-message-leave-from {
    opacity: 1;
    transform: translateY(0px);
}
.toast-error-message-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-error-message-leave-active {
    transition: all 0.3s ease;
}
</style>
