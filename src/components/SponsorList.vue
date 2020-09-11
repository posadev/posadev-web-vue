<template>
  <div class="columns">
    <router-link
      :to="{ name: 'sponsors', params: { id: sponsor.id } }"
      v-for="sponsor in sponsors"
      v-bind:key="sponsor.id"
      class="column col-2 col-md-3 col-xs-5"
    >
      <SponsorBanner :sponsor="sponsor" />
    </router-link>
  </div>
</template>

<script lang="ts">
import SponsorBanner from '@/components/SponsorBanner.vue';
import { Component, Vue } from 'vue-property-decorator';
import Sponsor from '../data/Sponsor.model';
import sponsors from '@/mocks/Sponsors.mock';

@Component({
  components: { SponsorBanner }
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
.columns {
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
}
</style>
