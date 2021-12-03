<template>
    <div>
        <youtube v-if="isContentTypeOf === 'youtube'" :video-id="videoId" />
        <instagram-embed v-if="isContentTypeOf === 'instagram'" :url="url"/>
        <tweet v-if="isContentTypeOf === 'twitter'" :id="tweetId"/>
        <div v-if="isContentTypeOf === 'NixContent'">
            Der Inhalt kann nicht Dargestellt werden... sorry :/
        </div>
    </div>
</template>

<script>
import InstagramEmbed from 'vue-instagram-embed';
import { getIdFromURL } from 'vue-youtube-embed';
import { Tweet } from 'vue-tweet-embed';

export default {
    name: 'KuchenInhaltsDarsteller',    
    components: {
        InstagramEmbed,
        Tweet,
    },
    props: {
        url: {
            type: String,
            required: true,
        }
    },
    computed: {
        isContentTypeOf() {
            console.log('Url = ' + this.url);
            const tempUrl = new URL(this.url);
            const host = tempUrl.host;
            if(host.includes('youtube')) return 'youtube';
            if(host.includes('instagram')) return 'instagram';
            if(host.includes('twitter')) return 'twitter';
            return 'NixContent';
        },
        videoId() {
            return getIdFromURL(this.url);
        },
        tweetId() {
            return this.url.split('/')[this.url.split('/').length - 1];
        }
    },
}
</script>