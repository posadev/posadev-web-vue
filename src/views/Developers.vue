<template>
  <div class="dev-section">
    <ViewHeader :header-texts="headerText" />
    <div class="image-logo">
        <img src="../assets/devimage.png" alt="logo" />
        <h4  @click="goDevEug()">Fernando Sanchez</h4>
        <h4  @click="goDevEug()">Sinuhe </h4>
        <h4  @click="goDevGeo()">Georgina Perez</h4>
        <h4  @click="goDevEri()">Erika Sanchez</h4>
        <h4  @click="goDevYai()">Yaidi Garcia</h4>
        <h4  @click="goDevEug()">Eugenia Najar</h4>
    </div>
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

/* .image-logo {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/devimage.png');
  width: 100%;
  height: 273px;
} */

.sponsor-section {
  margin: {
    bottom: 45px;
  }
}
</style>
