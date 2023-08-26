<template>
    <section>
        <div class="form-container">
            <div class="form-title-container">
                <p class="form-title-text">Please complete the following information</p>
            </div>
            <b-form @submit.prevent="submitForm">
                <div class="form-inputs">
                    <b-form-group>
                        <b-form-input v-model="data.name" placeholder="Name" class="mb-3 mt-3" required></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input v-model="data.position" placeholder="Position"  class="mb-3" required></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input v-model="data.email" placeholder="Email" type="email" class="mb-3" required></b-form-input>
                    </b-form-group>
                    <image-dropzone
                        :hasError="hasError"
                        @uploadSuccess="uploadSuccess"
                    />
                </div>
            <div class="form-action">
                <b-button  type="submit" class="generate-button">Generate</b-button>
            </div>
            </b-form>
      </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import ImageDropzone from './includes/ImageDropzone'
export default {
    components: {
        ImageDropzone
    },
    data() {
        return {
            data: {
                name: null,
                position: null,
                email: null,
                imageUrl: null
            },
            hasError: false,
        };
    },
    methods: {
        ...mapActions(['updateName', 'updatePosition', 'updateEmail', 'updateProfileImage']),
        uploadSuccess(imageUrl) {
            this.data.imageUrl = imageUrl;
        },
        submitForm(e) {
            e.preventDefault();
            if (!this.data.imageUrl) {
                this.hasError = true;
                alert('Please upload an image!');
            } else {
                this.updateName(this.data.name); 
                this.updatePosition(this.data.position); 
                this.updateEmail(this.data.email); 
                this.updateProfileImage(this.data.imageUrl); 
                this.$router.push({ name: 'email-signature' });
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import "@/assets/scss/form.scss";
</style>