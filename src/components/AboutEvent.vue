<template>
  <div class="about-content">
    <div class="about-image">
      <img class="img-fit-cover" :src="image" alt="about event" />
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
    fetchImageURL('about-event.jpg')
      .then((url: string) => {
        this.image = url;
      })
      .catch((err: string) => {
        err;
      });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
@import '~spectre.css/src/_media';
@import '../styles/mixins';

.about-content {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin: {
    top: 5%;
    bottom: 5%;
  }

  @include media-screen-max-width(426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: {
      top: 10%;
      bottom: 10%;
    }
  }
}

.about-image {
  padding-right: 2rem;
  img {
    width: 416px;
    height: 416px;
  }
  @include media-screen-max-width(768px) {
    img {
      width: 324px;
      height: 416px;
    }
  }
  @include media-screen-max-width(426px) {
    padding-right: 0;
    img {
      width: 280px;
      height: 280px;
    }
  }
}

.text-content-about {
  width: 50%;
  text-align: left;
  @include media-screen-max-width(730px) {
    width: 90%;
  }
  .title {
    margin-top: 0;
  }
  .subtitle {
    line-height: initial;
    padding-bottom: 0;
    margin-top: 1%;
    margin-bottom: 3%;
  }

  .text {
    line-height: 2rem;
  }
}
</style>
