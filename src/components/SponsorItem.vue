<template>
  <div class="sponsor" @click="goToLink">
    <img class="photosponsor" :src="this.sponsor.pic" :alt="this.sponsor.name" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sponsor from '@/data/Sponsor.model';

@Component
export default class SponsorItem extends Vue {
  @Prop({ required: true }) private sponsor!: Sponsor;

  private goToLink(): void {
    window.open(this.sponsor.url.toString());
  }
}
</script>
<style lang="scss">

@mixin query-only-screen-max-width($value-max-width: 1024px) {
  @media only screen and (max-width: $value-max-width) {
    @content;
  }
}
.sponsor{
  @include query-only-screen-max-width {
    width: 138px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
  }
  width:196px;
  height: 84px;
  .photosponsor{
    @include query-only-screen-max-width {
      width: 136.71px;
      height: 50.15px;
    }
    width: 196px;
    height: 84px;
  }
}
</style>
