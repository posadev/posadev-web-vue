<template>
  <div
    v-bind:class="[
      'sponsor-card-box',
      { 'left-aligned': alignLeft, 'right-aligned': !alignLeft }
    ]"
  >
    <div class="sponsor-card-image">
      <img class="img-sponsor" :src="this.sponsor.landingImageUrl" />
    </div>
    <div>
      <SponsorDetail class="sponsor-card-detail" :sponsor="this.sponsor" />
    </div>
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
<style lang="scss"></style>
