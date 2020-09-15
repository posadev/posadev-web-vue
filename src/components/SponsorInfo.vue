<template>
  <div class="sponsor-card-box">
    <div class="sponsor-card-image">
      <img
        class="img-fit-cover"
        :src="this.sponsor.landingImageUrl"
        :alt="this.sponsor.name"
      />
    </div>
    <SponsorDetail class="sponsor-card-detail" :sponsor="this.sponsor" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SponsorDetail from '@/components/SponsorDetail.vue';
import Sponsor from '@/data/Sponsor.model';

@Component({
  components: {
    SponsorDetail
  }
})
export default class SponsorInfo extends Vue {
  @Prop({ required: true })
  private sponsor!: Sponsor;
}
</script>
<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '~spectre.css/src/_media.scss';

.sponsor-card-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 70%;
  margin: {
    top: 40px;
  }

  @include media-screen-max-width(426px) {
    flex-direction: column;
  }
}

.sponsor-card-image {
  padding-right: 2rem;
  img {
    width: 420px;
    height: 400px;
  }

  @include media-screen-max-width(426px) {
    padding-right: 0;
    img {
      width: 310px;
      height: 300px;
      margin-bottom: 1rem;
    }
  }
}
</style>
