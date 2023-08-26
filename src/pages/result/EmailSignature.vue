<template>
    <div class="container">
        <b-row>
            <b-col md="12">
                <div class="title-container">
                    <h3>Your email signature</h3>
                </div>
                <div class="signature-container" ref="signatureContent">
                    <div class="signature-card">
                        <div class="profile-photo">
                            <div class="profile-border"></div>
                            <img :src="placeholderImage" alt="Image" @load="onImageLoad" />
                        </div>
                        <div class="signature-details">
                            <div class="information">
                                <p class="name">{{ getName }}</p>
                                <p class="title">{{ getPosition }}</p>
                                <contact-information></contact-information>
                            </div>
                            <social-media></social-media>
                        </div>
                    </div>
                </div>
                
                <div class="action-container">
                    <b-button
                    class="copy-button"
                    :class="{ 'is-copied': isCopied }"
                    @click="copySignature"
                    >
                    {{ isCopied ? 'Copied' : 'Copy image' }}
                    </b-button>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import html2canvas from 'html2canvas';
import SocialMedia from './includes/SocialMedia'
import ContactInformation from './includes/ContactInformation'

export default {
    components: {
        SocialMedia,
        ContactInformation
    },
    data() {
        return {
            isCopied: false,
            placeholderImage:  require('@/assets/img/profile.png')
        };
    },
    computed: {
        ...mapGetters(['getName', 'getPosition', 'getEmail', 'getProfileImage']),
    },
    mounted() {
        if (!this.getProfileImage || !this.getName) {
            this.$router.push({ name: 'form-signature' });
        }
    },
    methods:{
        onImageLoad() {
            this.placeholderImage = this.getProfileImage;
        },
        async copySignature() {
            this.isCopied = true;
            const elementToCapture = this.$refs.signatureContent;
            const canvas = await html2canvas(elementToCapture);
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'downloaded-image.png';
            link.click();
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/signature.scss";
</style>