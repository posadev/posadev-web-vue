<template>
  <div class="sponsor-detail">
    <div class="logo-sponsor">
      <img :src="this.sponsor.pic" :alt="this.sponsor.name" />
    </div>
    <p>{{ this.sponsor.description }}</p>
    <SocialLinks
      class="sponsor-social"
      :info="'More Information'"
      :socialMedia="social"
    />
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
<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '~spectre.css/src/_layout';

.sponsor-detail {
  color: $dark-color;
  height: 100%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    min-height: 75px;
    max-height: 200px;
    margin: {
      top: 25px;
      bottom: 25px;
    }
  }
}

.logo-sponsor {
  flex: 1;
  text-align: left;

  img {
    width: 196px;
    height: 84px;
  }

  @include media-screen-max-width(426px) {
    text-align: center;
    img {
      width: 153px;
      height: 66px;
    }
  }
}

.sponsor-social {
  padding-bottom: 3rem;
  text-align: left;

  @include media-screen-max-width(411px) {
    font-size: 9px;
  }
}
</style>
