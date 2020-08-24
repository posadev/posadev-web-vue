<template>
  <div class="columns containerSponsor">
    <SponsorItem
      class="column"
      v-for="sponsor in sponsors"
      v-bind:key="sponsor.name"
      :sponsor="sponsor"
    />
  </div>
</template>

<script lang="ts">
import SponsorItem from '@/components/SponsorItem.vue';
import { Component, Vue } from 'vue-property-decorator';
import Sponsor from '../data/Sponsor.model';
import sponsors from '@/mocks/Sponsors.mock';

@Component({
  components: { SponsorItem }
})
export default class SponsorList extends Vue {
  get sponsors(): Sponsor[] {
    //FIXME: this is obtained from firebase
    return sponsors;
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';

@mixin query-only-screen-max-width($value-max-width: 768px) {
  @media only screen and (max-width: $value-max-width) {
    @content;
  }
}

.containerSponsor {
  @include query-only-screen-max-width {
    width: 98vw;
  }
  width: 85vw;
  margin: 0 auto;
}
</style>
