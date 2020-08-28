<template>
  <div class="col-xl-12 content">
    <div class="content-banner-image">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/jconfmex-web-staging.appspot.com/o/banner.png?alt=media&token=592557de-1352-4d6f-8adf-ee149dbe3953"
        class="img-responsive img-banner"
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
  color: $white-color;
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
.img-banner {
  width: 100%;
}
//Ipads and phones
@media only screen and (max-width: 928px) {
  .Banner-logo {
    position: absolute;
    right: 3%;
    bottom: 10%;
    max-width: 50%;
  }
  .img-banner {
    height: 60vh;
  }
  section {
    background: $primary-dark-color;
    height: 30vh;
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
  //iphone 5/SE
  @media only screen and (max-height: 568px) {
    .text {
      padding-top: 0.6rem;
    }
    .title {
      line-height: 2rem;
    }
  }
  // iphone 6,7,8 plus
  @media only screen and (max-height: 736px) and (min-height: 641px) {
    .title {
      font-size: 2.3rem;
    }
    .text {
      font-size: 1.4rem;
    }
  }
  //pixel 2xl
  @media only screen and (max-height: 823px) and (min-height: 737px) {
    .text {
      font-size: 1.5rem;
    }
  }
  //ipad
  @media only screen and (max-height: 1024px) and (min-height: 824px) {
    .title {
      font-size: 4rem;
      line-height: 4rem;
    }
    .text {
      font-size: 2.5rem;
    }
    .Banner-logo {
      max-width: 35%;
    }
    section {
      height: 40vh;
    }
  }
  //Galaxy fold
  @media only screen and (max-width: 280px) {
    .title {
      font-size: 2rem;
      line-height: 2rem;
      right: 30%;
    }
    .text {
      font-size: 1.3rem;
      right: 15%;
      top: 40%;
    }
    .img-banner {
      height: 50vh;
    }
    section {
      height: 40vh;
    }
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
