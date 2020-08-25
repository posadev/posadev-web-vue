<template>
  <div>
    <span>{{ legend }}</span>
    <SocialButton
      v-for="(url, key) in socialMedia"
      v-bind:key="key"
      :social-link="mapSocial(key, url)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  SocialLink,
  SocialMedia,
  SocialNetwork
} from '@/data/SocialMedia.type';
import SocialButton from '@/components/SocialButton.vue';

@Component({
  components: { SocialButton }
})
export default class SocialLinks extends Vue {
  @Prop({ required: true })
  private legend!: string;

  @Prop({ required: true })
  private socialMedia!: SocialMedia;

  private mapSocial(key: SocialNetwork, url: URL): SocialLink {
    return { url, social: key };
  }
}
</script>

<style lang="scss"></style>
