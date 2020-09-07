<template>
  <div class="sponsor-section">
    <p class="title-section">{{ $t('sponsor.titleSection') }}</p>
    <SponsorInfo
      v-for="(sponsor, index) in this.sponsors"
      v-bind:sponsor="sponsor"
      v-bind:key="sponsor.name"
      :alignLeft="index % 2 !== 0"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sponsor from '@/data/Sponsor.model';
import SponsorInfo from '@/components/SponsorInfo.vue';
import sponsors from '@/mocks/Sponsors.mock';

@Component({
  components: {
    SponsorInfo
  }
})
export default class Sponsors extends Vue {
  get sponsors(): Sponsor[] {
    //FIXME: this is obtained from firebase
    return sponsors;
  }
  // @Inject('communities')
  // private service!: CommunityService;
  // private communities: Community[] = [];

  // created() {
  //   this.service.findAll().then((res: Community[]) => {
  //     this.communities.push(...res);
  //   });
  // }
}
</script>

<style lang="scss"></style>
