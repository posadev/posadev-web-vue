<template>
  <div class="sponsor-section">
    <ViewHeader :header-texts="headerText" />
    <SponsorInfo :sponsor="sponsor" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';
import SponsorInfo from '@/components/SponsorInfo.vue';
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';
import Sponsor from '@/data/Sponsor.model';
import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';

@Component({
  components: {
    ViewHeader,
    SponsorInfo
  }
})
export default class SponsorView extends Vue {
  @Inject('sponsors')
  private service!: FirebaseCollectionService<Sponsor>;

  private sponsorId = this.$router.currentRoute.params['id'];

  private sponsor: Sponsor | null = null;

  private get headerText() {
    return new TitleTexts(
      this.$t('sponsor.titleSection'),
      this.$t('sponsor.subtitleSection')
    );
  }

  created(): void {
    this.service
      .findById(this.sponsorId)
      .then((sponsor: Sponsor | undefined) => {
        if (sponsor !== undefined) {
          this.sponsor = sponsor;
        }
      });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.sponsor-section {
  margin: {
    bottom: 45px;
  }
}
</style>
