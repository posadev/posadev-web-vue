<template>
  <div class="columns">
    <SponsorBanner
      class="column col-2 col-md-3 col-xs-5"
      v-for="sponsor in sponsors"
      v-bind:key="sponsor.name"
    />
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
