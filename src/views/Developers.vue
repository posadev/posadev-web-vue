<template>
  <div class="sponsor-section">
    <ViewHeader :header-texts="headerText" />
    <h4  @click="goDevGeo()">Jojina</h4>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';

@Component({
  components: {
    ViewHeader
  }
})
export default class SponsorView extends Vue {
  private get headerText() {
    return new TitleTexts(
      this.$t('sponsor.titleSection'),
      this.$t('sponsor.subtitleSection')
    );
  }
   private goDevGeo(): void {
    window.open('https://www.linkedin.com/in/georginapq/');
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
