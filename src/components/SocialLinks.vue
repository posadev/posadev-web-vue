<template>
  <div class="social">
    <div class="social-text">
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
  height: 32px;
  align-items: center;
  font-weight: bold;
}

.social-text {
  margin-right: 50px;
}

.social-content {
  display: flex;
  justify-content: space-around;
}
</style>
