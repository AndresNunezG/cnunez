<template>
    <!-- Github Profile -->
    <div class="github-profile py-3 px-2 mt-4 mb-3">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-12">
                <div class="row align-items-center">
                    <div class="github-profile__avatar placeholder-glow d-flex justify-content-center rounded-circle col-lg col-md-6">
                        <div
                            alt="github-avatar"
                            class="github-profile__image placeholder p-1 rounded-circle"
                            v-pointer
                        ></div>
                    </div>
                    <div class="placeholder-glow col-lg d-lg-block text-lg-start col-md-6 text-center">
                        <p class="col-6 mb-lg-3 mt-md-0 mt-2 placeholder"></p>
                        <p>
                            <font-awesome-icon :icon="['fa', 'location-dot']"></font-awesome-icon>
                            &nbsp;
                            <span class="placeholder col-6"></span>
                        </p>
                        <p>
                            <font-awesome-icon :icon="['fa', 'building']"></font-awesome-icon>
                            &nbsp;
                            <span class="placeholder col-6"></span>
                        </p>
                        <p>
                            <font-awesome-icon :icon="['fa', 'book']"></font-awesome-icon>
                            &nbsp;
                            <span class="text-decoration-underline">
                                <span class="placeholder col-6"></span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="placeholder-glow col-lg d-lg-block mt-lg-0 col-md-6 mt-md-4 mb-md-0 col-12 mb-3 d-flex flex-column align-items-center">
                <p class="w-50">
                    <span class="placeholder col-8 mb-2"></span>
                    &nbsp;
                    <span class="placeholder col-1 mb-2"></span>
                </p>
                <UserMiniaturesPH />
            </div>
            <div class="placeholder-glow col-lg d-lg-block mt-lg-0 col-md-6 mt-md-4 col-12 d-flex flex-column align-items-center">
                <p class="w-50">
                    <span class="placeholder col-8 mb-2"></span>
                    &nbsp;
                    <span class="placeholder col-1 mb-2"></span>
                </p>
                <UserMiniaturesPH />
            </div>
        </div>
    </div>
</template>

<script>
import UserMiniaturesPH from './UserMiniaturesPH.vue'

export default {
    name: 'GithubProfilePH',
    components: {
        UserMiniaturesPH,
    }
}
</script>
