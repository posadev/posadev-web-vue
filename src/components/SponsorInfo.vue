<template>
  <div v-if="sponsor != null" class="sponsor-card-box">
    <div class="sponsor-card-image">
      <img
        class="img-fit-cover"
        :src="this.sponsor.landingImageUrl"
        :alt="this.sponsor.name"
      />
    </div>
    <SponsorDetail :sponsor="this.sponsor" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
import SponsorDetail from '@/components/SponsorDetail.vue';
import Sponsor from '@/data/Sponsor.model';
import { FirestoreService } from '@/service/FirestoreService';

@Component({
  components: {
    SponsorDetail
  }
})
export default class SponsorInfo extends Vue {
  @Prop({ required: true })
  private sponsorId!: string;

  private sponsor: Sponsor | null = null;

  @Inject('sponsors')
  private service!: FirestoreService<Sponsor>;

  private created(): void {
    this.service
      .findById(this.sponsorId)
      .then((sponsor: Sponsor | undefined) => {
        if (sponsor !== undefined) {
          this.sponsor = sponsor;
        }
      })
      .catch((err: string) => {
        err;
      });
  }
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
    top: 5%;
    bottom: 5%;
  }

  @include media-screen-max-width(426px) {
    flex-direction: column;
    margin: {
      top: 10%;
      bottom: 10%;
    }
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
