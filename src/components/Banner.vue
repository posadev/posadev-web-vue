<template>
  <div class="col-xl-12 content">
    <div class="content-banner-image">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/jconfmex-web-staging.appspot.com/o/banner.png?alt=media&token=592557de-1352-4d6f-8adf-ee149dbe3953"
        class="img-responsive img-banner"
        alt="JConf 2020"
      />
      <img
        class="img-responsive banner-logo"
        src="../assets/logoTransparente.png"
        alt="logo"
      />
    </div>
    <section class="text-content text-format">
      <h1 class="title">JConf GDL 2020</h1>
      <p class="text">{{ $t('banner.subtitle') }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {}
</script>

<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';
@import '~spectre.css/src/_media.scss';

@mixin position($top, $left, $right, $bottom) {
  top: $top;
  left: $left;
  right: $right;
  bottom: $bottom;
  position: absolute;
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
  color: $white-color;
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

.img-banner {
  width: 100%;
  //Ipads and phones
  @media only screen and (max-width: 928px) {
    height: 60vh;
  }
}

.banner-logo {
  position: absolute;
  right: 3%;
  bottom: 10%;
  max-width: 20%;

  @media only screen and (max-width: 928px) {
    max-width: 50%;

    @include ipad-height {
      max-width: 35%;
    }
  }
}

.title {
  font-size: 78px;
  line-height: 80px;

  @media only screen and (max-width: 928px) {
    font-size: 32px;
    line-height: 39px;

    @media only screen and (max-height: 568px) {
      line-height: 2rem;
    }

    @include iphones-font-size(2.3rem);
    //ipad
    @include ipad-height {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
}

.text {
  font-size: 24px;
  line-height: 43px;

  @media only screen and (max-width: 928px) {
    //iphone 5/SE
    @media only screen and (max-height: 568px) {
      padding-top: 0.6rem;
    }
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
  left: 6.67%;
  right: 56.67%;
  top: 33.42%;

  //Ipads and phones
  @media only screen and (max-width: 928px) {
    height: 30vh;
    position: relative;
    background: $primary-dark-color;

    h1 {
      @include position(10%, 4.44%, 50%, 0%);
    }

    p {
      @include position(50.49%, 4.44%, 30%, 91.38%);
      font-size: 20px;
    }

    //ipad
    @include ipad-height {
      height: 40vh;
    }
  }
}
</style>
