<template>
  <div class=" columns containerSponsor">
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
@import '../../node_modules/spectre.css/src/_layout';
</style>
