<template>
  <div class="sponsor-section">
    <ViewHeader :header-texts="headerText" />
    <SponsorInfo :sponsor="sponsor" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sponsor from '@/data/Sponsor.model';
import SponsorInfo from '@/components/SponsorInfo.vue';
import sponsors from '@/mocks/Sponsors.mock';
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';

@Component({
  components: {
    ViewHeader,
    SponsorInfo
  }
})
export default class Sponsors extends Vue {
  private get headerText() {
    return new TitleTexts(
      this.$t('sponsor.titleSection'),
      this.$t('sponsor.subtitleSection')
    );
  }

  get sponsor(): Sponsor {
    //FIXME: this is obtained from firebase
    return sponsors[0];
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.sponsor-section {
  margin: {
    right: 45px;
    bottom: 60px;
    left: 45px;
  }
  @include media-screen-max-width(411px) {
    margin: {
      top: 45px;
      bottom: 45px;
    }
  }
}

.title-section {
  font-size: 24px;
  text-align: center;
  color: $dark-color;
  display: block;
  padding: 36px;
  @include media-screen-max-width(411px) {
    display: none;
  }
}
</style>
