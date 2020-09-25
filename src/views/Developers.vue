<template>
  <div class="developers">
    <ViewHeader :header-texts="headerText" />
    <div class="dev-section">
      <div class="image-logo">
        <div class="dev-info">
          <h4
            class="fer"
            @click="
              goDevProfile(
                'https://www.linkedin.com/in/fernando-gonzalez-camacho-4207aa56/'
              )
            "
          >
            FERNANDO GONZALEZ
          </h4>
          <h4 class="si" @click="goDevProfile('https://www.sierisimo.com/')">
            SINUHE JAIME
          </h4>
          <h4
            class="geo"
            @click="goDevProfile('https://www.linkedin.com/in/georginapq/')"
          >
            GEORGINA PEREZ
          </h4>
          <h4
            class="eri"
            @click="
              goDevProfile('https://www.linkedin.com/in/erika-sanchez-murguia/')
            "
          >
            ERIKA SANCHEZ
          </h4>
          <h4
            class="yai"
            @click="goDevProfile('https://www.linkedin.com/in/yaidi-garcia/')"
          >
            YAIDI GARCIA
          </h4>
          <h4
            class="eug"
            @click="goDevProfile('https://www.linkedin.com/in/eugenianajar/')"
          >
            EUGENIA NAJAR
          </h4>
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
  private goDevProfile(url: string) {
    window.open(url);
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.image-logo {
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: center;
  background-image: url('../assets/devimage.png');
  width: 100%;
  min-height: 100vh;
  background-color: black;
  position: relative;
  @include media-screen-max-width(768px) {
    background-size: 55%;
  }
  @include media-screen-max-width(425px) {
    background-size: 128%;
  }
}

.dev-info {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  cursor: pointer;
  @include media-screen-max-width(1024px) {
    font-size: 12px;
    top: 55%;
  }
  @include media-screen-max-width(768px) {
    top: 55%;
  }
  @include media-screen-max-width(768px) {
    font-size: 12px;
  }
}
</style>
