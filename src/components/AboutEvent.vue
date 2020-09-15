<template>
  <div class="hero hero-lg content-about">
    <div class="container-image">
      <img
        class="img-fit-cover image-about-event"
        :src="image"
        alt="about event"
      />
    </div>
    <section class="text-content-about">
      <h1 class="title">{{ $t('home.aboutevent.title') }}</h1>
      <h4 class="subtitle">{{ $t('home.aboutevent.subtitle') }}</h4>
      <p class="text">{{ $t('home.aboutevent.description') }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetchImageURL } from '@/service/fetchImageURL';

@Component
export default class AboutEvent extends Vue {
  private image = '';

  private created(): void {
    fetchImageURL('about-event.jpg').then((url: string) => {
      this.image = url;
    });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
@import '~spectre.css/src/_media';
@import '../styles/mixins';

.container-image {
  display: block;
  @media only screen and (min-device-width: 768px) {
    margin-right: 3%;
  }
}

.image-about-event {
    width: 100%;
    height: 100%;

  @include media-screen-max-width(426px) {
      width: 280px;
      height: 280px;
  }
}

.content-about {
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  @include media-screen-max-width(425px) {
    flex-direction: column;
  }
}

.text-content-about {
  text-align: left;

  .title,
  .subtitle {
    line-height: initial;
    padding-bottom: 0;
    margin-top: 1%;
    margin-bottom: 3%;
  }
}

.text {
  line-height: 2rem;
}
</style>
