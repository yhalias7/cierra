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
                    <!-- <vue-dropzone 
                        ref="myVueDropzone" 
                        id="dropzone" 
                        class="signature-dropzone"
                        :class="{'hasError' : hasError & !data.imageUrl}"
                        :options="dropzoneOptions" 
                        :useCustomSlot=true 
                        @vdropzone-success="onDropzoneSuccess">
                        <div class="dropzone-custom-content">
                            <img src="@/assets/img/icon.png">
                            <div>
                                <a href="#" class="upload-link">Lade eine Datei</a> hoch oder nutze drag-and-drop
                            </div>
                            <div class="subtitle">PNG, JPEG and JPG are allowed</div>
                        </div>
                    </vue-dropzone> -->
                    <image-dropzone
                        :hasError="hasError"
                        @uploadSuccess="uploadSuccess"
                    >
                    </image-dropzone>
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
// import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
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
            // dropzoneOptions: {
            //     url: 'https://api.imgbb.com/1/upload?key=0191734d3a3acbb1d96464b9dc1f4331',
            //     paramName: 'image',
            //     acceptedFiles: 'image/jpeg, image/jpg, image/png',
            // },
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