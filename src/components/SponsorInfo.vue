<template>
  <div
    v-bind:class="[
      'sponsor-card-box',
      { 'left-aligned': alignLeft, 'right-aligned': !alignLeft }
    ]"
  >
    <div class="sponsor-card-image">
      <img class="img-fit-cover" :src="this.sponsor.landingImageUrl" />
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

  @Prop()
  private alignLeft!: boolean;
}
</script>
<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';
@import '~spectre.css/src/_media.scss';

.sponsor-card-box {
  display: flex;
  width: 100%;
  margin: {
    top: 40px;
  }

  @include media-screen-max-width {
    flex-direction: column;
  }
}

.right-aligned {
  flex-direction: row;
  @include media-screen-max-width {
    flex-direction: column;
  }
}

.left-aligned {
  flex-direction: row-reverse;
  @include media-screen-max-width {
    flex-direction: column;
  }
}

.sponsor-card-image {
  flex: 1;
  img {
    width: 420px;
    height: 400px;
  }

  @include media-screen-max-width {
    img {
      width: 100%;
      height: 100%;
      margin: {
        bottom: 10px;
      }
    }
  }
}

.sponsor-card-detail {
  flex: 3;
}
</style>
