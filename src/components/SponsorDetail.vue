<template>
  <div class="sponsor-detail">
    <img :src="this.sponsor.pic" />
    <p class="sponsor-detail">{{ this.sponsor.description }}</p>
    <SocialLinks :info="'More Information'" :socialMedia="social" />
    <AccentActionButton
      id="btn-sponsor"
      class="section-button"
      :info="buttonInfo"
      v-on:button-action="onSponsorClick"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sponsor from '@/data/Sponsor.model';
import AccentActionButton from '@/components/AccentActionButton.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import ButtonInfo from '@/data/ButtonInfo.model';
import { SocialMedia } from '@/data/SocialMedia.type';

@Component({
  components: {
    AccentActionButton,
    SocialLinks
  }
})
export default class SponsorDetail extends Vue {
  @Prop({ required: true })
  private readonly sponsor!: Sponsor;

  private social: SocialMedia = {
    twitter: new URL('https://twitter.com'),
    instagram: new URL('https://instagram.com'),
    facebook: new URL('https://facebook.com')
  };

  get buttonInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('sponsor.buttonText'), true);
  }

  private onSponsorClick() {
    window.open(this.sponsor.url.toString());
  }
}
</script>
<style lang="scss"></style>
