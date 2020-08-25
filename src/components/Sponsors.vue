<template>
  <div class="container">
    <div class="columns">
      <SponsorItem
        v-for="sponsor in sponsors"
        v-bind:key="sponsor.name"
        :sponsor="sponsor"
      />
    </div>
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
</style>
