<template>
  <div class="col-xl-12 content">
    <div class="content-banner-image">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/jconfmex-web-staging.appspot.com/o/banner.png?alt=media&token=592557de-1352-4d6f-8adf-ee149dbe3953"
        class="img-responsive bg"
      />

      <img
        class="img-responsive Banner-logo"
        src="../assets/logoTransparente.png"
        alt="logo"
      />
    </div>
    <section class="textcontent text-format">
      <h1 class="title">J Conf GDL 2020</h1>
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

.text-format {
  color: $inactive-color;
  text-align: -webkit-left;
}
.content-banner-image {
  position: relative;
}
@mixin position($top, $left, $right, $bottom) {
  top: $top;
  left: $left;
  right: $right;
  bottom: $bottom;
  position: absolute;
}
.content {
  background: $primary-dark-color;
}
//Ipads and phones
@media only screen and (max-width: 928px) {
  .Banner-logo {
    position: absolute;
    right: 3%;
    bottom: 10%;
    max-width: 50%;
  }
  section {
    background: $primary-dark-color;
    height: 13rem;
    position: relative;

    h1 {
      @include position(10%, 4.44%, 50%, 0%);
    }
    p {
      @include position(50.49%, 4.44%, 30%, 91.38%);
      font-size: 20px;
    }
  }
  .title {
    font-size: 32px;
    line-height: 39px;
  }
}
@media only screen and (max-height: 568px) {
  .bg {
    height: 19rem;
  }
}
@media only screen and (max-height: 640px) and (min-height: 569px){
  .bg {
    height: 23.5rem;
  }
}
@media only screen and (max-height: 731px) and (min-height: 641px) {
  .bg {
    height: 28.5rem;
  }
}
//pixel 2xl
@media only screen and (max-height: 823px) and (min-height: 732px) {
  .bg {
    height: 33.8rem;
  }
}
//Laptops and computers
@media only screen and (min-width: 929px) {
  .Banner-logo {
    position: absolute;
    right: 3%;
    bottom: 10%;
    max-width: 20%;
  }
  .text {
    font-size: 24px;
    line-height: 43px;
  }
  .title {
    font-size: 78px;
    line-height: 80px;
  }
  .content {
    position: relative;
    display: block;
  }

  .bg {
    min-width: 100%;
  }
  .textcontent {
    position: absolute;
    display: block;
    left: 6.67%;
    right: 56.67%;
    top: 33.42%;
  }
}
</style>
