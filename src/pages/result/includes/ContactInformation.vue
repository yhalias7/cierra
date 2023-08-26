<template>
    <section>
        <div class="contacts-container">
            <div class="contact">
                <p class="contact-title">Address</p>
                <p>{{ data.address }}</p>
            </div>
            <div class="contact">
                <p class="contact-title">Phone</p>
                <p>
                    {{ data.phone[0] }}
                    <br>
                    {{ data.phone[1] }}
                </p>
            </div>
        </div>
        <div class="contacts-container">
            <div class="contact">
                <p class="contact-title">Email</p>
                <p> {{ getEmail }} </p>
            </div>
            <div class="contact">
                <p class="contact-title">Website</p>
                <p> {{ data.website }}</p>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            data: {
                address: 'Bachstraße 2, 37081 Göttingen',
                phone: ['+49 551-89999-000', '+49 151 17295 875'],
                website: 'www.cierra.de'
            }
        };
    },
    
    computed: {
        ...mapGetters(['getEmail']),
    },
}
</script>