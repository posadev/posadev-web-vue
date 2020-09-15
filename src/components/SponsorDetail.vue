<template>
  <div class="sponsor-detail">
    <div class="logo-sponsor">
      <img :src="this.sponsor.bannerUrl" :alt="this.sponsor.name" />
    </div>
    <p>{{ this.sponsor.description }}</p>
    <SocialLinks
      class="sponsor-social"
      :info="'More Information'"
      :socialMedia="this.sponsor.socialMedia"
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

@Component({
  components: {
    AccentActionButton,
    SocialLinks
  }
})
export default class SponsorDetail extends Vue {
  @Prop({ required: true })
  private readonly sponsor!: Sponsor;

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
  width: 35%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    margin: {
      top: 25px;
      bottom: 25px;
    }
  }

  @include media-screen-max-width(730px){
    width: 90%;
  }
}

.logo-sponsor {
  flex: 1;
  text-align: left;

  img {
    width: 196px;
  }

  @include media-screen-max-width(426px) {
    text-align: center;
  }
}

.sponsor-social {
  padding-bottom: 3rem;
  padding-top: 2rem;
  text-align: left;

  @include media-screen-max-width(411px) {
    font-size: 9px;
  }
}
</style>
