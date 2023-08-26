<template>
    <vue-dropzone 
        ref="myVueDropzone" 
        id="dropzone" 
        class="signature-dropzone"
        :class="{'hasError' : hasError & !imageUrl}"
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
    </vue-dropzone>
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
    components: {
        vueDropzone: vue2Dropzone
    },
    props: {
        hasError: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            dropzoneOptions: {
                url: 'https://api.imgbb.com/1/upload?key=0191734d3a3acbb1d96464b9dc1f4331',
                paramName: 'image',
                acceptedFiles: 'image/jpeg, image/jpg, image/png',
            },
            imageUrl: null,
        };
    },
    methods: {
        onDropzoneSuccess(file, response) {
            this.imageUrl = response.data.image.url;
            this.$emit('uploadSuccess', this.imageUrl);
        },
    },
}
</script>
<style scoped lang="scss">
    @import "@/assets/scss/form.scss";
</style>