<template>
  <div class="developers">
    <ViewHeader :header-texts="headerText" />
    <div class="dev-section">
      <div class="image-logo">
        <div class="dev-info">
          <h4 @click="goDevFer()">FERNANDO GONZALEZ</h4>
          <h4 @click="goDevSinu()">SINUHE JAIME</h4>
          <h4 @click="goDevGeo()">GEORGINA PEREZ</h4>
          <h4 @click="goDevEri()">ERIKA SANCHEZ</h4>
          <h4 @click="goDevYai()">YAIDI GARCIA</h4>
          <h4 @click="goDevEug()">EUGENIA NAJAR</h4>
        </div>
      </div>
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
    return new TitleTexts(this.$t('developer.title'));
  }
  private goDevGeo(): void {
    window.open('https://www.linkedin.com/in/georginapq/');
  }
  private goDevEri(): void {
    window.open('https://www.linkedin.com/in/erika-sanchez-murguia/');
  }
  private goDevYai(): void {
    window.open('https://www.linkedin.com/in/yaidi-garcia/');
  }
  private goDevFer(): void {
    window.open(
      'https://www.linkedin.com/in/fernando-gonzalez-camacho-4207aa56/'
    );
  }
  private goDevSinu(): void {
    window.open('https://www.linkedin.com/in/sierisimo/');
  }
  private goDevEug(): void {
    window.open('https://www.linkedin.com/in/eugenianajar/');
  }
}
</script>

<style lang="scss">
@import '../styles/variables';

.image-logo {
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: center;
  background-image: url('../assets/devimage.png');
  width: 100%;
  min-height: 100vh;
  background-color: black;
  position: relative;
}

.dev-info {
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
</style>
