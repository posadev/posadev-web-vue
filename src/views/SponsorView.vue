<template>
  <div class="sponsor-section">
    <ViewHeader :header-texts="headerText" />
    <SponsorInfo :sponsor="sponsor" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SponsorInfo from '@/components/SponsorInfo.vue';
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';
import { db } from '@/firebase';
import Sponsor from '@/data/Sponsor.model';

@Component({
  components: {
    ViewHeader,
    SponsorInfo
  }
})
export default class SponsorView extends Vue {
  private sponsorId = this.$router.currentRoute.params['id'];

  private sponsor = new Sponsor(
    '',
    '',
    new URL('http://loquesea.com'),
    new URL('http://loquesea.com'),
    {},
    new URL('https://via.placeholder.com/196x84')
  );

  private get headerText() {
    return new TitleTexts(
      this.$t('sponsor.titleSection'),
      this.$t('sponsor.subtitleSection')
    );
  }

  created(): void {
    db.collection('sponsors')
      .doc(this.sponsorId)
      .get()
      .then((document) => {
        const data = document.data() || {};
        this.sponsor = new Sponsor(
          data['description'],
          data['name'],
          new URL(data['banner_url']),
          new URL(data['url']),
          data['social-media'],
          new URL(data['landing_image'])
        );
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
