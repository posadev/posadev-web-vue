<template>
  <div class="col-xl-12 content">
    <div class="content-banner-image">
      <img :src="image" class="img-responsive img-banner" alt="JConf 2020" />
      <img
        class="img-responsive banner-logo"
        src="../assets/logoTransparente.png"
        alt="logo"
      />
    </div>
    <section class="text-content text-format">
      <h1 class="title">JConf GDL 2020</h1>
      <p class="subtitle">{{ $t('home.banner.subtitle') }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { fetchImageURL } from '@/service/fetchImageURL';

@Component
export default class Banner extends Vue {
  private image = '';

  private created(): void {
    fetchImageURL('banner.png').then((url: string) => {
      this.image = url;
    });
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
@import '~spectre.css/src/_media.scss';

@mixin position($top, $left, $right, $bottom) {
  margin-top: $top;
  margin-left: $left;
  margin-right: $right;
  margin-bottom: $bottom;
}

@mixin ipad-height {
  @media only screen and (max-height: 1024px) and (min-height: 824px) {
    @content;
  }
}

@mixin iphones-font-size($size) {
  // iphone 6,7,8 plus
  @media only screen and (max-height: 736px) and (min-height: 641px) {
    font-size: $size;
  }
}

.text-format {
  color: $light-color;
  text-align: left;
}

.content-banner-image {
  position: relative;
}

.content {
  display: block;
  position: relative;
  background: $primary-dark-color;
}

img.img-banner {
  width: 100%;
  //Ipads and phones
  @media only screen and (max-width: 928px) {
    height: 60vh;
  }
}

img.banner-logo {
  position: absolute;
  right: 3%;
  bottom: 10%;
  max-width: 20%;

  @media only screen and (max-width: 440px) {
    max-width: 50%;
  }

  @media only screen and (max-width: 780px) and (min-width: 441px) {
    max-width: 40%;

    @include ipad-height {
      max-width: 35%;
    }
  }
}

.title {
  font-size: 78px;
  line-height: 80px;

  @media only screen and (max-width: 455px) {
    font-size: 55px;
  }

  @media only screen and (max-width: 928px) and (min-width: 456px) {
    font-size: 78px;
    line-height: 80px;

    @include iphones-font-size(2.3rem);
  }
}

.subtitle {
  font-size: 24px;
  line-height: 43px;

  @media only screen and (max-width: 928px) {
    line-height: initial;
    padding-bottom: 20%;

    @include iphones-font-size(1.4rem);
    //pixel 2xl
    @media only screen and (max-height: 823px) and (min-height: 737px) {
      font-size: 1.5rem;
    }
    //ipad
    @include ipad-height {
      font-size: 2.5rem;
    }
  }
}

.text-content {
  display: block;
  position: absolute;

  @media only screen and (min-width: 929px) {
    left: 6.67%;
    right: 56.67%;
    top: 33.42%;
  }
  @media only screen and (max-width: 943px) {
    position: initial;
    background: $primary-dark-color;

    h1 {
      @include position(10%, 4.44%, 2%, 2%);
    }

    p {
      @include position(0, 4.44%, 20%, 0);
    }
  }
}
</style>
