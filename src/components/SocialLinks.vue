<template>
  <div class="social">
    <div>
      <span>{{ info }}</span>
    </div>
    <div class="social-content">
      <SocialButton
        v-for="(url, key) in socialMedia"
        v-bind:key="key"
        :social-link="mapSocial(key, url)"
      />
    </div>
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
  private info!: string;

  @Prop({ required: true })
  private socialMedia!: SocialMedia;

  private mapSocial(key: SocialNetwork, url: URL): SocialLink {
    return { url, social: key };
  }
}
</script>

<style lang="scss">
.social {
  display: flex;
  flex-direction: row;
  height: 32px;
  // justify-content: center;
  align-items: center;
  font-weight: bold;
}
.social-content {
  display: flex;
  flex-direction: row;
  margin-left: 50px;
}
</style>
