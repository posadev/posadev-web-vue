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

  private getImage(): void {
    fetchImageURL('banner.png').then((url: string) => {
      this.image = url;
    });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
@import '~spectre.css/src/_media';

.container-image {
  display: block;
  margin-right: 3%;

  @media only screen and (max-device-width: 1200px) {
    display: none;
  }
}

.image-about-event {
  height: 416px;
  width: 416px;
}

.content-about {
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
}

.text-content-about {
  text-align: left;

  .title,
  .subtitle {
    line-height: initial;
    padding-bottom: 0;
  }
}

.text {
  line-height: 2rem;
}
</style>
