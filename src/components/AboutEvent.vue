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

@mixin mobile-device {
  @media only screen and (max-device-width: 700px) {
    @content;
  }
}

.container-image {
  display: block;
  margin-right: 3%;

  @include mobile-device {
    margin-right: 0;
  }
}

.image-about-event {
  height: 416px;
  width: 416px;

  @media only screen and (max-device-width: 768px) {
    height: 350px;
    width: 350px;
    margin-top: 20%;
  }

  @media only screen and (max-device-width: 460px) {
    width: calc(416px - 100px);
    height: calc(416px - 100px);
  }
}

.content-about {
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  @include mobile-device {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
}

.text-content-about {
  text-align: left;

  @include mobile-device {
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
  }
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
