<template>
    <div class="social-container">
        <div class="img-logo">
            <img src="@/assets/img/logo-2.png" alt="">
        </div>
        <div class="social-media">
            <ul>
                <li v-for="(social, index) in socials" :key="index"><a href="#">{{ social }}</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            socials: ['Instagram', 'Facebook', 'Twitter']
        };
    },
}
</script>