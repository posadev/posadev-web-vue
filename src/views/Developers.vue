<template>
  <div class="developers">
    <ViewHeader :header-texts="headerText" />
    <div class="image-logo">
      <div class="dev-info">
        <div class="dev-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEA9rNSeGGcSg/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=rD6fypwUhtQWAEBqcOwX70owwL4lB-6juA76oy-SYbI"
            alt="Fernando"
          />
          <div class="dev-aside">
            <h2>FERNANDO GONZALEZ</h2>
            <img
              src="../assets/linkedin.png"
              alt="linkedin"
              @click="
                goDevProfile(
                  'https://www.linkedin.com/in/fernando-gonzalez-camacho-4207aa56/'
                )
              "
            />
          </div>
        </div>
        <div class="dev-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEdnDOL1UTg6g/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=ntcQoVaksvdKhu3RA6UaGeqr1R5DO8Ipql4tnodt6bE"
            alt="Sinuhe"
          />
          <div class="dev-aside">
            <h2>SINUHE JAIME</h2>
            <img
              src="../assets/linkedin.png"
              alt="linkedin"
              @click="goDevProfile('https://www.linkedin.com/in/sierisimo/')"
            />
          </div>
        </div>
        <div class="dev-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFNuCtWdPJ9Aw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=45yrJydSFc4S0mimllWM1k7XrdHqFQ5RGAj9Kx7Znto"
            alt="Georgina"
          />
          <div class="dev-aside">
            <h2>GEORGINA PEREZ</h2>
            <img
              src="../assets/linkedin.png"
              alt="linkedin"
              @click="goDevProfile('https://www.linkedin.com/in/georginapq/')"
            />
          </div>
        </div>
        <div class="dev-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQE0bMI96eYlAg/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=9QsD67jLBxQyLgDbx9YzRmxbYvDDLeE-rdtLCvc0nQA"
            alt="Erika"
          />
          <div class="dev-aside">
            <h2>ERIKA SANCHEZ</h2>
            <img
              src="../assets/linkedin.png"
              alt="linkedin"
              @click="
                goDevProfile(
                  'https://www.linkedin.com/in/erika-sanchez-murguia/'
                )
              "
            />
          </div>
        </div>
        <div class="dev-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFnMb6xqG6Vyw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=yGdBnVsD7scAEtCasOHuLbJn-o0WpFbxy5uRHTFGmGo"
            alt="Yaidi"
          />
          <div class="dev-aside">
            <h2>YAIDI GARCIA</h2>
            <img
              src="../assets/linkedin.png"
              alt="linkedin"
              @click="goDevProfile('https://www.linkedin.com/in/yaidi-garcia/')"
            />
          </div>
        </div>
        <div class="dev-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQF5BaFqMsO_SQ/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=Yb17LGRq7ek9wZN_zwSnhcO611QHvw5AcsL8QJwvA1g"
            alt="Eugenia"
          />
          <div class="dev-aside">
            <h2>EUGENIA NAJAR</h2>
            <img
              src="../assets/linkedin.png"
              alt="linkedin"
              @click="goDevProfile('https://www.linkedin.com/in/eugenianajar/')"
            />
          </div>
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
  columns: 200px 3;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  @include media-screen-max-width(1440px) {
    width: 90%;
  }
  @include media-screen-max-width(768px) {
    columns: 200px 2;
  }
}

.dev-container {
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  height: 140px;
  text-align: left;
  background: $backgorund-banner-color;
  color: $light-color;
  border: 1px solid $dark-color;
  border-radius: 5px;
  box-shadow: 0 5px 10px $dark-color;
  img {
    width: 140px;
    border-radius: 5px;
  }
}

.dev-aside {
  vertical-align: top;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 200px;
  margin-left: 10px;
  h2 {
    margin-top: 10px;
  }
  img {
    width: 40px;
    margin-bottom: 5px;
    cursor: pointer;
  }
}
</style>
